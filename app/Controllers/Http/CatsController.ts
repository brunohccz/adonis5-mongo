import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Mongoose, { Schema } from '@ioc:Mongoose'

const Cat = Mongoose.model('Cat', new Schema({
    name: String,
}))

export default class CatsController {
    public async index({}: HttpContextContract) {
        const cat = new Cat({
            name: Math.random().toString(36).substring(7),
        });

        await cat.save();

        const cats = await Cat.find();

        return cats;
    }
}
