import ModelPrice from './modelPrice.js'

class ServicePrice {
    async addPrice({name, number}) {
        const newPrice = await new ModelPrice({name, number})
        await newPrice.save()
        return
    }
}

export default new ServicePrice()