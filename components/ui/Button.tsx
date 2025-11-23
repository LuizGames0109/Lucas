import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'outline' | 'white';
  href?: string;
  onClick?: () => void;
  className?: string;
  icon?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  href, 
  onClick, 
  className = '',
  icon = false
}) => {
  
  const baseStyles = "relative inline-flex items-center justify-center px-8 py-4 font-semibold text-base transition-all duration-300 rounded-full overflow-hidden group";
  
  const variants = {
    primary: "bg-slate-900 text-white hover:shadow-lg hover:shadow-slate-900/30 border border-transparent",
    outline: "bg-transparent text-slate-900 border-2 border-slate-900 hover:bg-slate-50",
    white: "bg-white text-slate-900 hover:shadow-lg hover:shadow-white/30 border border-transparent"
  };

  const content = (
    <>
      {/* Shine Effect Overlay */}
      {variant !== 'outline' && (
        <motion.div
          className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent"
          style={{ skewX: -20 }}
        />
      )}
      
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {icon && (
          <motion.span
            initial={{ x: 0 }}
            whileHover={{ x: 4 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <ArrowRight className="w-5 h-5" />
          </motion.span>
        )}
      </span>
    </>
  );

  const motionProps = {
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 },
    className: `${baseStyles} ${variants[variant]} ${className}`,
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: { type: "spring", stiffness: 300, damping: 20 }
  };

  if (href) {
    return (
      <motion.a 
        href={href} 
        target="_blank"
        rel="noopener noreferrer"
        {...motionProps}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button 
      onClick={onClick}
      {...motionProps}
    >
      {content}
    </motion.button>
  );
};
