'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { FcGoogle } from 'react-icons/fc';
import Link from 'next/link';
import { useAuth } from '@/hooks/useAuth';

export default function RegisterPage() {
  const { registerWithEmail, loading } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage('');

    if (password !== confirmPassword) {
      alert('⚠️ 비밀번호가 일치하지 않습니다.');
      return;
    }

    // ✅ 회원가입 요청 및 오류 메시지 반환
    const errorMessage = await registerWithEmail(email, password);

    if (errorMessage && !errorMessage.startsWith('✅')) {
      return;
    }
  };

  return (
    <div className="container mx-auto flex items-center justify-center min-h-[calc(80vh-4rem)]">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-3xl text-center">회원가입</CardTitle>
          <CardDescription className="text-lg text-center pb-2">
            북타트업에서 당신의 지식을 공유하세요
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleRegister} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">이메일</Label>
              <Input
                id="email"
                type="text"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">비밀번호</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirmPassword">비밀번호 확인</Label>
              <Input
                id="confirmPassword"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>

            {message && (
              <p
                className={`text-sm ${
                  message.startsWith('✅') ? 'text-green-500' : 'text-red-500'
                }`}
              >
                {message}
              </p>
            )}

            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? '가입 중...' : '회원가입'}
            </Button>
          </form>

          <div className="flex justify-center py-4">
            <span className="text-md text-muted-foreground">or</span>
          </div>

          <Button variant="outline" type="button" className="w-full">
            <FcGoogle className="mr-2 h-4 w-4" />
            Google로 계속하기
          </Button>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Link href="/login">이미 계정이 있으신가요? 로그인</Link>
        </CardFooter>
      </Card>
    </div>
  );
}
