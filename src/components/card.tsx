"use client";
import { Card, CardBody, CardFooter } from "@nextui-org/react";
import Image from "next/image";
import { useState } from "react";

interface ItemCardProps {
  name: string;
  image: string;
}

const ItemCard = ({ name, image }: ItemCardProps) => {
  const [imgError, setImgError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Card
      className="group relative overflow-hidden backdrop-blur-md bg-gray-100/80 dark:bg-darkBlue-200/20 
      border border-gray-200/50 dark:border-white/10 hover:scale-[1.02] transition-all duration-500 
      hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:hover:shadow-[0_8px_30px_rgba(255,255,255,0.12)]"
    >
      <div
        className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-secondary/10 opacity-0 
        group-hover:opacity-100 transition-opacity duration-500"
      />

      <CardBody className="p-0 overflow-hidden">
        <div
          className="relative h-60 xl:h-64 w-full bg-gradient-to-br from-gray-100/30 to-gray-200/30 
          dark:from-gray-800/30 dark:to-gray-900/30"
        >
          {isLoading && (
            <div
              className="absolute inset-0 animate-pulse bg-gradient-to-r from-gray-200 to-gray-300 
              dark:from-gray-700 dark:to-gray-800"
            />
          )}
          <Image
            src={imgError ? "/fallback-image.jpg" : image}
            alt={name}
            fill
            className={`object-contain p-6 transition-all duration-700 ease-out
              ${isLoading ? "opacity-0 scale-95" : "opacity-100 scale-100"}
              group-hover:scale-110`}
            onError={() => setImgError(true)}
            onLoad={() => setIsLoading(false)}
            loading="lazy"
          />
        </div>
      </CardBody>

      <CardFooter
        className="p-4 flex flex-col items-center gap-2 backdrop-blur-lg 
        bg-gray-50/80 dark:bg-darkBlue-300/30"
      >
        <h3
          className="text-lg font-bold text-gray-800 dark:text-gray-100 line-clamp-2 
          group-hover:text-primary transition-colors duration-300"
        >
          {name}
        </h3>
        <div
          className="w-full h-[2px] bg-gradient-to-r from-primary/50 via-secondary/50 to-transparent 
          transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
        />
      </CardFooter>
    </Card>
  );
};

export default ItemCard;
