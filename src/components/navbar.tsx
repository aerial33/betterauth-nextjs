import { headers } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";

import { auth } from "@/lib/auth";

import { Button, buttonVariants } from "./ui/button";

const Navbar = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  return (
    <div className="border-b px-4 shadow">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between">
        <Link href="/">
          <h1 className="text-xl font-bold">Your logo</h1>
        </Link>
        <div>
          {session ? (
            <form
              action={async () => {
                "use server";
                await auth.api.signOut({
                  headers: await headers(),
                });
                return redirect("/");
              }}
            >
              <Button type="submit" variant={"outline"}>
                Se déconnecter
              </Button>
            </form>
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
