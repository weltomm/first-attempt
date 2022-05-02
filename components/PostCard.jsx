import React from 'react'
import moment from 'moment'
import Link from 'next/link'
import Svg from './util/Svg'

const PostCard = ({ post }) => {
  return (
    <div className={post.widepost ? "post-card bg-white flex md:col-span-2 flex-col flex-wrap shadow-lg rounded-lg pb-6" : "post-card bg-white flex  flex-col flex-wrap shadow-lg rounded-lg pb-6"}>
        <div className="post_card-head relative mb-2">
            <img src={post.featuredImage.url} alt={post.title} className="title_ava object-center h-60 mb-2 w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg shadow-md" />
            <div className="post_card-info px-2 flex-wrap container flex justify-between">
                <div className="author flex justify-start">
                    <img src={post.author.photo.url} alt={post.author.name} height="45px" width="45px" className="align-middle rounded-full transition duration-300 hover:scale-125" />
                    <p className='inline align-middle leading-4  text-gray-700 ml-2 text-lg'>
                        <span className='block text-xs whitespace-nowrap mb-1'>
                            <Svg name="calendar" />
                            <span className='post_card-date text-right  text-sm pr-1'>
                                {moment(post.createdAt).format('MMM. DD, YYYY')}
                            </span>
                        </span>
                        <span className='pl-1'>
                            {post.author.name}
                        </span>
                    </p>
                </div>

                <div className='w-auto ml-auto text-gray-700 whitespace-nowrap container flex items-center justify-center'>
                    <div className='post_card-social_links container flex items-center justify-end gap-1'>
                        <Svg name="facebook" width='1.6rem' height='1.6rem' />
                        <Svg name="telegram" width='1.6rem' height='1.6rem' />
                        <Svg name="twitter" width='1.6rem' height='1.6rem' />
                        <Svg name="shareURL" width='1.6rem' height='1.6rem' />
                    </div>
                </div>
            </div>

            <h2 className='post-card__title text-teal-900 duration-300 text-left my-1 px-6 cursor-pointer hover:text-teal-300 text-2xl font-semibold'>
                <Link href={`/post/${post.slug}`}>
                    {post.title}
                </Link>
            </h2>
        </div>
        <div className="post-card__body block flex grow text-center items-center justify-between w-full px-2">
            <div className='post__excerpt flex flex-col w-full h-full items-start justify-between'>
                <p className='px-4 text-left text-md text-gray-700 font-normal mb-8'>{post.excerpt}</p>
                <a className='self-center text-center'>
                    <Link href={`/post/${post.slug}`}>
                        <span className='transition duration-500 transform hover:opacity-70 inline-block bg-indigo-700 text-md font-medium rounded-full text-white px-4 py-1 cursor-pointer'>
                            Continue Reading
                        </span>
                    </Link>
                </a>
            </div>
        </div>
    </div>
  )
}

export default PostCard