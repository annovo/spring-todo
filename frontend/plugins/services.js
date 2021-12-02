import ToDoService from "../assets/service/ToDoService";
import LoginService from "../assets/service/LoginService";

export default ({ $axios }, inject) => {
  const services = {
    todo: new ToDoService($axios),
    login: new LoginService($axios),
  };

  inject("services", services);
};
