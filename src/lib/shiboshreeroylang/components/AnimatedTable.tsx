import React from 'react';
import { motion } from 'framer-motion';

interface Column {
  key: string;
  header: string;
}

interface AnimatedTableProps {
  columns: Column[];
  data: any[];
  className?: string;
}

export const AnimatedTable: React.FC<AnimatedTableProps> = ({
  columns,
  data,
  className = '',
}) => {
  return (
    <div className={`overflow-x-auto ${className}`}>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            {columns.map((column) => (
              <th
                key={column.key}
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((row, rowIndex) => (
            <motion.tr
              key={rowIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: rowIndex * 0.1 }}
              whileHover={{ scale: 1.01, backgroundColor: '#f9fafb' }}
            >
              {columns.map((column) => (
                <td
                  key={column.key}
                  className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                >
                  {row[column.key]}
                </td>
              ))}
            </motion.tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};