import {
  CreateButton,
  Datagrid,
  DateField,
  ExportButton,
  FilterButton,
  List,
  NumberField,
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
  <TextInput source="code" />,
];

export const CustomList = () => (
  <List actions={<ListActions />} filters={postFilters}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="code" />
      <TextField source="subject" sortBy="subject.name" />
      <TextField source="teacher" sortBy="teacher.name" />\
      <NumberField source="students" sortable={false} />
      <DateField source="startAt" />
      <DateField source="endAt" />
      <DateField source="createdAt" />
      <DateField source="updatedAt" />
    </Datagrid>
  </List>
);
