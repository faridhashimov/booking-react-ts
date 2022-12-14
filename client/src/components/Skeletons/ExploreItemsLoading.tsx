import ContentLoader from 'react-content-loader'
import style from './Skeletons.module.css'

const ExploreItemsLoading = () => (
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
            <rect x="4" y="4" rx="0" ry="0" width="150" height="18" />
        </ContentLoader>
        <div
            className={style.itemsWrapper}
        >
            {[...Array(6)].map((_, i) => (
                <div key={i} className={style.itemContainer}>
                <ContentLoader
                    
                    speed={2}
                    width={170}
                    height={220}
                    viewBox="0 0 170 220"
                    backgroundColor="#e3e3e3"
                    foregroundColor="#ecebeb"
                >
                    <rect x="5" y="5" rx="0" ry="0" width="170" height="170" />
                    <rect x="5" y="184" rx="0" ry="0" width="59" height="12" />
                    <rect x="6" y="202" rx="0" ry="0" width="96" height="9" />
                </ContentLoader>
            </div>
            ))}
        </div>
    </div>
)

export default ExploreItemsLoading
