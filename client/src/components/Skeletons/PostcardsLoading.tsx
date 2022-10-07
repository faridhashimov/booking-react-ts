import ContentLoader from 'react-content-loader'
import style from './Skeletons.module.css'

const PostcardsLoading = () => (
    <div className={style.posctardsContainer}>
        <div className={style.itemsBetween}>
            {[...Array(2)].map((_, i) => (
                <ContentLoader
                    key={i}
                    speed={2}
                    width={550}
                    height={280}
                    viewBox="0 0 550 280"
                    backgroundColor="#e3e3e3"
                    foregroundColor="#ecebeb"
                >
                    <rect x="5" y="5" rx="0" ry="0" width="540" height="270" />
                </ContentLoader>
            ))}
        </div>
        <div className={style.itemsBetween}>
            {[...Array(3)].map((_, i) => (
                <ContentLoader
                    key={i}
                    speed={2}
                    width={364}
                    height={280}
                    viewBox="0 0 364 280"
                    backgroundColor="#e3e3e3"
                    foregroundColor="#ecebeb"
                >
                    <rect x="5" y="5" rx="0" ry="0" width="354" height="270" />
                </ContentLoader>
            ))}
        </div>
    </div>
)

export default PostcardsLoading
