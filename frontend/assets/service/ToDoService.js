import ToDo from "../data/ToDo.class";

export default class ToDoApi {
  constructor($axios) {
    this.axios = $axios;
  }

  findAll() {
    return this.axios({
      method: "get",
      url: "todo",
      withCredentials: true,
    }).then((r) =>
      r.data.reduce(
        (todos, todo) =>
          todos.concat(new ToDo(todo.id, todo.title, todo.completed)),
        []
      )
    );
  }

  create(title) {
    return this.axios({
      method: "post",
      url: "todo",
      data: {
        title,
        completed: false,
      },
      withCredentials: true,
    }).then((r) => new ToDo(r.data.id, r.data.title, r.data.completed));
  }

  complete(todo) {
    return this.axios({
      method: "put",
      url: `todo/${todo.id}`,
      data: {
        id: todo.id,
        title: todo.title,
        completed: !todo.completed,
      },
      withCredentials: true,
    }).then((r) => new ToDo(r.data.id, r.data.title, r.data.completed));
  }

  delete(id) {
    return this.axios({
      method: "delete",
      url: `todo/${id}`,
      withCredentials: true,
    });
  }
}
