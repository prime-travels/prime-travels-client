import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'
import { MdOutlineFacebook, MdAlternateEmail, MdSettingsPhone, MdAddLocationAlt } from 'react-icons/md'
import Image from 'next/image';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_ovvv1gh', 'template_63klrub', form.current, 'AX2mslh-QzMQsRzHy')
            .then((result) => {
                Swal.fire({
                    title: 'Success!',
                    text: 'Your Feedback has successfully sent!',
                    imageUrl: 'https://img.freepik.com/free-vector/green-eco-loop-leaf-check-mark_78370-658.jpg?w=740&t=st=1684069589~exp=1684070189~hmac=a77293ca40b117b371d66e2010bbaeb064cea8af285508287f532fd471c899c3',
                    imageWidth: 250,
                    imageHeight: 250,
                    imageAlt: 'Custom image',
                })
                e.target.reset()
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <>
            <div className='container mx-auto p-4'>
                <h1 className="text-3xl lg:text-4xl font-bold mt-8 text-center">Give Your <span className="text-secondary">Feedback</span></h1>
            </div>
            <div className="container mx-auto p-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 place-items-center h-auto lg:h-screen">

                    <form ref={form} onSubmit={sendEmail} className='grid grid-cols-1 gap-4 place-items-start w-full lg:w-3/4'>
                        <input type="text" name="from_name" placeholder="Your Name" className="input input-bordered input-secondary w-full text-primary" />
                        <input type="email" name="from_email" placeholder="Your Email" className="input input-bordered input-secondary w-full text-primary" />
                        <textarea name="message" className="textarea textarea-secondary w-full text-primary" placeholder="Give Your Feedback"></textarea>
                        <input type="submit" className='btn btn-outline btn-secondary font-semibold rounded-full' value="Send &#8608;" />
                    </form>

                    <figure>
                        <Image
                            src="/feedback.svg"
                            width={500}
                            height={500}
                            alt="Picture of the author"
                            className="rounded-xl"
                        />
                    </figure>

                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 place-items-center">
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