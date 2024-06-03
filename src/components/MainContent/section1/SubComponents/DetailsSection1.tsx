import { CustomButton } from "../../../common/custombutton"

export const DetailsSection_1 = () => {

    return (
        <section className=" w-[620px] pt-10">
            <h1 className=" text-[64px] font-bold leading-[64px] pb-4">make the best financial decisions </h1>
            <p className=" text-lg opacity-50 py-2">
            Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
            </p>
            <div className="flex gap-6 py-4">
                <CustomButton text="get started →" />
                <button className="w-[180px] h-[60px] flex justify-center items-center gap-4 rounded-md hover:bg-gray-200 transition duration-200">
                    <i className="fa fa-play border border-black rounded-full p-1 px-2 text-sm"></i>
                    watch video
                </button>
            </div>
        </section>
    )
}