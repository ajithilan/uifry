import star from "../../../assets/common/bg-star.png"
import starwhite from "../../../assets/common/bg-star-white.png"
import paint from "../../../assets/common/bg-paint.png"

export const Background = () => {

    return (
        <>
        <img className="absolute -top-32 -right-32 w-[64px] max-h-[64px] object-contain -z-10" src={ star } alt="Star Icon"/>
        <img className="absolute top-28 -left-32 w-[48px] max-h-[48px] rotate-45 object-contain -z-10" src={ star } alt="Star Icon"/>
        <img className="absolute -top-44 -left-60 object-contain -z-10" src={ paint } alt="Paint Icon"/>
        <img className="absolute top-[350px] left-[420px] w-[48px] max-h-[48px] rotate-45 object-contain" src={ starwhite } alt="Star Icon"/>
        <img className="absolute top-40 -right-10 max-w-96 rotate-180 object-contain" src={ paint } alt="Paint Icon"/>
        <img className="absolute top-10 right-[400px] w-[48px] max-h-[48px] -rotate-150 object-contain" src={ starwhite } alt="Star Icon"/>
        </>
    )
}