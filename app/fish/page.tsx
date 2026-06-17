"use client";

import "./fish.css";
import { useState, useRef, useEffect } from "react";

export default function FishPage() {
  const [showDrawModal, setShowDrawModal] = useState(false);
  const [userFish, setUserFish] = useState<string[]>([]);

  const canvasRef = useRef<HTMLCanvasElement>(null);

  const releaseFish = () => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const image = canvas.toDataURL("image/png");

    setUserFish((prev) => [...prev, image]);

    setShowDrawModal(false);
  };

  useEffect(() => {
    if (!showDrawModal) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let drawing = false;

    const start = (e: MouseEvent) => {
      drawing = true;

      ctx.beginPath();
      ctx.moveTo(e.offsetX, e.offsetY);
    };

    const draw = (e: MouseEvent) => {
      if (!drawing) return;

      ctx.lineWidth = 3;
      ctx.lineCap = "round";

      ctx.lineTo(e.offsetX, e.offsetY);
      ctx.stroke();
    };

    const stop = () => {
      drawing = false;
    };

    canvas.addEventListener("mousedown", start);
    canvas.addEventListener("mousemove", draw);
    window.addEventListener("mouseup", stop);

    return () => {
      canvas.removeEventListener("mousedown", start);
      canvas.removeEventListener("mousemove", draw);
      window.removeEventListener("mouseup", stop);
    };
  }, [showDrawModal]);

  return (
    <main className="fishPage">

      <button
        className="addFishButton"
        onClick={() => setShowDrawModal(true)}
      >
        + Add Fish
      </button>

      {/* Original fish */}

      <img src="/fish/fish1.png" alt="" className="fish fish1" />
      <img src="/fish/fish2.png" alt="" className="fish fish2" />
      <img src="/fish/fish3.png" alt="" className="fish fish3" />
      <img src="/fish/fish4.png" alt="" className="fish fish4" />
      <img src="/fish/fish5.png" alt="" className="fish fish5" />
      <img src="/fish/fish6.png" alt="" className="fish fish6" />

      {/* User fish */}

      {userFish.map((fish, index) => (
        <img
          key={index}
          src={fish}
          alt=""
          className="fish userFish"
          style={{
            top: `${10 + index * 12}%`,
            animationDuration: `${30 + index * 5}s`,
          }}
        />
      ))}

      {/* Bubbles */}

      <div className="bubble bubble1"></div>
      <div className="bubble bubble2"></div>
      <div className="bubble bubble3"></div>
      <div className="bubble bubble4"></div>
      <div className="bubble bubble5"></div>
      <div className="bubble bubble6"></div>
      <div className="bubble bubble7"></div>
      <div className="bubble bubble8"></div>

      {/* Draw Modal */}

      {showDrawModal && (
        <div
          className="modalOverlay"
          onClick={() => setShowDrawModal(false)}
        >
          <div
            className="modalContent"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="closeButton"
              onClick={() => setShowDrawModal(false)}
            >
              ×
            </button>

            <h2>Draw a Fish</h2>

            <canvas
              ref={canvasRef}
              width={500}
              height={300}
              className="fishCanvas"
            />

            <button
              className="releaseFish"
              onClick={releaseFish}
            >
              Release Fish
            </button>

          </div>
        </div>
      )}

    </main>
  );
}