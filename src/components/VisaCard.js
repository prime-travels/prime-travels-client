import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useNextSanityImage } from 'next-sanity-image';
import { sanityClient } from "../../sanityClient";

const VisaCard = (props) => {
    const post = props.data;
    const slug = post.slug.current;
    const imageProps = useNextSanityImage(
        sanityClient,
        post.mainImage
    );
    return (
        <>
            <div className="card w-80 lg:w-96 bg-base-100 shadow-md">
                <figure className="px-10 pt-10">
                    {post.mainImage && (
                        // <img src={post.mainImage} alt="" />
                        <Image {...imageProps} className='rounded-xl' layout="intrinsic" alt="" />
                    )}
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-2xl font-bold">{post.title}</h2>
                    <p>{post.excerpt}</p>
                    <div className="card-actions">
                        <Link href={slug} className="btn btn-secondary">Learn More</Link>
                    </div>
                </div>
            </div>
        </>
    );
};
export default VisaCard;