//van a ser funciones encargadas de manejar la logica
/* const axios = require("axios")

const getCharById= (res,id)=>{
    axios (`https://rickandmortyapi.com/api/character/${id}`)
    .then(response => response.data )
    
    .then(data => {
        let char ={ 
           id:data.id,
           name:data.name,
           gender:data.gender,
           image:data.image,
           species:data.species}


        res.writeHead(200,{"Content-type":"application/json"})
        res.end(JSON.stringify(char))
    }
    ).catch(err =>
         res.writeHead(500,{"Content-type":"text/plain"})
            .end(`El personaje con el id ${id} no fue encontrado `)
    )

    
    

}


module.exports=getCharById; */
const axios =  require ("axios") 
const URL ="https://rickandmortyapi.com/api/character/"
function filterData(data){ 
     return {
         id:data.id,
        name:data.name,
        gender:data.gender,
        image:data.image,
        species:data.species}
   
}


 const getCharById =async (req,res)=>{ 
    const params = req.params;
    const id=params.id 

    try {
        const {data} = await axios.get (`${URL}${id}`)
        const char =filterData(data)
        res.status(200).json(char)

    } catch (error) {
        res.status(500).json({message:error})
        
    }}


    

/*     axios.get(`${URL}${id}`)
    .then(({data})=>{
        const char =filterData(data)
        res.status(200).json(char)       
    
    }).catch(err =>{
        res.status(500).json({message:err})
    }) */

  



module.exports= {getCharById,filterData};