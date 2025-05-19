import Link from "next/link";

import { buttonVariants } from "./ui/button";

const Navbar = () => {
  return (
    <div className="border-b px-4 shadow">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between">
        <Link href="/">
          <h1 className="text-xl font-bold">Your logo</h1>
        </Link>
        <div>
          <Link
            href="/sign-in"
            className={buttonVariants({ variant: "outline" })}
          >
            Se connecter
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
