import "../../../public/logo/logo.svg";
const Footer = () => {
  //i khow this is bullshit i khow  but how many i tried it didnt append my image to the footer with css
  const footerStyle = {
    backgroundImage: "url('../../../public/footer/fotter_image.svg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
    height: "100%",
  };

  return (
    <>
      <footer className="w-full h-96 bg-coffee-brown">
        <div className="h-full w-full flex px-10 py-6" style={footerStyle}>
          <div className="flex gap-5">
            <div className="flex flex-col w-2/5 justify-center text-white gap-5 ">
              <img src="../../../public/logo/logo.svg" className="w-1/2" alt="" />
              <div className="text-container">
                <p className="text-clamp">
                  We started this project as a group of passionate developers, driven by a shared love for technology and a desire to constantly
                  challenge ourselves. As friends and collaborators, we are committed to improving our skills through innovative problem-solving and
                  creating solutions that reflect our dedication to growth and learning.
                </p>
              </div>
            </div>
            <div className="flex flex-1 w-2/5">
            
            
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
