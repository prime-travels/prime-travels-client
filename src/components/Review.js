import Image from 'next/image'
import Link from 'next/link'
import { FaQuoteLeft } from 'react-icons/fa'

const Review = () => {
    return (
        <>
            <div className='container mx-auto p-4'>
                <h1 className="text-3xl lg:text-4xl font-bold mb-2 text-center">Some Happy <span className="text-secondary">Faces</span></h1>
                <h6 className='text-sm lg:text-base text-center'>Our Customers Have Great Stories</h6>
            </div>
            <div className="hero">
                <div className="hero-content text-center px-2 lg:px-10">
                    <div className="card lg:card-side bg-base-100 p-4 shadow-xl">
                        <div className="avatar">
                            <div className="w-72 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <Image
                                    src="/review.jpg"
                                    width={500}
                                    height={500}
                                    alt="Picture of the author"
                                />
                            </div>
                        </div>
                        <div className="card-body">
                            <span className="text-secondary text-xl mr-2"><FaQuoteLeft /></span>
                            <h4 className='text-start italic'>
                                Excellent service provided by Prime Travels. Getting a Dubai visa seemed very stressful as we didn’t know where to begin With very little information online. I applied for a Dubai visa for my husband who has a Bangladeshi passport. We got scammed by insta global travel so avoid them at all cost. Dubai visa services is very genuine and fast. We got my husbands visa within 3 days so I’m very happy. Please don’t waste your money anywhere else, I highly recommend Prime Travels.
                            </h4>
                            <h2 className="card-title text-secondary">Mainul Hassan</h2>
                            <h5 className="text-primary text-base font-semibold text-start">Successfully got Dubui Tourist Visa</h5>
                        </div>
                    </div>
                </div>
            </div>
            <h1 className='text-center my-6'>
                <Link href='/reviews' className='btn btn-secondary font-bold rounded-lg'>See More Reviews</Link>
            </h1>
        </>
    )
}

export default Review