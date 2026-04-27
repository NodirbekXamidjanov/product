import type React from "react";
import { db } from "../../database/db";
import { ProductCard } from "../components"
import { FilterSidebar } from "../components/filter-products"

const items = [
    { label: "iPad Pro", img: "public/ipad_pro_bd732ab83_2x.png" },
    { label: "iPad Air", img: "public/ipad_air_1ebbfa37b_2x.png" },
    { label: "iPad", img: "public/ipad_473e5c831_2x.png" },
    { label: "iPad mini", img: "public/ipad_mini_f62883aa9_2x.png" },
    { label: "Accsessories", img: "public/accessories_bf015339a_2x.png" },
];

interface IpadProps {
    store?: boolean,
    width?: number
}

export const Ipad = ({ store = false, width = 0 }: IpadProps): React.ReactNode => {
    const data = width ? db.filter(db_item => db_item.code === "ipad").slice(0, width) : db.filter(db_item => db_item.code === "ipad")
    return (
        <div className="page-transition">
            <div className="w-full h-auto bg-white m-auto">
                <h2 className="ml-[13%] text-[60px] pt-12 font-semibold ">
                    iPad
                </h2>
                <div className="pt-12 w-[67%] ">
                    <ul className="flex gap-5 justify-center items-center text-center m-0 p-0 list-none">
                        {items.map(({ label, img }) => (
                            <li
                                key={label}
                                className="flex flex-col items-center flex-1 min-w-[90px] max-w-[146px] px-2 pt-4 pb-5 cursor-pointer "
                            >
                                <img
                                    src={img}
                                    alt={label}
                                    className="w-full max-w-[98px] h-[70px] object-contain mb-3"
                                />

                                <span className="text-[14px] text-[#1d1d1f] text-center">
                                    {label}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="w-full h-auto mt-6 bg-[#f5f5f7] px-3 pb-6 flex gap-6">
                <div className={`sticky top-px h-[calc(100vh-1px)] ${store && "hidden"}`}>
                    <FilterSidebar />
                </div>
                <div className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 justify-items-center pt-6">
                    {data.map((db_item: { id: string, img: string, model: string, price: string }) => (
                        <ProductCard id={db_item.id} img={db_item.img} model={db_item.model} price={db_item.price} />
                    ))}
                </div>
            </div>
        </div>

    )
}