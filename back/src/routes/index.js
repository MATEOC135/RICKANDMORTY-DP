const { Router } = require("express")

//const {addFav,getFav,deleteFav}=require("../controllers/favControllers.js")
const { getCharDetail } = require("../controllers/getCharDetail.js")
const { getCharById } = require("../controllers/gatCharByid.js")
const { postFav } = require("../controllers/postFav.js")
const { deleteFav } = require("../controllers/deleteFav.js")
const { getFavs } = require("../controllers/getFavs.js")
const { postUser } = require("../controllers/postUser.js")
const { login } = require("../controllers/login.js")
const router = Router();

router.get("/rickandmorty/onSearch/:id", getCharById)

router.get("/rickandmorty/detail/:id", getCharDetail)

router.post("/fav", postFav)
router.get("/fav", getFavs)
router.delete("/fav/:id", deleteFav)

router.get("/login", login)
router.post("/login", postUser)



module.exports = router;