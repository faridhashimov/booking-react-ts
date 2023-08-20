import { Request, Response } from 'express'
import CityModel from '../models/city.model'
import PropertyModel from '../models/property.model'

// Add new property
const createProperty = async (req: Request, res: Response) => {
    try {
        const property = await PropertyModel.findOne({
            city: req.body.city,
        })
        if (property && property.name === req.body.name) {
            return res.status(400).json('Property already added!')
        }
        const city = await CityModel.findOne({ city: req.body.city })
        if (!city) {
            return res.status(400).json('Please add city to db')
        }
        const newProperty = await PropertyModel.create({
            ...req.body,
            cityPhoto: city?.photo,
        })
        res.status(201).json(newProperty)
    } catch (error) {
        res.status(400).json(error)
    }
}

// Get all properties
const getAllProperties = async (req: Request, res: Response) => {
    const { query } = req
    const city = query.city || '1'
    const star = query.star || '1'
    const distance = query.distance || '1'
    const propertyType = query.propertyType || '1'

    const searchCity = city && city !== '1' ? { city } : {}
    const searchStar = star && star !== '1' ? { star } : {}
    const searchDistance = distance && distance !== '1' ? { distance } : {}
    const searchType =
        propertyType && propertyType !== '1' ? { propertyType } : {}

    try {
        const allProperties = await PropertyModel.find({
            ...searchCity,
            ...searchStar,
            ...searchDistance,
            ...searchType,
        })
        res.status(200).json(allProperties)
    } catch (error) {
        res.status(400).json(error)
    }
}

// Get single property
const getProperty = async (req: Request, res: Response) => {
    try {
        const property = await PropertyModel.findById(req.params.propertyId)
        res.status(200).json(property)
    } catch (error) {
        res.status(400).json(error)
    }
}

// Get Properties By Country
const getPropertiesByCountry = async (req: Request, res: Response) => {
    try {
        const property = await PropertyModel.aggregate([
            {
                $match: { country: req.query.name },
            },
            {
                $project: { _id: 0, city: 1, cityPhoto: 1 },
            },
            {
                $group: {
                    _id: '$city',
                    totalProperties: { $sum: 1 },
                    cityPhoto: { $first: '$cityPhoto' },
                },
            },
            {
                $sort: {
                    totalProperties: -1,
                },
            },
            {
                $limit: 10,
            },
        ])
        res.status(200).json(property)
    } catch (error) {
        res.status(400).json(error)
    }
}

// Get Property Types
const getPropertyTypes = async (req: Request, res: Response) => {
    try {
        const property = await PropertyModel.aggregate([
            {
                $project: { _id: 0, propertyType: 1 },
            },
            {
                $group: {
                    _id: '$propertyType',
                    totalProperties: { $sum: 1 },
                },
            },
            {
                $sort: {
                    totalProperties: -1,
                },
            },
            {
                $limit: 10,
            },
        ])
        res.status(200).json(property)
    } catch (error) {
        res.status(400).json(error)
    }
}

//Get Properties By Type
const getPropertiesByType = async (req: Request, res: Response) => {
    const { cities, type } = req.query
    const citiesArr = typeof cities === 'string' ? cities.split(',') : []
    try {
        const property = await Promise.all(
            citiesArr?.map((item) => {
                return PropertyModel.aggregate([
                    {
                        $match: { city: item, propertyType: type },
                    },
                    {
                        $project: {
                            _id: 0,
                            city: 1,
                            country: 1,
                            cityPhoto: 1,
                        },
                    },
                    {
                        $group: {
                            _id: '$city',
                            country: { $first: '$country' },
                            totalProperties: { $sum: 1 },
                            cityPhoto: { $first: '$cityPhoto' },
                        },
                    },
                ])
            })
        )
        const mainResponse = property.flatMap((x) => x)
        res.status(200).json(mainResponse)
    } catch (error) {
        console.log(error)
        res.status(400).json(error)
    }
}

//Get *Selected* Property By Type
const getSelectedPropertyByType = async (req: Request, res: Response) => {
    const { city, type } = req.query
    try {
        // const property = await PropertyModel.find({city: city, propertyType: type})
        const property = await PropertyModel.aggregate([
            {
                $match: { city: city, propertyType: type },
            },
            {
                $project: {
                    _id: 1,
                    city: 1,
                    name: 1,
                    country: 1,
                    photos: { $first: '$photos' },
                    description: 1,
                    reviews: '$reviews.rate',
                },
            },
        ])

        res.status(200).json(property)
    } catch (error) {
        res.status(400).json(error)
    }
}

// Get properties by cities
const getPropertiesByCities = async (req: Request, res: Response) => {
    const { name } = req.query
    const cityArr = typeof name === 'string' ? name.split(',') : []
    try {
        const property = await Promise.all(
            cityArr?.map((item) => {
                return PropertyModel.aggregate([
                    {
                        $match: { city: item },
                    },
                    {
                        $project: {
                            _id: 0,
                            city: 1,
                            cityPhoto: 1,
                        },
                    },
                    {
                        $group: {
                            _id: '$city',
                            totalProperties: { $sum: 1 },
                            cityPhoto: { $first: '$cityPhoto' },
                        },
                    },
                ])
            })
        )
        res.status(200).json(property)
    } catch (error) {
        res.status(400).json(error)
    }
}

// Update property
const updateProperty = async (req: Request, res: Response) => {
    try {
        const property = await PropertyModel.findByIdAndUpdate(
            req.params.propertyId,
            {
                $set: req.body,
            },
            {
                new: true,
            }
        )
        res.status(200).json(property)
    } catch (error) {
        res.status(400).json(error)
    }
}

// Delete property
const deleteProperty = async (req: Request, res: Response) => {
    try {
        await PropertyModel.findByIdAndDelete(req.params.propertyId)
        res.status(200).json('Property has been deleted!')
    } catch (error) {
        res.status(400).json(error)
    }
}

export {
    createProperty,
    getAllProperties,
    getProperty,
    updateProperty,
    deleteProperty,
    getPropertiesByCountry,
    getPropertiesByCities,
    getPropertyTypes,
    getPropertiesByType,
    getSelectedPropertyByType,
}
