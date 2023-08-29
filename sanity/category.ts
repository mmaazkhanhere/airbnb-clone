import { defineField, defineType } from "sanity";

export const category = defineType({
    name: 'category',
    title: 'Sub Category',
    type: 'document',
    fields: [
        defineField({
            name: 'sub_category',
            title: 'Category',
            type: 'string'
        }),
        defineField({
            name: 'image',
            title: 'Category Image',
            type: 'image'
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            validation: (rule) => rule.required(),
            options: {
                source: 'sub_category',
                maxLength: 200
            }
        }),
    ]
})