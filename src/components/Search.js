import React, { useState } from "react";

const Search = (props) => {
  const {city} = props;
  const [input, setInput] = useState("");
  const handleChange = (e)=>{
    setInput(e.target.value);
  }

  const handleClick = ()=>{
    city(input);
  }
  return (
    <div className="bg-slate-200 border border-sky-800 backdrop-blur-2xl shadow-lg rounded-lg px-2 py-2 md:w-[40rem] ">
      <div className="searchbox  justify-between flex items-center space-x-4">
        <input
          type="text"
          className="bg-transparent w-[100%] px-4 py-2 text-black outline-none font-semibold uppercase placeholder:text-gray-700 "
          placeholder="Enter your City"
          value={input}
          onChange={handleChange}
        />
        <i className="fa-solid fa-magnifying-glass text-2xl text-cyan-800 cursor-pointer " onClick={handleClick}></i>
      </div>
    </div>
  );
};

export default Search;
