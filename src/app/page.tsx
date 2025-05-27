import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* <h1 className="text-4xl font-bold">Welcome to Linked Bees!</h1> */}
      <div className="w-screen h-screen" style={{ backgroundImage: "url('linkedbees.png')", backgroundPosition: "center", backgroundSize: "cover" }}>
        <div className="flex items-center justify-center h-full bg-black bg-opacity-80">
          <h1 className="text-white text-9xl font-bold uppercase">We are bees</h1>
        </div>
      </div>
    </main>
  );
}
