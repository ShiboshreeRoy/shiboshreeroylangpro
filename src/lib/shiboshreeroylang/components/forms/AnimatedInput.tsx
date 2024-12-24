import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export const AnimatedInput: React.FC<AnimatedInputProps> = ({
  label,
  error,
  className = '',
  ...props
}) => {
  return (
    <motion.div
      className="mb-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
    >
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <motion.input
        whileFocus={{ scale: 1.02 }}
        className={`w-full px-3 py-2 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
          error ? 'border-red-500' : 'border-gray-300'
        } ${className}`}
        {...props}
      />
      {error && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-1 text-sm text-red-600"
        >
          {error}
        </motion.p>
      )}
    </motion.div>
  );
};