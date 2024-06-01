import { DarkModeToggleButton } from "./DarkModeToggleButton"
import logo from "../../assets/logo/logo.png"
import { CustomButton } from "../common/custombutton";

export const NavigationBar = () => {

    const handleActiveTab = (e: MouseEvent<HTMLElement>) => {
        if(e.target.tagName === 'BUTTON'){
            document.querySelector('button.active')?.classList.remove('active');
            e.target.classList.add('active');
        }
    }

    return (
        <nav className="flex justify-between items-center px-24 py-8 border">
            <section className="flex gap-12">
                <div className="flex items-center">
                    <img src={ logo } width={34} height={34} alt="Website Logo"/>
                    <span className="logo text-3xl font-extrabold">uifry</span>
                    <span>&#8482;</span>
                </div>
                <section
                className="flex gap-6 text-[20px]"
                onClick={ handleActiveTab }>
                    <button className="text-[#FF5555] ">Home</button>
                    <button className="">About Us</button>
                    <button className="">Pricing</button>
                    <button className="">Features</button>
                </section>
            </section>
            <section className="flex items-center gap-6">
                <DarkModeToggleButton/>
                <CustomButton text="download" />
            </section>
        </nav>
    )
}