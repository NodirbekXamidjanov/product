import { useState, useEffect, useRef } from "react";

const images = [
    "https://prod-cdn.prod.asbis.io/s3size/el:t/f:webp/rt:fill/w:900/plain/s3://cms/product/a3/44/a34423b7b08300fde0625964a0130f66/250915140035204152.webp",
    "https://prod-cdn.prod.asbis.io/s3size/el:t/f:webp/rt:fill/w:900/plain/s3://cms/product/fd/0c/fd0c3a2ac586503cfa3bdecf1f0a8b9c/250915140035223282.webp",
    "https://prod-cdn.prod.asbis.io/s3size/el:t/f:webp/rt:fill/w:900/plain/s3://cms/product/d7/36/d736e36c48727e1118cf0840429d4571/250915140035245690.webp",
    "https://prod-cdn.prod.asbis.io/s3size/el:t/f:webp/rt:fill/w:900/plain/s3://cms/product/bb/3a/bb3a998e402de8aa3b6246a47e950de5/250915140035270054.webp",
    "https://prod-cdn.prod.asbis.io/s3size/el:t/f:webp/rt:fill/w:900/plain/s3://cms/product/a5/fb/a5fbe032448557de72ad2a406a4ac633/250915140035286622.webp",
    "https://prod-cdn.prod.asbis.io/s3size/el:t/f:webp/rt:fill/w:900/plain/s3://cms/product/b6/15/b615cf9115ba769857e0e2d99b49d630/250915140035315698.webp",
    "https://prod-cdn.prod.asbis.io/s3size/el:t/f:webp/rt:fill/w:900/plain/s3://cms/product/3f/6d/3f6d9919916a6b670582e90692a99c5a/250915140035339174.webp",
    "https://prod-cdn.prod.asbis.io/s3size/el:t/f:webp/rt:fill/w:900/plain/s3://cms/product/d0/ad/d0ad60cdb2b02fa10f036a671d15f660/250915140035365495.webp",
    "https://prod-cdn.prod.asbis.io/s3size/el:t/f:webp/rt:fill/w:900/plain/s3://cms/product/1d/a8/1da825a057809fbe29f545685d377b09/250915140035383999.webp",
    "https://prod-cdn.prod.asbis.io/s3size/el:t/f:webp/rt:fill/w:900/plain/s3://cms/product/c6/b1/c6b11d03c145d0fd42a780a4247327e0/250915140035415697.webp",
];

const storageOptions = ["256 ГБ", "512 ГБ", "1 ТБ", "2 ТБ"];

const storagePrices: Record<string, number> = {
    "256 ГБ": 21399000,
    "512 ГБ": 24899000,
    "1 ТБ": 28399000,
    "2 ТБ": 31899000,
};

const colorOptions = [
    { name: "Серебристый", hex: "#E8E8E8", border: "#AAAAAA" },
    { name: "Cosmic Orange", hex: "#D96B35", border: "#A8501F" },
    { name: "Deep Blue", hex: "#2B4A7C", border: "#1A3260" },
    { name: "Чёрный", hex: "#222222", border: "#000000" },
];

const specs = [
    { label: "Дисплей", value: "6,9″ OLED Super Retina XDR, 460 ppi, 120 Гц ProMotion" },
    { label: "Чип", value: "Apple A19 Pro, 6-ядерный" },
    { label: "Камеры", value: "48 Мп × 3 (основная, ультраширокая, телефото), зум 8×" },
    { label: "Фронтальная", value: "18 Мп Center Stage" },
    { label: "Аккумулятор", value: "До 39 часов воспроизведения видео" },
    { label: "Wi-Fi", value: "Wi-Fi 7 (802.11be)" },
    { label: "Bluetooth", value: "6.0" },
    { label: "USB", value: "USB-C, стандарт USB 3" },
    { label: "SIM", value: "Dual SIM (eSIM)" },
    { label: "Навигация", value: "GPS, GLONASS, BeiDou, Galileo, QZSS, NAVIC" },
    { label: "Корпус", value: "Цельный кованый алюминий + Ceramic Shield 2" },
    { label: "Защита", value: "IP68" },
    { label: "ОС", value: "iOS 26" },
    { label: "Размеры", value: "163,4 × 78 × 8,75 мм, 233 г" },
    { label: "Гарантия", value: "12 месяцев" },
];

function formatPrice(price: number) {
    return price.toLocaleString("ru-RU") + " сум";
}

export function AboutProduct() {
    const [selectedImage, setSelectedImage] = useState(0);
    const [selectedStorage, setSelectedStorage] = useState("512 ГБ");
    const [selectedColor, setSelectedColor] = useState(0);
    const [showStickyBar, setShowStickyBar] = useState(false);
    const [prevScrollY, setPrevScrollY] = useState(0);
    const [stickyVisible, setStickyVisible] = useState(false);

    const heroRef = useRef<HTMLDivElement>(null);
    const price = storagePrices[selectedStorage];

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const heroBottom = heroRef.current ? heroRef.current.getBoundingClientRect().bottom : 0;

            // Show sticky bar when hero goes out of view
            if (heroBottom < 0) {
                setShowStickyBar(true);
                // Animate in from top
                if (!stickyVisible) {
                    setStickyVisible(true);
                }
            } else {
                setShowStickyBar(false);
                setStickyVisible(false);
            }

            setPrevScrollY(scrollY);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [prevScrollY, stickyVisible]);

    return (
        <div className="min-h-screen bg-white font-sans">
            {/* NAVBAR */}

            {/* STICKY BUY BAR — Apple-style */}
            <div
                className={`fixed left-0 right-0 z-9999 bg-white/95 backdrop-blur-md border-b border-gray-200 transition-all duration-300 ${showStickyBar ? "top-0 translate-y-0 opacity-100" : "-top-20 opacity-0 pointer-events-none"
                    }`}
                style={{ boxShadow: showStickyBar ? "0 1px 20px rgba(0,0,0,0.08)" : "none" }}
            >
                <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                        <span className="font-medium text-gray-900 text-sm">iPhone 17 Pro Max</span>
                        <span className="text-gray-400 text-xs">|</span>
                        <span className="text-gray-600 text-sm">{selectedStorage}</span>
                        <span className="text-gray-400 text-xs">·</span>
                        <span className="text-gray-600 text-sm">{colorOptions[selectedColor].name}</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <span
                            className="font-semibold text-gray-900 text-sm tabular-nums transition-all duration-300"
                            key={price}
                        >
                            {formatPrice(price)}
                        </span>
                        <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-1.5 rounded-full transition-colors">
                            Sotib olish
                        </button>
                    </div>
                </div>
            </div>

            {/* HERO SECTION */}
            <div ref={heroRef} className="pt-14">
                <div className="max-w-6xl mx-auto px-6 py-10">
                    <div className="flex flex-col lg:flex-row gap-10">

                        {/* LEFT — images */}
                        <div className="flex-1 flex flex-col gap-4">
                            <div className="aspect-square bg-gray-50 rounded-2xl overflow-hidden flex items-center justify-center">
                                <img
                                    src={images[selectedImage]}
                                    alt="iPhone 17 Pro Max"
                                    className="w-full h-full object-contain p-4 transition-opacity duration-200"
                                />
                            </div>
                            <div className="flex gap-2 overflow-x-auto pb-1">
                                {images.map((img, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setSelectedImage(i)}
                                        className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${i === selectedImage ? "border-blue-500" : "border-transparent"
                                            }`}
                                    >
                                        <img src={img} alt="" className="w-full h-full object-cover" />
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* RIGHT — product info */}
                        <div className="lg:w-80 max-w-[328px] flex flex-col gap-6">
                            <div>
                                <h1 className="text-4xl font-semibold text-gray-900 leading-tight">
                                    iPhone 17 Pro Max
                                </h1>
                            </div>

                            {/* Price */}
                            <div>
                                <p
                                    className="text-3xl font-bold text-gray-900 tabular-nums transition-all duration-300"
                                    key={price}
                                >
                                    {formatPrice(price)}
                                </p>
                                <p className="text-xs text-gray-500 mt-1">Рассрочка доступна</p>
                            </div>

                            {/* Storage filter */}
                            <div>
                                <p className="text-sm font-medium text-gray-700 mb-2">Память</p>
                                <div className="flex flex-col gap-2">
                                    {storageOptions.map((opt) => (
                                        <button
                                            key={opt}
                                            onClick={() => setSelectedStorage(opt)}
                                            className={`px-4 py-6 rounded-xl text-sm border transition-all ${selectedStorage === opt
                                                ? "border-blue-500 "
                                                : "border-gray-300"
                                                }`}
                                        >
                                            <span className="flex justify-between items-center">
                                                <span className="text-[17px] font-semibold">{opt}</span>
                                                <span>{storagePrices[opt]} <br /> dan boshlab</span>
                                            </span>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Color filter */}
                            <div>
                                <p className="text-sm font-medium text-gray-700 mb-2">
                                    Цвет — <span className="font-normal text-gray-500">{colorOptions[selectedColor].name}</span>
                                </p>
                                <div className="flex gap-2">
                                    {colorOptions.map((c, i) => (
                                        <button
                                            key={i}
                                            onClick={() => setSelectedColor(i)}
                                            title={c.name}
                                            className={`w-8 h-8 rounded-full transition-all ${selectedColor === i ? "ring-2 ring-blue-500 ring-offset-2" : ""
                                                }`}
                                            style={{ backgroundColor: c.hex, border: `1.5px solid ${c.border}` }}
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* Buy button */}
                            <button className="w-full bg-blue-600 hover:bg-blue-700 active:scale-[0.99] text-white font-medium py-3 rounded-xl transition-all text-sm">
                                Rasmiylashtirish
                            </button>

                            <button className="w-full border border-gray-300 hover:border-gray-400 text-gray-700 font-medium py-3 rounded-xl transition-all text-sm">
                                Savatga qo'shish
                            </button>

                            {/* Short highlights */}
                            <div className="border-t border-gray-100 pt-4 flex flex-col gap-2">
                                {[
                                    "Чип A19 Pro — самый мощный в истории iPhone",
                                    "Цельный корпус из кованого алюминия",
                                    "Все 3 камеры 48 Мп, зум 8× оптического качества",
                                    "До 39 часов воспроизведения видео",
                                    "iOS 26 с новым дизайном Liquid Glass",
                                ].map((f, i) => (
                                    <div key={i} className="flex items-start gap-2 text-sm text-gray-600">
                                        <span className="mt-0.5 text-blue-500 flex-shrink-0">✓</span>
                                        <span>{f}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* DESCRIPTION */}
            <div className="max-w-5xl mx-auto px-6 py-10 border-t border-gray-100">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Описание</h2>
                <p className="text-gray-600 leading-relaxed text-sm max-w-2xl">
                    iPhone 17 Pro Max — самый мощный iPhone в истории. Великолепный дисплей 6,9 дюйма,
                    цельный корпус из кованого алюминия, чип A19 Pro, все камеры на задней панели 48 Мп
                    и лучшее время автономной работы среди всех iPhone.
                </p>
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl">
                    {[
                        { title: "Ceramic Shield 2", desc: "Задняя панель в 4× прочнее к трещинам, передняя в 3× к царапинам" },
                        { title: "A19 Pro + испарение", desc: "До 40% стабильнее под нагрузкой по сравнению с A18 Pro" },
                        { title: "Зарядка до 50% за 20 мин", desc: "Цельный корпус позволил существенно увеличить аккумулятор" },
                        { title: "Wi-Fi 7 + Bluetooth 6", desc: "Передовое подключение с 5G и eSIM" },
                    ].map((item, i) => (
                        <div key={i} className="bg-gray-50 rounded-xl p-4">
                            <p className="font-medium text-gray-900 text-sm mb-1">{item.title}</p>
                            <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* SPECS TABLE */}
            <div className="max-w-5xl mx-auto px-6 py-10 border-t border-gray-100">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Характеристики</h2>
                <div className="divide-y divide-gray-100">
                    {specs.map((spec, i) => (
                        <div key={i} className="flex py-3 gap-4">
                            <span className="text-gray-400 text-sm w-36 flex-shrink-0">{spec.label}</span>
                            <span className="text-gray-800 text-sm flex-1">{spec.value}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* FOOTER */}
            <div className="border-t border-gray-100 bg-gray-50 py-8 mt-4">
                <div className="max-w-5xl mx-auto px-6 text-center text-xs text-gray-400">
                    © 2026 PRODUCT Uzbekistan — официальный Apple Premium Reseller
                </div>
            </div>
        </div>
    );
}