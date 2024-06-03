import { ImageSection_7 } from "./SubComponents/ImageSection_7"
import { DetailsSection_7 } from "./SubComponents/detailsSection_7"
import ellipsiswhite from "../../../assets/common/ellipsis-white.png"
import ellipsiswhite2 from "../../../assets/common/ellipsis-white-2.png"
import { Background } from "./Background"

export const Section7 = () => {

    return (
        <section className="relative flex items-center w-[1090px] h-[510px] bg-black rounded-lg">
           <DetailsSection_7/>
           <ImageSection_7/>
           <img
           src={ ellipsiswhite }
           alt="Ellipsis"
           className="absolute bottom-0 left-0"
           />
           <img
           src={ ellipsiswhite2 }
           alt="Ellipsis"
           className="absolute top-0 right-0"
           />
           <Background/>
        </section>
    )
}