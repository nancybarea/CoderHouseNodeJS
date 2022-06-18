import { MongoClient } from 'mongodb'
import config from '../../../config/config.js'

const client = new MongoClient(config.CNX_STR)
await client.connect()
const db = client.db(config.MONGO_BASE)


export { db }