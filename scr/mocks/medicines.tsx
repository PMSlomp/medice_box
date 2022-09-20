export type TMedicine = {
  name: string;
  qtd: number;
  expire: string;
  component: string;
};

export type TTypes = { value: string; label: string };

export type TListMock = {
  medicines: Array<TMedicine>;
  typesMeds: Array<TTypes>;
};

const listMock: TListMock = {
  medicines: [
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
  ],
  typesMeds: [
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
    },
  ],
};

export default listMock;
