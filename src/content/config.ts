//configurar la coleccion de libros
//importar defineCollection
import { defineCollection, z } from "astro:content";
// z --> zod schema

const books = defineCollection({
    schema: z.object({
        title: z.string(),
        author: z.string(),
        img: z.string(),
        readtime: z.number(),
        description: z.string(),
        buy: z.object({
            spain: z.string().url(),
            usa: z.string().url(),
        }),
    })
})

//exportar constante collection con los libros
export const collections = { books }