// app/components/ThemeSwitcher.tsx
"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@nextui-org/react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem,
} from "@nextui-org/react";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div>
      <p>The current theme is: {theme}</p>
      <Dropdown>
        <DropdownTrigger>
          <Button isIconOnly variant="bordered">
            {theme === "dark" ? <Moon /> : <Sun />}
          </Button>
        </DropdownTrigger>
        <DropdownMenu aria-label="Select a theme" className="text-foreground">
          <DropdownSection>
            <DropdownItem key={"light"} onClick={() => setTheme("light")}>
              Light
            </DropdownItem>
            <DropdownItem key={"dark"} onClick={() => setTheme("dark")}>
              Dark
            </DropdownItem>
            <DropdownItem key={"system"} onClick={() => setTheme("system")}>
              System
            </DropdownItem>
          </DropdownSection>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}
