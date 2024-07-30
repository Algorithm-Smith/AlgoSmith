import TableDetails from "../components/TableDetails";

export default function AlgoDetails({
  params,
}: {
  params: {algoId: string};
}) {
  return (
    <div>
      <h1>Algo Details for {params.algoId}</h1>
      <TableDetails />
    </div>
  )
}