'use client';

import Button from '@/components/button';
import Link from 'next/link';
import { useAccessTokenStore } from '@/store';
import { useRouter } from 'next/navigation';

export default function TopBar() {
  const { logout } = useAccessTokenStore();
  const router = useRouter();

  return (
    <div className="top-bar bg-black text-white py-2 px-6 flex items-center justify-between">
      <nav className="flex items-center gap-4 text-sm xl:gap-6">
        <Link href="/home" className="text-sm hover:text-gray-400">
          Home
        </Link>

        <Link href="/users" className="text-sm hover:text-gray-400">
          Usuários
        </Link>
      </nav>

      <Button
        variant="outline"
        className="text-sm"
        onClick={() => {
          logout();
          router.push('/login');
        }}
      >
        Sair
      </Button>
    </div>
  );
}
