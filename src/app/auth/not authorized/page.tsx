'use client';

import { useRouter } from 'next/navigation';

export default function NotAuthorized() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-lg p-10 flex flex-col items-center gap-4 max-w-sm w-full">
        <img
          src="https://i.imgur.com/qIufhof.png"
          alt="not authorized"
          className="w-32 h-32 object-cover rounded-lg"
        />
        <h2 className="text-xl font-bold text-red-600 flex items-center gap-2">
          ✖ Anda belum login
        </h2>
        <p className="text-gray-500 text-sm text-center">Silakan login terlebih dahulu.</p>
        <button
          onClick={() => router.push('/auth/login')}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg"
        >
          ← Kembali
        </button>
      </div>
    </div>
  );
}