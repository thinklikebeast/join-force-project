import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import First from '../components/First'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>join-force</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="sm:flex md-flex">
       <Image src="/welcome.jpg" alt="join-force" width={384} height={288} />
       <First/>
      </div>
    </div>
  )
}

export default Home
