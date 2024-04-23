import Image from "next/image";
import { ThemeSwitcher } from "@/app/components/ThemeSwitcher";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <ThemeSwitcher />
      </div>
    </div>
  );
}
