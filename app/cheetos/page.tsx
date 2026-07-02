"use client";

import { useEffect, useState } from "react";

const cheetoImages = [
  "/cheetos.png",
  "/cheetos2.png",
  "/cheetos3.png",
  "/cheetos4.png",
  "/cheetos5.png",
];

type Cheeto = {
  id: number;
  x: number;
  y: number;
  image: string;
};

export default function CheetosPage() {
  const [bagX, setBagX] = useState(0);
  const [score, setScore] = useState(0);
  const [cheetos, setCheetos] =
    useState<Cheeto[]>([]);

  // Center bag on mount
  useEffect(() => {
    setBagX(window.innerWidth / 2);
  }, []);

  // Spawn cheetos
  useEffect(() => {
    const interval = setInterval(() => {
      setCheetos((prev) => [
        ...prev,
        {
          id: Date.now() + Math.random(),
          x: Math.random() * window.innerWidth,
          y: -100,
          image:
            cheetoImages[
              Math.floor(
                Math.random() *
                  cheetoImages.length
              )
            ],
        },
      ]);
    }, 350);

    return () => clearInterval(interval);
  }, []);

  // Falling animation + catching
  useEffect(() => {
    const interval = setInterval(() => {
      setCheetos((prev) => {
        const remaining: Cheeto[] = [];

        for (const c of prev) {
          const newY = c.y + 7;

          const caught =
            newY >
              window.innerHeight - 220 &&
            c.x > bagX - 100 &&
            c.x < bagX + 100;

          if (caught) {
            setScore((s) => s + 1);
          } else if (
            newY <
            window.innerHeight + 100
          ) {
            remaining.push({
              ...c,
              y: newY,
            });
          }
        }

        return remaining;
      });
    }, 16);

    return () => clearInterval(interval);
  }, [bagX]);

  const moveBag = (
    e: React.MouseEvent<HTMLDivElement>
  ) => {
    setBagX(e.clientX);
  };

  return (
    <main
      onMouseMove={moveBag}
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        background: "#fff7e6",
        cursor: "none",
      }}
    >
      <h1
        style={{
          position: "absolute",
          top: 24,
          left: 24,
          zIndex: 100,
          fontSize: "2rem",
          margin: 0,
        }}
      >
        Cheetos: {score}
      </h1>

      {cheetos.map((c) => (
        <img
          key={c.id}
          src={c.image}
          alt=""
          draggable={false}
          style={{
            position: "absolute",
            width: 80,
            left: c.x,
            top: c.y,
            pointerEvents: "none",
            userSelect: "none",
          }}
        />
      ))}

      <img
        src="/cheetosbag.png"
        alt="bag"
        draggable={false}
        style={{
          position: "absolute",
          width: 250,
          bottom: 30,
          left: bagX,
          transform:
            "translateX(-50%)",
          pointerEvents: "none",
          userSelect: "none",
        }}
      />
    </main>
  );
}