import React, { useEffect, useState } from 'react'
import { images, reviews } from '../../data'
import style from './ImagesModal.module.css'

const ImagesModal: React.FC<{
    imageModal: boolean
    setImageModal: React.Dispatch<React.SetStateAction<boolean>>
}> = ({ imageModal, setImageModal }): JSX.Element => {
    const [imageSlider, setImageSlider] = useState<boolean>(false)
    const [imgId, setImgId] = useState<number>(1)
    const [dir, setDir] = useState<string>('')

    useEffect(() => {
        document.body.style.overflowY = 'hidden'

        return () => {
            document.body.style.overflowY = 'scroll'
        }
    }, [])

    const onImageSelect = (id: number) => {
        setImageSlider(true)
        setImgId(id)
    }

    const onImageChange = (d: string) => {
        if (d === 'l') {
            setDir('l')
            setImgId((prev) => (prev > 1 ? prev - 1 : images.length))
        } else {
            setDir('r')
            setImgId((prev) => (prev < images.length ? prev + 1 : 1))
        }
    }

    console.log(dir, imgId)

    return (
        <div className={style.modalBackground}>
            <div className={style.modalContainer}>
                {/* <div className={style.modalWrapper}> */}
                <div className={style.modal}>
                    <header className={style.modalHeader}>
                        <div
                            onClick={() => setImageSlider(false)}
                            className={style.close}
                            style={{
                                visibility: !imageSlider ? 'hidden' : 'visible',
                            }}
                        >
                            <div className={style.iconContainer}>
                                <svg
                                    height="32"
                                    width="32"
                                    viewBox="0 0 128 128"
                                    role="presentation"
                                    aria-hidden="true"
                                    focusable="false"
                                >
                                    <path d="M108 60H31.3l29.2-29.2a4 4 0 0 0-5.7-5.6L16 64l38.8 38.8a4 4 0 1 0 5.7-5.6L31.3 68H108a4 4 0 0 0 0-8z"></path>
                                </svg>
                            </div>
                            <span>Gallery</span>
                        </div>
                        <div className={style.hotelTitle}>
                            <h4>Hotel Belleclaire Central Park</h4>
                            <a href="/">Reserve Now</a>
                        </div>
                        <div
                            onClick={() => setImageModal(false)}
                            className={style.close}
                        >
                            <span>Close</span>
                            <div className={style.iconContainer}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    role="presentation"
                                >
                                    <path d="M13 12l6.26-6.26a.73.73 0 0 0-1-1L12 11 5.74 4.71a.73.73 0 1 0-1 1L11 12l-6.29 6.26a.73.73 0 0 0 .52 1.24.73.73 0 0 0 .51-.21L12 13l6.26 6.26a.74.74 0 0 0 1 0 .74.74 0 0 0 0-1z"></path>
                                </svg>
                            </div>
                        </div>
                    </header>
                    <main className={style.modalBody}>
                        {!imageSlider ? (
                            <section className={style.imagesPart}>
                                <div className={style.imagesContainer}>
                                    {images.map((image) => (
                                        <div
                                            key={image.id}
                                            onClick={() =>
                                                onImageSelect(image.id)
                                            }
                                            className={style.imgContainer}
                                        >
                                            <img src={image.img} alt="" />
                                        </div>
                                    ))}
                                </div>
                            </section>
                        ) : (
                            <section className={style.imageSliderPart}>
                                <div className={style.mainImageContainer}>
                                    <div
                                        onClick={() => onImageChange('l')}
                                        className={style.chevronContainer}
                                    >
                                        <svg
                                            height="128"
                                            width="128"
                                            viewBox="0 0 128 128"
                                            role="presentation"
                                            aria-hidden="true"
                                            focusable="false"
                                        >
                                            <path d="M73.7 96a4 4 0 0 1-2.9-1.2L40 64l30.8-30.8a4 4 0 0 1 5.7 5.6L51.3 64l25.2 25.2a4 4 0 0 1-2.8 6.8z"></path>
                                        </svg>
                                    </div>
                                    <div className={style.mainImage}>
                                        <img
                                            src={
                                                images.find(
                                                    (i) => i.id === imgId
                                                )?.img
                                            }
                                            alt=""
                                        />
                                    </div>
                                    <div
                                        onClick={() => onImageChange('r')}
                                        className={style.chevronContainer}
                                    >
                                        <svg
                                            height="128"
                                            width="128"
                                            viewBox="0 0 128 128"
                                            role="presentation"
                                            aria-hidden="true"
                                            focusable="false"
                                        >
                                            <path d="M54.3 96a4 4 0 0 1-2.8-6.8L76.7 64 51.5 38.8a4 4 0 0 1 5.7-5.6L88 64 57.2 94.8a4 4 0 0 1-2.9 1.2z"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div className={style.allImages}>
                                    <div className={style.imagesCount}>
                                        <span>
                                            {imgId} / {images.length}
                                        </span>
                                    </div>
                                    <div className={style.allImagesContainer}>
                                        <div
                                            className={style.allImagesWrapper}
                                            style={{
                                                transform:
                                                    imgId < 4
                                                        ? 'translateX(0)'
                                                        : images.length -
                                                              imgId <=
                                                              2 &&
                                                          images.length -
                                                              imgId >=
                                                              0
                                                        ? `translateX(none)`
                                                        // : 
                                                        // imgId ===
                                                        //   images.length
                                                        // ? `translateX(${
                                                        //       -122 * (imgId - 6)
                                                        //   }px)`
                                                        : `translateX(${
                                                              -122 * (imgId - 3)
                                                          }px)`,
                                            }}
                                        >
                                            {images.map((image) => (
                                                <div
                                                    onClick={() =>
                                                        setImgId(image.id)
                                                    }
                                                    key={image.id}
                                                    className={
                                                        style.singleImageContainer
                                                    }
                                                    style={{
                                                        opacity:
                                                            image.id === imgId
                                                                ? '1'
                                                                : '.5',
                                                    }}
                                                >
                                                    <img
                                                        src={image.img}
                                                        alt=""
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </section>
                        )}
                        <aside className={style.reviewsPart}>
                            <div className={style.reviewsHeader}>
                                <div className={style.reviewScore}>
                                    <div className={style.rating}>8.1</div>
                                    <div className={style.rateContainer}>
                                        <span className={style.rateName}>
                                            Very Good
                                        </span>
                                        <span className={style.reviewCount}>
                                            7,997 reviews
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className={style.reviewsContainer}>
                                <div className={style.reviewsWrapper}>
                                    {reviews.map((review) => (
                                        <div className={style.reviewBody}>
                                            <p className={style.review}>
                                                <span>“</span>
                                                {review.review} <span>”</span>
                                            </p>
                                            <div className={style.author}>
                                                <div
                                                    className={
                                                        style.authorPhoto
                                                    }
                                                >
                                                    <img
                                                        className={
                                                            style.reviewerPhoto
                                                        }
                                                        src={
                                                            review.photo
                                                                .length > 0
                                                                ? review.photo
                                                                : 'https://upload.wikimedia.org/wikipedia/commons/9/9a/No_avatar.png'
                                                        }
                                                        alt={review.name}
                                                    />
                                                </div>
                                                <div
                                                    className={style.authorInfo}
                                                >
                                                    <span
                                                        className={
                                                            style.authorName
                                                        }
                                                    >
                                                        {review.name}
                                                    </span>
                                                    <span
                                                        className={
                                                            style.authorCountry
                                                        }
                                                    >
                                                        <img
                                                            src={review.flag}
                                                            alt=""
                                                        />
                                                        {review.country}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </aside>
                    </main>
                </div>
                {/* </div> */}
            </div>
        </div>
    )
}

export default ImagesModal
