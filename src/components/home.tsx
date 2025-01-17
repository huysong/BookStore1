import React, { useState } from "react";
import Header from "./navigation/Header";
import CategoryTabs from "./categories/CategoryTabs";
import BookGrid from "./books/BookGrid";
import BookQuickViewModal from "./books/BookQuickViewModal";
import CartSidebar from "./cart/CartSidebar";

interface HomeProps {
  initialBooks?: Array<{
    id: string;
    title: string;
    author: string;
    price: number;
    coverImage: string;
    description: string;
    rating: number;
    pageCount: number;
    publishDate: string;
  }>;
}

const defaultBooks = [
  {
    id: "1",
    title: "The Great Adventure",
    author: "John Smith",
    price: 29.99,
    coverImage: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e",
    description:
      "An epic tale of discovery and wonder that takes readers on a journey through unknown lands.",
    rating: 4.5,
    pageCount: 342,
    publishDate: "2023-01-15",
  },
  {
    id: "2",
    title: "Mystery at Midnight",
    author: "Sarah Johnson",
    price: 24.99,
    coverImage: "https://images.unsplash.com/photo-1544947950-fa07a98d237f",
    description:
      "A thrilling mystery novel that will keep you guessing until the last page.",
    rating: 4.2,
    pageCount: 289,
    publishDate: "2023-03-20",
  },
  {
    id: "3",
    title: "The Art of Code",
    author: "David Wilson",
    price: 34.99,
    coverImage: "https://images.unsplash.com/photo-1532012197267-da84d127e765",
    description:
      "Learn the fundamentals of coding with this comprehensive guide.",
    rating: 4.8,
    pageCount: 456,
    publishDate: "2023-02-10",
  },
  {
    id: "4",
    title: "Future Dreams",
    author: "Emily Chen",
    price: 27.99,
    coverImage: "https://images.unsplash.com/photo-1589998059171-988d887df646",
    description: "A science fiction masterpiece about the future of humanity.",
    rating: 4.6,
    pageCount: 378,
    publishDate: "2023-04-05",
  },
];

const Home = ({ initialBooks = defaultBooks }: HomeProps) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState<
    (typeof defaultBooks)[0] | null
  >(null);
  const [cartItems, setCartItems] = useState<
    Array<{ id: string; quantity: number }>
  >([]);
  const [activeCategory, setActiveCategory] = useState("fiction");

  const handleAddToCart = (bookId: string) => {
    setCartItems((prev) => {
      const existingItem = prev.find((item) => item.id === bookId);
      if (existingItem) {
        return prev.map((item) =>
          item.id === bookId ? { ...item, quantity: item.quantity + 1 } : item,
        );
      }
      return [...prev, { id: bookId, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const handleBookClick = (book: (typeof defaultBooks)[0]) => {
    setSelectedBook(book);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header
        cartItemCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)}
        onCartClick={() => setIsCartOpen(true)}
      />

      <main className="pt-20">
        <CategoryTabs
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        <BookGrid books={initialBooks} onAddToCart={handleAddToCart} />
      </main>

      <BookQuickViewModal
        open={!!selectedBook}
        onOpenChange={(open) => !open && setSelectedBook(null)}
        book={selectedBook || undefined}
        onAddToCart={() => selectedBook && handleAddToCart(selectedBook.id)}
      />

      <CartSidebar
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems
          .map((item) => {
            const book = initialBooks.find((b) => b.id === item.id);
            return book
              ? {
                  id: book.id,
                  title: book.title,
                  price: book.price,
                  quantity: item.quantity,
                  coverImage: book.coverImage,
                }
              : null;
          })
          .filter((item): item is NonNullable<typeof item> => item !== null)}
      />
    </div>
  );
};

export default Home;
