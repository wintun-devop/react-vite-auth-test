import TodoProvider from "../../store/todo-context";
import AddTodo from "../todo/add-todo";
import Todos from "../todo/todos";




const Dashboard = () => {
    return(
        <TodoProvider>
            <h1>My toDo App</h1>
            <AddTodo />
            <Todos />
        </TodoProvider>
    )
};


export default Dashboard;