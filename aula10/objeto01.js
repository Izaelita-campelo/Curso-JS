let amigo ={
    nome:"Iza",
    sexo: "F",
    peso: 73,
    engordar(p=0){
        console.log("engordei")
        this.peso+=p
    }
}
amigo.engordar(-1)
console.log(`${amigo.nome} pesa ${amigo.peso}`)