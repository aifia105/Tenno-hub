"use client";
import { Navbar, NavbarContent } from "@nextui-org/react";
import Image from "next/image";
import ThemeSwitcher from "./themeSwitcher";
import NextLink from "next/link";

const NavBarComponent = () => {
  return (
    <Navbar
      className="z-40 fixed bg-gray-100 dark:bg-darkBlue shadow-md rounded-sm"
      isBordered
      maxWidth="full"
    >
      <NavbarContent className="container mx-auto px-6 py-2">
        <div className="w-full flex items-center justify-between">
          <div className="flex items-center cursor-pointer">
            <NextLink href="/" passHref legacyBehavior>
              <Image src={"/logo.png"} alt="Logo" width={100} height={100} />
            </NextLink>
          </div>
          <div className="flex items-center">
            <ThemeSwitcher />
          </div>
        </div>
      </NavbarContent>
    </Navbar>
  );
};

export default NavBarComponent;
