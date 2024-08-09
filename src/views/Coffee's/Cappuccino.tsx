import Cappu from "@public/Images/Cappu.jpg";
//This Compo it might be updated So... tell me then change it -_-
function Cappuccino() {
  return (
    <div className="flex flex-col border-2 border-coffee-brown pb-14" style={{ backgroundColor: "wheat" }}>
      <p className="text-center playfair">Discribe Coffee</p>
      <img src={Cappu} />
      <p className="text-center text-coffee-brown playfair text-2xl py-3 bold">Cappuccino</p>
      <p className="text-center playfair text-l"> Discrabe the coffee </p>
    </div>
  );
}

export default Cappuccino;
