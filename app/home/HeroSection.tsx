import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import heroLogo from '../../public/phone.svg';

const HeroSection = () => {
  return (
    <div className="border-b bg-[#EEF2ED]">
      <section className='grid container grid-cols-1 sm:grid-cols-12 pt-6 pb-8'>
        <div className='col-span-7 w-full place-self-center text-center sm:text-left justify-self-start'>
          <h1 className='text-2xl sm:text-4xl md:text-6xl md:leading-normal'>Yoğun İnsanlar İçin Teknoloji Haberleri</h1>
          <h2>En son teknoloji haberleri ve duyurularından haberdar olun..</h2>
          <ul>
            <li><span className='mr-2'>✔️</span>Yazılım Geliştirme</li>
            <li><span className='mr-2'>✔️</span>Yapay Zeka</li>
            <li><span className='mr-2'>✔️</span>Veri Bilimi</li>
          </ul>
          <Link href="/blog/all" className='block w-fit bg-indigo-500 px-4 py-2 sm:px-6 sm:py-4 mt-3 border-2 rounded shadow-[0.25rem_0.25rem_0px_0px_rgba(0,0,0,1)] text-white'>Makalelere Göz At</Link>
        </div>
        <div className='col-span-5 place-self-center'>
          <Image src= {heroLogo} width={300} height={300} alt="Person walking" />
        </div>
      </section>
    </div>
  )
}

export default HeroSection