import style from './Postcards.module.css'

const Postcards = () => {
    return (
        <div className={style.container}>
            <div className={style.wrapper}>
                <div className={style.cardContainer}>
                    <img
                        className={style.cardImage}
                        src="https://t-cf.bstatic.com/xdata/images/city/540x270/856674.webp?k=70a9589c2f7d2fc175c3ac02c55702c2e433f588866756a394cddfe215170f38&o="
                        alt=""
                    />
                    <div className={style.cardInfo}>
                        <h3 className={style.cardTitle}>New York</h3>
                        <p className={style.cardDesc}>1,331 properties</p>
                    </div>
                </div>

                <div className={style.cardContainer}>
                    <img
                        className={style.cardImage}
                        src="https://t-cf.bstatic.com/xdata/images/city/540x270/653169.webp?k=52221e7299455127fa8ef6730e2399b0c683e8cc4a6ea84ebeecd95d4bac024d&o="
                        alt=""
                    />
                    <div className={style.cardInfo}>
                        <h3 className={style.cardTitle}>Prague</h3>
                        <p className={style.cardDesc}>4,915 properties</p>
                    </div>
                </div>

                <div className={style.cardContainer}>
                    <img
                        className={style.cardImage}
                        src="https://t-cf.bstatic.com/xdata/images/city/540x270/613104.webp?k=6e9fa0c6cb25472c6a843ddc1a14d93cf7a7306a4111a74052af94d75c69b03e&o="
                        alt=""
                    />
                    <div className={style.cardInfo}>
                        <h3 className={style.cardTitle}>Roma</h3>
                        <p className={style.cardDesc}>14,093 properties</p>
                    </div>
                </div>

                <div className={style.cardContainer}>
                    <img
                        className={style.cardImage}
                        src="https://t-cf.bstatic.com/xdata/images/city/540x270/619923.webp?k=4fb13225390240a51ee5aa1d76318d03dc0de8a046ddc06e4598f17b287bdcc9&o="
                        alt=""
                    />
                    <div className={style.cardInfo}>
                        <h3 className={style.cardTitle}>Dubai</h3>
                        <p className={style.cardDesc}>4,278 properties</p>
                    </div>
                </div>

                <div className={style.cardContainer}>
                    <img
                        className={style.cardImage}
                        src="https://t-cf.bstatic.com/xdata/images/city/540x270/613094.webp?k=f751e035ae2c0ac97263ed7d150bae607ffa17a88c55e81cec907941d6bb078b&o="
                        alt=""
                    />
                    <div className={style.cardInfo}>
                        <h3 className={style.cardTitle}>London</h3>
                        <p className={style.cardDesc}>14,499 properties</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Postcards
