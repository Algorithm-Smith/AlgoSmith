import Image from 'next/image';
import logo from '../../public/interview_tracking_tool_logo.png';

export default function Home() {
  return (
    <div>
      <h1>Homepage</h1>
      <Image src={logo} alt='logo' />
    </div>
  );
}
