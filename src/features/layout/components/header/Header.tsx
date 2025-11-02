import AlanLima from "@/ui/alanLima";
import { NavigationMenu } from "./components/NavigationMenu";

export default function Header() {
  return (
    <header className="bg-foreground flex w-full items-center justify-between px-6 py-7 text-white">
      <AlanLima />
      <NavigationMenu />
    </header>
  );
}
