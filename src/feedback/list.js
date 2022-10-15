import {
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
    <ExportButton />
    {/* Add your custom actions */}
  </TopToolbar>
);

const postFilters = [
  <TextInput source="message" alwaysOn />,
  <TextInput source="user" />,
];

export const CustomList = () => (
  <List actions={<ListActions />} filters={postFilters}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="message" />
      <TextField source="user" sortBy="user.email" />
      <DateField source="time" />
    </Datagrid>
  </List>
);
