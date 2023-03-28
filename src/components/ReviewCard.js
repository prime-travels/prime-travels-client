import React from 'react'

const ReviewCard = () => {
    return (
        <>
            <div className="card w-72 lg:w-96 bg-base-100 shadow-xl m-4">
                <figure className="px-4 lg:px-10 pt-4 lg:pt-10">
                    <img src="https://img.freepik.com/free-photo/carefree-good-looking-blond-woman-pointing-upper-left-corner-talking-camera-with-broad-satisfied-smile-recommend-awesome-place-great-online-store-standing-white-wall-joyful_176420-36642.jpg?w=900&t=st=1678808591~exp=1678809191~hmac=ca85911957944804eee2ca3d601d38f812ab294e25353d4912c84385605bb8e0" alt="review" className="rounded-xl" />
                </figure>
                <div className="card-body items-start lg:items-center text-left lg:text-center">
                    <h2 className="card-title text-lg lg:text-2xl">Mainul Meheraj</h2>
                    <p>It is a long established fact that a reader will be distracted by the readable content</p>
                    <div className="card-actions">
                        <div className="rating rating-md">
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-secondary-content" />
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-secondary-content" checked />
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-secondary-content" />
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-secondary-content" />
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-secondary-content" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ReviewCard