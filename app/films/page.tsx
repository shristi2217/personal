import FilmSlot from "./FilmSlot";
import { getLetterboxdFilms } from "./lib/letterboxd";

export default async function Page() {
  const films = await getLetterboxdFilms();

  return <FilmSlot films={films} />;
}