'use client';

import { PageTransition } from '@/animations/PageTransition';
import { usePathname } from 'next/navigation';

interface TemplateProps {
  children: React.ReactNode;
}

export default function RootTemplate({ children }: TemplateProps) {
  const pathname = usePathname();
  return <PageTransition key={pathname}>{children}</PageTransition>;
}
