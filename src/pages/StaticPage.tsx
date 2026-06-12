import { motion } from 'framer-motion';

export default function StaticPage({ title }: { title: string }) {
  return (
    <div className="max-w-4xl mx-auto px-6 py-24">
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-10"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">{title}</h1>
        <p className="mt-4 text-gray-700">Content coming soon. This page is under construction.</p>
      </motion.header>
    </div>
  );
}

