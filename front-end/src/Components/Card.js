import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ children }) => {
  return (
    <motion.div
      className='card'
      initial={{ opacity: 0, scale: 0.2 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: .5 }}
    >
      {children}
    </motion.div>
  )
}

export default Card