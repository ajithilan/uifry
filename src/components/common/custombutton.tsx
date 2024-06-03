type CustomButton = {
    text: string,
    customClass?: string
};

export const CustomButton = ({ text, customClass=""} : CustomButton) => {

    return (
        <button
        className={`${customClass || 'w-[180px]'} h-[60px] bg-black rounded-[4px] text-white text-lg hover:bg-gray-700 transition duration-200`}
        >
            { text }
        </button>
    )
}