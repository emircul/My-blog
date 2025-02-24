import React from 'react'
import NewsletterSubscribe from './NewsletterSubscribe';
import Image from 'next/image';

const CalloutSection = () => {
  return (
    <div className='border-t-2 border-b-2 bg-indigo-400 mt-12 p-8'><div className='grid grid-cols-12 container'>
      <div className='col-span-8 flex flex-col place-self-center'>
        <h2 className='semi-bold text-4xl mb-5'>Haberiniz Olsun</h2>
        <p className='max-w-2xl mb-5'>İster hareket halindeyken hızlıca bilgi edinmek isteyen meşgul kullanıcılar, ister bir konuya derinlemesine dalmayı tercih edenler için ideal olan, özenle seçilmiş makalelerimizi okuyarak en son teknoloji haberleri ve duyurularından haberdar olun. Kısa özetlerden derinlemesine özelliklere kadar geniş bir yelpazede sunulmaktadır.</p>
        <NewsletterSubscribe />
      </div>
      <div className='col-span-4 rounded-full border-2 w-[100px] h-[100px] md:w-[300px] md:h-[300px] relative self-center'>
        <Image src="/avatar.png" alt="avatar" width={300} height={300} className='absolute transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2' />
      </div>
    </div></div>
  )
}

export default CalloutSection