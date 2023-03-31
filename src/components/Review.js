import React from 'react'
import ReviewCard from './ReviewCard'

const Review = () => {
    return (
        <>
            <div className='container mx-auto p-4'>
                <h1 className="text-3xl lg:text-4xl font-bold mb-2 text-center">Some Happy <span className="text-secondary">Faces</span></h1>
                <h6 className='text-sm lg:text-base text-center'>Our Customers Have Great Stories</h6>
            </div>
            <div className="hero">
                <div className="hero-content text-center">
                    <div className='max-w-md'>
                        <div className="carousel w-72 lg:w-full">
                            <div id="item1" className="carousel-item w-full">
                                <ReviewCard />
                            </div>
                            <div id="item2" className="carousel-item w-full">
                                <ReviewCard />
                            </div>
                            <div id="item3" className="carousel-item w-full">
                                <ReviewCard />
                            </div>
                            <div id="item4" className="carousel-item w-full">
                                <ReviewCard />
                            </div>
                        </div>
                        <div className="flex justify-center w-full py-2 gap-2">
                            <a href="#item1" className="btn btn-xs">1</a>
                            <a href="#item2" className="btn btn-xs">2</a>
                            <a href="#item3" className="btn btn-xs">3</a>
                            <a href="#item4" className="btn btn-xs">4</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Review