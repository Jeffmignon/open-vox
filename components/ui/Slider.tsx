'use client'

import * as SliderPrimitive from '@radix-ui/react-slider'
import { forwardRef } from 'react'
import { cn } from '@/lib/utils'

interface SliderProps {
  min: number
  max: number
  step?: number
  value: number[]
  onValueChange: (value: number[]) => void
  className?: string
  showValue?: boolean
  formatValue?: (value: number) => string
}

const Slider = forwardRef<HTMLDivElement, SliderProps>(
  (
    {
      min,
      max,
      step = 1,
      value,
      onValueChange,
      className,
      showValue = false,
      formatValue = (v) => v.toString(),
    },
    ref
  ) => {
    return (
      <div ref={ref} className={cn('w-full', className)}>
        <SliderPrimitive.Root
          className="relative flex items-center select-none touch-none w-full h-5"
          min={min}
          max={max}
          step={step}
          value={value}
          onValueChange={onValueChange}
        >
          <SliderPrimitive.Track className="bg-border relative grow rounded-full h-2">
            <SliderPrimitive.Range className="absolute bg-foreground rounded-full h-full" />
          </SliderPrimitive.Track>
          <SliderPrimitive.Thumb
            className={cn(
              'block w-5 h-5 bg-card border-2 border-foreground rounded-full',
              'shadow-soft hover:shadow-elevated',
              'focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2',
              'transition-all duration-200'
            )}
            aria-label="Slider thumb"
          />
        </SliderPrimitive.Root>
        {showValue && (
          <div className="flex justify-between mt-2 text-sm text-muted">
            <span>{formatValue(min)}</span>
            <span className="font-medium text-foreground">
              {formatValue(value[0])}
            </span>
            <span>{formatValue(max)}</span>
          </div>
        )}
      </div>
    )
  }
)

Slider.displayName = 'Slider'

export { Slider }
