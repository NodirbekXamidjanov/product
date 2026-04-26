import { useRef, useEffect, useState } from "react"

const categories = ["All Products", "iPhone", "Mac", "iPad", "Apple Watch", "Vision Pro", "AirPods", "Accsesories", "PC"]

export const CategoryFilter = () => {
    const [active, setActive] = useState(categories[0])
    const [pillStyle, setPillStyle] = useState({ left: 0, width: 0 })
    const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({})
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const el = tabRefs.current[active]
        const container = containerRef.current
        if (el && container) {
            const containerLeft = container.getBoundingClientRect().left
            const elRect = el.getBoundingClientRect()
            setPillStyle({
                left: elRect.left - containerLeft,
                width: elRect.width,
            })
        }
    }, [active])

    return (
        <div ref={containerRef} className="relative flex items-center gap-1 w-fit mt-12 ml-20 bg-[#f5f5f7] rounded-full p-1">
            <div
                className="absolute top-1 bottom-1 bg-[#1d1d1f] rounded-full transition-all duration-300 ease-in-out"
                style={{ left: pillStyle.left, width: pillStyle.width }}
            />

            {categories.map((cat) => (
                <button
                    key={cat}
                    ref={(el) => { tabRefs.current[cat] = el }}
                    onClick={() => setActive(cat)}
                    className={`
            relative z-10 px-4 py-2 rounded-full text-[15px] font-medium
            transition-colors duration-300 cursor-pointer border-none bg-transparent
            ${active === cat ? "text-white" : "text-[#1d1d1f]"}
          `}
                >
                    {cat}
                </button>
            ))}
        </div>
    )
}