import { Aldrich } from 'next/font/google';
import TableDetails from '../components/TableDetails';
import { AlgoDetailData } from '../types/AlgoDetailData';

export default function AlgoDetails({
  params,
}: {
  params: { algoId: string };
}) {
  console.log('params: ', params);

  const data = [
    {
      id: '1',
      name: 'numIslands()',
      company: 'Apple',
      prompt: `Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.`,
      notes: 'it was hard',
      file: null,
      date: '2023-07-28',
      interview: 2,
    },
    {
      id: '2',
      name: 'twoSum()',
      company: 'Microsoft',
      prompt: `Given an array of integers, return indices of the two numbers such that they add up to a specific target. You may assume that each input would have exactly one solution, and you may not use the same element twice. Example: Given nums = [2, 7, 11, 15], target = 9, Because nums[0] + nums[1] = 2 + 7 = 9,
      return [0, 1].`,
      notes: 'also hard',
      file: null,
      date: '2023-07-29',
      interview: 1,
    },
    {
      id: '3',
      name: 'subsetSumClosest()',
      company: 'Facebook',
      prompt:
        'Given an array of integers and a target value, write a function subsetSumClosest that finds the subset of the given array whose sum is closest to the target value. Return the sum of the closest subset. The array can contain both positive and negative integers, and the subset can be empty.',
      notes: 'Asked for TypeScript',
      file: null,
      date: '2023-07-30',
      interview: 1,
    },
    {
      id: '4',
      name: 'getAllProducts()',
      company: 'Amazon',
      prompt:
        'Given an array of integers, write a function getAllProducts that returns a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i',
      notes: 'Asked for TypeScript',
      file: null,
      date: '2023-07-30',
      interview: 4,
    },
    {
      id: '5',
      name: 'substringNonrepeating()',
      company: 'Ghost',
      prompt:
        'Given a string, write a function substringNonrepeating that finds the length of the longest substring without repeating characters.',
      notes: 'Asked for TypeScript',
      file: null,
      date: '2023-07-30',
      interview: 2,
    },
    {
      id: '6',
      name: 'throttle()',
      company: 'Capital One',
      prompt:
        'Implement a throttle function that ensures a given function is executed at most once in a specified time period.',
      notes: 'Asked for TypeScript',
      file: null,
      date: '2023-07-30',
      interview: 4,
    },
    {
      id: '7',
      name: 'linkedListRemove()',
      company: 'Target',
      prompt:
        'Given a linked list, write a function linkedListRemove that removes the N-th node from the end of the list and returns the head of the modified list.',
      notes: 'Asked for TypeScript',
      file: null,
      date: '2023-07-30',
      interview: 3,
    },
    {
      id: '8',
      name: 'mergeRanges()',
      company: 'ExxonMobil',
      prompt:
        'Given an array of intervals where intervals[i] = [start_i, end_i], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.',
      notes: 'Asked for TypeScript',
      file: null,
      date: '2023-07-28',
      interview: 1,
    },
  ];

  let filterData = data.filter((algo) => algo.id === params.algoId);
  const algoDetails: AlgoDetailData = filterData[0];
  // console.log(algoDetails);

  return (
    <div className='flex flex-col justify-center items-center py-4'>
      <h1 className='text-gray-800 text-2xl font-bold m-10'>
        Algo Details for {algoDetails.name}
      </h1>
      <TableDetails {...algoDetails} />
    </div>
  );
}
