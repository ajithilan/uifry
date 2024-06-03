import { Background } from "./Background"
import { FAQcard } from "./SubComponents/FAQcard"

export const Section6 = () => {

    return (
        <section className="relative flex flex-col w-[1090px] gap-6 pb-40">
            <section className="w-[500px]">
                <span className="text-brand-orange">FAQ</span>
                <h4 className="text-5xl font-bold">frequently asked questions</h4>
            </section>
            <div className="grid grid-cols-2 gap-y-6">
                <FAQcard brandOrange={true} />
                <FAQcard/>
                <FAQcard/>
                <FAQcard brandOrange={true}/>
                <FAQcard brandOrange={true}/>
                <FAQcard/>
            </div>
            <Background/>
        </section>
    )
}