import client from "./client";

export const getBooks = () => client.get("/books");
export const getBook = (id) => client.get(`/books/${id}`);
