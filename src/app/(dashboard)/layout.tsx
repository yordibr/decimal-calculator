import Link from 'next/link';
import { Dot, Gauge, Menu, User } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { auth, signIn } from '@/auth';
import { redirect } from 'next/navigation';
import { UserProfile } from '@/components/UserProfile';

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  if (!session) return await signIn();

  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex-1 pt-4">
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
              <h2 className="flex items-center gap-3 rounded-lg px-3  py-2  transition-all hover:text-primary">
                Overview
              </h2>
              <Link
                href="/app"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <Gauge className="h-4 w-4" />
                App
              </Link>
              <h2 className="flex items-center gap-3 rounded-lg px-3 mt-4 py-2  transition-all hover:text-primary">
                Management
              </h2>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    <Link
                      href="#"
                      className="flex items-center gap-3 rounded-lg px-3 text-muted-foreground font-bold transition-all hover:text-primary"
                    >
                      <User className="h-4 w-4" />
                      User
                    </Link>
                  </AccordionTrigger>
                  <AccordionContent>
                    <Link
                      href="/profile"
                      className="flex items-center gap-3 rounded-lg px-3 py-2  text-muted-foreground transition-all hover:text-primary"
                    >
                      <Dot className="h-4 w-4" />
                      Profile
                    </Link>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </nav>
          </div>
          <div className="mt-auto p-4 ">
            <UserProfile />
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6 md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="shrink-0 md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col">
              <nav className="grid gap-2 text-lg font-medium">
                <h2 className="flex items-center gap-3 rounded-lg px-3  py-2  transition-all hover:text-primary">
                  Overview
                </h2>
                <Link
                  href="/app"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                >
                  <Gauge className="h-4 w-4" />
                  App
                </Link>
                <h2 className="flex items-center gap-3 rounded-lg px-3 mt-4 py-2  transition-all hover:text-primary">
                  Management
                </h2>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>
                      <Link
                        href="#"
                        className="flex items-center gap-3 rounded-lg px-3 text-muted-foreground font-bold transition-all hover:text-primary"
                      >
                        <User className="h-4 w-4" />
                        User
                      </Link>
                    </AccordionTrigger>
                    <AccordionContent>
                      <Link
                        href="/profile"
                        className="flex items-center gap-3 rounded-lg px-3 py-2  text-muted-foreground transition-all hover:text-primary"
                      >
                        <Dot className="h-4 w-4" />
                        Profile
                      </Link>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </nav>
              <div className="mt-auto">
                <UserProfile />
              </div>
            </SheetContent>
          </Sheet>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">{children}</main>
      </div>
    </div>
  );
}
