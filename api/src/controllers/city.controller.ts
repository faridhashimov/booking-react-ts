import { Request, Response } from 'express'
import CityModel from '../models/city.model'

// Add new city
const addNewCity = async (req: Request, res: Response) => {
    try {
        const city = await CityModel.findOne({
            city: req.body.city,
        })
        if (city?.city === req.body.city || city?.photo === req.body.photo) {
            return res.json('City already added!')
        }
        const newCity = await CityModel.create(req.body)
        res.status(201).json(newCity)
    } catch (error) {
        res.status(400).json(error)
    }
}

// Add new property
const updateCity = async (req: Request, res: Response) => {
    try {
        const city = await CityModel.findByIdAndUpdate(
            req.params.cityId,
            {
                $set: req.body,
            },
            {
                new: true,
            }
        )
        res.status(201).json(city)
    } catch (error) {
        res.status(400).json(error)
    }
}

// Get all cities
const getAllCities = async (req: Request, res: Response) => {
    try {
        const cities = await CityModel.find({})
        res.status(201).json(cities)
    } catch (error) {
        res.status(400).json(error)
    }
}

// Get city
const getCity = async (req: Request, res: Response) => {
    console.log(req.query)
    try {
        const city = await CityModel.findOne({
            city: req.query.city
        })
        res.status(201).json(city)
    } catch (error) {
        res.status(400).json(error)
    }
}

export { addNewCity, updateCity, getAllCities, getCity }
