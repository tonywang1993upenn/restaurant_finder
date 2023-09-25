
import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import { Dialog, Transition } from "@headlessui/react";
import { RestaurantInfoProps } from "@types";
import { IoRestaurantSharp } from "react-icons/io5";
import { BsBoxArrowInUpRight } from "react-icons/bs";

import { FaCity, FaMoneyBill } from "react-icons/fa"//city and price tag logo
import { FaBowlRice,
 FaRocketchat,
 FaCarSide,
 FaCalendarDays,
 FaBowlFood} from "react-icons/fa6"//Cusine logo, rating, delivery ,reservation ,special offeer

interface RestaurantDetailsProps {
    isOpen: boolean;
    closeModal: () => void;
    restaurant: RestaurantInfoProps;
}

const RestaurantDetails = ({ isOpen, closeModal, restaurant }: RestaurantDetailsProps) => (
    <>
        <Transition appear show={isOpen}
            // when its is open it looks like a Fragment
            as={Fragment}>
            <Dialog as='div' className='relative z-10' onClose={closeModal}>
                <Transition.Child
                    as={Fragment}
                    enter='ease-out duration-300'
                    enterFrom='opacity-0'
                    enterTo='opacity-100'
                    leave='ease-in duration-200'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'
                >
                    <div className='fixed inset-0 bg-black bg-opacity-25' />
                </Transition.Child>

                <div className='fixed inset-0 overflow-y-auto'>
                    <div className='flex min-h-full items-center justify-center p-4 text-center'>
                        <Transition.Child
                            as={Fragment}
                            enter='ease-out duration-300'
                            // opened window scale from 95 to 100
                            enterFrom='opacity-0 scale-95'
                            enterTo='opacity-100 scale-100'
                            leave='ease-out duration-300'
                            leaveFrom='opacity-100 scale-100'
                            leaveTo='opacity-0 scale-95'
                        >

                            {/* this is the promoted window */}
                            <Dialog.Panel className='relative w-full max-w-lg max-h-[90vh] overflow-y-auto transform rounded-2xl bg-white p-6 text-left shadow-xl transition-all flex flex-col gap-5'>
                                {/* add the closed buttom to the top right  */}
                                <button
                                    type='button'
                                    className='absolute top-2 right-2 z-10 w-fit p-2 bg-primary-blue-100 rounded-full'
                                    onClick={closeModal}
                                >
                                    <Image
                                        src='/close.svg'
                                        alt='close'
                                        width={20}
                                        height={20}
                                        className='object-contain'
                                    />
                                </button>

                                {/* Restaurant destails content */}


                                <div className='flex-1 flex flex-col capitalize gap-2'>
                                    <div className="font-bold text-3xl">{restaurant.name}</div>

                                    <div className="restaurant-details__item">
                                        <FaCity /><span className="font-semibold">City: </span>
                                        {restaurant.parentGeoName} </div>
                                    <div className="restaurant-details__item">
                                        <FaRocketchat/><span className="font-semibold">Ratings: </span>
                                        {restaurant.averageRating}</div>

                                    <div className="restaurant-details__item">
                                        <FaMoneyBill /> <span className="font-semibold">Price Tag: </span>
                                        {restaurant.priceTag}</div>


                                    <div className="restaurant-details__item flex-wrap">
                                        <FaBowlRice /> <p className="white-space:nowrap font-semibold">Cuisines:</p>
                                        {restaurant.establishmentTypeAndCuisineTags.map((cusintionTag) => (
                                            <p key={cusintionTag} className="px-1"> {cusintionTag}</p>
                                        ))}</div>
                                        
                                    {restaurant.hasMenu ?? <div><Link className="restaurant-details__item font-bold " href={`${restaurant.menuUrl}`}>
                                        <IoRestaurantSharp />
                                        Menu<BsBoxArrowInUpRight /> </Link> </div>}

                                    <div className="restaurant-details__item">
                                        <FaCarSide/> <span className="font-semibold">Delivery: </span>
                                        {restaurant.offers.hasDelivery === true ? "Yes" : "Not offer"}</div>

                                    <div className="restaurant-details__item">
                                        <FaCalendarDays/><span className="font-semibold">Reservation: </span>
                                        {restaurant.offers.hasReservation === true ? "Yes" : "Not offer"}</div>

                                    <div className="flex flex-row items-center gap-1">
                                        <FaBowlFood/><span className="font-semibold">Special Offer: </span>
                                        {restaurant.offers.restaurantSpecialOffer ?? "NA"}</div>


                                    
                                        <div className='relative w-full h-40 bg-pattern bg-cover bg-center rounded-lg'>
                                            <Image src={restaurant.heroImgUrl} alt='restaurant photo' fill priority className='object-contain' />
                                        </div>

                                   

                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    </>
);

export default RestaurantDetails;
