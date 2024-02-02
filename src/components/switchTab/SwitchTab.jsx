import React, { useState } from "react";

const SwitchTab = ({ data = [], onTabChange }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [left, setLeft] = useState(0);

//   console.log(data);

  const activeTab = (tab, index) => {
    setLeft(index * 96);
    setSelectedTab(index);
    onTabChange(tab, index);
  };

  return (
    <div className="h-9 bg-white py-0.5 px-1 rounded-3xl">
      <div className="flex items-center h-8 relative">
        {data.map((tab, index) => {
           return <span key={index}
            className={`h-full flex items-center justify-center w-24 text-black text-sm font-medium relative z-10 transition-colors cursor-pointer ease-in duration-300 ${selectedTab === index ? "text-white" : "" }`} 
            onClick={() => {activeTab(tab, index)}}>
            {tab}
          </span>
        })}
        <span className="h-7 w-24 bg-gradient-to-r from-cyan-500 to-blue-500 absolute transition-[left]  rounded-2xl left-0" style={{ left }}></span>
      </div>
    </div>
  );
};

export default SwitchTab;
