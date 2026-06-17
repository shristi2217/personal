"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";


export default function HomePage() {
  const router = useRouter();

  const [isMobile, setIsMobile] = useState(false);
  const [showF1Modal, setShowF1Modal] = useState(false);
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
const openF1Modal = () => {
  const sound = new Audio("/sounds/f1-car.mp3");

  sound.volume = 0.4;
  sound.play();

  setShowF1Modal(true);
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

     <div
  className="hitbox f1"
  onClick={openF1Modal}
>
  
</div>

      <div
  className="hitbox fish"
  onClick={() => router.push("/fish")}
>
</div>

      <div
  className="hitbox duck"
  onClick={playDuckSound}
>
  
</div>
      <div className="hitbox cat">
        
      </div>

      <div className="hitbox frog">
        
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
        
      </div>

      <div className="hitbox lego">
        
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
  
</div>

      <div
  className="hitbox vader"
  onClick={playImperialMarch}
>
  
</div>

     <div
  className="hitbox star"
  onClick={() => setFoundStar(true)}
>
  
</div>
      {/* MIDDLE */}

      <div className="hitbox teddybear">
       
      </div>

      <div className="hitbox books">
        
      </div>

      <div className="hitbox pen">
        
      </div>

      <div className="hitbox pencil">
        
      </div>

      <div className={`hitbox radio ${lampOn ? "radioLit" : ""}`}>
  <span className="label">play me</span>
</div>

      <div className="hitbox chips">
        
      </div>

      {/* BOTTOM */}

      <div className="hitbox about">
        <span className="label">about me</span>
      </div>

      <div
  className="hitbox piano"
  onClick={() => {
    console.log("PIANO CLICKED");
    router.push("/piano");
  }}
>
        <span className="label">music</span>
      </div>

      <div className="hitbox energy">
        
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
{showF1Modal && (
  <div
    className="modalOverlay"
    onClick={() => setShowF1Modal(false)}
  >
    <div
      className="modalContent"
      onClick={(e) => e.stopPropagation()}
    >
      <button
        className="closeButton"
        onClick={() => setShowF1Modal(false)}
      >
        ×
      </button>

      <img
        src="/ferrarimeme.JPG"
        alt="Ferrari meme"
        className="f1Meme"
      />
    </div>
  </div>
)}

    </main>
  );
}