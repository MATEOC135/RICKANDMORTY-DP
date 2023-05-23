


/* const getCharDetail =(res,id)=> {
    axios (`https://rickandmortyapi.com/api/character/${id}`)
    .then(response => response.data )
    .then(data => {
        let char ={ 
            
           name:data.name,
           gender:data.gender,
           image:data.image,
           species:data.species,
           status: data.status,
           origin:data.origin.name
        
        }


        res.writeHead(200,{"Content-type":"application/json"})
        res.end(JSON.stringify(char))
    }
    ).catch(err =>
         res.writeHead(500,{"Content-type":"text/plain"})
            .end(`El personaje con el id ${id} no fue encontrado `) 
    ) 

} */ 


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


 const getCharDetail =async (req,res)=>{ 
    const params = req.params;
    const id=params.id 

    try {
        const {data} = await axios.get (`${URL}${id}`)
        const char =filterData(data)
        res.status(200).json({...char,status:data.status,origin:data.origin.name})

    } catch (error) {
        res.status(500).json({message:error})
        
    }}

 /*    axios.get()
    .then(({data})=>{
        const char = filterData(data)
        res.status(200).json({...char,status:data.status,origin:data.origin})
        -
    })
    .catch(err=>{
        res.status(400).json(err)
    })
 */


module.exports ={getCharDetail};