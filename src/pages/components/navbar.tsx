import { Search, ShoppingBag } from "lucide-react"

export const Navbar: React.FC = (): React.ReactNode => {
  return (
    <nav className="bg-[rgba(250,250,252,0.8)] sticky z-9999 backdrop-saturate-180 backdrop-blur-[20px]  block m-0 top-0 left-0 right-0">

      <div className=" m-auto flex justify-center max-w-[1024px] w-full; h-[44px]">
        <ul className="flex w-[60%] justify-between gap-5 text-[13px] text-[#323232] items-center">
          <li className=" leading-none tracking-[-.01em]">
            <a href="#">
              <img src="/image.png" className="w-5 rounded-[50%]" alt="" />
            </a>
          </li>
          <li>
            <a href="#">Store</a>
          </li>
          <li>
            <a href="#">Mac</a>
          </li>
          <li>
            <a href="#">Iphone</a>
          </li>
          <li>
            <a href="#">Ipad</a>
          </li>
          <li>
            <a href="#">Apple Watch</a>
          </li>
          <li>
            <a href="#">PC</a>
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
