"use client";

import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  return (
    <main className="desk-root">
      <img
        src="/deskmain.png"
        alt="desk"
        className="bg"
        draggable="false"
      />

      {/* TOP */}

      <div className="hitbox f1">
        <span className="label">F1</span>
      </div>

      <div className="hitbox fish">
  <span className="label">Fish</span>
</div>


      <div className="hitbox duck">
        <span className="label">duck</span>
      </div>

      <div className="hitbox cat">
        <span className="label">Cat</span>
      </div>

<div className="hitbox frog">
        <span className="label">Frog</span>
      </div>

      <div
        className="hitbox clapperboard"
        onClick={() => router.push("/films")}
      >
        <span className="label">
          films
        </span>
      </div>

      <div className="hitbox flowers">
        <span className="label">flowers</span>
      </div>

      <div
        className="hitbox filmstrip"
        onClick={() =>
          window.open(
            "https://letterboxd.com/cheetos010/",
            "_blank"
          )
        }
      >
        <span className="label">letterboxd</span>
      </div>

      <div className="hitbox lego">
        <span className="label">lego</span>
      </div>

      <div className="hitbox dog">
        <span className="label">dog</span>
      </div>


      <div className="hitbox vader">
        <span className="label">Darth Vader</span>
      </div>

      <div className="hitbox star">
        <span className="label">star</span>
      </div>



      {/* MIDDLE */}

      <div className="hitbox teddybear">
        <span className="label">teddy bear</span>
      </div>
<div className="hitbox books">
        <span className="label">substack</span>
      </div>

      <div className="hitbox pen ">
        <span className="label">Pen Stand 1</span>
      </div>

      <div className="hitbox pencil ">
        <span className="label">Pen Stand 2</span>
      </div>


      <div className="hitbox radio">
        <span className="label">music</span>
      </div>

       <div className="hitbox chips">
        <span className="label">chips</span>
      </div>

      {/* BOTTOM */}

      <div className="hitbox about">
        <span className="label">about me</span>
      </div>

      <div
        className="hitbox piano"
        onClick={() => router.push("/piano")}
      >
        <span className="label">music</span>
      </div>

      <div className="hitbox energy">
        <span className="label">energy</span>
      </div>

      <div
        className="hitbox laptop"
        onClick={() =>
          window.open(
            "https://github.com/shristi2217",
            "_blank"
          )
        }
      >
        <span className="label">projects</span>
      </div>

      <div className="hitbox lampshade">
  <span className="label">lamp</span>
</div>

<div className="hitbox lampbase">
  <span className="label">lamp</span>
</div>

<div className="desk-signature">
  <p>my desk</p>
  <span>please ignore the mess</span>
  <span>— shristi sharma</span>
</div>
    </main>
  );
}