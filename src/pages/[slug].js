import React, { useEffect, useState } from "react";
// import imageUrlBuilder from "@sanity/image-url";
import { PortableText } from '@portabletext/react'
import { useNextSanityImage } from "next-sanity-image";
import Image from "next/image";
import { sanityClient } from "../../sanityClient";
const VisaDetails = (props) => {
    const { title, body, image } = props;
    // const [imageUrl, setImageUrl] = useState("");
    const imageProps = useNextSanityImage(sanityClient, image);
    // useEffect(() => {
    //   const imageBuilder = imageUrlBuilder(sanityClient);
    //   setImageUrl(imageBuilder.image(image));
    // }, [image]);
    return (
        <div className="container mx-auto p-4 mt-20">
            <div>
                <h1 className="text-3xl font-bold mb-6">{title}</h1>
                {imageProps && <Image {...imageProps} layout="intrinsic" alt="" className="rounded-lg mb-6" />}
                <PortableText
                    value={body}
                />
            </div>
        </div>
    );
};
export const getServerSideProps = async (context) => {
    const pageSlug = context.query.slug;
    // console.log(pageSlug);
    if (!pageSlug) {
        return {
            notFound: true,
        };
    }
    const query = encodeURIComponent(
        `*[ slug.current == "${pageSlug}" ]`
    );
    const url = `${process.env.SANITY_URL}query=${query}`;
    const data = await fetch(url).then((res) => res.json());
    const post = data.result[0];
    //   console.log(post);
    if (!post) {
        return {
            notFound: true,
        };
    } else {
        return {
            props: {
                title: post.title,
                body: post.body,
                image: post.mainImage,
            },
        };
    }
};
export default VisaDetails;