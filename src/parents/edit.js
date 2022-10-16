import * as React from "react";
import { Edit, required, SimpleForm, TextInput } from "react-admin";

export const CustomEdit = () => {
  const transform = (data) => {
    const { name, address } = data;
    return {
      name,
      address,
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
