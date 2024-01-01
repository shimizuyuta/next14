import { deleteTodo } from "@/actions";

const DeleteButton = ({id}:{id:number}) =>{
  //bindを使うとServer Actions 関数の第一引数に bind の第二引数で指定した値を渡す
  const deleteTodoWithId = deleteTodo.bind(null,id);
  return(
    <form action={deleteTodoWithId}>
        <button>
          削除
        </button>
    </form>
  )
}

export default DeleteButton;
