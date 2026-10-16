import mongoose from 'mongoose'
import { User, Memo } from './index.js'

mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(() => {
        console.log('Connected to MongoDB with Mongoose');

        // CREATE NEW USER

        // return User.create({
        //     name: 'Sara',
        //     email: 'sara@example.com',
        //     username: 'Sara2026',
        //     password: 'securepassword'
        // })
        //     .then((result) => {
        //         console.log('User created:', result);
        //     })

        // return User.updateOne(
        //     { username: 'Sara2026' },
        //     { $set: { username: 'Sara2000' }})
        // .then((result) => 
        // console.log(result))

        // return User.find({})
        // .then((result) => console.log(result))

        // return User.deleteOne({ 
        // username: 'Sara2000' })
        // .then((result) => 
        // console.log(result))

        // CREATE NEW MEMO

        return Memo.create({
            user: '6ad0f39cb839371b772b162c',
            subject: 'Shoping List',
            body: 'Buy ingridients for the dinner.'
        })
        .then((result) => {
            console.log('Memo created', result);
        })
        .catch((error) => {
            console.error('Error creating memo:', error);
        })

    })