import { BookDataProps } from "@/interface";
import { client } from "@/sanity/lib/client";

export const getBookData = async (slug: string): Promise<BookDataProps> => {
    try {
        const query = `*[_type=="homes" && slug.current=="${slug}"]{
            name,
            thumbnail,
            ratings_recieved,
            review,
            price,
            airbnb_fee,
            clean_fee,
            "slug": slug.current,
        }`;

        const data = await client.fetch(query);
        return data[0];

    } catch (error) {
        console.error("Error facing while fetching data in rooms directory: ", error)
        throw new Error("Error in GET_BOOK_DETAILS_TS page");
    }
}