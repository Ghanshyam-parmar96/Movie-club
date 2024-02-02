import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { with_release_type } from "../../../../store/exploreSlice";

const ReleaseType = ({ allRelease }) => {
  const [type, setType] = useState([1, 2, 3, 4, 5, 6]);

  const dispatch = useDispatch();

  const handleChecked = (e) => {
    if (e.target.checked) {
      setType((prev) => [...prev, Number(e.target.value)]);
    } else {
      setType((prev) => prev.filter((item) => item !== Number(e.target.value)));
    }
  };

  useEffect(() => {
    if (!allRelease) {
      const typeData = type.join("|");
      dispatch(with_release_type(typeData));
    } else {
      dispatch(with_release_type(""));
    }
  }, [handleChecked, allRelease]);

  return (
    <div>
      <div>
        <input
          type="checkbox"
          id="Theatrical_limited"
          name="Theatrical_limited"
          value={2}
          onChange={handleChecked}
          defaultChecked
        />
        <label
          htmlFor="Theatrical_limited"
          className="ml-2 text-sm font-medium select-none"
        >
          Theatrical (limited)
        </label>
      </div>
      <div>
        <input
          type="checkbox"
          id="Theatrical"
          name="Theatrical"
          value={3}
          onChange={handleChecked}
          defaultChecked
        />
        <label
          htmlFor="Theatrical"
          className="ml-2 text-sm font-medium select-none"
        >
          Theatrical
        </label>
      </div>
      <div>
        <input
          type="checkbox"
          id="Premiere"
          name="Premiere"
          value={1}
          onChange={handleChecked}
          defaultChecked
        />
        <label
          htmlFor="Premiere"
          className="ml-2 text-sm font-medium select-none"
        >
          Premiere
        </label>
      </div>
      <div>
        <input
          type="checkbox"
          id="Digital"
          value={4}
          name="Digital"
          onChange={handleChecked}
          defaultChecked
        />
        <label
          htmlFor="Digital"
          className="ml-2 text-sm font-medium select-none"
        >
          Digital
        </label>
      </div>
      <div>
        <input
          type="checkbox"
          id="Physical"
          name="Physical"
          value={5}
          onChange={handleChecked}
          defaultChecked
        />
        <label
          htmlFor="Physical"
          className="ml-2 text-sm font-medium select-none"
        >
          Physical
        </label>
      </div>
      <div>
        <input
          type="checkbox"
          id="TV"
          name="TV"
          value={6}
          onChange={handleChecked}
          defaultChecked
        />
        <label htmlFor="TV" className="ml-2 text-sm font-medium select-none">
          TV
        </label>
      </div>
    </div>
  );
};

export default ReleaseType;
