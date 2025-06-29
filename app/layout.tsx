import type { Metadata } from "next";
import { ubuntu } from "@/utils/fonts";
import "./globals.css";
import Link from "next/link"

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"

export const metadata: Metadata = {
  title: "Fail Safe|赤点チェッカー",
  description: "App for students, suffered by test",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="flex flex-col w-full min-h-screen items-center">
        <header className="flex xl:w-1/2 md:w-full h-fit">
          <div className="p-4 w-fit">
            <Link href="/">
              <p className={`${ubuntu.className} xl:text-4xl text-2xl transition hover:opacity-35`}>Fail Safe</p>
            </Link>
          </div>
          
          <div className="justify-end ml-auto w-fit">
            <NavigationMenu viewport={false}>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href="/docs" className="text-xl p-4">Docs</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href="/repository" className="text-xl p-4">Repository</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </header>
        <main>
          {children}
        </main>
        <footer className="justify-end mt-auto w-full">
          <div className="flex h-fit bg-black">
            <div className="flex flex-col p-4 px-8 items-start text-white">
              <p className={`${ubuntu.className} text-[30px] text-center`}>Fail Safe</p>
              <p className="text-[20px] text-center">赤点チェッカー</p>
            </div>

            <div className="flex flex-col p-4 px-8 ml-auto text-white justify-center">
              <p className="text-center">Created by Kyuri-dao</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
