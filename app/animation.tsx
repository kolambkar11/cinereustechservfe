"use client";

/**
 * Animation primitives for Cinereus Techserv
 * Uses Framer Motion — install with: npm install framer-motion
 *
 * Exports:
 *   <FadeUp>          — fade + slide up on scroll into view
 *   <FadeIn>          — plain fade on scroll into view
 *   <StaggerParent>   — wraps a list; children stagger in
 *   <StaggerChild>    — individual staggered item
 *   <PageTransition>  — wraps page content for route transitions
 *   <CountUp>         — animates a number from 0 to target
 */

import { useEffect, useRef, useState } from "react";
import { motion, useInView, Variants } from "framer-motion";

// ─── Shared variants ──────────────────────────────────────────

const fadeUpVariant: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

const fadeInVariant: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const staggerParentVariant: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

const staggerChildVariant: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

// ─── FadeUp ───────────────────────────────────────────────────

interface FadeUpProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function FadeUp({ children, className, delay = 0 }: FadeUpProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      variants={fadeUpVariant}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── FadeIn ───────────────────────────────────────────────────

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function FadeIn({ children, className, delay = 0 }: FadeInProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      variants={fadeInVariant}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── StaggerParent ────────────────────────────────────────────

interface StaggerParentProps {
  children: React.ReactNode;
  className?: string;
}

export function StaggerParent({ children, className }: StaggerParentProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      variants={staggerParentVariant}
      initial="hidden"
      animate="visible"
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── StaggerChild ─────────────────────────────────────────────

interface StaggerChildProps {
  children: React.ReactNode;
  className?: string;
}

export function StaggerChild({ children, className }: StaggerChildProps) {
  return (
    <motion.div variants={staggerChildVariant} className={className}>
      {children}
    </motion.div>
  );
}

// ─── PageTransition ───────────────────────────────────────────

interface PageTransitionProps {
  children: React.ReactNode;
}

export function PageTransition({ children }: PageTransitionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

// ─── CountUp ─────────────────────────────────────────────────

interface CountUpProps {
  to: number;
  suffix?: string;
  duration?: number;
  className?: string;
}

export function CountUp({
  to,
  suffix = "",
  duration = 1.8,
  className,
}: CountUpProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [count, setCount] = useState(0);
  const hasStarted = useRef(false);

  useEffect(() => {
    if (!inView || hasStarted.current) return;
    hasStarted.current = true;

    const steps = 50;
    const stepDuration = (duration * 1000) / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += 1;
      // Ease-out: slow down near the end
      const progress = current / steps;
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * to));

      if (current >= steps) {
        clearInterval(timer);
        setCount(to);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [inView, to, duration]);

  return (
    <span ref={ref} className={className}>
      {count}
      {suffix}
    </span>
  );
}
