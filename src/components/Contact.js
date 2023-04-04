import { MdOutlineFacebook, MdAlternateEmail, MdSettingsPhone, MdAddLocationAlt } from 'react-icons/md'

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
                            <div className="overflow-x-auto">
                                <table className="table w-80 lg:w-96">
                                    <tbody>
                                        {/* row 1 */}
                                        <tr>
                                            <th>
                                                <button className="btn btn-circle btn-secondary">
                                                    <span className="text-2xl">
                                                        <MdOutlineFacebook />
                                                    </span>
                                                </button>
                                            </th>
                                            <td className='font-bold'><a href='https://www.facebook.com/profile.php?id=100084352876248&mibextid=ZbWKwL'>facebook.com/prime-travels</a></td>
                                        </tr>
                                        {/* row 2 */}
                                        <tr>
                                            <th>
                                                <button className="btn btn-circle btn-secondary">
                                                    <span className="text-2xl">
                                                        <MdAlternateEmail />
                                                    </span>
                                                </button>
                                            </th>
                                            <td className='font-bold'>prime.consultancy.travels@gmail.com</td>
                                        </tr>
                                        {/* row 3 */}
                                        <tr>
                                            <th>
                                                <button className="btn btn-circle btn-secondary">
                                                    <span className="text-2xl">
                                                        <MdSettingsPhone />
                                                    </span>
                                                </button>
                                            </th>
                                            <td className='font-bold'>+8801625811725</td>
                                        </tr>
                                        <tr>
                                            <th>
                                                <button className="btn btn-circle btn-secondary">
                                                    <span className="text-2xl">
                                                        <MdAddLocationAlt />
                                                    </span>
                                                </button>
                                            </th>
                                            <td className='font-bold'>Paris Plaza, Nearby Dutch bangla Bank,<br />Town Hall, Maizdee Court, Noakhali</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact