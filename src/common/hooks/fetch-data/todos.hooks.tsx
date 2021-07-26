import { useQuery, UseQueryResult } from 'react-query';

enum QueryKeysEnum {
  TODOS = 'todos',
}

type Todos = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

const API_URL = 'https://jsonplaceholder.typicode.com/todos';

export const useGetTodos = (): UseQueryResult<Todos[], Error> =>
  useQuery(QueryKeysEnum.TODOS, async () => {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error('Failed to fetch!');
    }

    return response.json();
  });

// USAGE
// components/SomeComponent.tsx
// import { useGetTodos } from "hooks/todos.hooks.ts";

// export const SomeComponent = (): JSX.Element => {
//   const { data: todos } = useGetTodos();
//   return <>{ todos }</>
// }
