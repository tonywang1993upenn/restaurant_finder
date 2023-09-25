"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import SearchCity from "./SearchCity";

const SearchButton = ({ otherClasses }: { otherClasses: string }) => (
  <button type='submit' className={`-ml-3 z-10 ${otherClasses}`}>
    <Image
      src={"/magnifying-glass.svg"}
      alt={"magnifying glass"}
      width={40}
      height={40}
      className='object-contain'
    />
  </button>
);

const SearchBar = () => {
  const [city, setCity] = useState("");


  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (city.trim() === "") {
      return alert("Please provide some input");
    }

    updateSearchParams(city.toLowerCase());
  };

  const updateSearchParams = ( city: string) => {
    // Create a new URLSearchParams object using the current URL search parameters
    const searchParams = new URLSearchParams(window.location.search);


    // Update or delete the 'city' search parameter based on the 'city' value
    if (city) {
      searchParams.set("city", city);
    } else {
       searchParams.delete("city");
    }

    // Generate the new pathname with the updated search parameters
    const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

    router.push(newPathname);
  };

  return (
    <form className='' onSubmit={handleSearch}>
      <div className='searchbar__item'>
        <SearchCity
          city={city}
          setCity={setCity}
        />
        <SearchButton otherClasses='sm:hidden' />
      </div>
    </form>
  );
};

export default SearchBar;
