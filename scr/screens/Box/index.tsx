import React from "react";
import { FlatList, ListRenderItemInfo } from "react-native";
import LMedicine from "../../components/LMedicine";
import Body from "./components/Body";
import Header from "./components/Header";
// import mock from '../../mocks/medicines'
import Busca from "../../components/Busca";
import { TListMock, TMedicine } from "../../mocks/medicines";

interface ListMockProps {
  mock: TListMock;
}

export default function Box({ mock }: ListMockProps) {
  const renderItem = (info: ListRenderItemInfo<TMedicine>) => {
    const item = info.item;
    return <LMedicine item={item} />;
  };

  return (
    <>
      <FlatList
        data={mock.medicines}
        renderItem={renderItem}
        keyExtractor={({ name }) => name}
        ListHeaderComponent={() => {
          return (
            <>
              <Header />
              <Body>
                {/* <ListMedicines data={mock}/> */}
                <Busca mock={mock} text={"Nome: "} />
                <Busca mock={mock} text={"Tipo: "} />
                <Busca mock={mock} text={"Indicação: "} />
              </Body>
            </>
          );
        }}
      />
    </>
  );
}
