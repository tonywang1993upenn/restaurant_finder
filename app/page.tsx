
// Use for API Fetching
// if we use fech the page will rendering the component at the client side
//if we use constant, this can be rendering from the server side
//"use client"
import { fetchCity, fetchRestaurants } from "@utils";
import { HomeProps, RestaurantInfoProps } from "@types";
import { useState } from "react";
//above imports will need when we fetch 

import { RestaurantCard, SearchBar,Hero } from "@components";
import Myfilter from "@components/Myfilter";
import { APIdata, cuisines, deliveryOptions, priceRanges, ratings, sortByOptions } from "@constants";


export default async function Home() {


  // Methods 2 use constants the Trip Advisor free APi is not stable 
  const restaurantData = APIdata;

  return (
    <main className='overflow-hidden'>
      <Hero />

      {/* information before search */}
      <div className='mt-12 padding-x padding-y max-width' id='discover'>
        <div className='home__text-container'>
          <h1 className='text-4xl font-extrabold'>Top Food in Your Area</h1>
          <p>Explore Your Favorite Restaurant</p>
        </div>
        {/* end information before search */}


        {/*searching section these can implement by map */}
        <div className='flex flex-between flex-wrap  justify-start items-center w-full h-fit'>
          <SearchBar />
          <Myfilter title="cuisine" options={cuisines} />
          <Myfilter title='rating' options={ratings} />
          <Myfilter title='Price Ranges' options={priceRanges} />
          <Myfilter title='Deliver Option' options={deliveryOptions} />
          <Myfilter title='Sort By' options={sortByOptions} />
        </div>

        <section className="mx-15">
          <div className='home__restaurant-wrapper '>
            {restaurantData.data.data?.map((restaurant,idx) => (
           
              <RestaurantCard restaurant={restaurant} />
                 
            ))}
          </div>

        </section>
     
      </div >
    </main >
  );
}
