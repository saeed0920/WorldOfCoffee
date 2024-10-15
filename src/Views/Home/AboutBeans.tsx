import AboutCoffee from "./AboutCoffee";

const AboutBeans = () => {
    return (
        <div className="p-4 flex flex-col gap-6">
            <div className="w-full text-center gap-5 playfair text-coffee-brown flex flex-col">
                <h2 className="tracking-wide font-bold text-4xl">Our Coffee Perfection Feedback</h2>
                <span>Here is just information about some types of our coffee beans</span>
            </div>

            <div style={{ height: '600px' }} className="w-full h-fit p-5 flex flex-col my-auto bg-Low_yellow border-Low_Yellow_border outline-1 outline outline-Low_Yellow_border">
                <span className="text-8xl text-coffee-brown playfair flex">“</span>
                <AboutCoffee />
            </div>
        </div>
    );
};

export default AboutBeans;
