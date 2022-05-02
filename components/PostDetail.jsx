import React from 'react'
import moment from 'moment'
import Svg from './util/Svg'

function PostDetail({post}) {
  return (
    <div>
        <div className='post-detail bg-white shadow-lg rounded-lg lg:p-4 pb-12 mb-8'>
            <div className='relative overflow-hidden shadow-md mb-1'>
                <img
                    src={post.featuredImage.url}
                    alt={post.title}
                    className="object-top h-full w-full"
                />
            </div>
            <div className="post-detail__header flex items-center place-content-between mb-1 w-full">
                <div className="post-detail_author py-2 px-4 flex items-center justify-start">
                    <img src={post.author.photo.url} alt={post.author.name} height="55px" width="55px" className="align-middle rounded-full transition duration-300 hover:scale-125" />

                    <div className='post-card__date font-medium text-gray-700 whitespace-nowrap'>
                        <p className='inline align-middle  text-gray-700 ml-2 text-xl'>{post.author.name}</p>
                        <div className="post-card__date">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline mx-1 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <span className='text-right'>
                                {moment(post.createdAt).format('MMM. DD, YYYY')}
                            </span>
                        </div>
                    </div>
                </div>
                <div className='post-detail_header-links py-2 px-4 flex items-center justify-end gap-1'>
                    <Svg name="facebook" width='1.9rem' height='1.9rem' />
                    <Svg name="telegram" width='1.9rem' height='1.9rem' />
                    <Svg name="twitter" width='1.9rem' height='1.9rem' />
                    <Svg name="shareURL" width='1.9rem' height='1.9rem' />
                </div>
            </div>
            <h1 className='mb-8 text-3xl font-semibold px-4'>{post.title}</h1>
        </div>
    </div>
  )
}

export default PostDetail