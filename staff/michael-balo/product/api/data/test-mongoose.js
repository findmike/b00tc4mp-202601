import mongoose from 'mongoose'

mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(() => {
        console.log('Connected to MongoDB with Mongoose');

        const userSchema = new mongoose.Schema({
            name: {
                type: String,
                required: true,
            },

            email: {
                type: String,
                required: true,
                unique: true
            },

            username: {
                type: String,
                required: true,
                unique: true
            },

            password: {
                type: String,
                required: true,
            }
        });

        // 'Schema' por si solo no hace nada, necesitamos un 'model'
        // para poder interactuar con la BD y hacer CRUD que siguen el 'Schema'

        const User = mongoose.model('User', userSchema);

        // CREATE NEW USER

        return User.create({
            name: 'Sara',
            email: 'sara@example.com',
            username: 'Sara2026',
            password: 'securepassword'
        })
            .then((result) => {
                console.log('User created:', result);
            })

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

    })