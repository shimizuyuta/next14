'use server';
import { revalidatePath } from "next/cache";
import prisma from "@/prisma";
import { redirect } from 'next/navigation'

export const deleteTodo = async (id: number) => {
  await prisma.todo.delete({
    where: {
      id,
    },
  });
  revalidatePath('/todos');
};

export const updateTodo = async(id: number, data: FormData) => {
  const name = data.get('name') as string;
  const isCompleted = data.get('isCompleted') as string;
  await prisma.todo.update({
    where: {
      id,
    },
    data: {
      name,
      isCompleted: isCompleted === 'true'? true : false,
    },
  });
  revalidatePath('/todos');
  redirect('/todos');
}

export const addTodo = async (prevState: any, data: FormData) => {
  const name = data.get('name') as string;
  try {
    throw new Error('error');
    await prisma.todo.create({ data: { name } });
  } catch (e) {
    return {
      message: 'Failed to add',
    };
  }
  revalidatePath('/todos');
  redirect('/todos');
};
