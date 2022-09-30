import simpleRestProvider from "ra-data-simple-rest";
import { Admin, fetchUtils, ListGuesser, Resource } from "react-admin";
import "./App.css";
import authProvider from "./authProvider";
const httpClient = (url, options = {}) => {
  if (!options.headers) {
    options.headers = new Headers({ Accept: "application/json" });
  }
  const { token } = JSON.parse(localStorage.getItem("auth"));
  options.headers.set("Authorization", `Bearer ${token}`);
  return fetchUtils.fetchJson(url, options);
};
function App() {
  return (
    <Admin
      dataProvider={simpleRestProvider("http://35.197.157.67:8082", httpClient)}
      authProvider={authProvider}
      requireAuth
    >
      <Resource name="exam" list={ListGuesser} />
    </Admin>
  );
}

export default App;
