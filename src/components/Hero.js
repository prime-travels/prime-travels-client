import Link from "next/link"
import { MdNotStarted } from 'react-icons/md'

const Hero = () => {
    return (
        <>
            <div className="container mx-auto p-4 mt-20 h-auto lg:h-screen">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 h-4/5 place-items-center">
                    <div className="card w-auto order-2 lg:order-1">
                        <div className="card-body">
                            <h2 className="text-2xl lg:text-4xl font-bold mb-5">
                                Your Trusted <span className="text-secondary">Travel Partner</span>
                            </h2>
                            <p>
                                Simplifying Travel Around The World.
                                Find Visa information for all countries.
                                Trustpilot recommended. We lead the industry in innovation and reputation
                            </p>
                            <Link href='/visainfo'>
                                <button className="btn btn-secondary gap-2 w-64 mt-5">
                                    Get Started
                                    <MdNotStarted />
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className="card w-auto order-1 lg:order-2">
                        <figure className="px-10 py-10">
                            <img src="/hero.svg" alt="Shoes" className="rounded-xl" />
                        </figure>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero