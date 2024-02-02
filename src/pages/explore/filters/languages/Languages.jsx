import React, { useState } from "react";
import LanguageList from "./LaguageList";

const Languages = () => {
  const [languagePop, setLanguagePop] = useState(false);
  const selectedLanguage = localStorage.getItem("language");


  return (
    <div className="relative text-black mt-2">
      <h3 className="pt-4 ml-3 font-bold text-base text-[#ab0000]">Language</h3>
      <div className="bg-gray-100 rounded mt-2 relative mx-4">
        <div
          className="flex items-center justify-between  py-2 px-3 cursor-pointer"
          onClick={() => setLanguagePop(!languagePop)}
        >
          <span
            draggable="false"
            data-offset-index="1"
            className="select-none font-medium text-sm"
          >
            {selectedLanguage || "None Selected"}
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 320 512"
          >
            <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" />
          </svg>
        </div>
        <LanguageList setPop={setLanguagePop} pop={languagePop} />
      </div>
    </div>
  );
};

export default Languages;
