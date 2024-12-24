import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  image: string;
  className?: string;
}

export const Testimonial: React.FC<TestimonialProps> = ({
  quote,
  author,
  role,
  image,
  className = '',
}) => {
  return (
    <motion.div
      className={`bg-white p-6 rounded-xl shadow-lg ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
    >
      <Quote className="w-10 h-10 text-blue-500 mb-4" />
      <p className="text-gray-700 text-lg mb-4 italic">{quote}</p>
      <div className="flex items-center">
        <img
          src={image}
          alt={author}
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="font-semibold text-gray-900">{author}</h4>
          <p className="text-gray-500 text-sm">{role}</p>
        </div>
      </div>
    </motion.div>
  );
};