import { Button } from '@/components/ui/button';
import { BookOpen, PenLine, TrendingUp } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex-1">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            당신의 지식을
            <br />
            전자책으로 출판하세요
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            북타트업과 함께라면 쉽고 빠르게 전자책을 출판할 수 있습니다
          </p>
          <Button asChild size="lg">
            <Link href="/publish">지금 시작하기</Link>
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6">
              <BookOpen className="h-12 w-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2">쉬운 출판 과정</h3>
              <p className="text-muted-foreground">
                복잡한 과정 없이 간단하게 전자책을 출판할 수 있습니다
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
              <PenLine className="h-12 w-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2">전문적인 편집</h3>
              <p className="text-muted-foreground">
                전문 편집자가 당신의 책을 더욱 완성도 있게 만들어드립니다
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
              <TrendingUp className="h-12 w-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2">수익 창출</h3>
              <p className="text-muted-foreground">
                당신의 지식을 수익으로 연결하세요
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
