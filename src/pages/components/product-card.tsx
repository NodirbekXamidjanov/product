import { Minus, Plus } from "lucide-react"
import { useState, type ReactNode } from "react"
import { useNavigate } from "react-router"


type ProductCardProps = {
    id: string
    img: string
    model: string
    price: string
}

export const ProductCard = ({ img, model, price }: ProductCardProps): ReactNode => {
    const [count, setCount] = useState<number>(0)
    const showProductBag = count === 0
    const showAddToBag = count > 0
    const navigate = useNavigate()


    return (
        <div className="flex flex-col items-center" style={{ fontFamily: "-apple-system, 'SF Pro Display', sans-serif" }}>

            {/* Rasm */}
            <div onClick={() => navigate("/about-product")} className="w-full rounded-[18px] overflow-hidden bg-white cursor-pointer group" style={{ aspectRatio: "3/2.2" }}>
                <img
                    src={img}
                    alt={model}
                    className="w-full h-full object-contain pt-3 transition-transform duration-300 group-hover:scale-110"
                />
            </div>


            {/* Model va narx */}
            <div className="text-center mt-5 min-h-[90px]">
                <h2 className="text-[18px] font-semibold text-[#1d1d1f] tracking-[-0.5px] m-0 mb-[10px]">
                    {model}
                </h2>
                <p className="text-[16px] font-medium text-[#1d1d1f] m-0 leading-relaxed">
                    {price} so'm
                </p>
            </div>

            {/* Tugmalar */}
            <div className="flex items-center gap-[14px] mt-[22px] h-9 ">
                <button
                    onClick={() => setCount(prev => prev + 1)}
                    className={`text-[#0071e3] text-[14px] no-underline hover:underline ${showProductBag ? "block" : "hidden"}`}>
                    Savatga ›
                </button>
                <div className={`flex items-center gap-[14px] text-[26px] border rounded-[6px] px-3 ${showAddToBag ? "block" : "hidden"}`}>
                    <button onClick={() => setCount(prev => prev - 1)} className="opacity-50"><Minus size={"14px"}/></button>
                    <span>{count}</span>
                    <button onClick={() => setCount(prev => prev + 1)} className="opacity-50"><Plus size={"14px"}/></button>
                </div>
            </div>

        </div>
    )
}