import star from "../../../../assets/section2/star.png"
import hex from "../../../../assets/section2/hex.png"
import cube from "../../../../assets/section2/cube.png"
import { BudgetSection } from "./BudgetSection"

export const DetailsSection_2 = () => {

    return (
        <section className="w-[650px] flex flex-col gap-8 ps-6 py-20">
            <section className="flex flex-col gap-2">
                <span className="text-brand-orange text-lg">FEATURES</span>
                <h4 className=" text-5xl font-bold">uifry premium</h4>
            </section>
            <BudgetSection icon={ star }/>
            <BudgetSection icon={ hex }/>
            <BudgetSection icon={ cube }/>
        </section>
    )
}