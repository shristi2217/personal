import Parser from "rss-parser";

const parser = new Parser();

async function getPoster(title: string) {
  const apiKey = process.env.TMDB_API_KEY;

  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(
      title
    )}`
  );

  const data = await res.json();

  const movie = data.results?.[0];

  if (!movie?.poster_path) {
    return null;
  }

  return `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
}

export async function getLetterboxdFilms() {
  const feed = await parser.parseURL(
    "https://letterboxd.com/cheetos010/rss/"
  );

  const seen = new Set();

  const films = [];

  for (const item of feed.items) {
    const rawTitle = item.title || "";

    // REMOVE "Watched"
    // REMOVE STARS
    // CLEAN TITLE
    const cleanTitle = rawTitle
      .replace(/^Watched\s+/i, "")
      .replace(/[★½]/g, "")
      .trim();

    // SKIP EMPTY
    if (!cleanTitle) continue;

    // SKIP DUPLICATES
    if (seen.has(cleanTitle)) continue;

    seen.add(cleanTitle);

    // COUNT STARS
    const fullStars =
      (rawTitle.match(/★/g) || []).length;

    const halfStar = rawTitle.includes("½")
      ? 0.5
      : 0;

    const rating = fullStars + halfStar;

    // ONLY ABOVE 3
    if (rating <= 3) continue;

    const image = await getPoster(cleanTitle);

    // SKIP IF NO POSTER
    if (!image) continue;

    films.push({
      title: cleanTitle,
      rating,
      image,
      link: item.link,
    });
  }

  return films;
}