import ProductGrid from '@/components/ui/ProductGrid';
import { menProducts } from '@/data/products';

export default function MenPage() {
  return (
    <ProductGrid
      products={menProducts}
      title="Men's Collection"
      description="Explore our premium men's fashion collection featuring classic and contemporary styles."
    />
  );
} 