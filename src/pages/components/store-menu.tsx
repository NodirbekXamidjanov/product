import type React from "react";

const items = [
    { label: "Mac", img: "/store-card-13-mac-nav-202603.png", href: "/mac" },
    { label: "iPhone", img: "/store-card-13-iphone-nav-202509.png", href: "/iphone" },
    { label: "iPad", img: "/store-card-13-ipad-nav-202405.png", href: "/ipad" },
    { label: "Apple Watch", img: "/store-card-13-watch-nav-202509.png", href: "/applewatch" },
    { label: "Apple Vision Pro", img: "/store-card-13-vision-pro-nav-202401.png", href: "/vision-pro" },
    { label: "AirPods", img: "/store-card-13-airpods-nav-202509.png", href: "/airpods" },
    { label: "Accessories", img: "/store-card-13-accessories-nav-202603.png", href: "/accessories" },
    { label: "PC", img: "public/article-1280x720.3d69faa7.png", href: "/pc" },
];

export const StoreMenu: React.FC = (): React.ReactNode => {
    return (
        <div className="bg-[#f5f5f7] w-full pt-12">
            <ul className="flex gap-5 justify-center items-end m-0 p-0 list-none">
                {items.map(({ label, img, href }) => (
                    <li
                        key={label}
                        className="flex flex-col items-center flex-1 min-w-[90px] max-w-[146px] px-2 pt-4 pb-5 cursor-pointer "
                    >
                        <img
                            src={img}
                            alt={label}
                            className="w-full max-w-[128px] h-[100px] object-contain mb-3"
                        />

                        <a href={href}
                            className="text-[12px] text-[#1d1d1f] no-underline text-center hover:underline"
                        >
                            {label}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};