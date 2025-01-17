import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Star } from "lucide-react";

interface BookQuickViewModalProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  book?: {
    title: string;
    author: string;
    price: number;
    coverImage: string;
    description: string;
    rating: number;
    pageCount: number;
    publishDate: string;
  };
  onAddToCart?: () => void;
}

const BookQuickViewModal = ({
  open = true,
  onOpenChange = () => {},
  book = {
    title: "The Great Adventure",
    author: "John Smith",
    price: 29.99,
    coverImage: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e",
    description:
      "An epic tale of discovery and wonder that takes readers on a journey through unknown lands and mysterious cultures.",
    rating: 4.5,
    pageCount: 342,
    publishDate: "2023-01-15",
  },
  onAddToCart = () => console.log("Add to cart clicked"),
}: BookQuickViewModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-white max-w-[600px] max-h-[700px] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">{book.title}</DialogTitle>
          <DialogDescription className="text-lg text-muted-foreground">
            by {book.author}
          </DialogDescription>
        </DialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-4">
          <div className="relative w-full h-[300px]">
            <img
              src={book.coverImage}
              alt={book.title}
              className="w-full h-full object-cover rounded-lg shadow-md"
            />
          </div>

          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${
                    i < Math.floor(book.rating)
                      ? "text-yellow-400 fill-current"
                      : "text-gray-300"
                  }`}
                />
              ))}
              <span className="text-sm text-muted-foreground">
                ({book.rating} / 5)
              </span>
            </div>

            <div className="text-2xl font-bold">${book.price.toFixed(2)}</div>

            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">
                Pages: {book.pageCount}
              </p>
              <p className="text-sm text-muted-foreground">
                Published: {new Date(book.publishDate).toLocaleDateString()}
              </p>
            </div>

            <p className="text-sm text-gray-600">{book.description}</p>
          </div>
        </div>

        <DialogFooter className="flex space-x-2">
          <Button
            variant="outline"
            onClick={() => onOpenChange(false)}
            className="flex-1"
          >
            Close
          </Button>
          <Button
            onClick={onAddToCart}
            className="flex-1 bg-primary hover:bg-primary/90"
          >
            <ShoppingCart className="w-4 h-4 mr-2" />
            Add to Cart
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default BookQuickViewModal;
