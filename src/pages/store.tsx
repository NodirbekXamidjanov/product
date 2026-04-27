import { StoreMenu } from "./components"
import { AirPods, AppleWatch, Iphone, Ipad, Mac, Pc, VisionPro } from "./store-pages"



export const Store = () => {
    return (
        <div className="w-full h-auto page-transition bg-[#f5f5f7] m-auto">
            {/* <Navbar /> */}
            <h2 className="ml-[13%] text-[35px] pt-12 font-semibold ">
                <span className="">
                <span className="w-auto h-auto p-2 bg-white text-[#28292b] rounded-2xl relative z-10">PRO</span>
                <span className="w-auto h-auto p-2 bg-[#28292b] relative right-3 px-4.5 text-white rounded-tr-2xl rounded-br-2xl">DUCT</span>
                </span>
                {/* <span className="text-[40px] ">
                    PRODUCT
                </span> */}
                {" "} <span className="text-[40px]">Do'konimiz</span></h2>
            <StoreMenu />
            <Mac store={true} width={10} />
            <Iphone store={true} width={10} />
            <Ipad store={true} width={10} />
            <AppleWatch store={true} width={10} />
            <AirPods store={true} width={10} />
            <VisionPro store={true} width={10} />
            <Pc store={true} width={10} />
        </div>
    )
}