import type { NextPage } from 'next'
import Head from 'next/head'
import { PostCard, Categories, PostWidget } from '../components'
import { getPosts } from '../services'

interface HomeProps {
    posts?: Array<{
        node?: {
            title: string
        }
    }>;
}
interface PostWidgetProps {
    posts?: Array<{
        node?: {
            title: string
        }
    }>;
}

const Home: NextPage<HomeProps> = ({posts}) => {
  return (
    <div className="container mx-auto px-0 mb-8 w-full">
      <Head>
        <title>Weltomm | CMS Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='grid grid-cols-1 md:grid-cols-12 gap-1 xl:gap-6'>
        <div className='posts md:col-span-9 lg:col-span-9'>
            <div className="container grid-flow-row-dense grid gap-2 xl:gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {posts?.map(post => <PostCard post={post.node} key={post?.node?.title} />)}
            </div>
        </div>
        <div className='sidebar md:col-span-3 lg:col-span-3'>
            <div className='md:sticky relative top-8'>
                <PostWidget categories={undefined} slug={undefined} />
                <Categories />
            </div>
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps() {
    const posts = (await getPosts()) || [];

    return {
        props: { posts }
    }
}

export default Home
