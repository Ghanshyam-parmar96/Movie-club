import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { certification } from "../../../../store/exploreSlice";
const certificationList = [
  { id: 1, name: "U", selected: false },
  { id: 2, name: "UA", selected: false },
  { id: 3, name: "A", selected: false },
];
const Certification = ({ mediaType }) => {
  const [list, setList] = useState(certificationList);

  const dispatch = useDispatch();

  const handleCertificate = (id) => {
    const selected = list.map((item) => {
      if (item.id === id) {
        if (item.selected) {
          return { ...item, selected: false };
        } else {
          return { ...item, selected: true };
        }
      } else {
        return item;
      }
    });
    setList(selected);
  };

  useEffect(() => {
    const data = list
      .filter((item) => item.selected)
      .map((item) => item.name)
      .join("|");
    dispatch(certification(data));
  }, [list]);

  return (
    <div className="relative mt-2">
      <h3 className="pt-4 ml-3 font-bold text-base text-[#ab0000]">
        Certification
      </h3>

      <div className="flex items-center gap-3 ml-7 mt-3">
        {list.map((item) => {
          return (
            <span
              key={item.id}
              onClick={() => handleCertificate(item.id)}
              className={`px-3 py-[2px] cursor-pointer rounded-xl border text-sm font-light ${
                item.selected
                  ? "border-blue-500 text-white bg-blue-500"
                  : "border-gray-500"
              }`}
            >
              {item.name}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default Certification;
