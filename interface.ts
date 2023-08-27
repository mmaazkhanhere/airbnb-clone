import { Image } from "sanity"

export interface RoomCardProps {
    name: string,
    city: string,
    country: string,
    subDirection: string,
    thumbnail: Image,
    date: string,
    price: number,
    ratingsRecieved: number,
    slug: string,
    dateGap: number,
    images: Image[]
}