import { updateTodo } from "@/actions";
import Link from "next/link";

export default async function Page({params}:{params:{id:string}}){
  const id = Number(params.id);
  const updateTodoWithId = updateTodo.bind(null,id);
  const todo = await prisma.todo.findUnique({ where: { id } });
  return(
    <div>
      <h1>編集</h1>
      <Link href="/todos">戻る</Link>
      <form action={updateTodoWithId}>
        <input type="text" name='name' defaultValue={todo?.name}/>
        <div>
          <input type="radio" name="isCompleted" id="" value="true" defaultChecked={todo?.isCompleted===true}/>
          <label htmlFor="">完了</label>
        </div>
        <div>
          <input type="radio" name="isCompleted" id="" value="false" defaultChecked={todo?.isCompleted===false}/>
          <label htmlFor="">未完了</label>
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  )
}
