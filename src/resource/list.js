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
  UrlField,
} from "react-admin";

const ListActions = () => (
  <TopToolbar>
    <CreateButton />
    <FilterButton />
    <ExportButton />
  </TopToolbar>
);

const postFilters = [
  <TextInput source="name" alwaysOn />,
  <TextInput source="type" />,
  <TextInput source="link" />,
];

export const CustomList = () => (
  <List actions={<ListActions />} filters={postFilters}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="type" />
      <UrlField source="link" />
      <TextField source="subjectClass" sortBy="subjectClass.name" />
      <DateField source="createdAt" />
      <DateField source="updatedAt" />
    </Datagrid>
  </List>
);
