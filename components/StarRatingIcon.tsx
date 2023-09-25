
import React from 'react'
import { FaStar, FaStarHalfAlt } from 'react-icons/fa'

export interface StarsProps {
    rating: number;
}

function StarRatingIcon(rating: StarsProps) {

    //creat an empty array with 5 elements
    const starArray = [...Array(5)];

    return (
        <div className='flex flex-row items-center'>
            {starArray.map((star, idx) => (
                // render half start if 0<stars-idx<1
                rating.rating - idx < 1 && rating.rating - idx > 0
                    ? <FaStarHalfAlt size={15} color={"#ffc017"} /> : <FaStar size={15} color={idx + 1 <= rating.rating ?
                        "#ffc017" : "e4e5ef"} />

            ))}
        </div>
    )
}

export default StarRatingIcon