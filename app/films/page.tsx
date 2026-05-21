"use client";

import { useState } from "react";

export default function FilmSlot({
  films,
}: {
  films: any[];
}) {
  const repeatedFilms = [
    ...films,
    ...films,
    ...films,
  ];

  const [spinning, setSpinning] =
    useState(false);

  const [selectedFilm, setSelectedFilm] =
    useState<any>(null);

  const spin = () => {
    if (spinning) return;

    setSpinning(true);

    const strip =
      document.getElementById("film-strip");

    if (!strip) return;

    // random REAL movie
    const randomIndex = Math.floor(
      Math.random() * films.length
    );

    const chosenFilm = films[randomIndex];

    // middle section
    const targetIndex =
      films.length + randomIndex;

    const cardWidth = 264;

    const finalTranslate =
      targetIndex * cardWidth - 420;

    strip.style.transition =
      "transform 4s cubic-bezier(0.15, 0.85, 0.2, 1)";

    strip.style.transform = `translateX(-${finalTranslate}px)`;

    setTimeout(() => {
      setSelectedFilm(chosenFilm);
      setSpinning(false);
    }, 4000);
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center overflow-hidden px-6">

      <h1 className="text-7xl font-black mb-14">
        film machine
      </h1>

      {/* SLOT MACHINE */}
      <div className="relative w-[1100px] overflow-hidden rounded-[40px] border border-white/10 bg-neutral-950">

        {/* CENTER */}
        <div className="absolute left-1/2 top-0 z-20 h-full w-[260px] -translate-x-1/2 border-x-2 border-yellow-300 pointer-events-none" />

        {/* STRIP */}
        <div
          id="film-strip"
          className="flex gap-6 px-6 py-10"
        >
          {repeatedFilms.map(
            (film, index) => (
              <div
                key={index}
                className="
                  relative
                  min-w-[240px]
                  h-[360px]
                  rounded-3xl
                  overflow-hidden
                  flex-shrink-0
                "
              >
                <img
                  src={film.image}
                  alt={film.title}
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />

                <div className="absolute bottom-0 p-4">
                  <h2 className="text-xl font-bold">
                    {film.title}
                  </h2>

                  <p className="text-yellow-300">
                    {"★".repeat(
                      Math.floor(
                        film.rating
                      )
                    )}
                  </p>
                </div>
              </div>
            )
          )}
        </div>
      </div>

      {/* BUTTON */}
      <button
        onClick={spin}
        disabled={spinning}
        className="
          mt-10
          px-8
          py-4
          rounded-full
          bg-white
          text-black
          font-bold
          hover:scale-105
          transition-all
        "
      >
        {spinning
          ? "spinning..."
          : "SPIN"}
      </button>

      {/* RESULT */}
      {selectedFilm && !spinning && (
        <div className="mt-12 text-center">
          <p className="uppercase tracking-[0.3em] text-neutral-500 text-sm">
            now showing
          </p>

          <h2 className="text-5xl font-black mt-2">
            {selectedFilm.title}
          </h2>

          <p className="text-yellow-300 mt-3 text-xl">
            {"★".repeat(
              Math.floor(
                selectedFilm.rating
              )
            )}
          </p>
        </div>
      )}
    </div>
  );
}