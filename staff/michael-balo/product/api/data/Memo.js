import mongoose from 'mongoose'

import { memoSchema } from './memoSchema.js'

export const Memo = mongoose.model('Memo', memoSchema)