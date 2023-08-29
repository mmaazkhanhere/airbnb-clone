import { RoomProps } from "@/interface";
import { client } from "@/sanity/lib/client";

export const getDetails = async (slug: string): Promise<RoomProps> => {
    try {
        const query = `*[_type=="homes" && slug.current=="${slug}"]{
            name,
            city,
            state,
            country,
            latitude,
            longtitude,
            ratings_recieved, 
            ratings,
            reviews,
            dateBooked,
            information,
            thumbnail,
            images,
            superhost,
            subcategory,
            original_price,
            price,
            airbnb_fee,
            clean_fee,
            discount,
            sub_direction,
            amenities,
            bedrooms,
            bedroomImages,
            host
        }`;

        const data = await client.fetch(query);
        return data[0];

    } catch (error) {
        console.error("Error facing while fetching data in rooms directory: ", error)
        throw new Error("Error in GET_DETAILS_TS page");
    }
}