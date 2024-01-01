import AnimeCard from "@/components/AnimeCard";
import LoadMore from "../../components/LoadMore";
import { Anime } from "@/types";
import { animes } from "@/data";

async function Page() {
  return (
    <main className="sm:p-16 py-16 px-8 flex flex-col gap-10">
      <h2 className="text-3xl text-white font-bold">Explore Anime</h2>

      <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
        {animes.map((item: Anime, index) => (
          <AnimeCard key={item.id} anime={item} index={index} />
        ))}
      </section>
      <LoadMore />
    </main>
  );
}

export default Page;
