// "use client";
import { Button } from "../ui/button";

export function LogoutButton({ action }: { action: () => Promise<void> }) {
  return (
    <form action={action}>
      <Button type="submit" variant="outline">
        Se déconnecter
      </Button>
    </form>
  );
}
