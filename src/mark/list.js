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
  <TextInput source="student" alwaysOn />,
  <TextInput source="exam" />,
  <TextInput source="subject" />,
  <NumberInput source="score" />,
];

export const CustomList = () => (
  <List actions={<ListActions />} filters={postFilters}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="exam" sortBy="exam.name" />
      <TextField source="student" sortBy="student.name" />
      <TextField source="subject" sortable={false} />
      <NumberField source="score" />
      <DateField source="createdAt" />
      <DateField source="updatedAt" />
    </Datagrid>
  </List>
);
