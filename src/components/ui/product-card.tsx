import { ShoppingCart } from "lucide-react";
import { Product } from "@/types";
import { Button } from "./button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./card";
import { useCart } from "@/hooks/use-cart";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  return (
    <Card className="overflow-hidden">
      <CardHeader className="p-0">
        <div className="aspect-square relative">
          <img
            src={product.image}
            alt={product.name}
            className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
          />
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <CardTitle className="line-clamp-1">{product.name}</CardTitle>
        <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
          {product.description}
        </p>
        <p className="text-lg font-semibold mt-2">${product.price}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button 
          className="w-full" 
          onClick={() => addToCart(product)}
        >
          <ShoppingCart className="mr-2 h-4 w-4" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
}