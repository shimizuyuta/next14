import Link from "next/link";

const Page = async({params}:{params:{id: string}}) => {
  const id = Number(params.id);
  const todo = await prisma.todo.findUnique({ where: { id } });
  return(
    <div>
      <h1>詳細</h1>
      <Link href="/todos">戻る</Link>
      <div>ID:{params.id}</div>
      <div>名前:{todo?.name}</div>
      <div>
        完了: {todo?.isCompleted ? <span>完了</span> : <span>未完了</span>}
      </div>
    </div>
  )
}

export default Page;
