import React from 'react';
import { getPosts, getPostDetails} from '../../services';
import { PostDetail, Categories, PostWidget, Author, Comments, CommentsForm} from '../../components';

const PostDetails = ({ post }: {post: {categories: Array<any>,author: string, slug: string}}) => {
    console.log(post)
  return (
    <div className="post-details container mx-auto px-10 mb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="col-span-1 lg:col-span-8">
                <PostDetail post={post} />
                <Author author={post.author} />
                <CommentsForm slug={post.slug} />
                <Comments slug={post.slug} />
            </div>
            <div className="col-span-1 lg:col-span-4">
                <div className='relative lg:sticky top-8'>
                    <PostWidget slug={post.slug} categories={post.categories.map((category) => category.slug)}/>
                    <Categories />
                </div>
            </div>
        </div>
    </div>
  )
}

export default PostDetails

export async function getStaticProps({ params }: {params: {slug:string}}) {
    const data = (await getPostDetails(params.slug));

    return {
        props: { post: data }
    }
}

export async function getStaticPaths() {
    const posts = await getPosts();

    return {
        paths: posts.map(({ node: { slug }} : {node:{slug:string}}) => ({ params: { slug }})),
        fallback: false,
    }
}
