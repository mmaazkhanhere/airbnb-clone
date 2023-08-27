import { defineField, defineType } from "sanity";

export const category = defineType({
    name: 'category',
    title: 'Sub Category',
    type: 'document',
    fields: [
        defineField({
            name: 'category',
            title: 'Category',
            type: 'string'
        }),
        defineField({
            name: 'image',
            title: 'Category Image',
            type: 'image'
        })
    ]
})