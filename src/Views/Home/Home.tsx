import { Discover } from "./Discover";
import HomeIntro from "./HomeIntro";
import Navbar from "./Navbar";
import coffee_image from "@public/header/coffee_image.jpg";
import VersusCoffee from "./VersusCoffee";

function Home() {
  return (
    <div className="px-20 xl:px-14 lg:px-8 lg:gap-8 py-2 gap-12 header relative flex flex-col md:px-2">
      <img
        className="absolute top-0 left-0 w-full object-cover bg-cover -z-10  h-[50rem] lg:h-[45rem] brightness-75 md:brightness-50 ph:h-[38rem] object-top"
        src={coffee_image}
      />
      <Navbar />
      <HomeIntro />
      <Discover />
      <VersusCoffee />
    </div>
  );
}

export default Home;
