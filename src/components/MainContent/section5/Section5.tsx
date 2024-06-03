import { Background } from "./Background"
import { DetailsSection_5 } from "./SubComponents/DetailsSection5"
import { ImageSection_5 } from "./SubComponents/ImageSection5"
import { TitleSection } from "./SubComponents/TitleSection5"

export const Section5 = () => {

    return (
        <section className="relative h-[900px]">
            <TitleSection/>
            <div className="flex">
                <ImageSection_5/>
                <DetailsSection_5/>
            </div>
            <Background/>
        </section>
    )
}