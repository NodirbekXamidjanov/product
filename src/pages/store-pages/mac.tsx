import type React from "react";
import { db } from "../../database/db";
import { ProductCard } from "../components"
import { FilterSidebar } from "../components/filter-products";

const items = [
    { label: "MacBook Neo", img: "public/nav_mbn_fcdfdf35f_2x.png" },
    { label: "MacBook Air", img: "public/nav_mbp_0b36bc863_2x.png" },
    { label: "MacBook Pro", img: "public/nav_mba_8e00b3bdd_2x.png" },
    { label: "iMac", img: "public/nav_imac_24_fbf85926c_2x.png" },
    { label: "Mac mini", img: "public/nav_mac_mini_f628f615d_2x.png" },
    { label: "Mac Studio", img: "public/nav_mac_studio_fc7bb80c1_2x.png" },
    { label: "Displays", img: "public/nav_displays_e08c5b904_2x.png" },
    { label: "Accessories", img: "public/nav_accessories_c3e74ad3c_2x.png" },
];

interface MacProps {
    store?: boolean,
    width?: number
}

export const Mac = ({ store = false, width = 0 }: MacProps): React.ReactNode => {    
    const data = width ? db.filter(db_item => db_item.code === "mac").slice(0, width) : db.filter(db_item => db_item.code === "mac")
    return (
        <div className="page-transition">
            {/* <Navbar /> */}
            <div className="mac w-full h-auto bg-white m-auto">
                <h2 className="ml-[13%] text-[60px] pt-12 font-semibold ">
                    Shop Mac
                </h2>
                <div className="bg-white w-full pt-12">
                    <ul className="flex gap-5 justify-center items-end m-0 p-0 list-none">
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

            <div className="w-full h-auto mt-6 bg-[#f5f5f7] px-3 pb-6 flex gap-3 ">
                <div className={`sticky top-px h-[calc(100vh-1px)] ${store && "hidden"}`}>
                    <FilterSidebar />
                </div>
                <div className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-items-center pt-6">
                    {data.map((db_item) => (
                        <ProductCard id={db_item.id} img={db_item.img} model={db_item.model} price={db_item.price} />
                    ))}
                </div>
            </div>
        </div>

    )
}