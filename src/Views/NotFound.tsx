import { useTranslation } from "react-i18next";
function Notfound() {
  const {t}=useTranslation()
  return (
    <div className="w-screen flex h-screen bg-late-white justify-center items-center">
      <div className="w-4/5 sm:w-5/6 sm:h-4/5 h-2/3 bg-coffee-brown rounded-xl flex sm:flex-col p-10">
        <div className="flex-1 justify-evenly  flex text-white flex-col gap-10">
          <div className="flex gap-16 sm:gap-3 flex-col">
            <h1 className="text-9xl playfair sm:text-5xl">{t('404_header')}</h1>
            <span className="playfair text-3xl">{t('404_disc')}</span>
          </div>
          <button className="motion-reduce:transition-none motion-reduce:hover:transform-none w-1/2 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 text-lg font-semibold rounded-lg bg-late-white text-white h-12 ">
          {t('404_button_return')}
          </button>
        </div>
        <img className="flex-1 sm:w-full w-1/2 object-contain flex" src="/public/404/gif.gif" alt="" />
      </div>
    </div>
  );
};
export default Notfound;
