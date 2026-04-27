import { Search, ShoppingBag } from "lucide-react"

export const Navbar: React.FC = (): React.ReactNode => {
  return (
    <nav className="bg-[rgba(250,250,252,0.8)] sticky z-9999 backdrop-saturate-180 backdrop-blur-[20px]  block m-0 top-0 left-0 right-0">

      <div className=" m-auto flex justify-center max-w-[1024px] w-full; h-[44px]">
        <ul className="flex w-[60%] justify-between gap-5 text-[13px] text-[#323232] items-center">
          <li className=" leading-none tracking-[-.01em]">
            <a href="/">
              {/* <img src="/image.png" className="w-5 rounded-[50%]" alt="" /> */}
              <span className="font-semibold p-1 border border-[#28292b] rounded-md">PRODUCT</span>
            </a>
          </li>
          <li>
            <a href="/store">Store</a>
          </li>
          <li>
            <a href="/mac">Mac</a>
          </li>
          <li>
            <a href="/iphone">Iphone</a>
          </li>
          <li>
            <a href="/ipad">Ipad</a>
          </li>
          <li>
            <a href="/applewatch">Apple Watch</a>
          </li>
          <li>
            <a href="/pc" >PC</a>
          </li>
          <li className="mt-1">
            <button>
              <Search className="cursor-pointer" size={16} strokeWidth={1.5} />
            </button>
          </li>
          <li className="mt-1 ">
            <button><ShoppingBag className="cursor-pointer" size={16} strokeWidth={1.5} /></button>
          </li>
        </ul>
      </div>
      
    </nav>
  )
}
