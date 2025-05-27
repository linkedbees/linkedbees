import { Main } from "next/document";
import MainMenu from "./components/MainMenu";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* <h1 className="text-4xl font-bold">Welcome to Linked Bees!</h1> */}
      <div className="w-screen h-screen" style={{ backgroundImage: "url('linkedbees.png')", backgroundPosition: "center", backgroundSize: "cover" }}>
        <div className="flex flex-col items-center justify-around h-full bg-black bg-opacity-80">
          <MainMenu />
          <h1 className="text-white text-9xl font-bold uppercase mt-4">We are bees</h1>
        </div>
      </div>
    </main>
  );
}
