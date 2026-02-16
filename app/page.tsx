// src/app/page.tsx
'use client';

import Hero from '@/components/ui/Hero';
import { ClassAnalyticsSection } from '@/components/ui/ClassAnalyticsSection';
import Sofware from '@/components/ui/Sofware';
import Steps from '@/components/ui/Steps';
import Realblog from '@/components/ui/Realblog';
import Awards from '@/components/ui/Awards';

export default function Home() {
  return (
    <>
      <Hero />
      <ClassAnalyticsSection />
      <Sofware />
      <Steps />
      <Realblog/>
      <Awards />
    </>
  );
}
