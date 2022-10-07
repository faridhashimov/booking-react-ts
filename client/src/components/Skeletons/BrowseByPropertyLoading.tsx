import ContentLoader from 'react-content-loader'
import style from './Skeletons.module.css'

const BrowseByPropertyLoading = () => (
    <div className={style.mainContainer}>
        <ContentLoader
            style={{ marginBottom: '10px' }}
            speed={2}
            width={300}
            height={50}
            viewBox="0 0 300 50"
            backgroundColor="#e3e3e3"
            foregroundColor="#ecebeb"
        >
            <rect x="4" y="28" rx="0" ry="0" width="271" height="18" />
        </ContentLoader>
        <div className={style.itemsBetween}>
            {[...Array(4)].map((_, i) => (
                <ContentLoader
                    key={i}
                    speed={2}
                    width={265}
                    height={270}
                    viewBox="0 0 265 270"
                    backgroundColor="#e3e3e3"
                    foregroundColor="#ecebeb"
                >
                    <rect x="5" y="5" rx="0" ry="0" width="263" height="211" />
                    <rect x="5" y="230" rx="0" ry="0" width="89" height="18" />
                    <rect x="5" y="250" rx="0" ry="0" width="136" height="15" />
                </ContentLoader>
            ))}
        </div>
    </div>
)

export default BrowseByPropertyLoading
