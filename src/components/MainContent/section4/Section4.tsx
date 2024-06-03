import { Background } from "./Background"
import { DetailsSection_4 } from "./SubComponents/DetailsSection4"
import { ImageSection_4 } from "./SubComponents/ImageSection4"

export const Section4 = () => {

    return (
        <section className="relative flex h-[650px] gap-4 py-10">
            <ImageSection_4/>
            <DetailsSection_4/>
            <Background/>
        </section>
    )
}