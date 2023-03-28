const VisaInfo = () => {
    return (
        <>
            <div className="container mx-auto p-4 h-auto lg:h-screen">
                <iframe
                    className="overflow-y-hidden"
                    src="https://visalist.io/widget?dark=false&showheader=true&home=null&destination=null&headercolor=%2301579B&buttoncolor=%23ff9800"
                    width="100%"
                    height="300%"
                    allowFullScreen
                ></iframe>
            </div>
        </>
    )
}

export default VisaInfo