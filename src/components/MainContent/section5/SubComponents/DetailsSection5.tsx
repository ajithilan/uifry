import mini1 from "../../../../assets/section5/mini1.png"
import mini2 from "../../../../assets/section5/mini2.png"
import mini3 from "../../../../assets/section5/mini3.png"
import mini4 from "../../../../assets/section5/mini4.png"
import mini5 from "../../../../assets/section5/mini5.png"

export const DetailsSection_5 = () => {

    return (
        <section className="w-[442px] h-fit grid gap-6 py-16">
            <span className="text-[28px] font-semibold">the best financial accounting app ever!</span>
            <p className="text-lg opacity-50">
                Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.
            </p>
            <div className="flex items-center gap-2">
                <img src={ mini1 } alt="Profile Image" className="w-10 h-10"/>
                <img src={ mini2 } alt="Profile Image" className="w-[30px] opacity-50"/>
                <img src={ mini3 } alt="Profile Image" className="w-[30px] opacity-50"/>
                <img src={ mini4 } alt="Profile Image" className="w-[30px] opacity-50"/>
                <img src={ mini5 } alt="Profile Image" className="w-[30px] opacity-50"/>
            </div>
            <span className="text-lg font-semibold">nick jonas</span>
        </section>
    )
}