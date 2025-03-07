'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import HeroSlider from '@/components/ui/HeroSlider';

const collections = [
  {
    name: 'Women\'s Collection',
    href: '/women',
    imageSrc: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    imageAlt: 'Women\'s Collection',
    description: 'Shop the latest trends in women\'s fashion.',
  },
  {
    name: 'Men\'s Collection',
    href: '/men',
    imageSrc: 'https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80',
    imageAlt: 'Men\'s Collection',
    description: 'Discover our premium men\'s clothing collection.',
  },
];

const featuredProducts = [
  {
    id: 1,
    name: 'Basic White T-Shirt',
    href: '/products/basic-white-t-shirt',
    imageSrc: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80',
    imageAlt: 'Basic White T-Shirt',
    price: 29.99,
    color: 'White',
    badge: 'New Arrival',
  },
  {
    id: 2,
    name: 'Slim Fit Jeans',
    href: '/products/slim-fit-jeans',
    imageSrc: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
    imageAlt: 'Slim Fit Jeans',
    price: 79.99,
    color: 'Blue',
    badge: 'Best Seller',
  },
  {
    id: 3,
    name: 'Classic Leather Jacket',
    href: '/products/classic-leather-jacket',
    imageSrc: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    imageAlt: 'Classic Leather Jacket',
    price: 299.99,
    color: 'Brown',
    badge: 'Premium',
  },
  {
    id: 4,
    name: 'Summer Dress',
    href: '/products/summer-dress',
    imageSrc: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80',
    imageAlt: 'Summer Dress',
    price: 89.99,
    color: 'Floral',
    badge: 'Trending',
  },
];

const stats = [
  { name: 'Global Customers', value: '100K+' },
  { name: 'Countries', value: '50+' },
  { name: 'Product Categories', value: '1000+' },
  { name: 'Customer Reviews', value: '50K+' },
];

export default function Home() {
  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Hero section */}
      <HeroSlider />

      {/* Stats section */}
      <div className="bg-indigo-600 dark:bg-indigo-900">
        <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {stats.map((stat) => (
              <motion.div
                key={stat.name}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <p className="text-3xl font-bold text-white">{stat.value}</p>
                <p className="mt-1 text-sm text-indigo-100">{stat.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Collections */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">Shop by Collection</h2>
          <p className="mt-4 text-xl text-gray-500 dark:text-gray-300">Explore our curated collections for every style and occasion.</p>
        </motion.div>
        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
          {collections.map((collection, index) => (
            <motion.div
              key={collection.name}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group relative overflow-hidden rounded-lg"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={collection.imageSrc}
                  alt={collection.imageAlt}
                  className="transform object-cover object-center transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 p-6">
                <h3 className="text-2xl font-bold text-white">
                  <Link href={collection.href}>
                    <span className="absolute inset-0" />
                    {collection.name}
                  </Link>
                </h3>
                <p className="mt-2 text-sm text-gray-200">{collection.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Featured Products */}
      <div className="bg-gray-50 dark:bg-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">Featured Products</h2>
            <p className="mt-4 text-xl text-gray-500 dark:text-gray-300">Handpicked selections from our latest collection.</p>
          </motion.div>
          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-lg bg-white dark:bg-gray-900 shadow-lg hover:shadow-xl transform transition-all duration-300 hover:-translate-y-1"
              >
                <div className="aspect-w-1 aspect-h-1 relative">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="transform object-cover object-center transition duration-500 group-hover:scale-105"
                  />
                  {product.badge && (
                    <div className="absolute top-2 right-2 bg-indigo-600 px-2 py-1 text-xs font-semibold text-white rounded-full">
                      {product.badge}
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                    <Link href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </Link>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{product.color}</p>
                  <div className="mt-3 flex items-center justify-between">
                    <p className="text-lg font-semibold text-gray-900 dark:text-white">${product.price}</p>
                    <button className="rounded-full bg-indigo-600 p-2 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transform transition-transform duration-300 hover:scale-110">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                      </svg>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-16 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-900 dark:to-purple-900 py-10 px-6 sm:py-16 sm:px-12 lg:flex lg:items-center lg:p-20"
          >
            <div className="lg:w-0 lg:flex-1">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Sign up for our newsletter
              </h2>
              <p className="mt-4 max-w-3xl text-lg text-indigo-100">
                Stay updated with our latest collections, trends, and exclusive offers.
              </p>
            </div>
            <div className="mt-12 sm:w-full sm:max-w-md lg:mt-0 lg:ml-8 lg:flex-1">
              <form className="sm:flex">
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email-address"
                  type="email"
                  autoComplete="email"
                  required
                  className="w-full rounded-md border-white px-5 py-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-700"
                  placeholder="Enter your email"
                />
                <button
                  type="submit"
                  className="mt-3 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-500 px-5 py-3 text-base font-medium text-white hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-700 sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0 transform transition-transform duration-300 hover:scale-105"
                >
                  Subscribe
                </button>
              </form>
              <p className="mt-3 text-sm text-indigo-100">
                We care about your privacy. Read our{' '}
                <Link href="/privacy" className="font-medium text-white underline">
                  privacy policy
                </Link>
                .
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
