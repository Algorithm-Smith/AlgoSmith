import Table from './components/Table';
import AddForm from './components/AddForm';
import TableDetails from './components/TableDetails';
import AddButton from './components/AddButton';

export default function Page() {
  return (
    <div>
      <h1>Hello, Dashboard Page!</h1>
      <Table />
      <AddButton />
    </div>
  );
}
