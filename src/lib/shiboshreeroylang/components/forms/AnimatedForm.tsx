import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedInput } from './AnimatedInput';
import { AnimatedSubmitButton } from './AnimatedSubmitButton';

interface FormField {
  name: string;
  label: string;
  type: string;
  required?: boolean;
}

interface AnimatedFormProps {
  fields: FormField[];
  onSubmit: (data: any) => void;
  className?: string;
}

export const AnimatedForm: React.FC<AnimatedFormProps> = ({
  fields,
  onSubmit,
  className = '',
}) => {
  const [formData, setFormData] = React.useState<Record<string, string>>({});
  const [errors, setErrors] = React.useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};
    
    fields.forEach(field => {
      if (field.required && !formData[field.name]) {
        newErrors[field.name] = `${field.label} is required`;
      }
    });

    if (Object.keys(newErrors).length === 0) {
      onSubmit(formData);
    } else {
      setErrors(newErrors);
    }
  };

  const handleChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  return (
    <motion.form
      className={`space-y-4 ${className}`}
      onSubmit={handleSubmit}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {fields.map((field, index) => (
        <AnimatedInput
          key={field.name}
          label={field.label}
          type={field.type}
          name={field.name}
          value={formData[field.name] || ''}
          onChange={(e) => handleChange(field.name, e.target.value)}
          error={errors[field.name]}
          required={field.required}
        />
      ))}
      <AnimatedSubmitButton>Submit</AnimatedSubmitButton>
    </motion.form>
  );
};