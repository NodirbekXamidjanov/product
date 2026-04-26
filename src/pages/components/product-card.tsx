import type { ReactNode } from "react"


type ProductCardProps = {
    id: string
    img: string
    model: string
    price: string
}

export const ProductCard = ({ img, model, price }: ProductCardProps): ReactNode => {
    return (
        <div className="flex flex-col items-center w-[280px]" style={{ fontFamily: "-apple-system, 'SF Pro Display', sans-serif" }}>

            {/* Rasm */}
            <div className="w-full rounded-[18px] overflow-hidden cursor-pointer group" style={{ aspectRatio: "4/3.2" }}>
                <img
                    src={img}
                    alt={model}
                    className="w-full h-full object-contain p-4 transition-transform duration-300 group-hover:scale-110"
                />
            </div>


            {/* Model va narx */}
            <div className="text-center mt-5">
                <h2 className="text-[18px] font-semibold text-[#1d1d1f] tracking-[-0.5px] m-0 mb-[10px]">
                    {model}
                </h2>
                <p className="text-[16px] font-medium text-[#1d1d1f] m-0 leading-relaxed">
                    {price} so'm
                </p>
            </div>

            {/* Tugmalar */}
            <div className="flex items-center gap-[14px] mt-[22px]">
                <a href="#" className="text-[#0071e3] text-[14px] no-underline hover:underline">
                    Savatga ›
                </a>
            </div>

        </div>
    )
}