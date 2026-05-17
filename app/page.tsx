// app/page.tsx
"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Section = "home" | "film" | "music" | "projects";

const photos = [
  { title: "Paris, 2024", location: "Paris, France" },
  { title: "Goa Sunset", location: "Goa, India" },
  { title: "Mumbai Streets", location: "Mumbai, India" },
];

export default function HomePage() {
  const [lampOn, setLampOn] = useState(false);
  const [activeSection, setActiveSection] = useState<Section>("home");
  const [selectedPhoto, setSelectedPhoto] = useState<null | {
    title: string;
    location: string;
  }>(null);

  return (
    <main
      className={`min-h-screen transition-all duration-700 relative overflow-hidden ${
        lampOn
          ? "bg-[#f6efe3] text-[#2d221c]"
          : "bg-[#f8f8f8] text-black grayscale"
      }`}
    >
      {/* Notebook Background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[linear-gradient(to_bottom,transparent_31px,#000_32px)] bg-[length:100%_32px]" />

      {/* Header */}
      <header className="relative z-20 flex flex-col items-center pt-10">
        <h1 className="text-5xl md:text-7xl font-bold tracking-[0.25em]">
          DRAWING
        </h1>
        <p className="mt-2 italic text-lg md:text-xl">
          the study — a personal universe
        </p>
      </header>

      {/* Wall Notes */}
      <section className="relative z-20 mt-12 flex flex-wrap justify-center gap-6 px-6">
        <StickyNote label="FILM" onClick={() => setActiveSection("film")} />
        <StickyNote label="MUSIC" onClick={() => setActiveSection("music")} />

        {photos.map((photo) => (
          <PhotoPlaceholder
            key={photo.title}
            title={photo.title}
            onClick={() => setSelectedPhoto(photo)}
          />
        ))}
      </section>

      {/* Desk Scene */}
      <section className="relative z-10 mt-12 flex justify-center px-4">
        <div className="relative w-full max-w-6xl">
          {/* Desk Surface */}
          <div className="relative border-[5px] border-black min-h-[500px] bg-transparent rounded-sm">
            {/* Books */}
            <div className="absolute left-8 bottom-28 flex gap-2 items-end">
              {["SAPIENS", "MIDNIGHT", "NORWEGIAN", "SECRET"].map(
                (book, i) => (
                  <div
                    key={i}
                    className="border-[3px] border-black w-10 md:w-12 h-28 flex items-center justify-center text-[8px] md:text-[10px] [writing-mode:vertical-rl] rotate-180"
                  >
                    {book}
                  </div>
                )
              )}
            </div>

            {/* About Notebook */}
            <motion.div
              whileHover={{ y: -8, rotate: -1 }}
              className="absolute left-10 bottom-12 w-24 h-28 border-[4px] border-black bg-white flex items-center justify-center text-5xl font-bold cursor-pointer"
            >
              T
            </motion.div>

            {/* Open Notebook */}
            <motion.div
              whileHover={{ y: -8 }}
              className="absolute left-48 bottom-16 w-72 h-40 border-[4px] border-black bg-white flex"
            >
              <div className="w-1/2 border-r-[3px] border-black flex items-center justify-center text-3xl font-bold p-4 text-center">
                BIG LOVE
              </div>
              <div className="flex-1 flex items-center justify-center text-4xl">
                ✎
              </div>
            </motion.div>

            {/* Phone */}
            <div className="absolute left-[46%] bottom-20 w-10 h-20 border-[4px] border-black rounded-md" />

            {/* Mug */}
            <div className="absolute left-[58%] bottom-40 text-5xl">☕</div>

            {/* Radio */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              onClick={() => setActiveSection("music")}
              className="absolute right-72 top-16 w-52 h-32 border-[4px] border-black rounded-md cursor-pointer p-4"
            >
              <div className="flex gap-4">
                <div className="w-20 h-20 border-[4px] border-black rounded-full" />
                <div className="flex-1">
                  <div className="border-b-[3px] border-black h-6 mb-4" />
                  <div className="flex gap-2">
                    <div className="w-4 h-4 border-2 border-black rounded-full" />
                    <div className="w-4 h-4 border-2 border-black rounded-full" />
                    <div className="w-4 h-4 border-2 border-black rounded-full" />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Laptop */}
            <motion.div
              whileHover={{ y: -10 }}
              onClick={() => setActiveSection("projects")}
              className="absolute right-16 bottom-20 cursor-pointer"
            >
              <div className="w-72 h-44 border-[4px] border-black bg-black text-white flex flex-col justify-center px-8">
                <p className="text-2xl mb-2">projects</p>
                <ul className="text-sm space-y-1">
                  <li>• film journal</li>
                  <li>• photo archive</li>
                  <li>• writing</li>
                  <li>• ideas</li>
                </ul>
              </div>
              <div className="w-80 h-5 border-[4px] border-black -mt-1 -ml-4 bg-white" />
            </motion.div>

            {/* Lamp */}
            <motion.div
              whileTap={{ rotate: -8 }}
              onClick={() => setLampOn(!lampOn)}
              className="absolute right-6 top-10 cursor-pointer"
            >
              <div className="flex flex-col items-center">
                <div
                  className={`w-28 h-14 border-[4px] border-black rounded-t-full transition-all ${
                    lampOn ? "bg-yellow-200" : "bg-transparent"
                  }`}
                />
                <div className="w-2 h-10 bg-black" />
                <div className="w-20 h-2 bg-black rotate-45 origin-left" />
                <div className="w-2 h-20 bg-black" />
                <div className="w-20 h-8 border-[4px] border-black rounded-full" />
                <p className="italic text-xs mt-2">click lamp</p>
              </div>
            </motion.div>

            {/* Chair */}
            <div className="absolute left-1/2 -translate-x-1/2 bottom-[-160px]">
              <div className="w-28 h-28 bg-black rounded-t-full border-[4px] border-black" />
              <div className="w-44 h-10 border-[4px] border-black rounded-full mt-4" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-20 text-center mt-44 pb-12 italic text-xl">
        sit down, stay curious ☆
      </footer>

      {/* Section Modal */}
      <AnimatePresence>
        {activeSection !== "home" && (
          <Overlay onClose={() => setActiveSection("home")}>
            <SectionContent section={activeSection} />
          </Overlay>
        )}
      </AnimatePresence>

      {/* Photo Modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <Overlay onClose={() => setSelectedPhoto(null)}>
            <div className="text-center">
              <div className="w-80 h-80 border-[4px] border-black bg-white flex items-center justify-center mb-6">
                Image Placeholder
              </div>
              <h2 className="text-3xl mb-2">{selectedPhoto.title}</h2>
              <p className="italic">{selectedPhoto.location}</p>
            </div>
          </Overlay>
        )}
      </AnimatePresence>
    </main>
  );
}

function StickyNote({
  label,
  onClick,
}: {
  label: string;
  onClick: () => void;
}) {
  return (
    <motion.div
      whileHover={{ rotate: -2, y: -6 }}
      className="w-32 h-32 border-[4px] border-black bg-white flex items-center justify-center text-3xl font-semibold cursor-pointer"
      onClick={onClick}
    >
      {label}
    </motion.div>
  );
}

function PhotoPlaceholder({
  title,
  onClick,
}: {
  title: string;
  onClick: () => void;
}) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="cursor-pointer"
      onClick={onClick}
    >
      <div className="w-28 h-36 border-[4px] border-black bg-white p-2 flex flex-col">
        <div className="flex-1 border-[3px] border-black mb-2" />
        <p className="text-xs text-center italic">{title}</p>
      </div>
    </motion.div>
  );
}

function Overlay({
  children,
  onClose,
}: {
  children: React.ReactNode;
  onClose: () => void;
}) {
  return (
    <motion.div
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.92 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.92 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-white border-[4px] border-black p-10 max-w-3xl w-full"
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

function SectionContent({ section }: { section: Section }) {
  const content = {
    film: {
      title: "Film Journal",
      body: "Your reviews, watchlist, favorite directors, and cinematic universe.",
    },
    music: {
      title: "Music Universe",
      body: "Your playlists, albums, artists, moods, and sonic archive.",
    },
    projects: {
      title: "Projects Lab",
      body: "Your coding builds, creative experiments, ideas, and portfolio.",
    },
    home: {
      title: "",
      body: "",
    },
  };

  return (
    <div>
      <h2 className="text-5xl mb-6">{content[section].title}</h2>
      <p className="text-xl leading-relaxed">{content[section].body}</p>
    </div>
  );
}