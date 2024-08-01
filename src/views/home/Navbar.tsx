import navbutton from "../../Components/Button/navbutton";

function Navbar() {
  return(
    <nav className="flex justify-between  my-10 ">
    <div className="w-1/3">
      <img src="/public/logo/logo.svg"  alt="" />

    </div>
    <div className="lg:flex text-center justify-center hidden w-1/3 h-full">
      <ul className="flex gap-4 flex-nowrap">
        <li className="text-white  flex justify-center items-center cursor-pointer playfair font-semibold">
        
          <a>Home</a>
        </li>
        <li className="text-white flex justify-center items-center cursor-pointer playfair font-semibold">
          <a>Menu</a>
        </li>
        <li className="text-white flex whitespace-nowrap	 justify-center items-center cursor-pointer playfair font-semibold">
          <a>About Us</a>
        </li>
        <li className="text-white flex whitespace-nowrap	 justify-center items-center cursor-pointer playfair font-semibold">
          <a>Contact Us</a>
        </li>
      </ul>
    </div>
    
    <div className="w-1/3  flex gap-3 justify-end h-full">
      <button className="w-1/3 p-2 lg:w-1/6 text-md  playfair  bg-transparent whitespace-nowrap	 signin_button text-white duration-300 rounded-md	 ">Sign in </button>
      {navbutton('SignUp')}




    </div>
  </nav>
  )
}

export default Navbar;
