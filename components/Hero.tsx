"use client";
import Image from "next/image";
import { CustomButton } from "@components";

const Hero = () => {
  const handleScroll = () => {
    const nextSection = document.getElementById("discover");

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex items-center justify-between">
      <div className="realtive flex-1 padding-x">
        {/* left side section */}
        {/* add animation text */}
        <h1 className="animate-text bg-gradient-to-r from-orange-400  via-red-500 selection:to-red-600
         food__title">
          Discover Your Next Dining Adventure!
        </h1>

        <p className="food__subtitle">
          Hungry for something delicious?
          Explore a world of culinary delights with our restaurant finder.
          Whether you're craving pizza, sushi, or something unique,
          we've got you covered. Start your culinary journey now.
        </p>

        {/* this button will take the user to id discover section */}
        <CustomButton
          title="Find Your Favourite Restaurant"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        />  </div>

         <div className="food__image-container">
          <div className="food__image">
            <Image src="/food.jpg" alt="food" fill className="object-contain" />
          </div>     
      </div>
    </div>
  );
};

export default Hero;
