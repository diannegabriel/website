import React from 'react'
import { motion } from 'framer-motion'

const ConnexPrAn = () => {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.1 }}
    className="w-full"
    >
      Connex Programmer Analyst
    </motion.div>
  )
}

export default ConnexPrAn
