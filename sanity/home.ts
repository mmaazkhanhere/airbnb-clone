import { defineField, defineType } from "sanity";
import { category } from "./category";

export const home = defineType({
    name: 'homes',
    title: 'Homes',
    type: 'document',
    fields: [
        defineField({
            name: 'subcat',
            title: 'Sub Category',
            type: 'array',
            of: [{ type: 'category' }]
        }),
        defineField({
            name: 'name',
            title: 'Home name',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            validation: (rule) => rule.required(),
            options: {
                source: 'name',
                maxLength: 200
            }
        }),
        defineField({
            name: 'city',
            title: 'City',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'state',
            title: 'State',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'country',
            title: 'Country',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'subtitle',
            title: 'Subtitle',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'superhost',
            title: 'A Super Host?',
            type: 'boolean',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'thumbnail',
            title: 'Thumbnail Image',
            type: 'image',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'images',
            title: 'Additional Images',
            type: 'array',
            of: [{ type: 'image' }],
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'ratings_recieved',
            title: 'Rating Recieved',
            type: 'number',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'reviews',
            title: 'Reviews',
            type: 'number',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'information',
            title: 'Detail Information about the House',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'bedrooms',
            title: 'Number of Bedrooms',
            type: 'number',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'bedroomImages',
            title: 'Bedroom Images',
            type: 'array',
            of: [{ type: 'image' }],
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'amenities',
            title: 'Amenities Offered',
            type: 'array',
            of: [{ type: 'amenities' }],
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'original_price',
            title: 'Original Price',
            type: 'number',
        }),
        defineField({
            name: 'price',
            title: 'Price',
            type: 'number',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'airbnb_fee',
            title: 'Airbnb Fee',
            type: 'number'
        }),
        defineField({
            name: 'clean_fee',
            title: 'Clean Fee',
            type: 'number'
        }),
        defineField({
            name: 'discount',
            title: 'Discount Offered',
            type: 'number',
        }),
        defineField({
            name: 'dateGap',
            title: 'Last Date Available',
            type: 'number'
        }),
        defineField({
            name: 'dateBooked',
            title: 'Dates Booked',
            type: "array",
            of: [{ type: "date" }]
        }),
        defineField({
            name: 'ratings',
            title: 'Ratings',
            type: 'array',
            of: [{ type: 'rating' }],
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'longtitude',
            title: 'Longtitude',
            type: 'number',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'latitude',
            title: 'Latitude',
            type: 'number',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'sub_direction',
            title: 'Direction',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'host',
            title: 'Host',
            type: 'host',
            validation: (rule) => rule.required(),
        }),
    ]
})