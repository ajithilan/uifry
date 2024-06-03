import ellipsis from "../../../../assets/common/ellipse.png"
import iphone from "../../../../assets/section1/iPhone-1.png"
import card from "../../../../assets/section4/card.png"

export const ImageSection_4 = () => {

    return (
        <section className="relative h-[500px]">
            <img
            className=" rotate-[14.5deg] relative z-20 -top-36"
            src={ iphone }
            alt="iphone image"
            />
            <img
            className="absolute -top-48 -left-28 min-w-[660px] object-contain z-10"
            src={ ellipsis }
            alt="ellipsis"
            />
            <img
            className="absolute top-10 left-[150px] object-contain z-20"
            src={ card }
            alt="credit card"
            />
        </section>
    )
}