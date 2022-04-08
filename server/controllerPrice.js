import servicePrice from './servicePrice.js'

class ControllerPrice {
    async addPrice(req, res) {
        await servicePrice.addPrice(req.body)
        return res.status(200).json({ status: "ADD TO DB" })
    }
}

export default new ControllerPrice()