import ellipsis from "../../../../assets/common/ellipse.png"
import iphone from "../../../../assets/section1/iPhone-2.png"
import holdCard from "../../../../assets/section3/onhold.png"

export const ImageSection_3 = () => {

    return (
        <section className="relative h-[400px]">
            <img
            className=" rotate-[14.5deg] relative z-20 left-24 -top-36"
            src={ iphone }
            alt="iphone image"
            />
            <img
            className="absolute -top-48 min-w-[660px] object-contain z-10"
            src={ ellipsis }
            alt="ellipsis"
            />
            <img
            className="absolute top-[118px] left-[300px] object-contain z-20"
            src={ holdCard }
            alt="Hold Card"
            />
        </section>
    )
}