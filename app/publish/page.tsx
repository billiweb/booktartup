'use client';

import { Button } from '@/components/ui/button';
import { FileText, BookOpen, PenLine, Rocket } from 'lucide-react';
import Link from 'next/link';

export default function PublishPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">전자책 출판 과정</h1>
        <p className="text-xl text-muted-foreground">
          4단계의 간단한 과정으로 여러분의 전자책을 출판하세요
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {/* Step 1 */}
        <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-card">
          <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
            <FileText className="h-6 w-6 text-primary" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Step 1</h3>
          <h4 className="text-lg font-medium mb-2">원고 작성</h4>
          <p className="text-muted-foreground">
            Microsoft Word나 구글 문서로 작성된 원고를 준비하세요
          </p>
        </div>

        {/* Step 2 */}
        <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-card">
          <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
            <BookOpen className="h-6 w-6 text-primary" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Step 2</h3>
          <h4 className="text-lg font-medium mb-2">원고 업로드</h4>
          <p className="text-muted-foreground">
            작성한 원고를 플랫폼에 업로드하고 기본 정보를 입력하세요
          </p>
        </div>

        {/* Step 3 */}
        <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-card">
          <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
            <PenLine className="h-6 w-6 text-primary" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Step 3</h3>
          <h4 className="text-lg font-medium mb-2">전문가 검수</h4>
          <p className="text-muted-foreground">
            전문 편집자가 원고를 검토하고 수정사항을 제안합니다
          </p>
        </div>

        {/* Step 4 */}
        <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-card">
          <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
            <Rocket className="h-6 w-6 text-primary" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Step 4</h3>
          <h4 className="text-lg font-medium mb-2">출판 및 판매</h4>
          <p className="text-muted-foreground">
            검수가 완료된 전자책을 출판하고 판매를 시작하세요
          </p>
        </div>
      </div>

      <div className="text-center">
        <Button size="lg" asChild>
          <Link href="/publish/start">출판하러 가기</Link>
        </Button>
      </div>
    </div>
  );
}
