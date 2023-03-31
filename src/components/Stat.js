import React from 'react'

const Stat = () => {
    return (
        <>
            <div className="container mx-auto p-4 lg:px-20 mt-10 h-auto lg:h-screen">
                <div className="stats border-none shadow-lg flex flex-col lg:flex-row">

                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                        </div>
                        <div className="stat-title">Happy Customers</div>
                        <div className="stat-value text-secondary">250 +</div>
                        <div className="stat-desc">21% more than last month</div>
                    </div>

                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                        </div>
                        <div className="stat-title">We Have</div>
                        <div className="stat-value text-secondary">10 +</div>
                        <div className="stat-desc">Years of Experience</div>
                    </div>

                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <div className="avatar online">
                                <div className="w-16 rounded-full">
                                    <img src="https://img.freepik.com/free-photo/excited-smiling-man-shows-thumbs-up-supportive-like-praise-something-excellent-good-job-well-done-gesture-nice-work-standing-white-background_176420-53039.jpg?w=900&t=st=1679992691~exp=1679993291~hmac=4aee313b78ba9cdc99a6d63f0f8efd89183fd128a7792791fe79da3ce183257c" />
                                </div>
                            </div>
                        </div>
                        <div className="stat-value">86%</div>
                        <div className="stat-title">Visa Success Rate</div>
                        <div className="stat-desc text-secondary">31 tasks remaining</div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Stat