import { BiHeart } from 'react-icons/bi'
import {
    MdOutlinePersonOutline,
    MdOutlineLuggage,
    MdOutlineLoyalty,
    MdOutlineAccountBalanceWallet,
    MdOutlineReviews,
} from 'react-icons/md'

export const profileModalItems = [
    {
        icon: <MdOutlinePersonOutline size={22} />,
        itemText: 'My account',
        link: 'account',
    },
    {
        icon: <MdOutlineLuggage size={22} />,
        itemText: 'Bookings & Trips',
        link: 'bookings',
    },
    {
        icon: <MdOutlineLoyalty size={22} />,
        itemText: 'Genius loyalty program',
        link: 'loyalty',
    },
    {
        icon: <MdOutlineAccountBalanceWallet size={22} />,
        itemText: 'Rewards & Wallet',
        link: 'rewards',
    },
    {
        icon: <MdOutlineReviews size={22} />,
        itemText: 'Reviews',
        link: 'reviews',
    },
    {
        icon: <BiHeart overlineThickness={5} size={22} />,
        itemText: 'Saved',
        link: 'saved',
    },
]
