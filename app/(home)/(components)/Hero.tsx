import { Button } from "@/components/ui/button";
import { SignInButton } from "@clerk/nextjs";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="flex justify-center items-center flex-col w-full lg:h-[400px] bg-gradient-to-r from-blue-50 to-pink-200 lg:p-20">
      <div className="flex justify-start items-start w-full flex-col lg:gap-y-6">
        <h1 className="lg:text-7xl font-tartuffo text-black font-semibold capitalize text-left">
          Find, Book, Glow - All in One App
        </h1>
        <p className="lg:text-xl capitalize text-black font-tartuffo font-medium">
          Login to find and book local beauty and wellness services that fit
          your lifestyle and schedule perfectly!
        </p>
        <div className="flex justify-center items-center lg:gap-x-12 font-tartuffo text-black lg:text-lg mt-6">
          <SignInButton mode="modal">
            <Button
              size="lg"
              className="border-2 border-black hover:bg-transparent hover:text-black duration-300 hover:shadow-md"
            >
              Get BarberIQ Free <ArrowRight />
            </Button>
          </SignInButton>
          <Button
            size="lg"
            className="bg-transparent hover:bg-transparent text-black duration-300 border-2 border-black"
          >
            Need Help?
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
