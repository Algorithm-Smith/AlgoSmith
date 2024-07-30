import DebugAuth from '@/app/components/DebugAuthClient';

export default async function DevDebugPage() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Secret Debooger Page</h1>
      <div className="space-y-8">
        <DebugAuth />
      </div>
    </div>
  );
}
