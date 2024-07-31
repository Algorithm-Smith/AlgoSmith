import React from 'react';
import { AlgoDetailData } from '../types/AlgoDetailData';

const TableDetails = ({
  id,
  company,
  prompt,
  interview,
  date,
}: AlgoDetailData) => {
  return (
    <table className='min-w-full bg-white dark:bg-gray-800'>
      <thead>
        <tr className='w-full'>
          <th className='px-6 py-3 border-b-2 border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-left text-xs leading-4 font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider'>
            Company
          </th>
          <th className='px-6 py-3 border-b-2 border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-left text-xs leading-4 font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider'>
            Prompt
          </th>
          <th className='px-6 py-3 border-b-2 border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-left text-xs leading-4 font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider'>
            Interview
          </th>
          <th className='px-6 py-3 border-b-2 border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-left text-xs leading-4 font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider'>
            Date
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          key={id}
          className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'
        >
          <td className='px-6 py-4 font-medium text-gray-900 dark:text-white'>
            {company}
          </td>
          <td className='px-6 py-4 text-gray-700 dark:text-gray-300'>
            {prompt}
          </td>
          <td className='px-6 py-4 text-gray-700 dark:text-gray-300'>
            {interview}
          </td>
          <td className='px-6 py-4 text-gray-700 dark:text-gray-300'>{date}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default TableDetails;
