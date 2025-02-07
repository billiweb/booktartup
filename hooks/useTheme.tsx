import { useEffect, useState } from 'react';

export function useTheme() {
  const [theme, setTheme] = useState<'light' | 'dark' | null>(null);

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') as
      | 'light'
      | 'dark'
      | null;
    const prefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;
    const defaultTheme = storedTheme || (prefersDark ? 'dark' : 'light');

    // ✅ 기존 light / dark 클래스 제거 후 새로운 테마 적용
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(defaultTheme);

    setTheme(defaultTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';

    // ✅ 기존 light / dark 클래스 제거 후 새로운 테마 적용
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(newTheme);

    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return { theme, toggleTheme };
}
