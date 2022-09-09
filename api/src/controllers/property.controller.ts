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
    try {
        const allProperties = await PropertyModel.find({})
        res.status(201).json({ allProperties })
    } catch (error) {
        res.status(400).json(error)
    }
}

// Get single property
const getProperty = async (req: Request, res: Response) => {
    try {
        const property = await PropertyModel.findById(req.params.propertyId)
        res.status(201).json(property)
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
                $limit: 10,
            },
        ])
        res.status(201).json(property)
    } catch (error) {
        res.status(400).json(error)
    }
}

// Get properties by cities
const getPropertiesByCities = async (req: Request, res: Response) => {
    const { name } = req.query
    const cityArr = typeof name === 'string' ? name.split(',') : []
    console.log(cityArr)
    try {
        const property = await Promise.all(
            cityArr?.map((item) => {
                return PropertyModel.countDocuments({
                    city: item,
                })
            })
        )
        console.log(property)
        res.status(201).json(property)
    } catch (error) {
        console.log(error)
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
        res.status(201).json(property)
    } catch (error) {
        res.status(400).json(error)
    }
}

// Delete property
const deleteProperty = async (req: Request, res: Response) => {
    try {
        await PropertyModel.findByIdAndDelete(req.params.propertyId)
        res.status(201).json('Property has been deleted!')
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
}
