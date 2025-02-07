'use client';

import { BookOpen } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center gap-4">
          <Link href="/" className="flex items-center gap-2">
            <BookOpen className="h-6 w-6" />
            <span className="font-bold text-xl">북타트업</span>
          </Link>
          <p className="text-sm text-muted-foreground text-center">
            사업가들의 전자책 출판을 돕는 플랫폼입니다.
            <br />
            쉽고 빠르게 여러분의 이야기를 전자책으로 출판하세요.
          </p>
        </div>
      </div>
    </footer>
  );
}
