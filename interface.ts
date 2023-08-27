import { Image } from "sanity"

export interface RoomCardProps {
    name: string,
    city: string,
    country: string,
    sub_direction: string,
    thumbnail: Image,
    date: string,
    price: number,
    ratingsRecieved: number,
    slug: string,
    dateGap: number,
    images: Image[]
}

export interface HostProps {
    name: string;
    review: number;
    ratings: number;
    background: string;
    languages: string[];
    profile: Image,
    response_rate: number;
    reponse_time: string;
    super_host: boolean;
}

export interface RatingProps {
    _key: string;
    category: {
        _ref: string
    };
    value: number;
}

export interface AmenityProps {
    name: string,
    image: Image
}

export interface RoomProps {
    name: string,
    city: string,
    state: string,
    country: string,
    latitude: number,
    longtitude: number,
    ratingsReceived: number,
    ratings: RatingProps[],
    amenities: AmenityProps[],
    reviews: number,
    dateBooked: Date,
    information: string,
    thumbnail: Image,
    images: Image[],
    superhost: boolean,
    subcategory?: string,
    original_price: number,
    price: number,
    discount: number,
    sub_direction?: string,
    bedrooms: number,
    host: HostProps
}

