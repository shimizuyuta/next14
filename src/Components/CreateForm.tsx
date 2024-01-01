'use client';

import { useFormState } from 'react-dom';
import { addTodo } from '@/actions';

const initialState = {
  message: null,
};

const CreateForm = () => {
  const initialState = {
    message: '', // Update the initial state to have a message property of type string
  };

  const [state, formAction] = useFormState(addTodo, initialState);

  return (
    <form className="mt-4" action={formAction}>
      <label htmlFor="name">Name:</label>
      <input type="text" name="name" className="border mx-2 p-1" />
      <div className="text-red-600 font-bold my-2">{state?.message}</div>
      <button
        type="submit"
        className="bg-blue-600 px-2 py-1 rounded-lg text-sm text-white"
      >
        Add Todo
      </button>
    </form>
  );
};

export default CreateForm;
