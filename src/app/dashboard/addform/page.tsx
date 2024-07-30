'use client';

import React, { useState } from 'react';
import Link from 'next/link'

const AddForm = () => {
  return (
    <div>
      {/* <!-- Main modal --> */}

      <div className='relative p-4 w-full max-w-md max-h-full'>
        {/* <!-- Modal content --> */}
        <div className='relative bg-white rounded-lg shadow dark:bg-gray-700'>
          {/* <!-- Modal header --> */}
          <div className='flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600'>
            <h3 className='flex items-center text-lg font-semibold text-gray-900 dark:text-white'>
              Add New Algorithm
            </h3>
          </div>
          {/* <!-- Modal body --> */}
          <form className='p-4 md:p-5'>
            <div className='grid gap-4 mb-4 grid-cols-2'>
              <div className='col-span-2'>
                <label
                  htmlFor='name'
                  className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                >
                  Algo Name
                </label>
                <input
                  type='text'
                  name='name'
                  id='name'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
                  placeholder='Type algo name'
                  required
                />
              </div>
              <div className='col-span-2 sm:col-span-1'>
                <label
                  htmlFor='price'
                  className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                >
                  Interview Round
                </label>
                <input
                  type='number'
                  name='price'
                  id='price'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
                  placeholder='1'
                  required
                />
              </div>
              <div className='col-span-2 sm:col-span-1'>
                <label
                  htmlFor='company'
                  className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                >
                  Company
                </label>
                <select
                  id='company'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
                >
                  <option>Select Company</option>
                  <option value='Amazon'>Amazon</option>
                  <option value='Apple'>Apples</option>
                  <option value='Google'>Google</option>
                  <option value='Meta'>Meta</option>
                </select>
              </div>
              <div className='col-span-2'>
                <label
                  htmlFor='prompt'
                  className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                >
                  Algorithm Prompt
                </label>
                <textarea
                  id='prompt'
                  rows={4}
                  className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                  placeholder='Write any notes on the algo or your interview here'
                ></textarea>
              </div>

              <label
                className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                htmlFor='file_input'
              >
                Upload solution
              </label>
              <input
                className='block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400'
                id='file_input'
                type='file'
              />

              <div className='col-span-2'>
                <label
                  htmlFor='notes'
                  className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                >
                  Notes
                </label>
                <textarea
                  id='notes'
                  rows={4}
                  className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                  placeholder='Write any notes on the algo or your interview here'
                ></textarea>
              </div>
            </div>
            {/* Add logic for inputted data to go to DB */}
            <Link href={'/dashboard'}>
            <button
              type='submit'
              className='text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
            >
              <svg
                className='me-1 -ms-1 w-5 h-5'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fill-rule='evenodd'
                  d='M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z'
                  clip-rule='evenodd'
                ></path>
              </svg>
              Add new algo
            </button>
            </Link >

          </form>
        </div>
      </div>
    </div>
  )
};

export default AddForm;
