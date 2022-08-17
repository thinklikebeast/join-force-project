import Link from "next/link"
export default function Second(){
  return(
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
       <Link href="/checkout">
         <button className="p-20 bg-opacity-50 w-500 bg-black rounded-2xl">
           <h1>Check out</h1>
         </button>
	</Link>
        <Link href="/makeone">
          <button className="p-20 bg-opacity-50 w-500 bg-black mt-5 rounded-2xl">
	    <h1>Make One</h1>
          </button>
	</Link>
    </div>
  )
}
