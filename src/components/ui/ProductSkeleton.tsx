'use client';

export default function ProductSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-2xl bg-gray-200 dark:bg-gray-700" />
      <div className="mt-6 space-y-4">
        <div className="h-4 w-3/4 bg-gray-200 dark:bg-gray-700 rounded" />
        <div className="h-4 w-1/2 bg-gray-200 dark:bg-gray-700 rounded" />
        <div className="flex items-center justify-between">
          <div className="h-6 w-1/3 bg-gray-200 dark:bg-gray-700 rounded" />
          <div className="h-10 w-10 bg-gray-200 dark:bg-gray-700 rounded-full" />
        </div>
      </div>
    </div>
  );
} 