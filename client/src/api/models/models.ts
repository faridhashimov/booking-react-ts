// Popular destinations response type
export interface IPopularDestinationsByCountry {
    _id: string
    totalProperties: number
    cityPhoto: string
}

// Browse by property response type
export type IBrowseByType = Omit<IPopularDestinationsByCountry, 'cityPhoto'>

// Featured destinations by type
export interface IFeaturedDestinationsByType
    extends IPopularDestinationsByCountry {
    country: string
}

// Selected type properties
export interface Review {
    rate: number;
}

export interface SelectedType {
    _id: string;
    name: string;
    description: string;
    country: string;
    city: string;
    photos: string;
    reviews: number[];
}


// Hotels response type
export interface CheapestRoom {
    roomType: string
    bedType: string
    lastPrice: number
    actualPrice: number
}

export interface Room {
    roomType: string
    roomQuantity: number
    bedTypes: string[]
    roomFacilities: string[]
    sleeps: number
    lastPrice: number
    actualPrice: number
    cancellation: string
    payment: string
    breakfast: string
    unavailableDates: any[]
    _id: string
    updatedAt: Date
    createdAt: Date
    __v: number
}

export interface IHotels {
    cheapestRoom: CheapestRoom
    _id: string
    propertyType: string
    star: number
    name: string
    description: string
    country: string
    city: string
    photos: string[]
    adress: string
    distance: number | string
    cancellationPolicy: string
    meals: string
    funThingsToDo: string[]
    accessibility: string[]
    rooms: Room[]
    reviews: any[]
    createdAt: Date
    updatedAt: Date
    __v: number
    cityPhoto: string
}
