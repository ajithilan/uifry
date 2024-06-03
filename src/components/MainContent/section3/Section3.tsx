import { Background } from "./Background"
import { DetailsSection_3 } from "./SubComponents/DetailsSection3"
import { ImageSection_3 } from "./SubComponents/ImageSection3"


export const Section3 = () => {

    return (
        <section className="relative flex h-[620px]">
            <DetailsSection_3/>
            <ImageSection_3/>
            <Background/>
        </section>
    )
}