import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
    <div className="h-full bg-background text-white">
      <Navbar />
      <div className="flex items-center justify-center text-4xl text-white font-semibold h-[90vh]">
        TransformoDocs
      </div>
    </div>
  );
}
