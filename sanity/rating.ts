import { defineField, defineType } from "sanity";

export const rating = defineType({
    name: "rating",
    title: "Rating",
    type: "document",
    fields: [
        defineField({
            name: 'category',
            title: "Rating Criteria",
            type: "string"
        }),
        defineField({
            name: 'value',
            title: "Rating Value",
            type: "number"
        })
    ]
})