import mongoose from 'mongoose'

const connectMongo = async () =>
  mongoose.connect(process.env.DATABASE_URL || 'mongodb://0.0.0.0:27017/')

export default connectMongo
