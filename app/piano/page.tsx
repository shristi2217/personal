'use client';

import { useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import styles from './piano.module.css';

/* ── WHITE KEYS ── */
const WHITE_KEYS = [
  { note: 'b1', left: 16.5, width: 5 },
  { note: 'c1', left: 21, width: 4.5 },
  { note: 'd1', left: 25, width: 4 },
  { note: 'e1', left: 28.85, width: 4 },
  { note: 'f1', left: 32.5, width: 4.5 },
  { note: 'g1', left: 36.5, width: 4.4 },
  { note: 'a1', left: 40.5, width: 4.4 },
  { note: 'b2', left: 44.7, width: 3.9 },
  { note: 'c2', left: 48.5, width: 4 },
  { note: 'd2', left: 52, width: 4 },
  { note: 'e2', left: 56.5, width: 2.8 },
  { note: 'f2', left: 59.5, width: 3.9 },
  { note: 'g2', left: 63.5, width: 4 },
{ note: 'a2', left: 67.5, width: 4 },
  { note: 'b3', left: 71.1, width: 3.6 },

{ note: 'c3', left: 74.5, width: 4.2 },
{ note: 'd3', left: 78.5, width: 3.5 },

];

/* ── BLACK KEYS ── */
const BLACK_KEYS = [
  { note: 'csharp1', left: 23 },
  { note: 'dsharp1', left: 27.5 },
  { note: 'fsharp1', left: 34.5 },
  { note: 'gsharp1', left: 38.8 },
  { note: 'asharp1', left: 42.8 },

  { note: 'csharp2', left: 50.5 },
  { note: 'dsharp2', left: 54 },
  { note: 'fsharp2', left: 61.5 },
  { note: 'gsharp2', left: 65 },
  { note: 'asharp2', left: 68.5 },

  { note: 'csharp3', left: 76.8 }, // fixed
];

/* ── KEYBOARD INPUT MAP ── */
const KEYBOARD_MAP: Record<string, string> = {
  a: 'b1',
  s: 'c1',
  d: 'd1',
  f: 'e1',
  g: 'f1',
  h: 'g1',
  j: 'a1',
  k: 'b2',
  l: 'c2',
  ';': 'd2',

  z: 'g2',
  x: 'a2',

  w: 'csharp1',
  e: 'dsharp1',
  t: 'fsharp1',
  y: 'gsharp1',
  u: 'asharp1',

  o: 'csharp2',
  p: 'dsharp2',
};

export default function PianoPage() {
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
      audio.src = `/assets/sounds/sounds/${note}.mp3`;
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
      <div className={styles.container}>
        <Image
          src="/assets/keyboard.png"
          alt="Keyboard"
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
              top: '43%',
              height: '24%',
            }}
            onPointerDown={onDown(k.note)}
            onPointerUp={onUp(k.note)}
            onPointerLeave={onLeave(k.note)}
          />
        ))}
        {/* BLACK KEYS */}
        {BLACK_KEYS.map(k => (
          <button
            key={k.note}
            data-note={k.note}
            className={`${styles.key} ${styles.blackKey}`}
            style={{
              left: `${k.left}%`,
              width: '2.2%',
              top: '43%',
              height: '12%',
            }}
            onPointerDown={onDown(k.note)}
            onPointerUp={onUp(k.note)}
            onPointerLeave={onLeave(k.note)}
          />
        ))}
      </div>
    </main>
  );
}