const config = require("./config");

const authProvider = {
  login: ({ username, password }) => {
    const request = new Request(`${config.backend_url}/auth/login/admin`, {
      method: "POST",
      body: JSON.stringify({ email: username, password }),
      headers: new Headers({ "Content-Type": "application/json" }),
    });
    return fetch(request)
      .then((response) => {
        if (response.status < 200 || response.status >= 300) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then((auth) => {
        const token = auth.data.access_token;
        localStorage.setItem("auth", token);
        return Promise.resolve();
      })
      .catch(() => {
        throw new Error("Network error");
      });
  },
  logout: () => {
    localStorage.removeItem("auth");
    return Promise.resolve();
  },
  checkAuth: () =>
    localStorage.getItem("auth")
      ? Promise.resolve()
      : Promise.reject({ message: "login.required" }),
  checkError: (error) => {
    const status = error.status;
    if (status === 401 || status === 403) {
      localStorage.removeItem("auth");
      return Promise.reject({ message: false });
    }
    return Promise.resolve();
  },
  getIdentity: async () => {
    try {
      const data = await fetch(`${config.backend_url}/admin/me`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("auth")}`,
        },
      });
      const auth = await data.json();

      return Promise.resolve({ id: auth.id, fullName: auth.name });
    } catch (error) {
      return Promise.reject(error);
    }
  },

  getPermissions: () => Promise.resolve(""),
};

export default authProvider;
