require('dotenv').config()

//COMPANY DETAILS
export const COMPANY_NAME = process.env.COMPANY_NAME

//LOCALS
export const NODE_ENV = process.env.NODE_ENV
export const PORT = process.env.PORT? process.env.PORT : 8000

//BASE URLS
export const FE_URL = process.env.FE_URL
export const BE_URL = process.env.BE_URL
export const APP_URL = process.env.APP_URL

// DATA BASE
export const MONGO = {
  MONGO_PORT: process.env.MONGO_PORT,
  MONGO_URL: process.env.MONGO_URL,
  MONGO_HOST: process.env.MONGO_HOST,
  MONGO_USER: process.env.MONGO_USER,
  MONGO_PASSWORD: process.env.MONGO_PASSWORD,
  MONGO_DB: process.env.MONGO_DB,
}

export const REDIS = {
  REDIS_HOST: process.env.REDIS_HOST,
  REDIS_PASSWORD: process.env.REDIS_PASSWORD,
  REDIS_PORT: process.env.REDIS_PORT,
}

//GOOGLE
export const GOOGLE = {
  CLINT_ID: process.env.CLINT_ID,
  CLINT_SECRET: process.env.CLINT_SECRET
}

//CRYPTO KEYS
export const JWT_PRIVATE_KEY = process.env.JWT_PRIVATE_KEY
