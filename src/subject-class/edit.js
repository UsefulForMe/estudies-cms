import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
} from "@mui/material";
import * as React from "react";
import {
  AutocompleteInput,
  DateInput,
  Edit,
  Form,
  ReferenceArrayInput,
  ReferenceInput,
  SaveButton,
  SelectArrayInput,
  SimpleForm,
  TextInput,
} from "react-admin";
import config from "../config";

export const CustomEdit = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleAddStudent = async ({ studentIds, id }) => {
    await fetch(`${config.backend_url}/subject-class/${id}/add-students`, {
      method: "PUT",
      body: JSON.stringify({ studentIds }),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("auth")}`,
      },
    });
    setOpen(false);
  };

  const transform = (data) => {
    const { teacherId, startAt, endAt } = data;
    return {
      teacherId,
      startAt: new Date(startAt),
      endAt: new Date(endAt),
    };
  };
  return (
    <Edit transform={transform}>
      <SimpleForm>
        <TextInput disabled label="Id" source="id" />
        <ReferenceInput source="subjectId" reference="subject" label="Subject">
          <AutocompleteInput disabled optionValue="id" optionText={"name"} />
        </ReferenceInput>

        <TextInput disabled source="name" />

        <ReferenceInput source="teacherId" reference="teacher" label="Teacher">
          <AutocompleteInput optionValue="id" optionText={"name"} />
        </ReferenceInput>
        <DateInput source="startAt" />
        <DateInput source="endAt" />
        <Button variant="outlined" onClick={handleClickOpen}>
          Update students
        </Button>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Update students</DialogTitle>
          <DialogContent>
            <Form onSubmit={handleAddStudent}>
              <Grid container>
                <Grid item xs={12}>
                  <ReferenceArrayInput source="studentIds" reference="student">
                    <SelectArrayInput optionText="name" />
                  </ReferenceArrayInput>
                </Grid>
                <Grid item xs={12}>
                  <SaveButton />
                </Grid>
              </Grid>
            </Form>
          </DialogContent>
        </Dialog>
      </SimpleForm>
    </Edit>
  );
};
