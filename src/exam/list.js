import {
  CreateButton,
  Datagrid,
  DateField,
  ExportButton,
  FilterButton,
  List,
  NumberField,
  NumberInput,
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

const postFilters = [
  <TextInput source="name" alwaysOn />,
  <TextInput source="type" />,
  <NumberInput source="factor" />,
];

export const CustomList = () => (
  <List actions={<ListActions />} filters={postFilters}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" />
      <NumberField source="duration" />
      <TextField source="type" />
      <NumberField source="factor" />
      <TextField source="subjectClass" sortBy="subjectClass.name" />
      <DateField source="createdAt" />
      <DateField source="updatedAt" />
    </Datagrid>
  </List>
);
