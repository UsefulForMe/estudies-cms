import {
  CastForEducation,
  Feedback,
  People,
  Person,
  PictureAsPdf,
  Quiz,
  School,
  Stars,
  Subject,
} from "@mui/icons-material";
import simpleRestProvider from "ra-data-simple-rest";
import { Admin, fetchUtils, Resource } from "react-admin";
import "./App.css";
import authProvider from "./authProvider";
import config from "./config";
import { CustomEdit as ParentEdit } from "./parents/edit";
import { CustomShow as ParentShow } from "./parents/show";
import { CustomEdit as StudentEdit } from "./student/edit";
import { CustomShow as StudentShow } from "./student/show";
import { CustomCreate as SubjectClassCreate } from "./subject-class/create";
import { CustomEdit as SubjectClassEdit } from "./subject-class/edit";
import { CustomShow as SubjectClassShow } from "./subject-class/show";
import { CustomCreate as SubjectCreate } from "./subject/create";
import { CustomEdit as SubjectEdit } from "./subject/edit";
import { CustomShow as SubjectShow } from "./subject/show";
import { CustomEdit as TeacherEdit } from "./teacher/edit";
import { CustomShow as TeacherShow } from "./teacher/show";

import { CustomCreate as ExamCreate } from "./exam/create";
import { CustomEdit as ExamEdit } from "./exam/edit";
import { CustomShow as ExamShow } from "./exam/show";
import { CustomCreate as ResourceCreate } from "./resource/create";
import { CustomEdit as ResourceEdit } from "./resource/edit";
import { CustomShow as ResourceShow } from "./resource/show";

import { CustomList as ExamList } from "./exam/list";
import { CustomList as FeedbackList } from "./feedback/list";
import { CustomCreate as MarkCreate } from "./mark/create";
import { CustomEdit as MarkEdit } from "./mark/edit";
import { CustomList as MarkList } from "./mark/list";
import { CustomShow as MarkShow } from "./mark/show";
import { CustomList as ParentsList } from "./parents/list";
import { CustomList as ResourceList } from "./resource/list";
import { CustomList as StudentList } from "./student/list";
import { CustomList as SubjectClassList } from "./subject-class/list";
import { CustomList as SubjectList } from "./subject/list";
import { CustomList as TeacherList } from "./teacher/list";

const httpClient = async (url, options = {}) => {
  if (!options.headers) {
    options.headers = new Headers({ Accept: "application/json" });
  }
  const token = localStorage.getItem("auth");
  options.headers.set("Authorization", `Bearer ${token}`);
  const data = await fetchUtils.fetchJson(url, options);
  data.data = data.json;
  return data;
};
function App() {
  return (
    <Admin
      dataProvider={simpleRestProvider(config.backend_url, httpClient)}
      authProvider={authProvider}
      requireAuth
    >
      <Resource
        name="student"
        list={StudentList}
        icon={Person}
        show={StudentShow}
        edit={StudentEdit}
      />
      <Resource
        name="teacher"
        list={TeacherList}
        icon={CastForEducation}
        show={TeacherShow}
        edit={TeacherEdit}
      />
      <Resource
        name="parents"
        list={ParentsList}
        icon={People}
        show={ParentShow}
        edit={ParentEdit}
      />

      <Resource
        name="subject"
        list={SubjectList}
        icon={Subject}
        create={SubjectCreate}
        show={SubjectShow}
        edit={SubjectEdit}
      />
      <Resource
        name="subject-class"
        list={SubjectClassList}
        icon={School}
        show={SubjectClassShow}
        edit={SubjectClassEdit}
        create={SubjectClassCreate}
      />
      <Resource
        name="resource"
        list={ResourceList}
        icon={PictureAsPdf}
        show={ResourceShow}
        edit={ResourceEdit}
        create={ResourceCreate}
      />
      <Resource
        name="exam"
        list={ExamList}
        icon={Quiz}
        show={ExamShow}
        edit={ExamEdit}
        create={ExamCreate}
      />
      <Resource
        name="mark"
        list={MarkList}
        icon={Stars}
        show={MarkShow}
        edit={MarkEdit}
        create={MarkCreate}
      />
      <Resource name="feedback" list={FeedbackList} icon={Feedback} />
    </Admin>
  );
}

export default App;
