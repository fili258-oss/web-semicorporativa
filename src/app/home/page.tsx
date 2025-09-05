import Header from "../components/Header";
function Home() {
   return (
    <div className="flex min-h-screen flex-col">      
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="p-4">          
          <h1 className="text-primary-800 text-6xl">Hello world, this is Web Page to IngenioSoft</h1>
        </div>        
      </main>
    </div>
   )
}

export default Home;