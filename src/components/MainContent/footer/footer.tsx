import logo from "../../../assets/logo/logo.png"
import { CustomButton } from "../../common/custombutton"

export const Footer = () => {

    return (
        <footer className="flex flex-col w-[1090px] gap-24 py-40">
            <section className="flex justify-between w-full">
                <section className="flex flex-col gap-4">
                    <div className="flex gap-2 items-center py-1">
                        <img src={ logo } width={34} height={34} alt="Website Logo"/>
                        <span className="logo text-3xl font-extrabold">uifry</span>
                        <span>&#8482;</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <i className="fa-solid fa-envelope text-brand-orange"></i>
                        <span>Help@Frybix.com</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <i className="fa-solid fa-phone text-brand-orange"></i>
                        <span>+1234 456 678 89</span>
                    </div>
                </section>
                <section className="flex flex-col gap-4">
                    <span className=" text-[32px]">links</span>
                    <span>home</span>
                    <span>about us</span>
                    <span>bookings</span>
                    <span>blog</span>
                </section>
                <section className="flex flex-col gap-4">
                    <span className=" text-[32px]">legal</span>
                    <span>terms of use</span>
                    <span>privacy policy</span>
                    <span>cookie policy</span>
                </section>
                <section className="flex flex-col gap-4">
                    <span className=" text-[32px]">product</span>
                    <span>take tour</span>
                    <span>live chat</span>
                    <span>reviews</span>
                </section>
                <section className="flex flex-col gap-4">
                    <span className=" text-[32px]">newsletter</span>
                    <span>stay up to date</span>
                    <form
                    className="flex gap-4"
                    onSubmit={(e)=>e.preventDefault()}
                    >
                        <input
                        type="email"
                        className="w-48 border border-transparent focus:outline-none focus:border-gray-500 rounded-sm ps-6 transition duration-200"
                        placeholder="your email"
                        />
                        <CustomButton text="subscribe" customClass="w-[160px]"/>
                    </form>
                </section>
            </section>
            <section className="relative py-10 text-center borderTop">
                <span>copyright 2022 uifry.com all rights reserved</span>
            </section>
        </footer>
    )
}