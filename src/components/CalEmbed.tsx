'use client';

import Cal, { getCalApi } from '@calcom/embed-react';
import { useEffect } from 'react';

export default function CalEmbed() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: 'voxaimx' });
      cal('ui', {
        theme: 'light',
        hideEventTypeDetails: false,
        layout: 'month_view',
        cssVarsPerTheme: {
          light: {
            'cal-brand': '#04418c',
            'cal-brand-emphasis': '#04418c',
            'cal-brand-text': '#ffffff',
          },
          dark: {
            'cal-brand': '#04418c',
            'cal-brand-emphasis': '#04418c',
            'cal-brand-text': '#ffffff',
          },
        },
      });
    })();
  }, []);

  return (
    <Cal
      namespace="voxaimx"
      calLink="voxaimx"
      style={{ width: '100%', height: '100%', overflow: 'scroll' }}
      config={{ layout: 'month_view', theme: 'light' }}
    />
  );
}
