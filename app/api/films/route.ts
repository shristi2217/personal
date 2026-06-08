import { NextResponse } from "next/server";
import * as cheerio from "cheerio";

async function getPoster(title: string) {
  const apiKey = process.env.TMDB_API_KEY;

  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(
      title
    )}`
  );

  const data: any = await res.json();

  const movie = data.results?.[0];

  if (!movie?.poster_path) {
    return null;
  }

  return `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
}

export async function GET() {
  const res = await fetch(
    "https://letterboxd.com/cheetos010/films/",
    {
      headers: {
        "User-Agent":
          "Mozilla/5.0",
      },
    }
  );

  const html = await res.text();

  return new Response(html, {
    headers: {
      "Content-Type":
        "text/html",
    },
  });
}