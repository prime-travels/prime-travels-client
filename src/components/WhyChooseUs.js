import { AiOutlineFileDone } from 'react-icons/ai'
import { RiSecurePaymentFill } from 'react-icons/ri'
import { GiSpeedBoat } from 'react-icons/gi'
import { MdSupportAgent } from 'react-icons/md'

const WhyChooseUs = () => {
    return (
        <>
            <div className='container mx-auto p-4 my-10'>
                <h1 className="text-3xl lg:text-4xl font-bold mb-2 text-center">Why Choose <span className="text-primary">Us</span></h1>
                <h6 className='text-sm lg:text-base mb-10 text-center'>Because we care about your safety</h6>
                <div className="card lg:card-side">
                    <img className='w-auto lg:w-2/4 h-44 lg:h-96' src='https://img.freepik.com/free-photo/question-mark-icon-solving-problem-solution-concept_53876-13887.jpg?w=826&t=st=1679993497~exp=1679994097~hmac=b1e2ec1f91834463cfcbc5bceca9c20110a0a1218896a7455e1aa1923e8bd1e3' alt='choose' />
                    <div className="card-body justify-center">
                        <div className='grid grid-cols-2 gap-4'>
                            <div className="card card-side flex flex-col lg:flex-row justify-items-center items-center bg-base-100 shadow-md">
                                <div className='text-6xl text-primary'>
                                    <GiSpeedBoat />
                                </div>
                                <div className="card-body">
                                    <h2 className="card-title font-bold">
                                        Speed and Simplicity</h2>
                                </div>
                            </div>
                            <div className="card card-side flex flex-col lg:flex-row justify-items-center items-center bg-base-100 shadow-md">
                                <div className='text-6xl text-primary'>
                                    <AiOutlineFileDone />
                                </div>
                                <div className="card-body">
                                    <h2 className="card-title font-bold">
                                        Get Approved</h2>
                                </div>
                            </div>
                            <div className="card card-side flex flex-col lg:flex-row justify-items-center items-center bg-base-100 shadow-md">
                                <div className='text-6xl text-primary'>
                                    <RiSecurePaymentFill />
                                </div>
                                <div className="card-body">
                                    <h2 className="card-title font-bold">
                                        Secure and Safe</h2>
                                </div>
                            </div>
                            <div className="card card-side flex flex-col lg:flex-row justify-items-center items-center bg-base-100 shadow-md">
                                <div className='text-6xl text-primary'>
                                    <MdSupportAgent />
                                </div>
                                <div className="card-body">
                                    <h2 className="card-title font-bold">
                                        Awesome support</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WhyChooseUs