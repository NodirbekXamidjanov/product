import { db } from "../../database/db";
import { Navbar, ProductCard } from "../components"
import { FilterSidebar } from "../components/filter-products"

const items = [
    { label: "PC", img: "public/nav_iphone_17pro__b8rt659h2ogi_large_2x.png" },
];

export const Pc = () => {
    const data = db.filter(db_item => db_item.code === "accsessories")
    return (
        <div>
            <Navbar />
            <div className="w-full h-auto bg-white m-auto">
                <h2 className="ml-[13%] text-[60px] mt-12 font-semibold ">
                    PC
                </h2>
                <div className="pt-12 w-[77%] ">
                    <ul className="flex gap-5 justify-center items-end m-0 p-0 list-none">
                        {items.map(({ label, img }) => (
                            <li
                                key={label}
                                className="flex flex-col center flex-1 min-w-[90px] max-w-[146px] px-2 pt-4 pb-5 cursor-pointer "
                            >
                                <img
                                    src={img}
                                    alt={label}
                                    className="w-full max-w-[98px] h-[70px] object-contain mb-3"
                                />

                                <span className="text-[12px] text-[#1d1d1f] text-center">
                                    {label}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="w-full h-auto pt-12 bg-[#f5f5f7] px-3 flex gap-6">
                <div className="">
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