import React from 'react'
import NewBlogForm from './NewBlogForm'
import { getCategories } from '@/app/actions/getCategories'

const Page = async () => {
  const categories = await getCategories();

  return (
    <div>
      <NewBlogForm blogCategories={categories} />
    </div>
  )
}

export default Page