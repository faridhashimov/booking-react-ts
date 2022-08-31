import mongoose from 'mongoose'

const dbConnnect = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI!)
        console.log(`Db cuccessfully connected on host ${conn.connection.host}`)
    } catch (error) {
        console.log(error)
    }
}

export default dbConnnect
