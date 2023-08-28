import { defineField, defineType } from "sanity";

export const cohost = defineType({
    name: 'cohost',
    title: 'Co Host',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Co Host Name',
            type: 'string'
        }),
        defineField({
            name: 'image',
            title: 'Cohost Image',
            type: 'image'
        })
    ]
})