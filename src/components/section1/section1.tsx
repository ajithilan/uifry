import { CustomButton } from "../common/custombutton"

export const Section1 = () => {

    return (
        <section>
            <section className=" w-[620px]">
                <h1 className=" text-[64px] font-bold">make the best financial decisions </h1>
                <p className=" text-lg opacity-50">
                Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
                </p>
                <div className="flex gap-6 py-4">
                    <CustomButton text="get started →" />
                    <button className="w-[180px] h-[60px] flex justify-center items-center gap-4">
                        <i className="fa fa-play border border-black rounded-full p-1 px-2 text-sm"></i>
                        watch video
                    </button>
                </div>
            </section>
        </section>
    )
}

//Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.