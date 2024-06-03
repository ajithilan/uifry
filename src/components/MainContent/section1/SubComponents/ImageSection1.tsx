import iphone1 from "../../../../assets/section1/iPhone-1.png"
import iphone2 from "../../../../assets/section1/iPhone-2.png"
import ellipsis from "../../../../assets/common/ellipse.png"

export const ImageSection_1 = () => {

    return (
        <section className="relative w-[660px] z-100">
            <img
            className="section1-iphone object-cover absolute -top-28 -left-28 z-30"
            src={ iphone1 }
            alt="iphone image 1"
            height={645}
            />
            <img
            className="section1-iphone object-cover absolute -top-11 left-1 z-20"
            src={ iphone2 }
            alt="iphone image 2"
            />
            <img
            className="section1-iphone object-cover absolute top-5 left-32 z-10"
            src={ iphone1 }
            alt="iphone image 1"
            />
            <img
            className="absolute max-h-[765px] object-cover -top-28 -left-12"
            src={ ellipsis }
            alt="ellipsis"
            />
        </section>
    )
}