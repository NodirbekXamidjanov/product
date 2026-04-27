import type React from "react";
import { db } from "../../database/db";
import { ProductCard } from "../components"
import { FilterSidebar } from "../components/filter-products"

const items = [
    { label: "Apple Watch Series 11", img: "public/watch_s11_f3d43534c.svg" },
    { label: "Apple Watch SE 3", img: "public/watch_se_5af4fbe6c.svg" },
    { label: "Apple Watch Ultra 3", img: "public/watch_ultra_c6d26b96b.svg" },
    { label: "Apple Watch Nike", img: "public/watch_nike_095f6983c.svg" },
    { label: "Apple Watch Hermes", img: "public/watch_hermes_e6bd784c6.svg" },
    { label: "Bands", img: "public/watch_bands_0e3eb7a2d.svg" },
    { label: "Accsessories", img: "public/accessories_watch_6ad7b5f53.svg" },
];

interface AppleWatchProps {
    store?: boolean,
    width?: number
}

export const AppleWatch = ({ store = false, width = 0 }: AppleWatchProps): React.ReactNode => {
    const data = width ? db.filter(db_item => db_item.code === "watch").slice(0, width) : db.filter(db_item => db_item.code === "watch")
    return (
        <div className="page-transition">
            <div className="w-full h-auto bg-white m-auto">
                <h2 className="ml-[13%] text-[60px] pt-12 font-semibold ">
                    Apple Watch
                </h2>
                <div className="pt-12 w-[90%] ">
                    <ul className="flex gap-5 justify-center items-center m-0 p-0 list-none">
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

                                <span className="text-[14px] px-5 text-[#1d1d1f] text-center">
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