import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleSearchToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(`you seached :${searchTerm}`);
  }

  return (
    <div className="relative">
      {/* Search Icon Button */}
      <button onClick={handleSearchToggle} className="p-2">
        <CiSearch className="text-2xl font-bold" />
      </button>

      {/* Search Bar - Always in DOM but Hidden Initially */}
      <form
        onSubmit={handleSearch}
        className={`fixed top-0 left-0 w-full flex justify-between items-center 
                    bg-gray-600 transition-all duration-500 shadow-md 
                    overflow-hidden  
                    ${isOpen ? "max-h-20 opacity-100 scale-100 px-6 py-3" : "max-h-0 opacity-0 scale-90"}`}
      >
        <div>
          <Link to="/" className="text-green-600 text-2xl font-extralight">
            Ǝlite<span className="font-semibold">C</span>art
          </Link>
        </div>

        <div className="relative w-full max-w-3xl">
          <input
            type="text"
            placeholder="Search..."
            className="bg-gray-200 px-4 py-2 w-full rounded focus:outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onFocus={() => setIsOpen(true)}
            onBlur={() => setIsOpen(false)}
          />
          <button 
            className="absolute right-[-1px] py-3 px-3 bg-slate-400 rounded text-white font-semibold">
            <CiSearch />
          </button>

          <span
            onClick={handleSearchToggle} 
            className="absolute w-3 h-3 p-2 bg-red-400 text-white flex justify-center items-center rounded-full -right-4 top-0 cursor-pointer">X</span>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
