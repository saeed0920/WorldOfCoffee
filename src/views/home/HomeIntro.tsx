import navbutton from "../../Components/Button/navbutton"

const HomeIntro=()=>{
    return (

        <div className=" flex flex-col gap-6  w-1/2 text-white playfair ">
            <h1 className="text-xl flex h-fit whitespace-nowrap	">We’ve got your morning covered with</h1>
            <h2  className="clicker text-9xl ">Coffee</h2>
            <article className=" text-xl playfair  flex h-1/4 w-4/5 overflow-y-hidden">It is best to start your day with a cup of coffee. Discover the best flavours coffee you will ever have. We provide the best for our customers.</article>
            <div className="mt-4">
        
            {navbutton('Order Now')}
            </div>
        </div>
        
    )
}
export default HomeIntro













