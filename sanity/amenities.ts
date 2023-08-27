import { defineField, defineType } from "sanity";

export const amenities = defineType({
    name: 'amenities',
    title: 'Amenities',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string'
        }),
        defineField({
            name: 'image',
            title: 'Amenity Icon',
            type: 'image'
        })
    ]
})