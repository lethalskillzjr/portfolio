"use client";

// import Approach from "@/components/Approach";
import Client from "@/components/Client";
import Experience from "@/components/Experience";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";
import { useEffect, useState } from "react";
// import { link } from "fs";
// import Image from "next/image";
// import { FaHome } from "react-icons/fa";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  });

  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        {mounted && <FloatingNav navItems={navItems} />}
        <Hero />
        <Grid />
        <RecentProjects />
        <Client />
        <Experience />
        {/* <Approach /> */}
      </div>
    </main>
  );
}
