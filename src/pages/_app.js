import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import '@/styles/globals.css'
import Link from 'next/link'

export default function App({ Component, pageProps }) {
  return (
    <>
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* <!-- Navbar --> */}
          <div className="w-full navbar bg-base-100 fixed top-0 left-0 right-0 z-40">
            <div className="flex-none lg:hidden">
              <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
              </label>
            </div>
            <div className="flex-1 px-2 mx-2">
              <h3 className='text-primary font-bold text-2xl'>
                <Link href='/' className='flex justify-center items-center'>
                  <img src='/logo.jpg' className='w-20 h-16' />
                  Prime <span className='text-secondary'>Travels</span></Link>
              </h3>
            </div>
            <div className="flex-none hidden lg:block">
              <ul className="menu menu-horizontal">
                {/* <!-- Navbar menu content here --> */}
                <li>
                  <Link className='btn border border-primary btn-ghost text-primary-focus hover:text-secondary m-2 font-bold rounded-xl' href='/visainfo'>Visa Info</Link>
                </li>
                <li>
                  <Link className='btn border border-primary btn-ghost text-primary-focus hover:text-secondary m-2 font-bold rounded-xl' href='/flightinfo'>Flight Info</Link>
                </li>
                <li>
                  <Link className='btn border border-primary btn-ghost text-primary-focus hover:text-secondary m-2 font-bold rounded-xl' href='/hotelinfo'>Hotel Info</Link>
                </li>
                <li>
                  <Link className='btn border border-primary btn-ghost text-primary-focus hover:text-secondary m-2 font-bold rounded-xl' href='/helicopterinfo'>Helicopter Info</Link>
                </li>
              </ul>
            </div>
          </div>
          {/* <!-- Page content here --> */}
          <Component {...pageProps} />
          <Contact />
          <Footer />
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
          <ul className="menu p-4 w-64 bg-base-100">
            {/* <!-- Sidebar content here --> */}
            <li>
              <Link className='btn border border-primary btn-ghost text-primary-focus hover:text-secondary m-2 font-bold rounded-lg' href='/visainfo'>Visa Info</Link>
            </li>
            <li>
              <Link className='btn border border-primary btn-ghost text-primary-focus hover:text-secondary m-2 font-bold rounded-lg' href='/flightinfo'>Flight Info</Link>
            </li>
            <li>
              <Link className='btn border border-primary btn-ghost text-primary-focus hover:text-secondary m-2 font-bold rounded-lg' href='/hotelinfo'>Hotel Info</Link>
            </li>
            <li>
              <Link className='btn border border-primary btn-ghost text-primary-focus hover:text-secondary m-2 font-bold rounded-lg' href='/helicopterinfo'>Helicopter Info</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}