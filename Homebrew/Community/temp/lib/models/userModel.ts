import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const UserSchema = new Schema({
    username: {
        type: String,
        required: 'Enter a first name'
    },
    email: {
        type: String,
        required: 'Enter a last name'
    },
    password: {
        type: String,
        required: 'You need a password'            
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});