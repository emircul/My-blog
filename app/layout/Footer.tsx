import React from 'react'
import linkedinIcon from '../../public/nav-icon1.svg'
import githubIcon from '../../public/nav-icon2.svg'
import Image from 'next/image'
import logo from '../../public/logo.svg'

const Footer = () => {
  return (
    <div className='bg-gray-800 text-white py-12 px-4'><div className='flex container justify-between'>
      <div className='flex flex-row items-center'>
        <div>
          <div className='mb-3'>
            <a href="https://emircul.me/" target="_blank">
              <Image src={logo} alt="logo" width={160} height={160} />
            </a>
          </div>
        </div>
      </div><div>
      <div className='flex space-x-1 mb-2 justify-end items-center'>
        <a href='https://www.linkedin.com/in/emircul' target="_blank" className='mr-3'>
          <Image src={linkedinIcon} alt="linkedin" width={32} height={32} />
        </a>
        <a href='https://github.com/emircul' target="_blank">
          <Image src={githubIcon} alt="github" width={32} height={32} />
        </a>
      </div>
      <div className='text-sm'>©  2025 Tüm Hakları Saklıdır</div>
      </div>
    </div></div>
  )
}

export default Footer