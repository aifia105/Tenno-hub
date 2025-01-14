"use client";
import { Navbar, NavbarContent } from "@nextui-org/react";
import Image from "next/image";
import ThemeSwitcher from "./themeSwitcher";
import NextLink from "next/link";

const NavBarComponent = () => {
  return (
    <Navbar
      className="z-40 fixed bg-white dark:bg-darkBlue shadow-md"
      isBordered
      maxWidth="full"
    >
      <NavbarContent className="container mx-auto px-10 py-2">
        <div className="w-full flex items-center justify-between">
          <div className="flex items-center cursor-pointer">
            <NextLink href="/" passHref legacyBehavior>
              <Image src={"/logo.png"} alt="Logo" width={65} height={60} />
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
