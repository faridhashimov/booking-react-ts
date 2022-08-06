//Destination cards type
export interface DestinationCardType {
    id: number
    img: string
    city: string
    info: string
}

// Slider data type
export interface SliderDataType {
    data: number
    maxEl: number
    index: number
    setIndex: any
}

// Type for credentials which we send to the backend
export interface IRegInfo {
    name: string
    surname: string
    email: string
    password: string
}

// Guests state type
export interface IGuests {
    adults: number,
    children: number,
    room: number,
}

// Date range type for date selection
export interface IDateRange {
    startDate: Date
    endDate: Date
    key: string
}
