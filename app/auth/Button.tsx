"use client";
import React from 'react'
import { signIn, signOut, useSession } from 'next-auth/react'
import Link from 'next/link';

export const Button = () => {
  const { data: session, status } = useSession()

  if (status === 'loading') {
    return <div>Yükleniyor...</div>
  }

  if (session) {
    return (
      <div className='flex items-stretch'>
        <Link href="/blog/new" className='mr-6 hover:underline self-center'>✍️ Bir gönderi yaz</Link>
        <button className="text-white bg-black p-4 cursor-pointer" onClick={(e) => {
          e.preventDefault()
          signOut()
        }}>Çıkış Yap</button>
      </div>
    )
  }
  return (
    <div onClick={() => signIn()} className="text-white bg-black p-4 cursor-pointer">Giriş Yap</div>
  )
}