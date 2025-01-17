import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { X, Trash2, ShoppingBag } from "lucide-react";

interface CartItem {
  id: string;
  title: string;
  price: number;
  quantity: number;
  coverImage: string;
}

interface CartSidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
  items?: CartItem[];
  onRemoveItem?: (id: string) => void;
  onUpdateQuantity?: (id: string, quantity: number) => void;
}

const CartSidebar = ({
  isOpen = true,
  onClose = () => console.log("Close cart"),
  items = [
    {
      id: "1",
      title: "The Great Adventure",
      price: 29.99,
      quantity: 1,
      coverImage: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e",
    },
    {
      id: "2",
      title: "Mystery at Midnight",
      price: 24.99,
      quantity: 2,
      coverImage: "https://images.unsplash.com/photo-1544947950-fa07a98d237f",
    },
  ],
  onRemoveItem = (id: string) => console.log("Remove item", id),
  onUpdateQuantity = (id: string, quantity: number) =>
    console.log("Update quantity", id, quantity),
}: CartSidebarProps) => {
  const navigate = useNavigate();
  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="w-[400px] bg-white">
        <SheetHeader>
          <SheetTitle className="flex items-center justify-between">
            <div className="flex items-center">
              <ShoppingBag className="w-5 h-5 mr-2" />
              Shopping Cart ({items.length})
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="hover:bg-gray-100 rounded-full"
            >
              <X className="w-5 h-5" />
            </Button>
          </SheetTitle>
        </SheetHeader>

        <ScrollArea className="h-[calc(100vh-180px)] mt-6">
          {items.map((item) => (
            <div key={item.id} className="mb-6">
              <div className="flex gap-4">
                <img
                  src={item.coverImage}
                  alt={item.title}
                  className="w-20 h-24 object-cover rounded"
                />
                <div className="flex-1">
                  <h3 className="font-medium line-clamp-2">{item.title}</h3>
                  <p className="text-sm text-gray-500 mt-1">
                    ${item.price.toFixed(2)}
                  </p>
                  <div className="flex items-center mt-2">
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() =>
                        onUpdateQuantity(
                          item.id,
                          Math.max(0, item.quantity - 1),
                        )
                      }
                    >
                      -
                    </Button>
                    <span className="mx-3">{item.quantity}</span>
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() =>
                        onUpdateQuantity(item.id, item.quantity + 1)
                      }
                    >
                      +
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="ml-auto hover:bg-red-100 hover:text-red-600"
                      onClick={() => onRemoveItem(item.id)}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
              <Separator className="mt-6" />
            </div>
          ))}
        </ScrollArea>

        <div className="absolute bottom-0 left-0 right-0 p-6 bg-white border-t">
          <div className="flex justify-between mb-4">
            <span className="font-medium">Total</span>
            <span className="font-bold">${total.toFixed(2)}</span>
          </div>
          <Button
            className="w-full"
            size="lg"
            onClick={() => {
              onClose();
              navigate("/checkout");
            }}
          >
            Checkout
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default CartSidebar;
