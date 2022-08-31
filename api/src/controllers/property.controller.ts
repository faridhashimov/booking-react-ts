import { Request, Response } from 'express'
import PropertyModel from '../models/property.model'

const createProperty = async (req: Request, res: Response) => {
    try {
        const newProperty = await PropertyModel.create(req.body)
        res.status(201).json(newProperty)
    } catch (error) {
        res.status(400).json(error)
    }
}

const getAllProperties = async (req: Request, res: Response) => {
    try {
        const allProperties = await PropertyModel.find({})
        res.status(201).json({allProperties})
    } catch (error) {
        res.status(400).json(error)
    }
}

const getProperty = async (req: Request, res: Response) => {
    try {
        const property = await PropertyModel.findById(req.params.id)
        res.status(201).json(property)
    } catch (error) {
        res.status(400).json(error)
    }
}

const updateProperty = async (req: Request, res: Response) => {
    try {
        const property = await PropertyModel.findByIdAndUpdate(
            req.params.id,
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

const deleteProperty = async (req: Request, res: Response) => {
    try {
        await PropertyModel.findByIdAndDelete(req.params.id)
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
}
