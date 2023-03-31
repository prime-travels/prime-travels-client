import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useNextSanityImage } from 'next-sanity-image';
import { sanityClient } from "../../sanityClient";

const VisitCard = (props) => {
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

            {/* <div className="col-lg-4">
            <div className="card border-0 rounded-3 shadow-lg">
                {post.mainImage && (
                    // <img src={post.mainImage} alt="" />
                    <Image {...imageProps} className='img-fluid' layout="intrinsic" alt="" />
                )}
                <div className="card-body d-flex justify-content-center flex-column">
                    <h5 className="card-title text-center fw-bold">{post.title}</h5>
                    <p className="card-text">
                        {post.excerpt}
                    </p>
                    <a href={post?.visit} className="btn main-button text-white rounded-pill fw-bold">
                        Visit Now
                    </a>
                </div>
            </div>
        </div> */}
        </>
    );
};
export default VisitCard;