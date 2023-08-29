import { Image } from "sanity"

export interface RoomCardProps {
    name: string,
    city: string,
    country: string,
    subtitle: string,
    thumbnail: Image,
    date: string,
    price: number,
    ratings_recieved: number,
    slug: string,
    dateGap: number,
    images: Image[]
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
    ratings_recieved: number,
    ratings: RatingCriteriaProps[],
    amenities: AmenityProps[],
    reviews: number,
    dateBooked: Date,
    information: string,
    thumbnail: Image,
    images: Image[],
    superhost: boolean,
    subcategory?: string,
    original_price: number,
    airbnb_fee?: number,
    clean_fee?: number,
    price: number,
    discount: number,
    sub_direction: string,
    bedrooms: number,
    bedroomImages: Image[],
    host: HostProps
}

export interface RoomInformationProps {
    host: HostProps,
    bedroom: number,
    information: string,
    bedroomImages: Image[]
    amenities: AmenityProps[]
}

export interface ReserveBoxProps {
    original_price: number,
    price: number,
    airbnb_fee?: number,
    clean_fee?: number,
    ratings_recieved: number,
    review: number,
    discount?: number
}

export interface HeaderProps {
    original_price: number,
    price: number,
    ratings_recieved: number,
    review: number,
}

export interface MapProps {
    longtitude: number,
    latitude: number,
    city: string,
    state: string,
    country: string,
    sub_direction: string
}

export interface RatingCriteriaProps {
    category: string,
    value: number
}

export interface HostProps {
    name: string,
    review: number,
    ratings: number,
    background: string,
    languages: string[],
    profile: Image,
    response_rate: number,
    response_time: number,
    super_host: boolean,
    co_host?: CoHostProps[]
}

export interface CoHostProps {
    name: string,
    image: Image
}
