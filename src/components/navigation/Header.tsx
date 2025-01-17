import React from "react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Search, Menu } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface HeaderProps {
  cartItemCount?: number;
  onSearch?: (query: string) => void;
  onCartClick?: () => void;
}

const Header = ({
  cartItemCount = 0,
  onSearch = () => console.log("Search triggered"),
  onCartClick = () => console.log("Cart clicked"),
}: HeaderProps) => {
  return (
    <header className="w-full h-20 bg-white border-b border-gray-200 px-4 fixed top-0 z-50">
      <div className="max-w-7xl mx-auto h-full flex items-center justify-between gap-4">
        {/* Mobile Menu */}
        <div className="lg:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuItem asChild>
                <Link to="/">Home</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>Categories</DropdownMenuItem>
              <DropdownMenuItem>Deals</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
          <h1 className="text-2xl font-bold text-primary">BookStore</h1>
        </Link>

        {/* Search Bar */}
        <div className="hidden md:flex flex-1 max-w-2xl relative">
          <Input
            type="search"
            placeholder="Search for books or authors..."
            className="w-full pr-10"
            onChange={(e) => onSearch(e.target.value)}
          />
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-0 top-0"
          >
            <Search className="h-4 w-4" />
          </Button>
        </div>

        {/* Navigation Links - Desktop */}
        <nav className="hidden lg:flex items-center space-x-6">
          <Button variant="ghost" asChild>
            <Link to="/">Home</Link>
          </Button>
          <Button variant="ghost">Categories</Button>
          <Button variant="ghost">Deals</Button>
        </nav>

        {/* Cart Button */}
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="relative"
                onClick={onCartClick}
              >
                <ShoppingCart className="h-5 w-5" />
                {cartItemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground rounded-full w-5 h-5 text-xs flex items-center justify-center">
                    {cartItemCount}
                  </span>
                )}
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>View Cart</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        {/* Mobile Search Button */}
        <Button variant="ghost" size="icon" className="md:hidden">
          <Search className="h-5 w-5" />
        </Button>
      </div>
    </header>
  );
};

export default Header;
