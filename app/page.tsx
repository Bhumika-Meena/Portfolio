import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experiences } from "@/components/Experiences";
import { Projects } from "@/components/Projects";
import { TechStack } from "@/components/TechStack";
import { Contact } from "@/components/Contact";
import { Header } from "@/components/Header";
import { SideNavbar } from "@/components/SideNavbar";
import { RightSidebar } from "@/components/RightSidebar";
import { BottomBar } from "@/components/BottomBar";

export default function HomePage() {
  return (
    <>
      {/* <Header /> */}
      
      <SideNavbar />
      <main className="flex min-h-screen flex-col pb-24 md:pl-28 lg:pl-28">
        <Hero />
        <About />
        <Experiences />
        <Projects />
        <TechStack />
        <Contact />
        <footer className="border-t border-white/60 bg-blush/80">
          <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 px-6 py-6 text-xs text-charcoal/60 sm:flex-row">
            <p>© {new Date().getFullYear()} Bhumika. All rights reserved.</p>
            <div className="flex gap-4">
              <a
                href="#hero"
                className="transition duration-300 hover:text-rose"
              >
                Back to top
              </a>
            </div>
          </div>
        </footer>
      </main>
      <div className="hidden xl:block">
      {/*  <RightSidebar /> */}
      </div>
      <div className="hidden sm:block">
        {/* <BottomBar /> */}
      </div>
    </>
  );
}

