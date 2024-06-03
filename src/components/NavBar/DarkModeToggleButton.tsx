
export const DarkModeToggleButton = () => {

    return (
        <label className="inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" className="sr-only peer"/>
            <div
            className="relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-brand-orange
            peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full
            peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white
            after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-gray-600"
            >
            </div>
            <span
            className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
                Dark Mode
            </span>
        </label>
    )
}