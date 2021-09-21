
const Features = () => {
    return (
        <section className="py-12 border-b border-gray-100 bg-gray-50">
            <div className="w-full px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
                <ul className="grid gap-6 md:gap-12 md:grid-cols-3">
                    <li className="flex space-x-4">
                        <div className="flex-shrink-0 w-10 h-10 shadow-md rounded-xl">
                            <div
                                className="relative flex items-center justify-center w-10 h-10 bg-white shadow ring-2 ring-teal-500 text-teal-500 rounded-xl">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-lg font-semibold tracking-tight font-brand">Year-long Podcasts</h2>
                            <p className="text-sm text-gray-500">
                                Podcasts records of up to a year-long are stored and kept for you
                            </p>
                        </div>
                    </li>
                    <li className="flex space-x-4">
                        <div className="flex-shrink-0 w-10 h-10 shadow-md rounded-xl">
                            <div
                                className="relative flex items-center justify-center w-10 h-10 bg-white shadow ring-2 ring-teal-500 text-teal-500 rounded-xl">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                </svg>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-lg font-semibold tracking-tight font-brand">Downloadable</h2>
                            <p className="text-sm text-gray-500">
                                Podcasts can be downloaded on your personal devices.
                            </p>
                        </div>
                    </li>
                    <li className="flex space-x-4">
                        <div className="flex-shrink-0 w-10 h-10 shadow-md rounded-xl">
                            <div
                                className="relative flex items-center justify-center w-10 h-10 bg-white shadow ring-2 ring-teal-500 text-teal-500 rounded-xl">
                                <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none"
                                     viewBox="0 0 24 24">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                          strokeWidth="1.5" d="M11.25 4.75L8.75 7L11.25 9.25"></path>
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                          strokeWidth="1.5" d="M12.75 19.25L15.25 17L12.75 14.75"></path>
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                          strokeWidth="1.5"
                                          d="M9.75 7H13.25C16.5637 7 19.25 9.68629 19.25 13V13.25"></path>
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                          strokeWidth="1.5"
                                          d="M14.25 17H10.75C7.43629 17 4.75 14.3137 4.75 11V10.75"></path>
                                </svg>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-lg font-semibold tracking-tight font-brand">Free updates</h2>
                            <p className="text-sm text-gray-500">
                                Join the community and receive free updates forever at not additional cost
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}
export default Features