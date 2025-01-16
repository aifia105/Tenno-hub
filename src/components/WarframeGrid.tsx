"use client";
import { useEffect } from "react";
import ItemCard from "./card";
import { Warframe } from "@/types/warframe";
import { fetchData } from "@/redux/slices/apiSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import Loading from "./loading";

const filteredData = [
  "Helminth",
  "Amesha",
  "Bonewidow",
  "Elytron",
  "Itzal",
  "Odonata",
  "Odonata Prime",
  "Voidrig",
];

export default function WarframeGrid() {
  const dispatch = useAppDispatch();
  const { data, loading, error } = useAppSelector((state) => state.api);

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  if (error) return <div>Error: {error}</div>;
  if (loading) return <Loading />;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {data
        .filter((item: Warframe) => !filteredData.includes(item.name))
        .map((item: Warframe) => (
          <ItemCard
            key={item.name}
            name={item.name}
            image={`https://cdn.warframestat.us/img/${item.imageName}`}
          />
        ))}
    </div>
  );
}
