'use client';

import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import type { User } from '@supabase/supabase-js';

export function useAuth() {
  const [user, setUser] = useState<User | null | undefined>(undefined);
  const [loading, setLoading] = useState(false);

  // ✅ 현재 로그인된 사용자 확인
  useEffect(() => {
    const checkUser = async () => {
      const { data } = await supabase.auth.getUser();
      setUser(data?.user ?? null);
    };
    checkUser();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  // ✅ 이메일 회원가입 (이메일 중복 검증 포함)
  const registerWithEmail = async (email: string, password: string) => {
    try {
      setLoading(true);

      // ✅ 이메일 형식 체크
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        alert('⚠️ 올바른 이메일 형식이 아닙니다.');
        return '⚠️ 올바른 이메일 형식이 아닙니다.';
      }

      // ✅ 비밀번호 길이 체크
      if (password.length < 6) {
        alert('⚠️ 비밀번호는 최소 6자 이상이어야 합니다.');
        return '⚠️ 비밀번호는 최소 6자 이상이어야 합니다.';
      }

      // ✅ Supabase 회원가입 요청 (이메일 중복 체크 포함)
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: `${window.location.origin}/auth/callback`,
        },
      });

      // ✅ 회원가입 결과 로그 출력 (디버깅용)
      console.log('회원가입 응답:', JSON.stringify(data, null, 2));

      if (error) {
        console.error('회원가입 실패:', error.message);

        // ✅ Supabase에서 반환하는 "이미 가입된 이메일" 관련 오류 메시지 처리
        if (
          error.message.toLowerCase().includes('user already registered') ||
          error.message.toLowerCase().includes('user already exists') ||
          error.message.toLowerCase().includes('email already in use')
        ) {
          alert('⚠️ 이미 가입된 이메일입니다.');
          return '⚠️ 이미 가입된 이메일입니다.';
        }

        alert(`⚠️ 회원가입 실패: ${error.message}`);
        return `⚠️ 회원가입 실패: ${error.message}`;
      }

      // ✅ 이메일 중복 체크 - `identities` 배열 활용
      if (data?.user?.identities && data.user.identities.length === 0) {
        console.log('⚠️ 이메일이 이미 사용 중입니다.');
        alert('⚠️ 이미 가입된 이메일입니다.');
        return '⚠️ 이미 가입된 이메일입니다.';
      }

      // ✅ 정상적인 회원가입 완료
      alert(
        `✅ 가입 신청 메일이 발송되었습니다!\n📩 ${email} 이메일을 확인하고 인증을 완료하세요.`
      );
      return `✅ 가입 신청 메일이 발송되었습니다! 📩 ${email} 이메일을 확인하고 인증을 완료하세요.`;
    } catch (error) {
      console.error('회원가입 오류:', error);
      alert('⚠️ 회원가입 중 오류가 발생했습니다.');
      return '⚠️ 회원가입 중 오류가 발생했습니다.';
    } finally {
      setLoading(false);
    }
  };

  return {
    user,
    loading,
    registerWithEmail,
  };
}
