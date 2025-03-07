import ProductSkeleton from '@/components/ui/ProductSkeleton';

export default function MenLoading() {
  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="text-center mb-12 space-y-4">
          <div className="h-8 w-1/3 mx-auto bg-gray-200 dark:bg-gray-700 rounded" />
          <div className="h-6 w-2/3 mx-auto bg-gray-200 dark:bg-gray-700 rounded" />
        </div>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {Array.from({ length: 8 }).map((_, index) => (
            <ProductSkeleton key={index} />
          ))}
        </div>
      </div>
    </div>
  );
} 