"use client"
import { useBlog } from '@/app/hooks'
import { FullBlog } from '@/components/FullBlog'
import { SkeletonCard } from '@/components/skeleton'
import { useParams } from 'next/navigation'

export default function Page() {
  const params = useParams()
  const id = parseInt(params.id as string, 10) // Convert the id to a number

  const { loading, blog } = useBlog({
    id: id // Ensure id is a number
  })

  if (loading || !blog) {
    return (
      <>
      <div className='mt-[120px]'>
        <SkeletonCard />
      </div>
      </>
    )
  }

  return (
    <>
      <FullBlog blog={blog} />
    </>
  )
}
