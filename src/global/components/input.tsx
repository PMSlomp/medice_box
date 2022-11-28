import React from "react";

import * as AS from "./styles";

interface Input {
  data: String;
  value: string;
  onChange: Function;
}

export function Input({ data, value, onChange }: Input) {
  return (
    <AS.InputContainer>
      <AS.InputCampo>{data}</AS.InputCampo>
      <AS.Input onChangeText={onChange} value={value} />
    </AS.InputContainer>
  );
}
