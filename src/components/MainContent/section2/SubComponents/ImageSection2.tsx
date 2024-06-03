import iphone from "../../../../assets/section1/iPhone-1.png"
import ellipsis from "../../../../assets/common/ellipse.png"

export const ImageSection_2 = () => {

    return (
        <section className="relative">
            <img
            className=" rotate-[14.5deg] relative z-20"
            src={ iphone }
            alt="iphone image"
            />
            <img
            className="absolute -top-12 -left-28 min-w-[660px] object-contain z-10"
            src={ ellipsis }
            alt="ellipsis"
            />
        </section>
    )
}