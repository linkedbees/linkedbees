export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* <h1 className="text-4xl font-bold">Welcome to Linked Bees!</h1> */}
      <div className="w-screen h-screen" style={{ backgroundImage: "url('linkedbees.png')", backgroundPosition: "center", backgroundSize: "cover" }}>
        <div className="flex items-center justify-center h-full bg-black bg-opacity-75">
          <h1 className="text-white text-9xl font-bold uppercase">We are bees</h1>
        </div>
      </div>
      <div className="fixed top-0 px-[20px] w-full z-999 m">
        <div className="bg-white pl-[85px] mt-[25px] mx-auto max-w-[1400px] rounded-[38px] pr-[60px] w-full">
          <div className="flex items-center gap-[10px] justify-between">
            <div className="border-0 font-inherit box-border p-0 m-0">
              <h1 className="border-0 m-0 p-0 box-border">
                <a href="">
                  <img src="./logo.png" alt="" className="w-64 py-2" />
                </a>
              </h1>
            </div>
            <div className="box-border p-0">
              <nav className="d-block box-border h-full">
                <ul className="flex items-center justify-between gap-[40px] h-full list-none">
                  <li className="box-border p-0 m-0 h-full list-none">
                    <a href="" className="text-[20px] font-semibold text-black hover:text-blue-500 hover:underline transition-colors duration-300">Home</a>
                  </li>
                  <li className="box-border p-0 m-0 h-full list-none">
                    <a href="" className="text-[20px] font-semibold text-black hover:text-blue-500 hover:underline transition-colors duration-300">About</a>
                  </li>
                  <li className="box-border p-0 m-0 h-full list-none">
                    <a href="" className="text-[20px] font-semibold text-black hover:text-blue-500 hover:underline transition-colors duration-300">Services</a>
                  </li>
                  <li className="box-border p-0 m-0 h-full list-none">
                    <a href="" className="text-[20px] font-semibold text-black hover:text-blue-500 hover:underline transition-colors duration-300">Partners</a>
                  </li>
                  <li className="box-border p-0 m-0 h-full list-none">
                    <a href="" className="text-[20px] font-semibold text-black hover:text-blue-500 hover:underline transition-colors duration-300">Contact</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className="w-screen h-screen" style={{ backgroundImage: "url('linkedbees.png')", backgroundPosition: "center", backgroundSize: "cover" }}>
        <div className="flex items-center justify-center h-full bg-black bg-opacity-80">
          <h1 className="text-white text-9xl font-bold uppercase">We are bees</h1>
        </div>
      </div>
    </main>
  );
}
