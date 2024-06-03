import star from "../../../assets/common/bg-star.png"
import paint from "../../../assets/common/bg-paint.png"

export const Background = () => {

    return (
        <>
        <img className="absolute top-6 right-56 w-[500px] object-contain -z-10" src={ paint } alt="Paint Icon"/>
        <img className="absolute -top-28 right-0 w-16 max-h-16 object-contain -z-10" src={ star } alt="Star Icon"/>
        </>
    )
}