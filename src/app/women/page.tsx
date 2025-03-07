import ProductGrid from '@/components/ui/ProductGrid';
import { womenProducts } from '@/data/products';

export default function WomenPage() {
  return (
    <ProductGrid
      products={womenProducts}
      title="Women's Collection"
      description="Discover our latest women's fashion collection featuring trendy and timeless pieces."
    />
  );
} 