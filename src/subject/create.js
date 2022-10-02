import * as React from "react";
import { Create, required, SimpleForm, TextInput } from "react-admin";

export const CustomCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="name" validate={[required()]} fullWidth />
    </SimpleForm>
  </Create>
);
