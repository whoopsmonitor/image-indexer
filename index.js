require('dotenv').config()

require( 'console-stamp' )( console )
const axios = require('axios')
const logSymbols = require('log-symbols')
const GRAPHQL_URL = process.env.GRAPHQL_URL
const GRAPHQL_TOKEN = process.env.GRAPHQL_TOKEN

const axiosInstance = axios.create({
  baseURL: GRAPHQL_URL
})

;(async function main() {
  // nothing yet here
})()
