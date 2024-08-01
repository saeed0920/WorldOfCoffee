import HomeIntro from "./HomeIntro";
import Navbar from "./Navbar";


function Home() {
  return (
    <div className="w-full  px-8  gap-4 h-1/2  header flex flex-col lg:px-20 ">
      <Navbar/>
      <HomeIntro/>
      
    </div>
  );
}

export default Home;
