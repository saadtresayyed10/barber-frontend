import { SignInButton } from "@clerk/nextjs";
import { LogIn } from "lucide-react";
import Link from "next/link";

const navLinks = [
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Customer Support",
    link: "/support",
  },
  {
    name: "Portfolio",
    link: "https://groven-portfolio.vercel.app/",
  },
];

const Navbar = () => {
  return (
    <div className="flex justify-between items-center w-full lg:px-10 lg:py-4 bg-gradient-to-r from-violet-50 to-pink-200">
      <Link href="/">
        <h1 className="font-roobert font-bold lg:text-3xl tracking-wide">
          BarberIQ
        </h1>
      </Link>
      <div className="lg:flex hidden justify-center items-center lg:gap-x-8 font-roobert">
        <ul className="flex justify-center items-center lg:gap-x-8">
          {navLinks.map((navLink, idx) => (
            <Link key={idx} href={navLink.link}>
              <li className="list-none cursor-pointer hover:underline-effect">
                {navLink.name}
              </li>
            </Link>
          ))}
        </ul>

        <SignInButton mode="modal">
          <button className="flex items-center gap-x-2 hover:gap-x-4 text-white bg-neutral-800 rounded-lg px-6 py-1.5 cursor-pointer hover:text-black hover:bg-transparent border-2 border-black duration-300">
            <LogIn className="w-4 h-4" /> Login
          </button>
        </SignInButton>
      </div>
    </div>
  );
};

export default Navbar;
