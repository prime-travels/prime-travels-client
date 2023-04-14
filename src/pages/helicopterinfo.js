import React, { useState, useEffect } from "react";
// import imageUrlBuilder from "@sanity/image-url";
// import { sanityClient } from "../sanityClient";
import HelicopterCard from "@/components/HelicopterCard";

const HelicopterInfo = ({ posts }) => {
    const [mappedPosts, setMappedPosts] = useState([]);
    useEffect(() => {
        if (posts.length) {
            // const imageBuilder = imageUrlBuilder(sanityClient);
            setMappedPosts(
                posts.map((post) => {
                    return {
                        ...post,
                        // mainImage: imageBuilder
                        //   .image(post.mainImage)
                        //   .width(450)
                        //   .height(500),
                    };
                }));
        } else {
            setMappedPosts([]);
        }
    }, [posts]);
    return (
        <div className="container mx-auto p-4 mt-20">
            <h1 className="text-3xl lg:text-4xl font-bold mb-2 text-center">See Heli-Tour <span className="text-secondary">Information</span></h1>
            <h6 className='text-sm lg:text-base mb-10 text-center'>Know all about your Heli Tour</h6>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                {mappedPosts &&
                    mappedPosts.length &&
                    mappedPosts.map((post, index) => (
                        <HelicopterCard data={post} key={index} />
                    ))}
            </div>
        </div>
    );
};
export const getServerSideProps = async (context) => {
    const query = encodeURIComponent(`*[ _type == "helicopinfo" ]`);
    const url = `${process.env.SANITY_URL}query=${query}`;
    const data = await fetch(url).then((res) => res.json());
    const posts = data.result;
    if (!posts || !posts.length === 0) {
        return {
            props: {
                posts: [],
            },
        };
    } else {
        return {
            props: {
                posts,
            },
        };
    }
};
export default HelicopterInfo;