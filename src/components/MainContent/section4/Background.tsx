import star from "../../../assets/common/bg-star.png"
import paint from "../../../assets/common/bg-paint.png"

export const Background = () => {

    return (
        <>
        <img className="absolute -top-36 left-[470px] w-14 max-h-14 rotate-45 object-contain -z-10" src={ star } alt="Star Icon"/>
        <img className="absolute top-6 left-12 w-[500px] h-[500px] rotate-180 object-contain -z-10" src={ paint } alt="Paint Icon"/>
        <img className="absolute bottom-28 right-60 w-16 max-h-16 object-contain -z-10" src={ star } alt="Star Icon"/>
        </>
    )
}