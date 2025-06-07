import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <main className="h-screen w-screen text-center place-content-center">
      <h1 className="text-3xl sm:text-6xl md:text-9xl">Hello!</h1>
    </main>
  );
}
