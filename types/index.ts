import { MouseEventHandler } from "react";



// This used for seaching city infors from tripadvisor
//need the locationid to search the restaurants
export interface FilterProps {
  city: string;
  rating?: string;
}






export interface HomeProps {
  searchParams: FilterProps;
  searchRestaurantParams: RestaurantProps;
}


export interface RestaurantCardProps {
  name: string;
  cuisine: string;
  priceTag: number;
  averageRate: string;
  currentOpenStatusCategory: string;
  currentOpenStatusText: string;
  heroImgUrl: string | null;
  menuUrl: string | null;

}

export interface CustomButtonProps {
  isDisabled?: boolean;
  btnType?: "button" | "submit";
  containerStyles?: string;
  textStyles?: string;
  title: string;
  rightIcon?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface OptionProps {
  title: string;
  value: string;
}

export interface CustomFilterProps {
  title: string;
  options: OptionProps[];
}

export interface ShowMoreProps {
  pageNumber: number;
  isNext: boolean;
}

export interface SearchCityProps {
  city: string;
  setCity: (city: string) => void;
}


export interface LocationAPIProps {
  status: boolean;
  message: string;
  timestamp: number;
  data: {
    documentId: string;
    locationId: number;
    localizedName: string;
    localizedAdditionalNames: string[];
    longOnlyHierarchy: string;
    streetAddress: {
      street1: string;
    };
    locationV2: {
      placeType: string;
    };
    names: {
      longOnlyHierarchyTypeaheadV2: string;
    };
    vacationRentalsRoute: {
      url: string;
    };
    placeType: string;
    latitude: number;
    longitude: number;
    isGeo: boolean;
    thumbnail: {
      photoSizeDynamic: {
        maxWidth: number;
        maxHeight: number;
        urlTemplate: string;
      };
    };
  }[];
}

//Search Restaurant API
export interface RestaurantProps {
  status: boolean;
  message: string;
  timestamp: number;
  data: {
    totalRecords: string;
    totalPages: number;
    data: RestaurantInfoProps[];
  };
}

export interface RestaurantInfoProps {

  restaurantsId: string;
  locationId: number;
  name: string;
  averageRating: number;
  userReviewCount: number;
  currentOpenStatusCategory: string;
  currentOpenStatusText: string;
  priceTag: string;
  hasMenu: boolean;
  menuUrl: string | null;
  isDifferentGeo: boolean;
  parentGeoName: string;
  distanceTo: null | number;
  awardInfo: {
    year: number | any;
    awardType: string | any;
  } | null;
  isLocalChefItem: boolean;
  isPremium: boolean;
  isStoryboardPublished: boolean;
  establishmentTypeAndCuisineTags: string[];
  offers: {
    hasDelivery: boolean | null;
    hasReservation: boolean | null;
    slot2Offer: null | any;
    restaurantSpecialOffer: null | any;
    slot1Offer: {
      providerId: string;
      provider: string;
      providerDisplayName: string;
      buttonText: string;
      offerURL: string;
      logoUrl: string;
      trackingEvent: string;
      canProvideTimeslots: boolean;
      canLockTimeslots: boolean;
      timeSlots: any[]; // Define a proper type for timeSlots if needed
    } | null;
  };
  heroImgUrl: string;
  heroImgRawHeight: number;
  heroImgRawWidth: number;
  squareImgUrl: string;
  squareImgRawLength: number;
  thumbnail: {
    photo: {
      photoSizeDynamic: {
        urlTemplate: string;
        maxHeight: number;
        maxWidth: number;
      };
      photoSizes: {
        width: number;
        height: number;
        url: string;
      }[];
    };
  };
  reviewSnippets: {
    reviewSnippetsList: {
      reviewText: string;
      reviewUrl: string;
    }[];
  };

}
