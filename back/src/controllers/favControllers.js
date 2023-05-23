/* 
var favoritos =require("../utils/favs.js")



     ///
const addFav = (req,res)=>{
    const per   =req.body;
    if(per){
        favoritos.push(per)

        res.status(200).json(per)
    }else{
        res.status(400).json("no se logro agregar el personaje insertado")
    }

}
const getFav = (req,res)=>{
    if(favoritos)res.status(200).json(favoritos)
    else res.status(500).json({error:"errorr obteniendo el favorito"}) 
    
} 

const deleteFav = (req,res)=>{
    const {id}  =req.params
    if(id>0){ favoritos =favoritos.filter((char)=>{char.id!==Number(id)})
    res.status(200).json({success:true})
    }else{
        res.status(500).json({error:"no se logro borrar el personaje pasado por id"})
    }
}


module.exports={addFav,deleteFav,getFav}; */