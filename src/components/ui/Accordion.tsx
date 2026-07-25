"use client";

import { useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

type AccordionItemProps = {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
};

function AccordionItem({ question, answer, isOpen, onToggle }: AccordionItemProps) {
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div className="border-b border-border">
      <button
        type="button"
        aria-expanded={isOpen}
        onClick={onToggle}
        className="flex min-h-[4rem] w-full items-center justify-between gap-4 text-left text-[0.9375rem] font-semibold text-ink transition-colors hover:text-brand"
      >
        <span className="pr-2">{question}</span>
        <span
          aria-hidden
          className={cn(
            "grid h-9 w-9 shrink-0 place-items-center rounded-full bg-surface text-brand transition-transform duration-300",
            isOpen && "rotate-45",
          )}
        >
          +
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden"
          >
            <div ref={contentRef} className="pb-5 text-sm leading-7 text-muted">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

type AccordionProps = {
  items: { question: string; answer: string }[];
};

export function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = useCallback(
    (index: number) => {
      setOpenIndex((prev) => (prev === index ? null : index));
    },
    [],
  );

  return (
    <div className="rounded-[1.5rem] border border-border bg-white">
      {items.map((item, i) => (
        <AccordionItem
          key={item.question}
          question={item.question}
          answer={item.answer}
          isOpen={openIndex === i}
          onToggle={() => handleToggle(i)}
        />
      ))}
    </div>
  );
}