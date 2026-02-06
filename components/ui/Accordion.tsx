'use client'

import * as AccordionPrimitive from '@radix-ui/react-accordion'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import { track } from '@/lib/analytics'

interface AccordionItem {
  id: string
  question: string
  answer: string
}

interface AccordionProps {
  items: AccordionItem[]
  className?: string
}

export function Accordion({ items, className }: AccordionProps) {
  const handleValueChange = (value: string) => {
    if (value) {
      track('faq_expand', { question_id: value })
    }
  }

  return (
    <AccordionPrimitive.Root
      type="single"
      collapsible
      className={cn('space-y-3', className)}
      onValueChange={handleValueChange}
    >
      {items.map((item) => (
        <AccordionPrimitive.Item
          key={item.id}
          value={item.id}
          className={cn(
            'border border-border rounded-lg overflow-hidden',
            'transition-all duration-200',
            'hover:border-border-strong',
            'data-[state=open]:border-border-strong'
          )}
        >
          <AccordionPrimitive.Header>
            <AccordionPrimitive.Trigger
              className={cn(
                'flex items-center justify-between w-full px-5 py-4',
                'text-left text-base font-medium text-foreground',
                'focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-inset',
                'transition-all duration-200',
                'group'
              )}
            >
              {item.question}
              <ChevronDown
                className={cn(
                  'w-5 h-5 text-muted transition-transform duration-200',
                  'group-data-[state=open]:rotate-180'
                )}
              />
            </AccordionPrimitive.Trigger>
          </AccordionPrimitive.Header>
          <AccordionPrimitive.Content
            className={cn(
              'overflow-hidden text-muted',
              'data-[state=open]:animate-accordion-down',
              'data-[state=closed]:animate-accordion-up'
            )}
          >
            <div className="px-5 pb-4 text-sm leading-relaxed">
              {item.answer}
            </div>
          </AccordionPrimitive.Content>
        </AccordionPrimitive.Item>
      ))}
    </AccordionPrimitive.Root>
  )
}
