import { SignedIn, SignedOut } from "@clerk/nextjs";
import Hero from "./(components)/Hero";
import LoggedHero from "./(components)/LoggedHero";

const HomePage = () => {
  return (
    <div className="flex justify-center items-center w-full">
      <SignedOut>
        <Hero />
      </SignedOut>
      <SignedIn>
        <LoggedHero />
      </SignedIn>
    </div>
  );
};

export default HomePage;
