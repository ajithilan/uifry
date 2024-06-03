import star from "../../../assets/common/bg-star.png"
import paint from "../../../assets/common/bg-paint.png"

export const Background = () => {

    return (
        <>
        <img className="absolute top-20 -left-32 w-[48px] max-h-[48px] rotate-45 object-contain -z-10" src={ star } alt="Star Icon"/>
        <img className="absolute top-6 -left-24 w-[500px] rotate-180 object-contain -z-10" src={ paint } alt="Paint Icon"/>
        <img className="absolute top-12 -right-60 max-w-96 object-contain -z-10" src={ paint } alt="Paint Icon"/>
        </>
    )
}