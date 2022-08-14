import React, { useState } from 'react'
import { reviews } from '../../data'
import Slider from '../Slider/Slider'
import style from './Reviews.module.css'

const Reviews = () => {
    const [index, setIndex] = useState<number>(0)
    return (
        <div className={style.cardsMainWrapper}>
            <Slider data={reviews.length} maxEl={3} index={index} setIndex={setIndex} />
            <div className={style.reviews}>
                <div
                    style={{
                        transform: `translateX(${-369 * index}px)`,
                    }}
                    className={style.reviewsWrapper}
                >
                    {reviews.map((review) => (
                        <div key={review.id} className={style.review}>
                            <div className={style.reviewHeader}>
                                {review.photo.length > 0 ? (
                                    <img
                                        className={style.reviewerPhoto}
                                        src={review.photo}
                                        alt=""
                                    />
                                ) : (
                                    <img
                                        className={style.reviewerPhoto}
                                        src="https://upload.wikimedia.org/wikipedia/commons/9/9a/No_avatar.png"
                                        alt=""
                                    />
                                )}
                                <div className={style.reviewerInfo}>
                                    <h4>{review.name}</h4>
                                    <div>
                                        <img
                                            className={style.reviewerFlag}
                                            src={review.flag}
                                            alt=""
                                        />
                                        <span
                                            className={
                                                style.reviewerNationality
                                            }
                                        >
                                            {review.country}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className={style.reviewBody}>
                                <p>
                                    <span>“</span>
                                    {review.review}
                                    <span>”</span>
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Reviews
