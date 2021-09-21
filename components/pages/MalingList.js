
const MailingList = () => {
    return (
        <section className="bg-gradient-to-bl from-gray-100 to-teal-50">
            <div className="max-w-4xl mx-auto overflow-hidden flex flex-wrap items-center justify-center py-20 md:py-36 px-4 space-y-8">

                <h3 className="w-full text-3xl font-bold md:text-5xl md:max-w-xl md:tracking-tighter text-center">Join Our Mailing List for the Latest Updates</h3>

                <div className="w-full max-w-3xl">
                    <div className="gap-y-3 md:gap-x-3 grid grid-cols-1 md:grid-cols-3 justify-items-center">
                        <input
                            type="text"
                            name="email"
                            id="email"
                            className="col-span-1 md:col-span-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full text-sm border-gray-900 rounded-md px-2 py-3"
                            placeholder="email@example.com"
                        />
                        <button
                            type="submit"
                            className="col-span-1 w-full flex justify-center py-2 px-4 border border-transparent rounded-md
                            shadow-sm font-medium text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default MailingList