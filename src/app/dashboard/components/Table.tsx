const Table = () => {
  return (
    <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
      <div className='flex flex-column sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center justify-between pb-4'>
        <div>
          <button
            id='dropdownRadioButton'
            data-dropdown-toggle='dropdownRadio'
            className='inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700'
            type='button'
          >
            <svg
              className='w-3 h-3 text-gray-500 dark:text-gray-400 me-3'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='currentColor'
              viewBox='0 0 20 20'
            >
              <path d='M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm3.982 13.982a1 1 0 0 1-1.414 0l-3.274-3.274A1.012 1.012 0 0 1 9 10V6a1 1 0 0 1 2 0v3.586l2.982 2.982a1 1 0 0 1 0 1.414Z' />
            </svg>
            Last 30 days
            <svg
              className='w-2.5 h-2.5 ms-2.5'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 10 6'
            >
              <path
                stroke='currentColor'
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                d='m1 1 4 4 4-4'
              />
            </svg>
          </button>
          {/* <!-- Dropdown menu --> */}
          <div
            id='dropdownRadio'
            className='z-10 hidden w-48 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600'
            data-popper-reference-hidden=''
            data-popper-escaped=''
            data-popper-placement='top'
            style={{
              position: 'absolute',
              inset: 'auto auto 0px 0px',
              margin: '0px',
              transform: 'translate3d(522.5px, 3847.5px, 0px)',
            }}
          >
            <ul
              className='p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200'
              aria-labelledby='dropdownRadioButton'
            >
              <li>
                <div className='flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600'>
                  <input
                    id='filter-radio-example-1'
                    type='radio'
                    value=''
                    name='filter-radio'
                    className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                  />
                  <label
                    htmlFor='filter-radio-example-1'
                    className='w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300'
                  >
                    Last day
                  </label>
                </div>
              </li>
              <li>
                <div className='flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600'>
                  <input
                    checked={false}
                    id='filter-radio-example-2'
                    type='radio'
                    value=''
                    name='filter-radio'
                    className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                  />
                  <label
                    htmlFor='filter-radio-example-2'
                    className='w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300'
                  >
                    Last 7 days
                  </label>
                </div>
              </li>
              <li>
                <div className='flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600'>
                  <input
                    id='filter-radio-example-3'
                    type='radio'
                    value=''
                    name='filter-radio'
                    className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                  />
                  <label
                    htmlFor='filter-radio-example-3'
                    className='w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300'
                  >
                    Last 30 days
                  </label>
                </div>
              </li>
              <li>
                <div className='flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600'>
                  <input
                    id='filter-radio-example-4'
                    type='radio'
                    value=''
                    name='filter-radio'
                    className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                  />
                  <label
                    htmlFor='filter-radio-example-4'
                    className='w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300'
                  >
                    Last month
                  </label>
                </div>
              </li>
              <li>
                <div className='flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600'>
                  <input
                    id='filter-radio-example-5'
                    type='radio'
                    value=''
                    name='filter-radio'
                    className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                  />
                  <label
                    htmlFor='filter-radio-example-5'
                    className='w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300'
                  >
                    Last year
                  </label>
                </div>
              </li>
            </ul>
          </div>
        </div>
        {/* Search */}
        <label htmlFor='table-search' className='sr-only'>
          Search
        </label>
        <div className='relative'>
          <div className='absolute inset-y-0 left-0 rtl:inset-r-0 rtl:right-0 flex items-center ps-3 pointer-events-none'>
            <svg
              className='w-5 h-5 text-gray-500 dark:text-gray-400'
              aria-hidden='true'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fill-rule='evenodd'
                d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
                clip-rule='evenodd'
              ></path>
            </svg>
          </div>
          <input
            type='text'
            id='table-search'
            className='block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            placeholder='Search htmlFor items'
          />
        </div>
      </div>
      {/* Table */}
      <table className='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
        {/* Table Header */}
        <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
          <tr>
            <th scope='col' className='px-6 py-3'>
              Algorithm
            </th>
            <th scope='col' className='px-6 py-3'>
              Company
            </th>
            <th scope='col' className='px-6 py-3'>
              Prompt
            </th>
            <th scope='col' className='px-6 py-3'>
              Notes
            </th>
            <th scope='col' className='px-6 py-3'>
              Date Added
            </th>
          </tr>
        </thead>
        {/* Table Body - Data */}
        <tbody>
          <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'>
            <th
              scope='row'
              className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'
            >
              Apple MacBook Pro 17"
            </th>
            <td className='px-6 py-4'>Silver</td>
            <td className='px-6 py-4'>Laptop</td>
            <td className='px-6 py-4'>$2999</td>
            <td className='px-6 py-4'>
              <a
                href='#'
                className='font-medium text-blue-600 dark:text-blue-500 hover:underline'
              >
                Edit
              </a>
            </td>
          </tr>
          <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'>
            <th
              scope='row'
              className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'
            >
              Microsoft Surface Pro
            </th>
            <td className='px-6 py-4'>White</td>
            <td className='px-6 py-4'>Laptop PC</td>
            <td className='px-6 py-4'>$1999</td>
            <td className='px-6 py-4'>
              <a
                href='#'
                className='font-medium text-blue-600 dark:text-blue-500 hover:underline'
              >
                Edit
              </a>
            </td>
          </tr>
          <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'>
            <th
              scope='row'
              className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'
            >
              Magic Mouse 2
            </th>
            <td className='px-6 py-4'>Black</td>
            <td className='px-6 py-4'>Accessories</td>
            <td className='px-6 py-4'>$99</td>
            <td className='px-6 py-4'>
              <a
                href='#'
                className='font-medium text-blue-600 dark:text-blue-500 hover:underline'
              >
                Edit
              </a>
            </td>
          </tr>
          <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'>
            <th
              scope='row'
              className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'
            >
              Apple Watch
            </th>
            <td className='px-6 py-4'>Silver</td>
            <td className='px-6 py-4'>Accessories</td>
            <td className='px-6 py-4'>$179</td>
            <td className='px-6 py-4'>
              <a
                href='#'
                className='font-medium text-blue-600 dark:text-blue-500 hover:underline'
              >
                Edit
              </a>
            </td>
          </tr>
          <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'>
            <th
              scope='row'
              className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'
            >
              iPad
            </th>
            <td className='px-6 py-4'>Gold</td>
            <td className='px-6 py-4'>Tablet</td>
            <td className='px-6 py-4'>$699</td>
            <td className='px-6 py-4'>
              <a
                href='#'
                className='font-medium text-blue-600 dark:text-blue-500 hover:underline'
              >
                Edit
              </a>
            </td>
          </tr>
          <tr className='bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600'>
            <th
              scope='row'
              className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'
            >
              Apple iMac 27"
            </th>
            <td className='px-6 py-4'>Silver</td>
            <td className='px-6 py-4'>PC Desktop</td>
            <td className='px-6 py-4'>$3999</td>
            <td className='px-6 py-4'>
              <a
                href='#'
                className='font-medium text-blue-600 dark:text-blue-500 hover:underline'
              >
                Edit
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
