import {
  CreateButton,
  Datagrid,
  DateField,
  ExportButton,
  FilterButton,
  List,
  SearchInput,
  TextField,
  TextInput,
  TopToolbar,
} from "react-admin";

const ListActions = () => (
  <TopToolbar>
    <FilterButton />
    <CreateButton />
    <ExportButton />
    {/* Add your custom actions */}
  </TopToolbar>
);

const postFilters = [
  <TextInput source="name" alwaysOn />,
  <TextInput source="address" />,
];

export const CustomList = () => (
  <List actions={<ListActions />} filters={postFilters}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="address" />
      <DateField source="birthday" />
      <DateField source="createdAt" />
      <DateField source="updatedAt" />
    </Datagrid>
  </List>
);
