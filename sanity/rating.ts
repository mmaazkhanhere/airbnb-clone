import { defineField, defineType } from "sanity";

export const rating = defineType({
    name: "rating",
    title: "Rating",
    type: "document",
    fields: [
        defineField({
            name: 'name',
            title: "Rating Criteria",
            type: "string"
        })
    ]
})