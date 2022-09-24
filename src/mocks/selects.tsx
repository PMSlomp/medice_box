export type ValueSelect = {
    value: string;
    label: string;
};
  
export type Select = {
    types: Array<ValueSelect>;
    name: Array<ValueSelect>;
    indicated: Array<ValueSelect>;
};

export const Selects = {
    types: [
    {   
        value: "0",
        label: "Tipo",
    },
    {   
        value: "1",
        label: "Tipo 1",
    },
    {    
        value: "2",
        label: "Tipo 2",
    },
    {   
        value: "3",
        label: "Tipo 3",
    }],
    name: [
    {   
        value: "0",
        label: "Nome do remédio",
    },
    {   
        value: "1",
        label: "Nome 1",
    },
    {    
        value: "2",
        label: "Nome 2",
    },
    {   
        value: "3",
        label: "Nome 3",
    }],
    indicated: [
    {   
        value: "0",
        label: "Indicado para...",
    },
    {   
        value: "1",
        label: "Indicação 1",
    },
    {    
        value: "2",
        label: "Indicação 2",
    },
    {   
        value: "3",
        label: "Indicação 3",
    }]
}