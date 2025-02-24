"use client";
import React, { useState } from 'react'

const NewsletterSubscribe = () => {
  const [subscribed, setSubscribed] = useState<boolean>(false);

  async function create(formData: FormData) {
    const email = formData.get('email');
    await fetch('/api/beehiiv', {
      method: 'POST',
      body: JSON.stringify({ email }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
      .then(data => {
        console.log(data);
        if (data) {
          setSubscribed(true);
        }
      }).catch(err => console.log(err));
  }

  if (subscribed) return (
    <div className='flex flex-col mt-4'><h2 className='text-2xl'>Abone olduğunuz için teşekkür ederiz!</h2><p>&apos; En güncel teknoloji haberleri ve duyuruları e-posta kutunuza gelecek.</p></div>
  )

  return (
    <form action={create}>
      <div>
        <input type="email" name="email" id="email" placeholder='E-posta adresinizi girin' className='border-2 rounded-full rounded-r-none py-3 px-4 bg-gray-200 text-gray-800 outline-none placeholder-gray-500 focus:bg-gray-100 flex-1 p-2' />
        <button className=' border-2 rounded-full rounded-l-none py-3 px-4 bg-gray-900 text-gray-100 font-semibold uppercase hover:bg-gray-800'>Abone Ol</button>
      </div>
    </form>
  )
}

export default NewsletterSubscribe