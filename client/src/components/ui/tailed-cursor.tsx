
import React, { useEffect, useRef } from "react";

interface TailedCursorProps {
    baseThickness?: number;
    colors?: string[];
    speedMultiplier?: number;
    maxAge?: number;
    enableFade?: boolean;
    enableShaderEffect?: boolean;
}

interface Point {
    x: number;
    y: number;
    age: number;
}

export function TailedCursor({
    baseThickness = 30,
    colors = ["#ffffff"],
    speedMultiplier = 0.5,
    maxAge = 500,
    enableFade = false,
    enableShaderEffect = false,
}: TailedCursorProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const historyRef = useRef<Point[]>([]);
    const mouseRef = useRef({ x: 0, y: 0 });
    const requestRef = useRef<number>();

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        const handleMouseMove = (e: MouseEvent) => {
            mouseRef.current = { x: e.clientX, y: e.clientY };
            // Add new point immediately on move for responsiveness
            historyRef.current.push({
                x: e.clientX,
                y: e.clientY,
                age: 0,
            });
        };

        window.addEventListener("resize", handleResize);
        window.addEventListener("mousemove", handleMouseMove);
        handleResize();

        const animate = (timestamp: number) => {
            // Clear canvas
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Filter out old points
            historyRef.current = historyRef.current
                .map((p) => ({ ...p, age: p.age + 16.6 })) // Assuming ~60fps, add ~16ms
                .filter((p) => p.age < maxAge);

            if (historyRef.current.length < 2) {
                requestRef.current = requestAnimationFrame(animate);
                return;
            }

            // Draw trail
            ctx.beginPath();
            // Simple line connecting points
            // For a smoother curve, we could use quadratic curves
            const points = historyRef.current;

            if (points.length > 0) {
                ctx.moveTo(points[0].x, points[0].y);
                for (let i = 1; i < points.length; i++) {
                    ctx.lineTo(points[i].x, points[i].y);
                }
            }

            // Stroke style
            ctx.lineCap = "round";
            ctx.lineJoin = "round";

            // Gradient / Color
            if (colors.length === 1) {
                ctx.strokeStyle = colors[0];
            } else {
                // Create gradient based on path
                // This is complex for a path, so simpler approach: linear gradient across canvas or simple stroke
                // For now, use the first color or a created gradient if possible
                const gradient = ctx.createLinearGradient(
                    points[0].x, points[0].y,
                    points[points.length - 1].x, points[points.length - 1].y
                );
                colors.forEach((color, index) => {
                    gradient.addColorStop(index / (colors.length - 1), color);
                });
                ctx.strokeStyle = gradient;
            }

            // Tapering width (simulated by drawing segments with different widths or just global width)
            // To properly support "baseThickness" and tapering, we might need to draw segments.
            // Let's draw continuous line for now with baseThickness.
            ctx.lineWidth = baseThickness;

            if (enableShaderEffect) {
                ctx.shadowBlur = 20;
                ctx.shadowColor = colors[0];
            } else {
                ctx.shadowBlur = 0;
            }

            // If we want a tapering effect (tail), we have to draw distinct segments
            // But standard canvas stroke doesn't taper easily.
            // Let's stick to simple stroke unless "enableFade" implies fading opacity.

            if (enableFade) {
                // Simplest fade is just global alpha based on age? No, that fades the whole trail.
                // We need to draw segments to fade the tail.
                // Re-implementing with segments for better look
                ctx.beginPath(); // clear previous path commands

                for (let i = 0; i < points.length - 1; i++) {
                    const p1 = points[i];
                    const p2 = points[i + 1];

                    ctx.beginPath();
                    ctx.moveTo(p1.x, p1.y);
                    ctx.lineTo(p2.x, p2.y);

                    const ageFactor = 1 - (p1.age / maxAge); // 1 = new, 0 = old
                    ctx.globalAlpha = Math.max(0, ageFactor);
                    ctx.lineWidth = baseThickness * ageFactor; // Tapering
                    ctx.stroke();
                }
            } else {
                ctx.stroke();
            }

            requestRef.current = requestAnimationFrame(animate);
        };

        requestRef.current = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("mousemove", handleMouseMove);
            if (requestRef.current) cancelAnimationFrame(requestRef.current);
        };
    }, [baseThickness, colors, speedMultiplier, maxAge, enableFade, enableShaderEffect]);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-50"
            style={{ width: "100vw", height: "100vh" }}
        />
    );
}
