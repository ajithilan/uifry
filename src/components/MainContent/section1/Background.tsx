import star from "../../../assets/common/bg-star.png"
import paint from "../../../assets/common/bg-paint.png"

export const Background = () => {

    return (
        <>
        <img className="absolute -top-40 -right-12 w-[64px] max-h-[64px] object-contain -z-10" src={ star } alt="Star Icon"/>
        <img className="absolute -top-20 -left-32 w-[48px] max-h-[48px] rotate-45 object-contain -z-10" src={ star } alt="Star Icon"/>
        <img className="absolute -top-28 left-16 object-contain -z-10" src={ paint } alt="Paint Icon"/>
        <img className="absolute top-[400px] left-[120px] w-[48px] max-h-[48px] rotate-45 object-contain -z-10" src={ star } alt="Star Icon"/>
        <img className="absolute top-[350px] right-[250px] max-w-96 rotate-180 object-contain -z-10" src={ paint } alt="Paint Icon"/>
        <img className="absolute top-[520px] right-[550px] w-[48px] max-h-[48px] -rotate-150 object-contain -z-10" src={ star } alt="Star Icon"/>
        </>
    )
}