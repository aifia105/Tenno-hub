"use client";
import { Input } from "@nextui-org/react";
import { Search, SlidersHorizontal, SlidersVertical } from "lucide-react";
import { Button } from "@nextui-org/react";

const SearchBar = () => {
  return (
    <div className="flex gap-2 w-full max-w-xl">
      <Input
        classNames={{
          input: "text-sm",
          inputWrapper: "bg-gray-200 dark:bg-darkBlue-200 hover:bg-default-200",
        }}
        placeholder="Search..."
        startContent={<Search className="text-default-400" size={20} />}
      />
      <Button
        isIconOnly
        className="bg-default-100 dark:bg-darkBlue-200"
        aria-label="Filter"
      >
        <SlidersHorizontal size={20} />
      </Button>
      <Button
        isIconOnly
        className="bg-default-100 dark:bg-darkBlue-200"
        aria-label="Sort"
      >
        <SlidersVertical size={20} />
      </Button>
    </div>
  );
};

export default SearchBar;
