'use client';

import Image from 'next/image';
import styles from './films.module.css';


const topFilms = [
  {
    title: '500 Days of Summer',
    poster: '/posters/500_days_of_summer.webp',
  },
  {
    title: 'All We Imagine As Light',
    poster: '/posters/all_we_imagine_as_light.webp',
  },
  {
    title: 'Chungking Express',
    poster: '/posters/chungking_express.webp',
  },
  {
    title: 'Conclave',
    poster: '/posters/conclave.webp',
  },
  {
    title: 'Coraline',
    poster: '/posters/coraline.webp',
  },
  {
    title: 'In the Mood for Love',
    poster: '/posters/in_the_mood_for_love.webp',
  },
  {
    title: "It's a Wonderful Life",
    poster: '/posters/its_a_wonderful_life.webp',
  },
  {
    title: 'Life of Pi',
    poster: '/posters/life_of_pi.webp',
  },
  {
    title: 'Parasite',
    poster: '/posters/parasite.webp',
  },
  {
  title: 'Aftersun',
  poster: '/posters/aftersun.webp',
},
{
  title: 'Fantastic Mr. Fox',
  poster: '/posters/fantastic_mr_fox.webp',
},
];

const bottomFilms = [
  {
    title: 'Memories of Murder',
    poster: '/posters/memories_of_murder.webp',
  },
  {
    title: 'The Namesake',
    poster: '/posters/namesake.webp',
  },
  {
  title: 'Little Miss Sunshine',
  poster: '/posters/little_miss_sunshine.webp',
},
  {
    title: 'Oldboy',
    poster: '/posters/oldboy.webp',
  },
  {
    title: 'Om Shanti Om',
    poster: '/posters/om_shaanti_om.webp',
  },
  {
    title: 'Perfect Days',
    poster: '/posters/perfect_days.webp',
  },
  {
    title: 'Rental Family',
    poster: '/posters/rental_family.webp',
  },
  {
    title: 'Revenge of the Sith',
    poster: '/posters/revenge_of_the_sith.webp',
  },
  {
    title: 'The Shawshank Redemption',
    poster: '/posters/shawshank_redemption.webp',
  },
  {
    title: 'The Social Network',
    poster: '/posters/the_social_network.webp',
  },
  {
    title: 'The Station Agent',
    poster: '/posters/the_station_agent.webp',
  },
  {
    title: 'The Worst Person in the World',
    poster: '/posters/the_worst_person_in_the_world.webp',
  },
  {
    title: 'Whiplash',
    poster: '/posters/whiplash.webp',
  },

];

export default function FilmsPage() {
 
  return (
    <main className={styles.main}>
      <button
  className={styles.backToDesk}
  onClick={() => window.location.href = "/"}
>
  ← back to desk
</button>


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

      <section className={styles.letterboxd}>
  <h2>Letterboxd Corner</h2>

  <div className={styles.letterboxdCard}>
    <p>
      My watchlist is longer than my lifespan.
    </p>

    <p>
      ★ Coming soon: recent watches, favourites,
      reviews, and questionable ratings.
    </p>

    <a
      href="https://letterboxd.com/cheetos010/"
      target="_blank"
      rel="noopener noreferrer"
      className={styles.letterboxdButton}
    >
      Visit my Letterboxd →
    </a>
  </div>
</section>
    </main>
  );
}