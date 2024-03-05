'use client'

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
<header className="px-4 bg-rose dark:bg-black text-cream lg:px-6 h-16 flex items-center">
<Link className="flex items-center justify-center" href="#">
<Image
src="/logo-cream.svg"
width={300}
height={300}
className="size-10"
alt="Pulse Logo"
/>
  <span className="sr-only">Pulse Community Management Agency</span>
</Link>
<nav className="ml-auto flex gap-4 sm:gap-6">
<Link className="text-sm text-sage-200 font-medium hover:underline underline-offset-4" href="jobs">
    Work
</Link>
  <Link className="text-sm font-medium hover:underline underline-offset-4" href="/#services">
    Services
  </Link>
  <Link className="text-sm font-medium hover:underline underline-offset-4" href="/#team">
    Team
  </Link>
  <Link className="text-sm font-medium hover:underline underline-offset-4" href="/contact">
    Contact
  </Link>
</nav>
</header>
);
}