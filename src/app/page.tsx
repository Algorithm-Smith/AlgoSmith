import logo from '../../public/AlgoSmith.png';
import Image from 'next/image';

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-start min-h-screen mb-4 text-4xl font-extrabold leading-none tracking-tight  md:text-5xl lg:text-6xl '>
      <h1 className='text-gray-800 m-10'>Welcome to AlgoSmith</h1>
      <Image className='h-auto max-w-lg rounded-lg' src={logo} alt='logo' />
    </div>
  );
}
