import Link from 'next/link'
export default function First(){
  return(
    <div>
      <h1 className="text-7xl">JOIN FORCE</h1>
      <h1 className="text-2xl">join force is where your ideas become products.
      </h1>
      <h1 className="text-2xl">here you can meet like minded people who can</h1>
      <h1 className="text-2xl">work with you on you new website,app,software,business and more.</h1>
      <h1 className="text-2xl">ON join forces you can find partners to grow wtih..</h1>
      <h1 className="text-2xl">working alone won't let you far but with a team you can reach a start..</h1>
      <Link href="/second">
        <button className="bg-blue-500 mt-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Start Now
        </button>
      </Link>
    </div>
  )
}
