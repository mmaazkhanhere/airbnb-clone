import { defineField, defineType } from "sanity";

export const room = defineType({
    name: 'homes',
    title: 'Homes',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Home name',
            type: 'string',
            validation: (rule) => rule.required(),
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
            name: 'latitude',
            title: 'Latitude',
            type: 'number',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'longtitude',
            title: 'Longtitude',
            type: 'number',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'ratingsRecieved',
            title: 'Rating Recieved',
            type: 'number',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'ratings',
            title: 'Ratings',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        {
                            name: 'category',
                            title: 'Rating Category',
                            type: 'reference',
                            to: [{ type: 'rating' }],
                            validation: (rule) => rule.required(),
                        },
                        {
                            name: 'value',
                            title: 'Rating Value',
                            type: 'number',
                            validation: (rule) => rule.required(),
                        }
                    ],
                }
            ],
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'reviews',
            title: 'Reviews',
            type: 'number',
            validation: (rule) => rule.required(),
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
        })
        ,
        defineField({
            name: 'information',
            title: 'Detail Information about the House',
            type: 'string',
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
            name: 'superhost',
            title: 'A Super Host?',
            type: 'boolean',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'subcat',
            title: 'Sub Category',
            type: 'reference',
            to: [{ type: 'category' }]
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
            name: 'discount',
            title: 'Discount Offered',
            type: 'number',
        }),
        defineField({
            name: 'sub_direction',
            title: 'Direction',
            type: 'string',
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
            name: 'bedrooms',
            title: 'Number of Bedrooms',
            type: 'number',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'host',
            title: 'Host',
            type: 'reference',
            to: [{ type: 'host' }],
            validation: (rule) => rule.required(),
        }),
    ]
})