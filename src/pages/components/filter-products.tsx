import { useState } from "react"
import { Checkbox } from "../../components/ui/checkbox"

const filters = [
  {
    label: "Processor",
    options: ["Apple M4 (34)", "Apple M5 (30)", "Apple M5 Pro (10)", "Apple M4 Pro (8)", "Apple A18 Pro (8)", "Apple M4 Max (6)", "Apple M5 Max (6)", "Apple M3 (1)"]
  },
  {
    label: "RAM",
    options: ["8 GB (12)", "16 GB (24)", "32 GB (10)", "64 GB (4)"]
  },
  {
    label: "Memory",
    options: ["256 GB (10)", "512 GB (18)", "1 TB (14)", "2 TB (6)"]
  },
  {
    label: "Screen Diagonal",
    options: ['13" (20)', '14" (15)', '16" (10)']
  },
  {
    label: "Color",
    options: ["Space Gray (12)", "Silver (10)", "Midnight (8)", "Starlight (6)"]
  },
]

export const FilterSidebar = () => {
  const [open, setOpen] = useState<Record<string, boolean>>({ "Processor": true })
  const [priceFrom, setPriceFrom] = useState("")
  const [priceTo, setPriceTo] = useState("")
  const [checked, setChecked] = useState<Record<string, boolean>>({})

  const toggleSection = (label: string) => {
    setOpen(prev => ({ ...prev, [label]: !prev[label] }))
  }

  const toggleCheck = (key: string) => {
    setChecked(prev => ({ ...prev, [key]: !prev[key] }))
  }

  return (
    <div className="w-[240px]  bg-white p-4 mt-6 rounded-2xl text-[#1d1d1f]">

      {/* Narx */}
      <div className="pb-4 border-b border-[#d2d2d7]">
        <p className="text-[22px]  mb-1">Price</p>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="From"
            value={priceFrom}
            onChange={e => setPriceFrom(e.target.value)}
            className="w-full border border-[#d2d2d7] rounded px-3 py-2 text-[16px] outline-none focus:border-[#0071e3]"
          />
          <input
            type="text"
            placeholder="To"
            value={priceTo}
            onChange={e => setPriceTo(e.target.value)}
            className="w-full border border-[#d2d2d7] rounded px-3 py-2 text-[16px] outline-none focus:border-[#0071e3]"
          />
        </div>
      </div>

      {/* Filter seksiyalar */}
      {filters.map(({ label, options }) => (
        <div key={label} className="border-b border-[#d2d2d7]">

          {/* Header */}
          <button
            onClick={() => toggleSection(label)}
            className="w-full flex justify-between items-center py-4 text-[14px]  bg-transparent border-none cursor-pointer text-[#1d1d1f]"
          >
            {label}
          </button>

          {/* Checkboxlar */}
          {open[label] && (
            <div className="pb-4 flex flex-col gap-2">
              {options.map(option => {
                const key = `${label}-${option}`
                return (
                  <label
                    key={key}
                    className="flex items-center gap-2 cursor-pointer"
                    onClick={() => toggleCheck(key)}
                  >
                    <Checkbox
                      checked={!!checked[key]}
                      className="rounded-sm"
                    />
                    <span className="text-[13px] text-[#1d1d1f]">{option}</span>
                  </label>
                )
              })}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}