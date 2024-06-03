import { Background } from "./Background"
import { DetailsSection_2 } from "./SubComponents/DetailsSection2"
import { ImageSection_2 } from "./SubComponents/ImageSection2"

export const Section2 = () => {

    return (
        <section className="relative w-fit flex">
            <ImageSection_2/>
            <DetailsSection_2/>
            <Background/>
        </section>
    )
}