import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

interface CheckoutFormProps {
  total: number;
  onSubmit: (data: CheckoutFormData) => void;
}

interface CheckoutFormData {
  email: string;
  name: string;
  address: string;
  city: string;
  country: string;
  cardNumber: string;
  expiryDate: string;
  cvv: string;
}

const CheckoutForm = ({ total, onSubmit }: CheckoutFormProps) => {
  const { register, handleSubmit } = useForm<CheckoutFormData>();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Card>
        <CardContent className="space-y-6 pt-6">
          <div className="space-y-2">
            <h2 className="text-xl font-semibold">Contact Information</h2>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                {...register("email", { required: true })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" {...register("name", { required: true })} />
            </div>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-semibold">Shipping Address</h2>
            <div className="space-y-2">
              <Label htmlFor="address">Address</Label>
              <Input
                id="address"
                {...register("address", { required: true })}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="city">City</Label>
                <Input id="city" {...register("city", { required: true })} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="country">Country</Label>
                <Input
                  id="country"
                  {...register("country", { required: true })}
                />
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-semibold">Payment Details</h2>
            <div className="space-y-2">
              <Label htmlFor="cardNumber">Card Number</Label>
              <Input
                id="cardNumber"
                {...register("cardNumber", { required: true })}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="expiryDate">Expiry Date</Label>
                <Input
                  id="expiryDate"
                  placeholder="MM/YY"
                  {...register("expiryDate", { required: true })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="cvv">CVV</Label>
                <Input
                  id="cvv"
                  type="password"
                  maxLength={4}
                  {...register("cvv", { required: true })}
                />
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <div className="text-lg font-semibold">
            Total: ${total.toFixed(2)}
          </div>
          <Button type="submit">Complete Purchase</Button>
        </CardFooter>
      </Card>
    </form>
  );
};

export default CheckoutForm;
