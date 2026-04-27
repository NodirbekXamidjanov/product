import type React from "react";
import { db } from "../../database/db";
import { ProductCard } from "../components"
import { FilterSidebar } from "../components/filter-products"

const items = [
    { label: "Model 5 Vent", img: "public/3e9957d9dee84b6a25d8df2b4ab87aaa.png" },
    { label: "Model 0 Flamingo", img: "public/7c913f04865950911b565929fc92dfc9.png" },
    { label: "Model 4 King Arthur", img: "public/8fa236462c3330fd17738dad3b8a19b2.png" },
    { label: "Model 4 Caliburn", img: "public/90e219504d202c2b4b85d11f4313d894.png" },
    { label: "Model 2 The Ark", img: "public/37207b9f3eb91aef3e42e84ea4c86f8a.png" },
    { label: "Modl 6 Bohemia", img: "public/408991b8467a56568ec44f6f0bded995.png" },
];

interface PcProps {
    store?: boolean,
    width?: number
}

export const Pc = ({ store = false, width = 0 }: PcProps): React.ReactNode => {
    const data = width ? db.filter(db_item => db_item.code === "pc").slice(0, width) : db.filter(db_item => db_item.code === "pc")
    return (
        <div className="page-transition">
            <div className="w-full h-auto bg-white m-auto">
                <h2 className="ml-[13%] text-[60px] mt-12 font-semibold ">
                    PC
                </h2>
                <div className="pt-12 w-[77%] ">
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
            <div className="w-full h-auto mt-6 bg-[#f5f5f7] px-3 flex gap-6">
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