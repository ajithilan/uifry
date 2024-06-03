
type Icon = {
    icon: string
}

export const BudgetSection = ({ icon }: Icon) => {

    return (
        <section className="flex flex-col gap-2">
            <div className="flex gap-3">
                <img className="object-contain" src={ icon } width={18} alt="Star icon"/>
                <h6 className="text-lg font-semibold">budgeting intervals</h6>
            </div>
            <span
            className="opacity-50 text-lg"
            >
                Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
            </span>
        </section>
    )
}