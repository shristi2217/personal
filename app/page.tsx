"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";


export default function HomePage() {
  const router = useRouter();

  const [isMobile, setIsMobile] = useState(false);
const [lampOn, setLampOn] = useState(false);
const [showFlowerModal, setShowFlowerModal] = useState(false);
const [foundStar, setFoundStar] = useState(false);
  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 900);
    };

    checkScreen();

    window.addEventListener("resize", checkScreen);

    return () =>
      window.removeEventListener("resize", checkScreen);
  }, []);

  const toggleLamp = () => {
  const sound = new Audio(
    lampOn
      ? "/sounds/lamp-off-click.mp3"
      : "/sounds/lamp-on-click.mp3"
  );

  sound.volume = 0.3;
  sound.play();

  setLampOn(!lampOn);
};

const playDuckSound = () => {
  const ducks = [
    "/sounds/duck-sound.mp3",
    "/sounds/duck-sound2.mp3",
    "/sounds/duck-sound3.mp3",
    "/sounds/duck-sound4.mp3",
  ];

  const randomDuck =
    ducks[Math.floor(Math.random() * ducks.length)];

  const sound = new Audio(randomDuck);

  sound.volume = 0.5;
  sound.play();
};

const playImperialMarch = () => {
  const sound = new Audio("/sounds/darth-vader.mp3");

  sound.volume = 0.4;
  sound.play();
};

  if (isMobile) {
    return (
      <main className="mobileMessage">
        <h1>My Desk</h1>

        <p>
          This interactive desk was designed for larger
          screens. Please visit on a laptop or desktop
          for the full experience.
        </p>

        <button
          className="mobileButton"
          onClick={() =>
            window.open(
              "https://github.com/shristi2217",
              "_blank"
            )
          }
        >
          View Projects
        </button>
      </main>
    );
  }

  return (
    <main className="desk-root">
      <img
        src="/deskmain.png"
        alt="desk"
        className="bg"
        draggable="false"
      />
      {lampOn && <div className="lampDarkness" />}
{lampOn && <div className="lampGlow" />}
      {/* TOP */}

      <div className="hitbox f1">
        <span className="label">f1</span>
      </div>

      <div className="hitbox fish">
        <span className="label">Fish</span>
      </div>

      <div
  className="hitbox duck"
  onClick={playDuckSound}
>
  <span className="label">duck</span>
</div>
      <div className="hitbox cat">
        <span className="label">cat</span>
      </div>

      <div className="hitbox frog">
        <span className="label">frog</span>
      </div>

      <div
        className="hitbox clapperboard"
        onClick={() => router.push("/films")}
      >
        <span className="label">films</span>
      </div>

      <div
  className="hitbox flowers"
  onClick={() => setShowFlowerModal(true)}
>
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

      <div
  className="hitbox dog"
  onClick={() =>
    window.open(
      "https://youtu.be/K6CkfrPvk7Q",
      "_blank"
    )
  }
>
  <span className="label">dog</span>
</div>

      <div
  className="hitbox vader"
  onClick={playImperialMarch}
>
  <span className="label">darth vader</span>
</div>

     <div
  className={`hitbox star ${lampOn ? "starLit" : ""}`}
  onClick={() => setFoundStar(true)}
>
  <span className="label">star</span>
</div>
      {/* MIDDLE */}

      <div className="hitbox teddybear">
        <span className="label">teddy bear</span>
      </div>

      <div className="hitbox books">
        <span className="label">substack</span>
      </div>

      <div className="hitbox pen">
        <span className="label">pen Stand 1</span>
      </div>

      <div className="hitbox pencil">
        <span className="label">pen Stand 2</span>
      </div>

      <div className={`hitbox radio ${lampOn ? "radioLit" : ""}`}>
  <span className="label">play me</span>
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

      

      <div className="desk-signature">
        <p>my desk</p>
        <span>please ignore the mess</span>
        <span>— shristi sharma</span>
      </div>

    <div
  className="hitbox lampshade"
  onClick={toggleLamp}
>
  <span className="label">lamp</span>
</div>

<div
  className="hitbox lampbase"
  onClick={toggleLamp}
>
  <span className="label">lamp</span>
</div>

{foundStar && (
  <div className="popupOverlay">
    <div className="popup">
      <h2>⭐ You found the star!</h2>

      <p>
        

Thanks for exploring.
      </p>

      <button onClick={() => setFoundStar(false)}>
        continue exploring
      </button>
    </div>
  </div>
)}

{showFlowerModal && (
  <div
    className="modalOverlay"
    onClick={() => setShowFlowerModal(false)}
  >
    <div
      className="modalContent"
      onClick={(e) => e.stopPropagation()}
    >
      <button
        className="closeButton"
        onClick={() => setShowFlowerModal(false)}
      >
        ×
      </button>

      <pre className="asciiFlower">
{`  /-_-\\
 /  /  \\
/  /    \\
\\  \\    /
 \\__\\__/
    \\\\
    -\\\\    ____
      \\\\  /   /
____   \\\\/___/
\\   \\ -//
 \\___\\//-
    -//
     \\\\
     //
    //-
  -//
  //
  \\\\
   \\\\`}
      </pre>

      <p className="flowerCaption">
        for no reason in particular 🌼
      </p>
    </div>
  </div>
)}
    </main>
  );
}