import FilmSlot from "./FilmSlot";

async function getFilms() {
  const res = await fetch(
    "http://localhost:3000/api/films",
    {
      cache: "no-store",
    }
  );

  return res.json();
}

export default async function Page() {
  const films = await getFilms();

  return <FilmSlot films={films} />;
}