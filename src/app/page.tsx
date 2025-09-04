import { montserrat } from "./ui/fonts";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 bg-primary-100">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="bg-secondary-900 p-4 rounded-lg shadow-lg">
          <h1 className="text-primary-800 text-6xl">Hello world, this is Web Page to IngenioSoft</h1>
        </div>        
      </main>
    </div>
  );
}
