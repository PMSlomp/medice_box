export type TMedicine = {name:string, qtd:number, expire:string, component:string}
export type TListMedicines = {medicines:Array<TMedicine>}

const listMedicines:TListMedicines = {
    medicines: 
    [
        {
            name: "Nome 1",
            qtd: 20,
            expire: "02/23",
            component: "compo 1",
        },
        {
            name: "Nome 2",
            qtd: 30,
            expire: "02/23",
            component: "compo 2",
        },
        {
            name: "Nome 3",
            qtd: 10,
            expire: "02/23",
            component: "compo 3",
        },
    ]
    
}

export default listMedicines;