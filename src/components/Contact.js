import React from 'react'

const Contact = () => {
    return (
        <>
            <div className="container mx-auto p-4 h-auto lg:h-screen">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 h-4/5 place-items-center">
                    <div className="card w-auto">
                        <figure className="px-10 py-10">
                            <img src="/contact.svg" alt="Shoes" className="rounded-xl" />
                        </figure>
                    </div>
                    <div className="card w-auto">
                        <div className="card-body">
                            <h2 className="text-2xl lg:text-4xl font-bold mb-5">
                                Contact <span className="text-secondary">With Us</span>
                            </h2>
                            <form>
                                <input type="text" placeholder="Your Name" className="input input-bordered input-secondary w-full mb-3" />
                                <input type="email" placeholder="Tour Email" className="input input-bordered input-secondary w-full mb-3" />
                                <input type="number" placeholder="Your Phone Number" className="input input-bordered input-secondary w-full mb-3" />
                                <textarea className="textarea textarea-secondary w-full mb-3" placeholder="Your Message"></textarea>
                                <button className="btn btn-secondary btn-block gap-2 mt-1">
                                    Send
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact