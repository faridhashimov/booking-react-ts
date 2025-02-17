import { FC } from 'react'
import {
    BrowseProperty,
    Explore,
    Footer,
    Header,
    Postcards,
    RecentSearches,
    Subscribe,
} from '../../components'

const Homepage: FC = () => {
    return (
        <>
            <Header />
            <RecentSearches />
            <Explore />
            <BrowseProperty />
            <Postcards />
            <Subscribe />
            <Footer />
        </>
    )
}

export default Homepage
