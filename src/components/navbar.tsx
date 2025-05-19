import Link from "next/link";

import { signOutAction } from "@/actions/auth";
import { getUser } from "@/lib/auth-lib/auth-session";

import { LogoutButton } from "./auth/logout-button";
import { buttonVariants } from "./ui/button";

const Navbar = async () => {
  const user = await getUser();
  return (
    <div className="border-b px-4 shadow">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between">
        <Link href="/">
          <h1 className="text-xl font-bold">Your logo</h1>
        </Link>
        <div>
          {user ? (
            <LogoutButton action={signOutAction} />
          ) : (
            <Link
              href="/sign-in"
              className={buttonVariants({ variant: "outline" })}
            >
              Se connecter
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
