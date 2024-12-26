import { LocationForm } from "./LocationForm";

const LoggedHero = () => {
  return (
    <section className="flex justify-center items-center flex-col w-full lg:h-[500px] bg-gradient-to-r from-blue-50 to-pink-200 lg:p-20">
      <div className="flex justify-start items-start w-full flex-col lg:gap-y-6">
        <h1 className="lg:text-7xl font-tartuffo text-black font-semibold capitalize text-left">
          You&apos;re in! Discover, book, and enjoy premium services tailored to
          your needs
        </h1>
        <p className="lg:text-xl capitalize text-black font-tartuffo font-medium lg:pr-32">
          Welcome to your personalized beauty and wellness hub! Explore
          top-rated services, book appointments effortlessly, and enjoy a
          seamless self-care journey designed just for you. Your perfect
          experience is just a few clicks away—start now and indulge in the
          best!
        </p>
        <div className="flex justify-center items-center lg:gap-x-12 font-tartuffo text-black lg:text-lg mt-6 w-full">
          <LocationForm />
        </div>
      </div>
    </section>
  );
};

export default LoggedHero;
