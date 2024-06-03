import { DarkModeToggleButton } from "./DarkModeToggleButton"
import logo from "../../assets/logo/logo.png"
import { CustomButton } from "../common/custombutton"

type LinkButton = {
    text: string,
    active?: boolean
}

export const NavigationBar = () => {

    const handleActiveTab = (e: React.MouseEvent<HTMLElement>) => {
        const target = e.target as HTMLElement;
        if(target.tagName === 'BUTTON'){
            document.querySelector('button.active')?.classList.remove('active');
            target.classList.add('active');
        }
    }

    const LinkButton = ({ text, active = false }: LinkButton) => {
        return (
            <button className={`link-button ${active && 'active'} px-2 rounded-sm hover:bg-gray-200 transition duration-200`}>{ text }</button>
        )
    }

    return (
        <nav className="w-full flex justify-between items-center pe-24 py-8">
            <section className="flex gap-12">
                <div className="flex gap-2 items-center">
                    <img src={ logo } width={34} height={34} alt="Website Logo"/>
                    <span className="logo text-3xl font-extrabold">uifry</span>
                    <span>&#8482;</span>
                </div>
                <section
                className="flex gap-6 text-[20px]"
                onClick={ handleActiveTab }>
                    <LinkButton text="home" active={ true }/>
                    <LinkButton text="about us"/> 
                    <LinkButton text="pricing"/>
                    <LinkButton text="features"/>
                </section>
            </section>
            <section className="flex items-center gap-6">
                <DarkModeToggleButton/>
                <CustomButton text="download" />
            </section>
        </nav>
    )
}