import { defineField, defineType } from "sanity";

export const ratings = defineType({
    name: 'rating',
    title: 'Rating',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Rating Criteria Name',
            type: 'string'
        }),
        defineField({
            name: 'ratings',
            title: 'Ratings given',
            type: 'number'
        })
    ]
})