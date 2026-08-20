import type { Book } from "../types/book.js";

const books: Book[] = [
  {
    id: 1,
    title: "Clean Code",
    author: "Robert C. Martin",
  },
  {
    id: 2,
    title: "Design Patterns",
    author: "Erich Gamma",
  },
];

export function findAll(): Book[] {
  return books;
}
