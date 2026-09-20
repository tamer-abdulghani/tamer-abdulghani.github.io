import { useEffect, useRef } from 'react';

/**
 * Ambient "particles network" background — slowly drifting dots that connect
 * with thin lines when close enough. The nearer two dots are, the brighter
 * the line. Cursor acts as a virtual node so lines gently follow the mouse.
 * Non-interactive (pointer-events: none), respects prefers-reduced-motion.
 */

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

interface Props {
  /** Hex color for dots and lines. */
  color?: string;
  nodeCount?: number;
  connectDistance?: number;
  maxVelocity?: number;
  maxLineAlpha?: number;
  dotAlpha?: number;
  dotRadius?: number;
}

/** Convert a hex color (#rrggbb) + alpha (0..1) to an rgba() string. */
function hexWithAlpha(hex: string, alpha: number): string {
  const h = hex.replace('#', '');
  const r = parseInt(h.slice(0, 2), 16);
  const g = parseInt(h.slice(2, 4), 16);
  const b = parseInt(h.slice(4, 6), 16);
  return `rgba(${r},${g},${b},${alpha})`;
}

export default function ConnectedNetwork({
  color = '#a68b4c',
  nodeCount = 70,
  connectDistance = 170,
  maxVelocity = 0.28,
  maxLineAlpha = 0.32,
  dotAlpha = 0.6,
  dotRadius = 1.5,
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let width = container.clientWidth;
    let height = container.clientHeight;
    const dpr = window.devicePixelRatio || 1;

    const applySize = () => {
      width = container.clientWidth;
      height = container.clientHeight;
      canvas.width = Math.max(1, Math.floor(width * dpr));
      canvas.height = Math.max(1, Math.floor(height * dpr));
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    applySize();

    // Scale node count with the container area so density stays consistent
    // across small (mobile) and very wide (desktop) hero sections.
    const referenceArea = 900 * 600;
    const scaledCount = Math.max(
      20,
      Math.round(nodeCount * Math.sqrt((width * height) / referenceArea)),
    );

    const nodes: Node[] = Array.from({ length: scaledCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 2 * maxVelocity,
      vy: (Math.random() - 0.5) * 2 * maxVelocity,
    }));

    const mouse = { x: 0, y: 0, active: false };
    const cursorConnectDistance = connectDistance * 1.4;
    const cursorLineAlphaMax = Math.min(1, maxLineAlpha * 1.6);

    const dotColor = hexWithAlpha(color, dotAlpha);
    let raf = 0;

    const drawFrame = () => {
      ctx.clearRect(0, 0, width, height);

      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x <= 0) {
          n.x = 0;
          n.vx = Math.abs(n.vx);
        } else if (n.x >= width) {
          n.x = width;
          n.vx = -Math.abs(n.vx);
        }
        if (n.y <= 0) {
          n.y = 0;
          n.vy = Math.abs(n.vy);
        } else if (n.y >= height) {
          n.y = height;
          n.vy = -Math.abs(n.vy);
        }
      }

      ctx.lineWidth = 0.6;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.hypot(dx, dy);
          if (dist < connectDistance) {
            const lineAlpha = (1 - dist / connectDistance) * maxLineAlpha;
            ctx.strokeStyle = hexWithAlpha(color, lineAlpha);
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      if (mouse.active) {
        for (const n of nodes) {
          const dx = n.x - mouse.x;
          const dy = n.y - mouse.y;
          const dist = Math.hypot(dx, dy);
          if (dist < cursorConnectDistance) {
            const lineAlpha = (1 - dist / cursorConnectDistance) * cursorLineAlphaMax;
            ctx.strokeStyle = hexWithAlpha(color, lineAlpha);
            ctx.beginPath();
            ctx.moveTo(mouse.x, mouse.y);
            ctx.lineTo(n.x, n.y);
            ctx.stroke();
          }
        }
      }

      ctx.fillStyle = dotColor;
      for (const n of nodes) {
        ctx.beginPath();
        ctx.arc(n.x, n.y, dotRadius, 0, Math.PI * 2);
        ctx.fill();
      }

      raf = window.requestAnimationFrame(drawFrame);
    };

    if (reduceMotion) {
      drawFrame();
      window.cancelAnimationFrame(raf);
    } else {
      raf = window.requestAnimationFrame(drawFrame);
    }

    const handleResize = () => {
      applySize();
      for (const n of nodes) {
        if (n.x > width) n.x = width;
        if (n.y > height) n.y = height;
      }
    };
    window.addEventListener('resize', handleResize);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      if (x >= 0 && y >= 0 && x <= rect.width && y <= rect.height) {
        mouse.x = x;
        mouse.y = y;
        mouse.active = true;
      } else {
        mouse.active = false;
      }
    };
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.cancelAnimationFrame(raf);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [color, nodeCount, connectDistance, maxVelocity, maxLineAlpha, dotAlpha, dotRadius]);

  return (
    <div
      ref={containerRef}
      aria-hidden
      style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 0,
      }}
    >
      <canvas ref={canvasRef} />
    </div>
  );
}
