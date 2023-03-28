const Hero = () => {
    return (
        <>
            <div className="container mx-auto p-4 h-auto lg:h-screen hero-container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 h-4/5 place-items-center">
                    <div className="card w-auto order-2 lg:order-1">
                        <div className="card-body">
                            <h2 className="text-2xl lg:text-4xl font-bold mb-5">
                                Online Travel <span className="text-primary">Visa Check</span>
                            </h2>
                            <p>
                                Simplifying Travel Around The World.
                                Find Visa information for all countries.
                                Trustpilot recommended. We lead the industry in innovation and reputation
                            </p>
                            <button className="btn btn-primary gap-2 w-64 mt-5">
                                Get Started
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                            </button>
                        </div>
                    </div>
                    <div className="card w-auto order-1 lg:order-2">
                        <figure className="px-10 py-10">
                            <img src="https://img.freepik.com/free-vector/travel-concept-with-landmarks_1057-4873.jpg?w=740&t=st=1679991585~exp=1679992185~hmac=9690f383a4ae6ee27d8fd5dcf976ff223309144c820e4b84126fefbd7a30428d" alt="Shoes" className="rounded-xl" />
                        </figure>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero