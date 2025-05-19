import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex h-screen flex-col items-center justify-center p-4">
      <h1 className="mb-4 text-3xl font-bold">Logo 🌍</h1>
      <h1 className="mb-4 text-3xl font-bold">
        Boilerplate{" "}
        <span className="bg-gradient-to-l from-blue-500 to-blue-700 bg-clip-text text-transparent">
          NextJS
        </span>{" "}
        with{" "}
        <span className="bg-gradient-to-l from-blue-500 to-blue-700 bg-clip-text text-transparent">
          Better-Auth
        </span>
      </h1>
      <Button>Click me</Button>
    </div>
  );
}
