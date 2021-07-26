import { useGetTodos } from 'common/hooks/fetch-data/todos.hooks';
import React, { Fragment } from 'react';
import { ReactComponent as CheckIcon } from 'assets/img/check.svg';

export const DashboardPage = (): JSX.Element => {
  const { data: todos } = useGetTodos();

  return (
    <div className="container my-8 mx-auto px-4 leading-normal">
      <h1 className="mb-8">TODOS list</h1>
      <p className="mb-4">
        Creating an icon list with Tailwind and flexbox I had the following issue where the icons were shrinking; easy
        fix with{' '}
        <strong>
          `flex-none` class on <code>&lt;svg&gt;</code> element
        </strong>
        .
      </p>
      {!!todos?.length &&
        todos.map((item) => (
          <Fragment key={item.id}>
            <ul className="bg-gray-100 list-reset text-black mb-8 p-8 text-grey-darker rounded shadow-lg">
              <li className="flex items-center mb-3">
                <CheckIcon />
                <p className="text-lg font-semibold text-blue-500">itemId: {item.id}</p>
              </li>
              <li className="flex items-center mb-3">
                <CheckIcon />
                <p className="text-lg font-semibold text-green-4is Completed status: {item.completed}00">
                  userId: {item.userId}
                </p>
              </li>
              <li className="flex items-center mb-3">
                <CheckIcon />
                <p className="text-lg font-semibold text-green-400">title: {item.title}</p>
              </li>
              <li className="flex items-center mb-3">
                <CheckIcon />
                <p className="text-lg font-semibold text-purple-700">is Completed status: {item.completed}</p>
              </li>
            </ul>
          </Fragment>
        ))}
    </div>
  );
};

export default DashboardPage;
