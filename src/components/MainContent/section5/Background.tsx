import star from "../../../assets/common/bg-star.png"
import paint from "../../../assets/common/bg-paint.png"

export const Background = () => {

    return (
        <>
        <img className="absolute top-56 -left-16 w-[500px] h-[500px] object-contain -z-10" src={ paint } alt="Paint Icon"/>
        <img className="absolute bottom-24 -left-28 w-12 max-h-12 rotate-45 object-contain -z-10" src={ star } alt="Star Icon"/>
        </>
    )
}