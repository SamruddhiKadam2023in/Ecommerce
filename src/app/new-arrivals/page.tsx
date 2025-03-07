import ProductGrid from '@/components/ui/ProductGrid';
import { newArrivals } from '@/data/products';

export default function NewArrivalsPage() {
  return (
    <ProductGrid
      products={newArrivals}
      title="New Arrivals"
      description="Be the first to shop our latest arrivals featuring this season's must-have styles."
    />
  );
} 