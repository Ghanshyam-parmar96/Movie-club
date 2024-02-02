import React, { useCallback, useEffect, useRef } from "react";
import PropTypes from "prop-types";

const DoubleRangeSlider = ({   minVal, setMinVal, maxVal, setMaxVal, min, max, step = 10, width = 200 }) => {
  const minValRef = useRef(null);
  const maxValRef = useRef(null);
  const range = useRef(null);

  // Convert to percentage
  const getPercent = useCallback(
    (value) => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
  );

  // Set width of the range to decrease from the left side
  useEffect(() => {
    if (maxValRef.current) {
      const minPercent = getPercent(minVal);
      const maxPercent = getPercent(+maxValRef.current.value); // Preceding with '+' converts the value from type string to type number

      if (range.current) {
        range.current.style.left = `${minPercent}%`;
        range.current.style.width = `${maxPercent - minPercent}%`;
      }
    }
  }, [minVal, getPercent]);

  // Set width of the range to decrease from the right side
  useEffect(() => {
    if (minValRef.current) {
      const minPercent = getPercent(+minValRef.current.value);
      const maxPercent = getPercent(maxVal);

      if (range.current) {
        range.current.style.width = `${maxPercent - minPercent}%`;
      }
    }
  }, [maxVal, getPercent]);

  return (
    <div className="h-2 flex items-center justify-center">
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={minVal}
        ref={minValRef}
        onChange={(event) => {
          const value = Math.min(+event.target.value, maxVal - 1);
          setMinVal(value);
          event.target.value = value.toString();
        }}
        style={{width : width + "px"}}
        className={  minVal > max - 100 ? `pointer-events-none absolute h-0 outline-none z-30 thumb `  : `pointer-events-none absolute h-0 outline-none z-10 thumb`}
      />
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        style={{width : width + "px"}}
        value={maxVal}
        ref={maxValRef}
        onChange={(event) => {
          const value = Math.max(+event.target.value, minVal + 1);
          setMaxVal(value);
          event.target.value = value.toString();
        }}
        className={`pointer-events-none absolute h-0 outline-none z-20 thumb `}
      />

      <div style={{width : width + "px"}} className={`relative`}>
        <div className="absolute rounded h-1 bg-[#ced4da] w-full z-0" />
        <div ref={range} className="absolute rounded h-1 bg-[#3b82f6] z-0" />
        {/* <div className="absolute text-[#dee2e6] text-xs mt-5 left-2 ">{minVal}</div>
        <div className="absolute text-[#dee2e6] text-xs mt-5 -right-1">{maxVal}</div> */}
      </div>
    </div>
  );
};

DoubleRangeSlider.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
};

export default DoubleRangeSlider;

