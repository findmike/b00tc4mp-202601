import { User, Memo } from './data/index.js'
import { ValidationError, NotFoundError, DatabaseError, DuplicityError, CredentialsError } from './errors.js'

export const logic = {
    registerUser: function (name, email, username, password, passwordRepeat) {
        if (name.trim() === '') throw new ValidationError('name is empty')
        if (email.trim() === '') throw new ValidationError('email is empty')
        if (username.trim() === '') throw new ValidationError('username is empty')
        if (password.trim() === '') throw new ValidationError('password is empty')
        if (passwordRepeat.trim() === '') throw new ValidationError('passwordRepeat is empty')

        if (password !== passwordRepeat) throw new ValidationError('passwords do not match')

        return User.findOne({ email: email })
            .catch(error => { throw new DatabaseError('Error finding user by email', { cause: error }) })
            .then(user => {
                if (user) throw new DuplicityError('User with email already exists')

                return User.findOne({ username: username })
                    .catch(error => { throw new DatabaseError('Error finding user by username', { cause: error }) })
                    .then(user => {
                        if (user) throw new DuplicityError('user with username already exists')

                        user = {
                            name: name,
                            email: email,
                            username: username,
                            password: password
                        }

                        return User.create(user)
                            .catch(error => { throw new DatabaseError('Error inserting user', { cause: error }) })
                            .then(() => { })
                    })
            })
    },


    authenticateUser: function (username, password) {
        if (username.trim() === '') throw new ValidationError('username is empty')
        if (password.trim() === '') throw new ValidationError('password is empty')

        return User.findOne({ username: username })
            .catch(error => { throw new DatabaseError('Error finding user by username', { cause: error }) })
            .then(user => {
                if (!user) throw new NotFoundError('user not found')

                if (user.password !== password) throw new CredentialsError('wrong password')

                return user.id
            })
    },


    getUserName: function (userId) {
        if (userId.trim() === '') throw new ValidationError('userId is empty')

        return User.findById(userId)
            .catch(error => { throw new DatabaseError('Error finding user by ID', { cause: error }) })
            .then(user => {
                if (!user) throw new NotFoundError('user not found')

                return user.name
            })
    },


    getUserAvatar: function (userId) {
        if (userId.trim() === '') throw new ValidationError('userId is empty')

        return User.findById(userId)
            .catch(error => { throw new DatabaseError('Error finding user by ID', { cause: error }) })
            .then(user => {
                if (!user) throw new NotFoundError('user not found')

                return user.avatar
            })
    },


    modifyUserName: function (userId, name) {
        if (userId.trim() === '') throw new ValidationError('userId is empty')
        if (name.trim() === '') throw new ValidationError('name is empty')

        return User.findById(userId)
            .catch(error => { throw new DatabaseError('Error finding user by ID', { cause: error }) })
            .then(user => {
                if (!user) throw new NotFoundError('user not found')

                return User.findByIdAndUpdate(userId, { name: name })
                    .catch(error => { throw new DatabaseError('Error updating user name', { cause: error }) })
                    .then(() => { })
            })
    },


    modifyUserEmail: function (userId, email) {
        if (userId.trim() === '') throw new ValidationError('userId is empty')
        if (email.trim() === '') throw new ValidationError('email is empty')

        return User.findById(userId)
            .catch(error => { throw new DatabaseError('Error finding user by ID', { cause: error }) })
            .then(user => {
                if (!user) throw new NotFoundError('user not found')

                return User.findByIdAndUpdate(userId, { email: email })
                    .catch(error => { throw new DatabaseError('Error updating user email', { cause: error }) })
                    .then(() => { })
            })
    },


    modifyUserUsername: function (userId, username) {
        if (userId.trim() === '') throw new ValidationError('userId is empty')
        if (username.trim() === '') throw new ValidationError('username is empty')

        return User.findById(userId)
            .catch(error => { throw new DatabaseError('Error finding user by ID', { cause: error }) })
            .then(user => {
                if (!user) throw new NotFoundError('user not found')

                return User.findByIdAndUpdate(userId, { username: username })
                    .catch(error => { throw new DatabaseError('Error updating user username', { cause: error }) })
                    .then(() => { })
            })
    },


    modifyUserPassword: function (userId, password, newPassword, newPasswordRepeat) {

        if (password.trim() === '') throw new ValidationError('password is empty')
        if (newPassword.trim() === '') throw new ValidationError('new password is empty')
        if (newPasswordRepeat.trim() === '') throw new ValidationError('new password repeat is empty')
        if (newPassword !== newPasswordRepeat) throw new ValidationError('new passwords do not match')

        return User.findById(userId)
            .catch(error => { throw new DatabaseError('Error finding user by ID', { cause: error }) })
            .then(user => {
                if (!user) throw new NotFoundError('user not found')

                if (user.password !== password) throw new ValidationError('wrong password')

                return User.findByIdAndUpdate(userId, { password: newPassword })
                    .catch(error => { throw new DatabaseError('Error updating user password', { cause: error }) })
                    .then(() => { })
            })
    },


    modifyUserAvatar: function (userId, avatar) {
        if (userId.trim() === '') throw new ValidationError('userId is empty')
        if (avatar.trim() === '') throw new ValidationError('avatar is empty')

        return User.findById(userId)
            .catch(error => { throw new DatabaseError('Error finding user by ID', { cause: error }) })
            .then(user => {
                if (!user) throw new NotFoundError('user not found')

                return User.findByIdAndUpdate(userId, { avatar: avatar })
                    .catch(error => { throw new DatabaseError('Error updating user avatar', { cause: error }) })
                    .then(() => { })
            })
    },


    removeUser: function (userId, password) {
        if (userId.trim() === '') throw new ValidationError('userId is empty')
        if (password.trim() === '') throw new ValidationError('password is empty')

        return User.findById(userId)
            .catch(error => { throw new DatabaseError('Error finding user by ID', { cause: error }) })
            .then(user => {
                if (!user) throw new NotFoundError('user not found')

                if (user.password !== password) throw new ValidationError('wrong password')

                return User.findByIdAndDelete(userId)
                    .catch(error => { throw new DatabaseError('Error deleting user', { cause: error }) })
                    .then(() => { })
            })
    },


    addMemo: function (userId, subject, body) {
        if (userId.trim() === '') throw new ValidationError('userId is empty')
        if (subject.trim() === '') throw new ValidationError('subject is empty')
        if (body.trim() === '') throw new ValidationError('body is empty')

        return User.findById(userId)
            .catch(error => { throw new DatabaseError('Error finding user by ID', { cause: error }) })
            .then(user => {
                if (!user) throw new NotFoundError('user not found')

                return Memo.create({
                    user: userId,
                    subject: subject,
                    body: body
                })
                    .catch(error => { throw new DatabaseError('Error creating memo', { cause: error }) })
                    .then(() => { })
            })
    },


    getMemos: function (userId) {
        if (userId.trim() === '') throw new ValidationError('userId is empty')

        return User.findById(userId)
            .catch(error => { throw new DatabaseError('Error finding user by ID', { cause: error }) })
            .then(user => {
                if (!user) throw new NotFoundError('user not found')

                return Memo.find({ user: userId })
                    .catch(error => { throw new DatabaseError('Error finding memos', { cause: error }) })
                    .then(memos => memos)
            })
    },


    getMemo: function (userId, memoId) {
        if (userId.trim() === '') throw new ValidationError('userId is empty')
        if (memoId.trim() === '') throw new ValidationError('memoId is empty')

        return User.findById(userId)
            .catch(error => { throw new DatabaseError('Error finding user by ID', { cause: error }) })
            .then(user => {
                if (!user) throw new NotFoundError('user not found')

                return Memo.findOne({ _id: memoId, user: userId })
                    .catch(error => { throw new DatabaseError('Error finding memo', { cause: error }) })
                    .then(memo => {
                        if (!memo) throw new NotFoundError('memo not found')

                        return memo
                    })
            })
    },


    modifyMemo: function (userId, memoId, subject, body) {
        if (userId.trim() === '') throw new ValidationError('userId is empty')
        if (memoId.trim() === '') throw new ValidationError('memoId is empty')
        if (subject.trim() === '') throw new ValidationError('subject is empty')
        if (body.trim() === '') throw new ValidationError('body is empty')

        return User.findById(userId)
            .catch(error => { throw new DatabaseError('Error finding user by ID', { cause: error }) })
            .then(user => {
                if (!user) throw new NotFoundError('user not found')

                return Memo.findOne({ _id: memoId, user: userId })
                    .catch(error => { throw new DatabaseError('Error finding memo', { cause: error }) })
                    .then(memo => {
                        if (!memo) throw new NotFoundError('memo not found')

                        return Memo.findByIdAndUpdate(memoId, { subject: subject, body: body })
                            .catch(error => { throw new DatabaseError('Error updating memo', { cause: error }) })
                            .then(() => { })
                    })
            })
    },


    removeMemo: function (userId, memoId) {
        if (userId.trim() === '') throw new ValidationError('userId is empty')
        if (memoId.trim() === '') throw new ValidationError('memoId is empty')

        return User.findById(userId)
            .catch(error => { throw new DatabaseError('Error finding user by ID', { cause: error }) })
            .then(user => {
                if (!user) throw new NotFoundError('user not found')

                return Memo.findOne({ _id: memoId, user: userId })
                    .catch(error => { throw new DatabaseError('Error finding memo', { cause: error }) })
                    .then(memo => {
                        if (!memo) throw new NotFoundError('memo not found')

                        return Memo.findByIdAndDelete(memoId)
                            .catch(error => { throw new DatabaseError('Error deleting memo', { cause: error }) })
                            .then(() => { })
                    })
            })
    }
}