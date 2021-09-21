
import Head from 'next/head'
import { Navbar, MailingList, Hosts, Footer, RecentEpisodes, Features } from '@components/pages'
import useStore from "@components/store/store";
import Logo from '@components/assets/logo'
import Layout from '@components/layouts/web'
import Notification from '@components/Notification'

export default function Home() {

    const episodes = useStore(state => state.recentEpisodes);

    console.log(episodes)



  return (
      <>
          <Head>
              <title>TimCasts - Financial Freedom podcasts</title>
              <link rel="icon" href="/favicon.ico" />
          </Head>

          <Notification />

              <div className="absolute w-full z-0">
                <Navbar className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8" />
              </div>

              <section className="overflow-hidden text-white bg-gradient-to-br from-teal-600 to-teal-900 pt-20">
                  <div className="w-full px-4 mx-auto max-w-7xl sm:px-6 md:px-8">

                      <div className="grid md:grid-cols-[3fr,2fr] py-12 md:py:24 gap-12 md:gap-24">
                          <aside className={`md:py-24`}>
                              <h1 className="max-w-lg text-3xl md:text-5xl font-bold tracking-tighter"><Logo className="h-20 w-auto inline" /> — A weekly podcasts for the tribe of wealthy origin</h1>
                              <p className="mt-6 text-xl font-medium">
                                  <b className="sr-only font-semibold">
                                      Designing a consistent component library is difficult, expensive, and takes a lot
                                      of time.
                                      Our solution?
                                  </b>
                                  <b className="font-semibold">
                                      Changing your financial story is perceived as being hard, and takes a lot of time and effort.
                                      The solution? {' '}
                                  </b>

                                  <em className="font-semibold not-italic text-teal-100">
                                      TimCasts: a weekly podcast from wealth creator & retention coach, Oladipupo Clement.
                                      Aimed at capacity building,
                                  </em>
                              </p>
                              <footer className="grid gap-4 mt-6 sm:grid-flow-col sm:inline-grid">
                                  <a className="inline-flex items-center justify-center px-4 font-semibold tracking-tight transition bg-white rounded-lg shadow font-brand focus:bg-teal-50 text-teal-500 h-11 hover:text-teal-400 focus:text-teal-600 focus:outline-none"
                                     href="https://razorui.com/pricing">Latest episode</a>
                                  <a className="inline-flex items-center justify-center px-4 font-semibold tracking-tight text-white transition rounded-lg font-brand bg-white/10 h-11 hover:bg-white/20 focus:bg-white/5 focus:text-teal-200 focus:outline-none"
                                     href="https://razorui.com/packages">Episodes</a>
                              </footer>
                          </aside>
                          <aside className="relative hidden sm:block pointer-events-none">
                              <div className="inset-0 grid h-full grid-cols-8 gap-6 md:max-w-2xl md:w-screen md:absolute xl:max-w-5xl grid-rows-8">
                                  <div className="col-span-5 row-span-4">
                                    <img src="timcasts.png" alt="" className="w-full h-full transform skew-x-0" />
                                  </div>
                              </div>
                          </aside>
                      </div>
                  </div>
              </section>


              <Features />

              <section>
                  <div
                      className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-40">
                      <div className="p-8 rounded sm:p-16">
                          <div className="flex flex-col lg:flex-row">
                              <div className="mb-6 lg:mb-0 lg:w-1/2 lg:pr-5">
                                  <h2 className="font-sans text-3xl sm:text-5xl font-extrabold tracking-tight sm:leading-tight">
                                      why &nbsp;<br className="hidden md:block"/>
                                      <Logo className="-ml-4 md:-ml-0 h-24 w-auto inline" />
                                  </h2>
                              </div>
                              <div className="lg:w-1/2">
                                  <p className="mt-2 mb-4 text-base text-gray-700">
                                      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                                      doloremque rem aperiam, eaque ipsa quae. Sed ut perspiciatis unde omnis iste. Sed
                                      ut perspiciatis unde omnis iste error sit voluptatem accusantium
                                      doloremque rem aperiam.
                                  </p>
                                  <a href="/" aria-label=""
                                     className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800">Learn
                                      more</a>
                              </div>
                          </div>
                      </div>
                  </div>
              </section>

              <RecentEpisodes episodes={episodes} />

              <Hosts />

              <MailingList />
      </>
  )
}

Home.getLayout = function getLayout(page){
    return (
        <Layout>
            {page}
        </Layout>
    )
}