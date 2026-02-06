'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { track } from '@/lib/analytics'

export function MobileStickyCTA() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past the hero section (roughly 500px)
      setIsVisible(window.scrollY > 500)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleClick = () => {
    track('cta_click', { location: 'mobile_sticky', cta: 'get_sample' })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
        >
          <div className="bg-background/80 backdrop-blur-lg border-t border-border p-4">
            <Link
              href="/#sample"
              onClick={handleClick}
              className="btn-primary w-full text-center"
            >
              Get a sample issue
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default MobileStickyCTA
