import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useGetPropetiesByTypeQuery } from '../../api/fredbookingapi/fredbooking.api'
import BrowseByPropertyLoading from '../Skeletons/BrowseByPropertyLoading'
import Slider from '../Slider/Slider'
import style from './BrowseProperty.module.css'

const BrowseProperty = () => {
    const [index, setIndex] = useState<number>(0)
    const navigate = useNavigate()
    const propertyImages = [
        {
            type: 'Hotel',
            img: 'https://r-xx.bstatic.com/xdata/images/xphoto/300x240/57584488.jpeg?k=d8d4706fc72ee789d870eb6b05c0e546fd4ad85d72a3af3e30fb80ca72f0ba57&o=',
        },
        {
            type: 'Apartment',
            img: 'https://q-xx.bstatic.com/xdata/images/hotel/300x240/119467716.jpeg?k=f3c2c6271ab71513e044e48dfde378fcd6bb80cb893e39b9b78b33a60c0131c9&o=',
        },
        {
            type: 'Villa',
            img: 'https://q-xx.bstatic.com/xdata/images/hotel/300x240/100235855.jpeg?k=5b6e6cff16cfd290e953768d63ee15f633b56348238a705c45759aa3a81ba82b&o=',
        },
        {
            type: 'Hostel',
            img: 'https://r-xx.bstatic.com/xdata/images/xphoto/300x240/45450082.jpeg?k=beb101b827a729065964523184f4db6cac42900c2415d71d516999af40beb7aa&o=',
        },
        {
            type: 'Resort',
            img: 'https://r-xx.bstatic.com/xdata/images/xphoto/300x240/45450084.jpeg?k=f8c2954e867a1dd4b479909c49528531dcfb676d8fbc0d60f51d7b51bb32d1d9&o=',
        },
        {
            type: 'Motel',
            img: 'https://r-xx.bstatic.com/xdata/images/xphoto/300x240/45450093.jpeg?k=aa5cc7703f3866af8ffd6de346c21161804a26c3d0a508d3999c11c337506ae1&o=',
        },
    ]

    const { isError, isFetching, data } = useGetPropetiesByTypeQuery('')

    const onTypeChosen = (type: string) => {
        navigate(`/propertytype?type=${type}`)
    }

    return (
        <div className={style.container}>
            {isFetching && <BrowseByPropertyLoading />}
            {isError && (
                <p style={{ color: 'red' }}>
                    Something went wrong, plese reload the page or try later.
                </p>
            )}
            {data && (
                <div className={style.mainWrapper}>
                    <h1 className={style.mainTitle}>Browse by property type</h1>

                    <div className={style.wrapper}>
                        <Slider
                            data={data?.length}
                            maxEl={4}
                            index={index}
                            setIndex={setIndex}
                        />
                        <div className={style.cardsContainer}>
                            <div
                                className={style.cardsWrapper}
                                style={{
                                    transform: `translateX(${-279 * index}px)`,
                                }}
                            >
                                {data?.map(
                                    ({
                                        _id,
                                        totalProperties,
                                    }: {
                                        _id: string
                                        totalProperties: number
                                    }) => (
                                        <div
                                            onClick={() => onTypeChosen(_id)}
                                            key={_id}
                                            className={style.card}
                                        >
                                            <div
                                                className={style.imageContainer}
                                            >
                                                <img
                                                    className={style.image}
                                                    src={
                                                        propertyImages.find(
                                                            (i) =>
                                                                i.type === _id
                                                        )?.img
                                                    }
                                                    alt={
                                                        propertyImages.find(
                                                            (i) =>
                                                                i.type === _id
                                                        )?.type
                                                    }
                                                />
                                            </div>
                                            <div className={style.info}>
                                                <h3 className={style.title}>
                                                    {`${_id}s`}
                                                </h3>
                                                <span className={style.desc}>
                                                    {`${totalProperties} ${_id.toLowerCase()}s`}
                                                </span>
                                            </div>
                                        </div>
                                    )
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default BrowseProperty
