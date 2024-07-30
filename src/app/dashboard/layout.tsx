import Sidebar from './components/Sidebar';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
    <div className="w-1/4">
      <Sidebar />
    </div>

    <div className="flex-1 p-4">
      {children}
    </div>
    </div>
  )
};

