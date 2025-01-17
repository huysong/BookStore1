import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ShoppingCart } from "lucide-react";

interface BookCardProps {
  title?: string;
  author?: string;
  price?: number;
  coverImage?: string;
  onAddToCart?: () => void;
}

const BookCard = ({
  title = "The Great Adventure",
  author = "John Smith",
  price = 29.99,
  coverImage = "https://images.unsplash.com/photo-1543002588-bfa74002ed7e",
  onAddToCart = () => console.log("Add to cart clicked"),
}: BookCardProps) => {
  return (
    <Card className="w-[280px] h-[400px] bg-white hover:shadow-lg transition-shadow duration-200">
      <CardContent className="p-4">
        <div className="relative w-full h-[250px] mb-4">
          <img
            src={coverImage}
            alt={title}
            className="w-full h-full object-cover rounded-md"
          />
        </div>
        <div className="space-y-2">
          <h3 className="font-semibold text-lg line-clamp-2">{title}</h3>
          <p className="text-sm text-muted-foreground">{author}</p>
          <p className="text-lg font-bold">${price.toFixed(2)}</p>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button
          onClick={onAddToCart}
          className="w-full bg-primary hover:bg-primary/90"
        >
          <ShoppingCart className="w-4 h-4 mr-2" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default BookCard;
