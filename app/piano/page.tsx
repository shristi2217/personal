'use client';

import { useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import styles from './piano.module.css';
import { useRouter } from "next/navigation";


/* ── WHITE KEYS ── */
const WHITE_KEYS = [
  { note: 'b1', left: 17, width: 4.2, top: 44.8, height: 22.2 },
  { note: 'c1', left: 21.3, width: 3.8, top: 43.8, height: 23.5 },
  { note: 'd1', left: 25, width: 3.8, top: 43, height: 24.5 },
 { note: 'e1', left: 28.85, width: 4, top: 43, height: 24.8 },
  { note: 'f1', left: 32.5, width: 4, top: 43, height: 24.8 },
  { note: 'g1', left: 36.5, width: 4, top: 43, height: 24.5 },
  { note: 'a1', left: 40.5, width: 4.4, top: 43, height: 24 },

  { note: 'b2', left: 44.7, width: 3.9, top: 43, height: 24 },
  { note: 'c2', left: 48.5, width: 4, top: 43, height: 24.5 },
  { note: 'd2', left: 52, width: 4, top: 43, height: 24 },
  { note: 'e2', left: 56.5, width: 2.8, top: 43, height: 24 },

  { note: 'f2', left: 59.5, width: 3.9, top: 42.5, height: 24.9 },
  { note: 'g2', left: 63.5, width: 3.5, top: 42, height: 24.5 },
  { note: 'a2', left: 67.5, width: 3.5, top: 42, height: 24.5 },

  { note: 'b3', left: 71.1, width: 3.6, top: 41, height: 25.2 },
  { note: 'c3', left: 74.5, width: 4.2, top: 41.5, height: 25.3 },
  { note: 'd3', left: 79, width: 3.6, top: 41.8, height: 24 },
];

/* ── BLACK KEYS ── */
const BLACK_KEYS = [
  { note: 'csharp1', left: 23, width: 2.2, top: 43, height: 12 },
  { note: 'dsharp1', left: 27.5, width: 2.2, top: 43, height: 12 },

  { note: 'fsharp1', left: 34.8, width: 2.6, top: 43, height: 11.5 },
  { note: 'gsharp1', left: 38.8, width: 2.4, top: 43, height: 11.5 },
  { note: 'asharp1', left: 42.8, width: 2, top: 43, height: 12 },

  { note: 'csharp2', left: 50.5, width: 2.2, top: 42, height: 11.8 },

  { note: 'dsharp2', left: 54, width: 2.5, top: 42, height: 11.8 },

  { note: 'fsharp2', left: 61.5, width: 2.2, top: 42, height: 11.8 },
  { note: 'gsharp2', left: 65.5, width: 2.2, top: 42, height: 11.8 },
  { note: 'asharp2', left: 69, width: 2.2, top: 42, height: 11 },

  { note: 'csharp3', left: 77.5, width: 2.4, top: 41.5, height: 11.8 },
];

/* ── KEYBOARD INPUT MAP ── */

 const KEYBOARD_MAP: Record<string, string> = {
  // White keys
  a: 'b1',
  s: 'c1',
  d: 'd1',
  f: 'e1',
  g: 'f1',
  h: 'g1',
  j: 'a1',
  k: 'b2',
  l: 'c2',

  z: 'd2',
  x: 'e2',
  c: 'g2',
  v: 'a2',
  b: 'b3',
  n: 'c3',
  m: 'd3',

  // Black keys
  w: 'csharp1',
  e: 'dsharp1',
  t: 'fsharp1',
  y: 'gsharp1',
  u: 'asharp1',

  o: 'csharp2',
  p: 'dsharp2',
};

export default function PianoPage() {
  const router = useRouter();
  const soundsRef = useRef<Record<string, HTMLAudioElement>>({});

  /* ── LOAD AUDIO ── */
  useEffect(() => {
    const allNotes = [
      ...WHITE_KEYS.map(k => k.note),
      ...BLACK_KEYS.map(k => k.note),

      // extra high notes you added
      'c3', 'd3', 'c4', 'd4',
    ];

    allNotes.forEach(note => {
      const audio = new Audio();
      audio.src = `/sounds/${note}.mp3`;
      audio.load();
      soundsRef.current[note] = audio;
    });
  }, []);

  /* ── PLAY SOUND ── */
  const playNote = useCallback((note: string) => {
  const audio = soundsRef.current[note];

  if (!audio) {
    console.log('❌ NOT IN REF:', note);
    return;
  }

  console.log("▶️ playing:", note, audio.src);

  audio.currentTime = 0;

  audio.play().catch((err) => {
    console.log("🚫 PLAY FAILED:", note, err);
  });
}, []);
  /* ── VISUAL ACTIVE STATE ── */
  const setActive = useCallback((note: string, on: boolean) => {
    const el = document.querySelector(`[data-note="${note}"]`);
    if (!el) return;

    if (on) el.classList.add(styles.active);
    else el.classList.remove(styles.active);
  }, []);

  /* ── KEYBOARD EVENTS ── */
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.repeat) return;
      const note = KEYBOARD_MAP[e.key.toLowerCase()];
      if (!note) return;

      playNote(note);
      setActive(note, true);
    };

    const up = (e: KeyboardEvent) => {
      const note = KEYBOARD_MAP[e.key.toLowerCase()];
      if (!note) return;

      setActive(note, false);
    };

    window.addEventListener('keydown', down);
    window.addEventListener('keyup', up);

    return () => {
      window.removeEventListener('keydown', down);
      window.removeEventListener('keyup', up);
    };
  }, [playNote, setActive]);

  /* ── POINTER EVENTS ── */
  const onDown = (note: string) => (e: React.PointerEvent) => {
    e.preventDefault();
    playNote(note);
    setActive(note, true);
  };

  const onUp = (note: string) => () => setActive(note, false);
  const onLeave = (note: string) => () => setActive(note, false);

  return (
  <main className={styles.main}>
    <button
  className={styles.backToDesk}
  onClick={() => router.replace("/")}
>
  ← back to desk
</button>
    <div className={styles.header}>
      <h1 className={styles.title}>My Little Keyboard</h1>

      

      <p className={styles.description}>
        I've been learning the keyboard since I was 5. I haven't touched it
        seriously in years, but making a tiny playable version for my website
        somehow felt easier than practicing again.
      </p>
    </div>
     <div className={styles.infoGrid}>
  <div className={styles.card}>



    <div className={styles.cardTitle}>
  Keyboard Stats
</div>
  <div className={styles.profileLeft}>
    <img
      src="/me.jpg"
      alt="Shristi"
       width={200}
  height={220}
      className={styles.profileImage}
    />

    <div className={styles.profileName}>
      Shristi Sharma
    </div>

    
  </div>

  <div className={styles.profileRight}>
    <p><strong>Started learning:</strong> age 5</p>
<p><strong>Years of lessons:</strong> 9</p>
<p><strong>Theory:</strong> Grade 7</p>
<p><strong>Practical:</strong> Grade 6</p>
<p><strong>Current relationship with the keyboard:</strong> complicated</p>
<p><strong>Practice frequency:</strong> rare but well-intentioned</p>
  </div>
</div>

  
</div>


    
      
    <div className={styles.container}>
      <Image
        src="/keyboard.png"
        alt="  Keyboard"
        width={1456}
        height={816}
        className={styles.image}
        priority
      />

      {WHITE_KEYS.map(k => (
        <button
          key={k.note}
          data-note={k.note}
          className={`${styles.key} ${styles.whiteKey}`}
          style={{
            left: `${k.left}%`,
            width: `${k.width}%`,
            top: `${k.top}%`,
            height: `${k.height}%`,
          }}
          onPointerDown={onDown(k.note)}
          onPointerUp={onUp(k.note)}
          onPointerLeave={onLeave(k.note)}
        />
      ))}

      {BLACK_KEYS.map(k => (
        <button
          key={k.note}
          data-note={k.note}
          className={`${styles.key} ${styles.blackKey}`}
          style={{
            left: `${k.left}%`,
            width: `${k.width}%`,
            top: `${k.top}%`,
            height: `${k.height}%`,
          }}
          onPointerDown={onDown(k.note)}
          onPointerUp={onUp(k.note)}
          onPointerLeave={onLeave(k.note)}
        />
      ))}
    </div>

    
  <div className={styles.controls}>
  <h3>Keyboard Controls</h3>

  <div className={styles.controlRow}>
    <span>A → B1</span>
    <span>S → C1</span>
    <span>D → D1</span>
    <span>F → E1</span>
    <span>G → F1</span>
    <span>H → G1</span>
    <span>J → A1</span>
    <span>K → B2</span>
    <span>L → C2</span>
  </div>

  <div className={styles.controlRow}>
    <span>Z → D2</span>
    <span>X → E2</span>
    <span>C → G2</span>
    <span>V → A2</span>
    <span>B → B3</span>
    <span>N → C3</span>
    <span>M → D3</span>
  </div>

  <div className={styles.controlRow}>
    <span>W → C#1</span>
    <span>E → D#1</span>
    <span>T → F#1</span>
    <span>Y → G#1</span>
    <span>U → A#1</span>
    <span>O → C#2</span>
    <span>P → D#2</span>
  </div>

  <p className={styles.warning}>
    ⚠️ No guarantee that the notes are in tune.
  </p>
</div>
  </main>
);
}

