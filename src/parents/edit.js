import * as React from "react";
import { Edit, required, SimpleForm, TextInput } from "react-admin";

export const CustomEdit = () => {
  const transform = (data) => {
    const { name, address, phone } = data;
    return {
      name,
      address,
      phone,
    };
  };
  return (
    <Edit transform={transform}>
      <SimpleForm>
        <TextInput disabled label="Id" source="id" />
        <TextInput source="name" validate={required()} />
        <TextInput source="address" validate={required()} />
        <TextInput source="phone" validate={required()} />
      </SimpleForm>
    </Edit>
  );
};
