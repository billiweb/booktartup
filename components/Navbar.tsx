'use client';

import Link from 'next/link';
import { BookOpen, Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/useAuth';
import { useTheme } from '@/hooks/useTheme';

export function Navbar() {
  const { user, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="border-b">
      <div className="flex h-16 items-center px-4 container">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl">
          <BookOpen className="h-6 w-6" />
          <span>북타트업</span>
        </Link>

        <div className="flex items-center justify-center flex-1 space-x-8">
          <Link
            href="/publish"
            className="text-sm font-medium hover:text-primary"
          >
            출판하기
          </Link>
          <Link href="/blog" className="text-sm font-medium hover:text-primary">
            출판 가이드
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium hover:text-primary"
          >
            문의하기
          </Link>
        </div>

        <div className="flex items-center gap-4">
          {user === undefined ? (
            <Button variant="outline" disabled>
              로딩 중...
            </Button>
          ) : user ? (
            <>
              <Link href="/mypage">
                <Button variant="ghost">마이페이지</Button>
              </Link>
              <Button variant="outline" onClick={logout}>
                로그아웃
              </Button>
            </>
          ) : (
            <Button asChild variant="outline">
              <Link href="/login">로그인</Link>
            </Button>
          )}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
          >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
        </div>
      </div>
    </nav>
  );
}
