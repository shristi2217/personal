"use client";

import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  return (
    <main className="desk-root" data-debug="false">
      <img
        src="/deskmain.png"
        alt="desk"
        className="bg"
        draggable="false"
      />

      {/* TOP */}

      <div className="hitbox photo1">
        <span className="label">photo</span>
      </div>

      <div className="hitbox gallery">
        <span className="label">gallery</span>
      </div>

      <div className="hitbox duck">
        <span className="label">about</span>
      </div>

      <div className="hitbox mascot">
        <span className="label">mascot</span>
      </div>

      <div className="hitbox film">
        <span className="label">films</span>
      </div>

      <div className="hitbox flower">
        <span className="label">journal</span>
      </div>

      <div className="hitbox notes">
        <span className="label">notes</span>
      </div>

      <div
        className="hitbox projects"
        onClick={() =>
          window.open("https://github.com/shristi2217", "_blank")
        }
      >
        <span className="label">projects</span>
      </div>

      {/* MIDDLE */}

      <div className="hitbox teddy">
        <span className="label">me</span>
      </div>

      <div className="hitbox cassette">
        <span className="label">music</span>
      </div>

      {/* BOTTOM */}

      <div className="hitbox notebook">
        <span className="label">socials</span>
      </div>

      <div
        className="hitbox music"
        onClick={() => router.push("/piano")}
      >
        <span className="label">piano page</span>
      </div>

      <div className="hitbox redbull">
        <span className="label">energy</span>
      </div>

      <div className="hitbox laptop">
        <span className="label">computer</span>
      </div>

      <div className="hitbox lamp">
        <span className="label">lamp</span>
      </div>
    </main>
  );
}