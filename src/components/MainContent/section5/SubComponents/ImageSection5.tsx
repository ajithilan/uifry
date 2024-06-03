import profile1 from "../../../../assets/section5/profile1.png"
import profile2 from "../../../../assets/section5/profile2.png"
import profile3 from "../../../../assets/section5/profile3.png"
import profile4 from "../../../../assets/section5/profile4.png"
import profile5 from "../../../../assets/section5/profile5.png"
import quotation from "../../../../assets/section5/quotation.png"
import ellipsis from "../../../../assets/common/ellipse.png"

export const ImageSection_5 = () => {

    return (
        <section className="relative w-[660px] h-[500px]">
            <img
            className="absolute min-w-[215px] top-24 left-20 z-20"
            src={ profile1 }
            alt="User Image"
            />
            <div className="absolute top-56 left-80 w-20 h-20 rounded-full flex justify-center items-center bg-brand-orange z-30">
                <img src={ quotation } alt="Quotation Mark"/>
            </div>
            <img
            className="absolute -top-5 left-72 min-w-[110px] z-20"
            src={ profile2 }
            alt="User Image"
            />
            <img
            className="absolute top-[334px] left-[312px] min-w-[77px] z-20"
            src={ profile3 }
            alt="User Image"
            />
            <img
            className="absolute -top-5 -left-10 min-w-[88px] z-20"
            src={ profile4 }
            alt="User Image"
            />
            <img
            className="absolute top-[314px] -left-10 min-w-[94px] z-20"
            src={ profile5 }
            alt="User Image"
            />
            <img
            className="absolute -top-24 -left-28 min-w-[660px] object-contain z-10"
            src={ ellipsis }
            alt="ellipsis"
            />
        </section>
    )
}