"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import StarRatingIcon from "./StarRatingIcon";
import CustomButton from "./CustomButton";
import { RestaurantInfoProps } from "@types";

import RestaurantDetails from "./RestaurantDetails";
import { IoRestaurantSharp } from "react-icons/io5"
import { BsBoxArrowInUpRight } from "react-icons/bs"



interface RestaurantCardProps {
  restaurant: RestaurantInfoProps;
 
}

const RestaurantCard = ({ restaurant}: RestaurantCardProps) => {


  //this is for promopted window default is false
  const [isOpen, setIsOpen] = useState(false);

  //extract the major property
  const {
    currentOpenStatusText,
    squareImgUrl,
    name,
    averageRating,
    userReviewCount,
    priceTag,
    currentOpenStatusCategory,
    establishmentTypeAndCuisineTags,
    hasMenu,
    menuUrl,
    heroImgUrl,

  } = restaurant;


  return (
    // flex vertical 
  <button  onClick={() => setIsOpen(true)}>
    <div className="restaurant-card group">
      <div className='relative w-full h-40 object-contain rounded-2xl'>
        <Image src={squareImgUrl} alt='restaurant photo' fill priority className='rounded-xl object-contain ' />


      </div>

      <div className=" flex flex-col justify-start px-2">
        {/* first row restaurant Name */}
        <div className="font-bold text-md truncate ">
          {name}
        </div>
        {/* second row rating-startIcon-cuisine type */}
        <div className="flex flex-row items-center text-xs gap-0.5 truncate" >

          {averageRating}
          <StarRatingIcon rating={averageRating} />
          ({userReviewCount} Reviews)
        </div>

        <div className="flex flex-row  font-semibold gap-1.5 text-sm ">
          <span>{priceTag}</span>
          <span> · </span>
          {establishmentTypeAndCuisineTags[0]}
        </div>

      {/* red text for closed restaurant */}
      <div className={`flex flex-row items-center gap-2 text-${currentOpenStatusText == "CLOSED"}?red:black`}>
        {currentOpenStatusText}
      </div>
      </div>

      <RestaurantDetails isOpen={isOpen} closeModal={() => setIsOpen(false)} restaurant={restaurant} />
    </div>
</button>

  );
};

export default RestaurantCard;
