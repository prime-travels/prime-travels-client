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
                    <div className="card">
                        <div className="card-body">
                            <h2 className="text-2xl lg text-secondary:text-4xl font-bold mb-5">
                                Contact <span className="text-secondary">With Us</span>
                            </h2>
                            <div className="overflow-x-auto w-full">
                                <table className="table w-full">
                                    <tbody>
                                        {/* row 1 */}
                                        <tr>
                                            <td>
                                                <div className="flex items-center space-x-3">
                                                    <div className="avatar">
                                                        <div className="mask mask-squircle text-secondary text-4xl">
                                                            <MdOutlineFacebook />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="font-bold">
                                                            <a href='https://www.facebook.com/profile.php?id=100084352876248&mibextid=ZbWKwL'>/prime-travels</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        {/* row 2 */}
                                        <tr>
                                            <td>
                                                <div className="flex items-center space-x-3">
                                                    <div className="avatar">
                                                        <div className="mask mask-squircle text-secondary text-4xl">
                                                            <MdAlternateEmail />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="font-bold">prime.consultancy<br />.travels@gmail.com</div>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        {/* row 3 */}
                                        <tr>
                                            <td>
                                                <div className="flex items-center space-x-3">
                                                    <div className="avatar">
                                                        <div className="mask mask-squircle text-secondary text-4xl">
                                                            <MdSettingsPhone />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="font-bold">+8801625811725</div>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        {/* row 4 */}
                                        <tr>
                                            <td>
                                                <div className="flex items-center space-x-3">
                                                    <div className="avatar">
                                                        <div className="mask mask-squircle text-secondary text-4xl">
                                                            <MdAddLocationAlt />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="font-bold">Paris Plaza, Nearby<br />Dutch Bangla<br />Bank, Town Hall,<br />Maizdee Court, Noakhali</div>
                                                    </div>
                                                </div>
                                            </td>
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