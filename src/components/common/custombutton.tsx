type CustomButton = {
    text: string;
};

export const CustomButton = ({ text } : CustomButton) => {

    return (
        <button
        className=" w-[180px] h-[60px] bg-black rounded-[4px] text-white text-lg"
        >
            { text }
        </button>
    )
}