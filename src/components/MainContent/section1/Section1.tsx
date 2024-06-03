import { DetailsSection_1 } from "./SubComponents/DetailsSection1"
import { ImageSection_1 } from "./SubComponents/ImageSection1"
import detail from "../../../assets/section1/detail.png"
import { Background } from "./Background"


export const Section1 = () => {

    return (
        <section className="relative w-fit flex">
            <section>
                <DetailsSection_1/>
                <img
                className=" -translate-x-9"
                src={ detail }
                alt="detail image"
                width={570}
                height={360}
                />
            </section>
            <ImageSection_1/>
            <Background/>
        </section>
    )
}