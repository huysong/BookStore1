import React from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface CategoryTabsProps {
  categories?: Array<{
    id: string;
    name: string;
  }>;
  activeCategory?: string;
  onCategoryChange?: (category: string) => void;
}

const CategoryTabs = ({
  categories = [
    { id: "fiction", name: "Fiction" },
    { id: "non-fiction", name: "Non-Fiction" },
    { id: "academic", name: "Academic" },
    { id: "children", name: "Children" },
    { id: "biography", name: "Biography" },
    { id: "science", name: "Science" },
    { id: "history", name: "History" },
  ],
  activeCategory = "fiction",
  onCategoryChange = (category) => console.log("Category changed:", category),
}: CategoryTabsProps) => {
  return (
    <div className="w-full bg-background border-b">
      <div className="max-w-screen-2xl mx-auto px-4">
        <Tabs
          defaultValue={activeCategory}
          onValueChange={onCategoryChange}
          className="w-full"
        >
          <TabsList className="h-16 w-full justify-start overflow-x-auto">
            {categories.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="px-6 text-sm font-medium transition-colors hover:text-primary"
              >
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>
    </div>
  );
};

export default CategoryTabs;
