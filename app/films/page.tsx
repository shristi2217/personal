'use client';

import Image from 'next/image';
import styles from './films.module.css';

const topFilms = [
  {
    title: 'Parasite',
    poster: '/posters/parasite.webp',
  },
];

const bottomFilms = [
  'perfectblue',
  'dune',
  'prisoners',
  'socialnetwork',
  'memoriesofmurder',
  'fightclub',
];

export default function FilmsPage() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>My Film Collection</h1>

      <p className={styles.description}>
        Movies that stayed with me for days, weeks, and occasionally years.
      </p>

      {/* TOP STRIP */}
      <div className={styles.filmStrip}>
        <div className={styles.trackLeft}>
          {[...topFilms, ...topFilms].map((film, i) => (
  <div key={i} className={styles.posterFrame}>
    <Image
      src={film.poster}
      alt={film.title}
      width={300}
      height={450}
      className={styles.poster}
    />
  </div>
))}
        </div>
      </div>

      {/* BOTTOM STRIP */}
      <div className={styles.filmStrip}>
        <div className={styles.trackRight}>
          {[...bottomFilms, ...bottomFilms].map((film, i) => (
            <div key={i} className={styles.posterFrame}>
              <Image
                src={`/posters/${film}.jpg`}
                alt={film}
                width={220}
                height={330}
                className={styles.poster}
              />
            </div>
          ))}
        </div>
      </div>

      <section className={styles.note}>
        <h2>Featured Film</h2>

        <p>
          Click a poster to read my thoughts, favourite scenes,
          ratings, and recommendations.
        </p>
      </section>
    </main>
  );
}