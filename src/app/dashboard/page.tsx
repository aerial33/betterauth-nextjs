import { headers } from "next/headers";
import { redirect } from "next/navigation";

import { auth } from "@/lib/auth";

const dashboard = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (!session) {
    return redirect("/");
  }
  const user = session?.user;
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <h1 className="text-4xl font-bold">Dashboard</h1>
      <p className="mt-4 text-lg">
        Bienvenue sur votre tableau de bord {user?.name} !
      </p>
    </div>
  );
};

export default dashboard;
