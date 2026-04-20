import { useEffect, useRef } from "react";
import Hls from "hls.js";

export function HlsVideo({ src, className }: { src: string; className?: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const attemptPlay = () => {
      video.muted = true;
      video.play().catch((e) => console.log("Autoplay prevented:", e));
    };

    if (video.canPlayType("application/vnd.apple.mpegurl")) {
      // Natively supported (e.g. Safari)
      video.src = src;
      video.addEventListener("loadedmetadata", attemptPlay);
    } else if (Hls.isSupported()) {
      const hls = new Hls({
        // Forzar la máxima calidad disponible desde el inicio
        capLevelToPlayerSize: false,
        startLevel: -1,           // Auto-detect highest
        autoStartLoad: true,
        maxBufferLength: 30,
        maxMaxBufferLength: 60,
      });

      hls.loadSource(src);
      hls.attachMedia(video);

      hls.on(Hls.Events.MANIFEST_PARSED, (_event, data) => {
        // Fijar al nivel de mayor resolución
        hls.currentLevel = data.levels.length - 1;
        attemptPlay();
      });

      return () => hls.destroy();
    }
  }, [src]);

  return (
    <video
      ref={videoRef}
      className={className}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
    />
  );
}
