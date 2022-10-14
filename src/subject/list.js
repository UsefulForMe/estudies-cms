import {
  CreateButton,
  Datagrid,
  DateField,
  ExportButton,
  FilterButton,
  List,
  TextField,
  TextInput,
  TopToolbar,
} from "react-admin";

const ListActions = () => (
  <TopToolbar>
    <FilterButton />
    <CreateButton />
    <ExportButton />
  </TopToolbar>
);

const postFilters = [<TextInput source="name" alwaysOn />];

export const CustomList = () => (
  <List actions={<ListActions />} filters={postFilters}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="name" />
      <DateField source="createdAt" />
      <DateField source="updatedAt" />
    </Datagrid>
  </List>
);
