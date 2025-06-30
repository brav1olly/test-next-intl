'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';
import { locales } from '@/i18n/i18n';

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();

  const changeLocale = () => {
    const newLocale = currentLocale === 'en' ? 'ru' : 'en';

    // Заменим текущую локаль в URL
    const segments = pathname.split('/');
    segments[1] = newLocale;

    router.replace(segments.join('/'));
  };

  return (
    <button onClick={changeLocale} className="px-4 py-2 bg-blue-500 text-white rounded">
      {currentLocale === 'en' ? 'Русский' : 'English'}
    </button>
  );
}
