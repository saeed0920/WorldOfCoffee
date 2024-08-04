import { Translation } from "react-i18next";

function navButton(text: string) {
  return (
    <Translation>
      {(t) => (
        <button
          style={{ backgroundColor: "#F9C06A" }}
          className="whitespace-nowrap hover:bg-yellow-700
            shadow-yellow-800 shadow-md  
            hover:shadow-yellow-600 transition-shadow text-center rounded-3xl px-4 py-2 font-semibold text-md playfair ph:px-2 ph:py-1 ph:text-sm text-black "
        >
          {t(text)}
        </button>
      )}
    </Translation>
  );
}

export default navButton;
