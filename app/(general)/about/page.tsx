import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "About page",
  keywords: ["about", "page", "next.js", "react"],
};

export default function AboutPage() {
  return (
    <main className="flex flex-col items-centerp-24">

      <h1 className="text-4xl font-bold">About</h1>
   
    </main>
  );
}
