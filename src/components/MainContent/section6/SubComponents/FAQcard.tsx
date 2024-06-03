
export const FAQcard = ({ brandOrange = false }) => {

    return (
        <section className={`w-[535px] px-9 py-6 rounded-md ${ brandOrange && 'bg-brand-orange' }`}>
            <span
            className={`text-[28px] font-semibold ${brandOrange && 'text-white'}`}
            >
                the best financial accounting app ever!
            </span>
            <p
            className={`text-lg ${brandOrange ? 'text-white' : 'opacity-50'}`}
            >
                “Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.
            </p>
        </section>
    )
}