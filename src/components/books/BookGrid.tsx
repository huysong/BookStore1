import React from "react";
import BookCard from "./BookCard";

interface Book {
  id: string;
  title: string;
  author: string;
  price: number;
  coverImage: string;
}

interface BookGridProps {
  books?: Book[];
  onAddToCart?: (bookId: string) => void;
}

const defaultBooks: Book[] = [
  {
    id: "1",
    title: "The Great Adventure",
    author: "John Smith",
    price: 29.99,
    coverImage: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e",
  },
  {
    id: "2",
    title: "Mystery at Midnight",
    author: "Sarah Johnson",
    price: 24.99,
    coverImage: "https://images.unsplash.com/photo-1544947950-fa07a98d237f",
  },
  {
    id: "3",
    title: "The Art of Code",
    author: "David Wilson",
    price: 34.99,
    coverImage: "https://images.unsplash.com/photo-1532012197267-da84d127e765",
  },
  {
    id: "4",
    title: "Future Dreams",
    author: "Emily Chen",
    price: 27.99,
    coverImage: "https://images.unsplash.com/photo-1589998059171-988d887df646",
  },
];

const BookGrid = ({
  books = defaultBooks,
  onAddToCart = (bookId: string) =>
    console.log(`Add to cart clicked for book ${bookId}`),
}: BookGridProps) => {
  return (
    <div className="w-full min-h-[842px] bg-gray-50 p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
        {books.map((book) => (
          <BookCard
            key={book.id}
            title={book.title}
            author={book.author}
            price={book.price}
            coverImage={book.coverImage}
            onAddToCart={() => onAddToCart(book.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default BookGrid;
