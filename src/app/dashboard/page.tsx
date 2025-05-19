import { redirect } from "next/navigation";

import { getUser } from "@/lib/auth-lib/auth-session";

const dashboard = async () => {
  const user = await getUser();
  if (!user) {
    return redirect("/");
  }
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
