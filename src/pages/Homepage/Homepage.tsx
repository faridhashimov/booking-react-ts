import {
    BrowseProperty,
    Explore,
    Footer,
    Header,
    Postcards,
    RecentSearches,
    Subscribe,
} from '../../components'

const Homepage = () => {
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
