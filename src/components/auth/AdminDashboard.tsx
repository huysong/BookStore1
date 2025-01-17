import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus, Edit, Trash2 } from "lucide-react";

interface Book {
  id: string;
  title: string;
  author: string;
  price: number;
  coverImage: string;
}

interface AdminDashboardProps {
  books?: Book[];
  onAddBook?: () => void;
  onEditBook?: (book: Book) => void;
  onDeleteBook?: (bookId: string) => void;
}

const AdminDashboard = ({
  books = [],
  onAddBook = () => {},
  onEditBook = () => {},
  onDeleteBook = () => {},
}: AdminDashboardProps) => {
  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        <Button onClick={onAddBook}>
          <Plus className="w-4 h-4 mr-2" /> Add New Book
        </Button>
      </div>

      <div className="grid gap-6">
        {books.map((book) => (
          <Card key={book.id}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {book.title}
              </CardTitle>
              <div className="flex space-x-2">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => onEditBook(book)}
                >
                  <Edit className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => onDeleteBook(book.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <p className="text-sm font-medium">Author</p>
                  <p className="text-sm text-muted-foreground">{book.author}</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Price</p>
                  <p className="text-sm text-muted-foreground">
                    ${book.price.toFixed(2)}
                  </p>
                </div>
                <div>
                  <img
                    src={book.coverImage}
                    alt={book.title}
                    className="w-16 h-20 object-cover rounded"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
