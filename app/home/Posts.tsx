import React from 'react'
import { PrismaClient } from '@prisma/client'
import PostCard from './PostCard'

const prisma = new PrismaClient()

const Posts = async () => {
    const posts = await prisma.post.findMany({
    take: 3,
    orderBy: {
      createdAt: 'desc'
    },
  },
  )

  const bgClasses = [
    'bg-blue-400',
    'bg-orange-300',
    'bg-neutral-500',
  ];

  return (
    <div><h2 className='text-4xl text-center mt-6'>Popüler</h2>
      <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4'>
        {posts.map((post, index) => (
          <PostCard key={post.id} post={post} className={bgClasses[index]} />
        ))}
      </div>
    </div>
  )
}

export default Posts;