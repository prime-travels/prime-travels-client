import Image from 'next/image';
// import Link from 'next/link';
// import { BiCodeBlock } from 'react-icons/bi'
// import { BsPersonBoundingBox } from 'react-icons/bs'
// import { ImFacebook2, ImInstagram } from 'react-icons/im'

const members = [
    {
        id: 1,
        name: 'Anamul Hauqe Apon',
        designation: "Founder & CEO",
        // fb: 'https://www.facebook.com/profile.php?id=100079551962412&mibextid=ZbWKwL',
        // portfolio: "https://imtiaz-tamim.netlify.app/",
        phone: "+8801625811725",
        image: 'apon.jpg',
    },
    {
        id: 2,
        name: 'Mehedi Hasan Sawon',
        designation: "Manager (Sales)",
        // fb: 'https://www.facebook.com/arfin.rahman.146?mibextid=ZbWKwL',
        // portfolio: "https://arfins-planet.vercel.app/",
        phone: "+8801303643606",
        image: 'mehedi.jpg',
    },
    {
        id: 3,
        name: 'Md Yeasin',
        designation: "Marketing Assistant",
        // fb: 'https://www.facebook.com/mariamthedesigner?mibextid=ZbWKwL',
        // portfolio: "https://www.behance.net/mariamthedesigner",
        phone: "+8801641104981",
        image: 'yeasin.jpg',
    },
];

const Team = () => {
    return (
        <>
            <div className="hero">
                <div className="hero-content text-center text-neutral-content">
                    <div className="lg:px-48 py-5">
                        <h2 className="text-2xl lg:text-4xl text-neutral font-bold mb-4 flex justify-center items-center"><span className="text-secondary text-4xl mr-3"></span> Our <span className="text-secondary ml-1.5">Staff</span></h2>
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-12 justify-center py-5">
                            {members.map((member) => (
                                <>
                                    <div className="card bg-base-100 shadow-xl" key={member.id}>
                                        <figure>
                                            <Image
                                                src={`/${member.image}`}
                                                width={300}
                                                height={300}
                                                alt={member.title}
                                                className="rounded-lg h-72 lg:h-60"
                                            />
                                        </figure>
                                        <div className="card-body items-center text-center">
                                            <h2 className="card-title font-semibold text-secondary">{member.name}</h2>
                                            <h2 className="font-semibold text-primary">{member.designation}</h2>
                                            <p className="text-neutral font-semibold">At Prime Travels</p>
                                            <p className="text-sm text-primary-focus">{member.phone}</p>
                                            {/* <div className="mt-4">
                                                <div className="grid grid-flow-col gap-4">
                                                    <Link href={member.fb}><span className=" text-secondary text-2xl"><ImFacebook2 /></span></Link>
                                                    <Link href={member.portfolio}><span className=" text-secondary text-2xl"><BsPersonBoundingBox /></span></Link>
                                                    <Link href={member.fb}><span className=" text-secondary text-2xl"><ImInstagram /></span></Link>
                                                </div>
                                            </div> */}
                                        </div>
                                    </div>
                                </>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Team