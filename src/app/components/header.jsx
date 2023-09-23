import Link from "next/link";

export function Header() {
  return (
<header className="text-white bg-sky-500 m-100 h-20 flex items-center">

<Link className="font-bold text-2xl p-5 hover:bg-sky-700 ..."

 href="/"
 >
Index
</Link>


<Link  className="font-bold text-2xl p-5 hover:bg-sky-700 ..."
 href="/about"
 >
About
</Link>
  </header>
  
    
  );
}



