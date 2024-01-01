import prisma from '@/prisma';
import { revalidatePath } from 'next/cache'
// import { DeleteButton } from '@/components/DeleteButton';
import DeleteButton from '@/Components/DeleteButton';
import Link from 'next/link';

const Page = async() =>{
  const todos = await prisma.todo.findMany();
  const addTodo = async (data:FormData) => {
    'use server';
    const name = data.get('name') as string;
    await prisma.todo.create({ data: { name } });
    revalidatePath('/todos');
  }
  return (
    <div>
      <h1>TODO一覧</h1>
      <Link href="/todos/create">
        新規追加
      </Link>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              <span>{todo.name}</span>
              <DeleteButton id={todo.id} />
              <Link href={`/todos/${todo.id}`}>詳細</Link>
              <Link href={`/todos/${todo.id}/edit`}>編集</Link>
            </li>
          ))}
        </ul>
        <form action={addTodo}>
          <input type="text" name='name'/>
          <button type="submit">Add</button>
        </form>
    </div>
  )
}

export default Page;
