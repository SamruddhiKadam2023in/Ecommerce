import ProductGrid from '@/components/ui/ProductGrid';
import { saleProducts } from '@/data/products';

export default function SalePage() {
  return (
    <ProductGrid
      products={saleProducts}
      title="Sale"
      description="Don't miss out on our amazing deals with up to 50% off on selected items."
    />
  );
} 