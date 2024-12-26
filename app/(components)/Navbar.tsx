import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center w-full lg:px-10 lg:py-4 bg-gradient-to-r from-green-100 to-green-300">
      <Link href="/">
        <h1 className="">BarberIQ</h1>
      </Link>
    </div>
  );
};

export default Navbar;
