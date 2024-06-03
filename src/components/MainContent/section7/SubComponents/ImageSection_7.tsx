import iphone1 from "../../../../assets/section7/iPhone-1.png"
import iphone2 from "../../../../assets/section7/iPhone-2.png"
import iphone3 from "../../../../assets/section7/iPhone-3.png"

export const ImageSection_7 = () => {

    return (
        <section className="">
            <img
            src={ iphone1 }
            alt="iPhone 13"
            className="absolute top-[105px] right-[202px] z-30"
            />
            <img
            src={ iphone2 }
            alt="iPhone 13"
            className="absolute top-6 right-0 z-20"
            />
            <img
            src={ iphone3 }
            alt="iPhone 13"
            className="absolute top-6 right-0 z-10"
            />
        </section>
    )
}