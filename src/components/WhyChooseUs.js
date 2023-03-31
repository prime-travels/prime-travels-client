import { AiOutlineFileDone } from 'react-icons/ai'
import { RiSecurePaymentFill } from 'react-icons/ri'
import { SiSimplenote } from 'react-icons/si'
import { MdSupportAgent } from 'react-icons/md'
import Link from 'next/link'

const WhyChooseUs = () => {
    return (
        <>
            <div className='container mx-auto p-4 my-10'>
                <h1 className='text-center mb-12'>
                    <Link href='/visainfo' className='btn btn-secondary font-bold rounded-lg'>See Visa Requirements</Link>
                </h1>
                <h1 className="text-3xl lg:text-4xl font-bold mb-2 text-center">Why Choose <span className="text-secondary">Us</span></h1>
                <h6 className='text-sm lg:text-base mb-10 text-center'>Because we care about your safety</h6>
                <div className="card lg:card-side">
                    <img className='w-auto lg:w-2/4 h-44 lg:h-96' src='/solution.svg' alt='choose' />
                    <div className="card-body justify-center">
                        <div className='grid grid-cols-2 gap-4'>
                            <div className="card card-side flex flex-col lg:flex-row justify-items-center items-center bg-base-100 shadow-md">
                                <div className='text-6xl text-secondary'>
                                    <SiSimplenote />
                                </div>
                                <div className="card-body">
                                    <h2 className="card-title font-bold">
                                        Simplicity</h2>
                                </div>
                            </div>
                            <div className="card card-side flex flex-col lg:flex-row justify-items-center items-center bg-base-100 shadow-md">
                                <div className='text-6xl text-secondary'>
                                    <AiOutlineFileDone />
                                </div>
                                <div className="card-body">
                                    <h2 className="card-title font-bold">
                                        Get Approved</h2>
                                </div>
                            </div>
                            <div className="card card-side flex flex-col lg:flex-row justify-items-center items-center bg-base-100 shadow-md">
                                <div className='text-6xl text-secondary'>
                                    <RiSecurePaymentFill />
                                </div>
                                <div className="card-body">
                                    <h2 className="card-title font-bold">
                                        Secure & Safe</h2>
                                </div>
                            </div>
                            <div className="card card-side flex flex-col lg:flex-row justify-items-center items-center bg-base-100 shadow-md">
                                <div className='text-6xl text-secondary'>
                                    <MdSupportAgent />
                                </div>
                                <div className="card-body">
                                    <h2 className="card-title font-bold">
                                        Great support</h2>
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