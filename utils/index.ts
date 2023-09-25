import { FilterProps, RestaurantProps} from "@types";
import exp from "constants";


export const updateSearchParams = (type: string, value: string) => {
  // Get the current URL search params
  const searchParams = new URLSearchParams(window.location.search);

  // Set the specified search parameter to the given value
  searchParams.set(type, value);

  // Set the specified search parameter to the given value
  const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

  return newPathname;
};

export const deleteSearchParams = (type: string) => {
  // Set the specified search parameter to the given value
  const newSearchParams = new URLSearchParams(window.location.search);

  // Delete the specified search parameter
  newSearchParams.delete(type.toLocaleLowerCase());

  // Construct the updated URL pathname with the deleted search parameter
  const newPathname = `${window.location.pathname}?${newSearchParams.toString()}`;

  return newPathname;
};


export async function fetchCity(filter :FilterProps) {
  const{city} = filter;

  // Set the required headers for the API request
  const headers: HeadersInit = {
    "X-RapidAPI-Key": process.env.TRIPADVISOR_RAPID_API_KEY || "",
    "X-RapidAPI-Host": "tripadvisor16.p.rapidapi.com",
  };

  // Set the required headers for the API request
  const response = await fetch(
    `https://tripadvisor16.p.rapidapi.com/api/v1/restaurant/searchLocation?query=${city}`,
    {
      headers: headers,
    }
  );

  // Parse the response as JSON
  const result = await response.json();
  console.log("city is ", city, "result is ", result.data)
  return result.data;
}



export async function fetchRestaurants(locationId:number) {
  
  console.log("locationid is ",locationId)
  // Set the required headers for the API request
  const headers: HeadersInit = {
    "X-RapidAPI-Key": process.env.TRIPADVISOR_RAPID_API_KEY || "",
    "X-RapidAPI-Host": "tripadvisor16.p.rapidapi.com",
  };

  // Set the required headers for the API request
  const response = await fetch(
    `https://tripadvisor16.p.rapidapi.com/api/v1/restaurant/searchRestaurants?locationId=60878`,
    {
      headers: headers,
    }
  );

  // Parse the response as JSON
  const result = await response.json();
  console.log("result is ", result)
  return result;
}

