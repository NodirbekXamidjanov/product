import { Button } from "../components/ui/button"
import { CategoryFilter, ProductCard, StoreMenu } from "./components"
import { db } from "../database/db"
import { useNavigate } from "react-router"

export const Home: React.FC = (): React.ReactNode => {
    const navigate = useNavigate()
    console.log(db);
    
    return (
        <div className="page-transition">
            <p className="leading-5 font-medium text-center tracking-[-.001em] text-[12px] text-[#323232] pt-2 pb-2 ">PRODUCT - Professional Yondashuv • Faqat rasmiy Apple • Professional PC kompyuterlari</p>
            <section className="flex flex-col gap-3">
                <div className="bg-[url('/hero_iphone_family__fuz5j2v5xx6y_large.jpg')] cursor-pointer bg-center bg-no-repeat w-full min-h-[580px] text-center pt-12 relative group">
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500" />
                    <div className="relative z-10">
                        <h2 className="text-[56px] font-semibold">iPhone</h2>
                        <p className="mt-[6px] text-[28px] font-normal">So'ngi iPhone tarkibi bilan tanishing.</p>
                        <Button variant='outline' onClick={() => navigate("/iphone")} className="mt-6 px-6 py-2 rounded-full cursor-pointer text-white hover:bg-white hover:text-black text-sm font-medium opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                            Yaqinroq qarash →
                        </Button>
                    </div>
                </div>

                <div className="bg-[url('/hero_macbook_neo__gnm3snkti4a6_large.jpg')] cursor-pointer bg-center bg-no-repeat w-full min-h-[580px] text-center pt-12 relative group">
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500" />
                    <div className="relative z-10">
                        <h2 className="text-[56px] font-semibold">MacBook</h2>
                        <p className="mt-[6px] text-[28px] font-normal">Ajablanarli Mac. Ajablanarli Narx.</p>
                        <Button variant='outline' onClick={() => navigate("/mac")} className="mt-6 px-6 py-2 rounded-full cursor-pointer text-white hover:bg-white hover:text-black text-sm font-medium opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                            Yaqinroq qarash →
                        </Button>
                    </div>
                </div>

                <div className="bg-[url('/promo_ipad_air_m4__f9ie3h3pzr6m_large.jpg')] cursor-pointer bg-cover bg-center bg-no-repeat w-full min-h-[580px] text-center pt-12 relative group">
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500" />
                    <div className="relative z-10">
                        <h2 className="text-[56px] font-semibold">iPad Air</h2>
                        <p className="mt-[6px] text-[28px] font-normal">Endi M4 tomonidan super zaryadlangan.</p>
                        <Button variant='outline' onClick={() => navigate("/ipad")} className="mt-6 px-6 py-2 rounded-full cursor-pointer text-white hover:bg-white hover:text-black text-sm font-medium opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                            Yaqinroq qarash →
                        </Button>
                    </div>
                </div>

                <div className="flex gap-3">
                    <div className="bg-[url('/promo_apple_watch_series_11__b63hxviqvonm_large.jpg')] cursor-pointer bg-center bg-no-repeat w-full min-h-[580px] text-center pt-12 relative group">
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500" />
                        <div className="relative z-10">
                            <h2 className="text-[56px] font-semibold">Watch SERIES 11</h2>
                            <p className="mt-[6px] text-[28px] font-normal">Sog'ligingizni tomosha qilishni zamonaviy usuli.</p>
                            <Button variant='outline' onClick={() => navigate("/applewatch")} className="mt-6 px-6 py-2 rounded-full cursor-pointer text-white hover:bg-white hover:text-black text-sm font-medium opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                                Yaqinroq qarash →
                            </Button>
                        </div>
                    </div>

                    <div className="bg-[url('/promo_ipad_air_m4__f9ie3h3pzr6m_large.jpg')] cursor-pointer bg-center bg-no-repeat w-full min-h-[580px] text-center pt-12 relative group">
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500" />
                        <div className="relative z-10">
                            <h2 className="text-[56px] font-semibold">AirPods Pro 3</h2>
                            <p className="mt-[6px] text-[28px] font-normal">Dunyodagi eng yaxshi Active Noise bekor qilish.</p>
                            <Button variant='outline' onClick={() => navigate("/airpods")} className="mt-6 px-6 py-2 rounded-full cursor-pointer text-white hover:bg-white hover:text-black text-sm font-medium opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                                Yaqinroq qarash →
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
            <section className="mt-[10px]">
                <StoreMenu />

                <div className="px-3">
                    <CategoryFilter />
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-items-center pt-1">
                        {db.map((db_item) => (
                            <ProductCard
                                key={db_item.id}
                                id={db_item.id}
                                img={db_item.img}
                                model={db_item.model}
                                price={db_item.price}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </div>

    )
}
