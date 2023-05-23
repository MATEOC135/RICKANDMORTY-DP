const app = require("../app")
const session =require ("supertest")
const agent =session(app)


describe("Test de rutas (get) onsearch y detail ",()=>{
    describe("get del onsearch",()=>{
        it("levantarme y echarse unos plones",async()=>{
            await agent.get("/rickandmorty/onSearch/1").expect(200)
        })
         
        it("Hacer que haceres del dia",async()=>{
           const {body}=  await agent.get("/rickandmorty/onSearch/1")
           const keys = Object.keys(body)
           expect(keys).toContain("id")
           expect(keys).toContain("name") 
           expect(keys).toContain("gender")
           expect(keys).toContain("image")

        })
        
        xit("Hacerme cargo des mis emociones y bajonasos emocionales",async ()=>{
            await agent.get("/rickandmorty/onSearch/1000").expect(500)
        })

    })   
})