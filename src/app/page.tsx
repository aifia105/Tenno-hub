import SearchBar from "@/components/searchBar";
import { Suspense } from "react";
import WarframeGrid from "@/components/WarframeGrid";

export default function Home() {
  return (
    <main className="container mx-auto px-4 pt-24">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Welcome to Tenno Hub</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
          Explore the vast arsenal of Warframe with detailed stats and
          information
        </p>
        <div className="flex justify-center mb-8">
          <SearchBar />
        </div>
      </div>

      <Suspense fallback={<div>Loading warframes...</div>}>
        <WarframeGrid />
      </Suspense>
    </main>
  );
}
