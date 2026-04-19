import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

console.log('Testing MongoDB connection...')
console.log('URI:', process.env.MONGODB_URI.replace(/\/\/.*@/, '//****:****@')) // Hide password

const testConnection = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      serverSelectionTimeoutMS: 5000
    })
    console.log('✅ MongoDB Connected Successfully!')
    console.log('Host:', conn.connection.host)
    console.log('Database:', conn.connection.name)
    process.exit(0)
  } catch (error) {
    console.error('❌ Connection Failed!')
    console.error('Error:', error.message)
    console.error('\nTroubleshooting:')
    console.error('1. Check username and password')
    console.error('2. Verify IP address is whitelisted in Network Access')
    console.error('3. Ensure cluster is running')
    console.error('4. Check for special characters in password (need URL encoding)')
    process.exit(1)
  }
}

testConnection()