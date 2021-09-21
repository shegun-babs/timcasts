
import {Footer, Navbar} from "@components/pages";

const date = (new Date(Date.now())).toString();

const web = ({ children }) => {
    return(
        <>
            <div className="min-h-screen font-sans antialiased text-gray-800 relative">

                <div className="flex-1 relative">

                    { children }

                    <Footer />
                </div>
                {
                    // <div className="fixed h-24 bg-gray-700 bottom-0 w-full">
                    //     <div className="px-6 py-4">
                    //         <span className="text-white">Content here: { date }</span>
                    //     </div>
                    // </div>
                }
            </div>
        </>
    )
}

export default web