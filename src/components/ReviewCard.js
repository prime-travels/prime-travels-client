import React from "react";
import Image from "next/image";
import { PortableText } from '@portabletext/react'
import { useNextSanityImage } from 'next-sanity-image';
import { sanityClient } from "../../sanityClient";

const ReviewCard = (props) => {
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
                        <Image {...imageProps} className='rounded-xl h-60' layout="intrinsic" alt="" />
                    )}
                </figure>
                <div className="card-body items-center text-start">
                    <h2 className="card-title text-2xl font-bold">{post.title}</h2>
                    <p>{post.excerpt}</p>
                    <PortableText
                        value={post.body}
                    />
                </div>
            </div>
        </>
    );
};
export default ReviewCard;