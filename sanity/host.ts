import { defineField, defineType } from "sanity";

export const host = defineType({
    name: 'host',
    title: 'Host Details',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Host Name',
            type: 'string'
        }),
        defineField({
            name: 'review',
            title: 'Review Recieved',
            type: 'number'
        }),
        defineField({
            name: 'ratings',
            title: 'Ratings recieved',
            type: 'number'
        }),
        defineField({
            name: 'background',
            title: 'Host Background Information',
            type: 'string'
        }),
        defineField({
            name: 'languages',
            title: 'Languages Host Know',
            type: 'array',
            of: [{ type: 'string' }]
        }),
        defineField({
            name: 'profile',
            title: 'Host Image',
            type: 'image'
        }),
        defineField({
            name: 'response_rate',
            title: 'Host Response Rate',
            type: 'number'
        }),
        defineField({
            name: 'co_host',
            title: 'Co Host',
            type: 'array',
            of: [{ type: 'cohost' }]
        }),
        defineField({
            name: 'reponse_time',
            title: 'Host Response Time',
            type: 'string'
        }),
        defineField({
            name: 'super_host',
            title: 'Super Host',
            type: 'boolean'
        }),
    ]
})