import { ShoppingBag } from "lucide-react";
import { CartSheet } from "./components/cart-sheet";
import { ProductCard } from "./components/ui/product-card";
import { products } from "./data/products";

function App() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <ShoppingBag className="h-6 w-6" />
            <span className="text-xl font-semibold">Store</span>
          </div>
          <CartSheet />
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Featured Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;