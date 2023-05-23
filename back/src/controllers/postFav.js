const { Favorite } = require('../DB_connection')


const postFav = async (req, res) => {
    const { id, name, image, species, gender } = req.body
    const { idUser } = req.query

    try {
        if (!id || !name || !image || !species || !gender) {

            res.status(400).json({ message: 'faltan datos ' })
        } else {
            const [fav, created] = await Favorite.findOrCreate({ where: { id, name, image, species, gender } })
            console.log(fav)
            fav.addUser(idUser)
            res.status(200).json(fav)
        }

    } catch (error) {
        console.log('Ocurrió un error:', error)
        res.status(500).json({ message: error })
    }
}


module.exports = { postFav };