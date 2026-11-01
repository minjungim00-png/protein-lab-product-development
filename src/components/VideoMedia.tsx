import React, { useState, useRef } from 'react';
import { ProofPlaceholder } from './ProofPlaceholder';
import { Play } from 'lucide-react';

interface VideoMediaProps {
  src?: string;
}

export const VideoMedia: React.FC<VideoMediaProps> = ({
  src = '/assets/aistudio/______________7790e524.mp4',
}) => {
  const [currentSrc, setCurrentSrc] = useState(src);
  const [hasError, setHasError] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handlePlayClick = () => {
    if (videoRef.current) {
      videoRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(() => {
        setHasError(true);
      });
    }
  };

  const handleVideoError = () => {
    if (currentSrc !== '/video1.mp4') {
      setCurrentSrc('/video1.mp4');
    } else {
      setHasError(true);
    }
  };

  return (
    <div className="w-full flex flex-col items-center">
      <div className="relative w-full aspect-[16/9] rounded-[4px] overflow-hidden bg-[#F3EFE6] border border-[#111E2E]/10">
        {hasError ? (
          <ProofPlaceholder
            label="VIDEO · 16:9"
            filename="video1.mp4"
            aspectRatio="16:9"
            isVideo={true}
            className="h-full"
          />
        ) : (
          <div className="relative w-full h-full flex items-center justify-center bg-black/5">
            <video
              ref={videoRef}
              src={currentSrc}
              preload="metadata"
              playsInline
              muted
              controls={isPlaying}
              onError={handleVideoError}
              className="w-full h-full object-cover"
            />

            {!isPlaying && (
              <div className="absolute inset-0 flex items-center justify-center bg-[#111E2E]/10 backdrop-blur-[2px]">
                <button
                  type="button"
                  onClick={handlePlayClick}
                  className="w-16 h-16 rounded-full bg-[#111E2E] text-white flex items-center justify-center shadow-lg transition-transform duration-200 hover:scale-105 focus-visible:outline-2 focus-visible:outline-[#287A4C] cursor-pointer"
                  aria-label="영상 재생 (음소거)"
                >
                  <Play className="w-7 h-7 fill-white translate-x-0.5" />
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      <p className="mt-3 text-center text-[13px] text-[#536479]">
        AI 생성 영상
      </p>
    </div>
  );
};
