import { useState } from 'react'
import Portal from '../../Portal'
import ImagesModal from '../ImagesModal/ImagesModal'
import style from './ImagesGrid.module.css'

const ImagesGrid = () => {
    const [imageModal, setImageModal] = useState<boolean>(false)

    const onImageSelect = (id: string) => {
        setImageModal(true)
    }

    return (
        <>
            <div className={style.imagesGrid}>
                <div
                    onClick={() => onImageSelect('1')}
                    className={style.imgContainer}
                >
                    <img
                        src="https://t-cf.bstatic.com/xdata/images/hotel/max500/53044862.jpg?k=33021d770778ce473fbd2c3d006735e47dbb0de3999a49eff2a70a966607e7a1&o=&hp=1"
                        alt=""
                    />
                </div>
                <div
                    onClick={() => onImageSelect('2')}
                    className={style.imgContainer}
                >
                    <img
                        src="https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/83778539.jpg?k=6c3a6f5219ea4d2f89eca9a39bd501dbb4115146a45e200b5d927ceee0bd5e5d&o=&hp=1"
                        alt=""
                    />
                </div>
                <div
                    onClick={() => onImageSelect('3')}
                    className={style.imgContainer}
                >
                    <img
                        src="https://t-cf.bstatic.com/xdata/images/hotel/max500/76533600.jpg?k=6d19350257bfc4b201225a044432f44d2f6e3627dd21b46c082521aad0fea843&o=&hp=1"
                        alt=""
                    />
                </div>
                <div
                    onClick={() => onImageSelect('4')}
                    className={style.imgContainer}
                >
                    <img
                        src="https://t-cf.bstatic.com/xdata/images/hotel/max300/344735155.jpg?k=041db7961245b85923ff1b64f2283e95eb2ac872b658185c6e2002853ce13999&o=&hp=1"
                        alt=""
                    />
                </div>
                <div
                    onClick={() => onImageSelect('5')}
                    className={style.imgContainer}
                >
                    <img
                        src="https://t-cf.bstatic.com/xdata/images/hotel/max300/53044765.jpg?k=49533ca9b82f481178a3635da58a93023652b9aefc4a0cc69f855ba62153b714&o=&hp=1"
                        alt=""
                    />
                </div>
                <div
                    onClick={() => onImageSelect('6')}
                    className={style.imgContainer}
                >
                    <img
                        src="https://t-cf.bstatic.com/xdata/images/hotel/max300/47389660.jpg?k=b2f3ef22929a6a857c76682c52a0c338ea4e09f155e619b0aa7d57e01e96e120&o=&hp=1"
                        alt=""
                    />
                </div>
                <div
                    onClick={() => onImageSelect('7')}
                    className={style.imgContainer}
                >
                    <img
                        src="https://t-cf.bstatic.com/xdata/images/hotel/max300/83778532.jpg?k=c862949d155c335ad281459d5f30856fbcc1c9b8f481df0bcf1130ebdd79d937&o=&hp=1"
                        alt=""
                    />
                </div>
                <div
                    onClick={() => onImageSelect('8')}
                    className={style.imgContainer}
                >
                    <img
                        src="https://t-cf.bstatic.com/xdata/images/hotel/max300/52800626.jpg?k=413a3d0876f880ff33524253053b02228153c80985fb5baceb6904290bae5fd2&o=&hp=1"
                        alt=""
                    />
                </div>
            </div>
            {imageModal && (
                <Portal>
                    <ImagesModal
                        imageModal={imageModal}
                        setImageModal={setImageModal}
                    />
                </Portal>
            )}
        </>
    )
}

export default ImagesGrid
