"use client";

import { X } from "lucide-react";
import { Button } from "@/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/ui/drawer";
import Link from "next/link";
import AlanLima from "@/ui/alanLima";

export function NavigationMenu() {
  const routes = ["Início", "Sobre", "Projetos", "Contato"];

  return (
    <Drawer direction="top">
      <DrawerTrigger asChild>
        <button
          type="button"
          aria-label="Abrir menu de navegação"
          className="flex h-[50px] w-12 flex-col justify-end gap-[17px] pt-1.5 pb-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2"
        >
          <span className="block h-1.5 w-full bg-white" />
          <span className="block h-1.5 w-full bg-white" />
          <span className="sr-only">Abrir menu</span>
        </button>
      </DrawerTrigger>

      <DrawerContent
        className="bg-foreground h-screen text-white"
        role="dialog"
        aria-modal="true"
        aria-label="Menu de navegação principal"
      >
        <nav className="mx-auto w-full max-w-sm" aria-label="Menu principal">
          <DrawerHeader className="flex w-full flex-row items-center justify-center px-6 py-7">
            <DrawerTitle className="sr-only">
              Menu de navegação principal
            </DrawerTitle>
            <AlanLima />
            <DrawerClose asChild className="ml-auto pt-1.5">
              <Button
                variant="ghost"
                size="icon"
                className="text-secondary"
                aria-label="Fechar menu"
              >
                <X className="size-12" aria-hidden="true" />
              </Button>
            </DrawerClose>
          </DrawerHeader>

          <ul className="flex flex-col items-center gap-6 p-4 text-lg">
            {routes.map((route) => (
              <li key={route}>
                <Link
                  href={`/${route.toLowerCase()}`}
                  className="hover:underline focus:underline"
                >
                  {route}
                </Link>
              </li>
            ))}
          </ul>

          <DrawerFooter />
        </nav>
      </DrawerContent>
    </Drawer>
  );
}
