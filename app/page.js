import Cards from "./components/Cards";
import Table from "./components/Table";
export const metadata = {
  title: "Welcome ProvidusBank",
};
export default function Home() {
  return (
    <>
      <div className="space-y-8 py-12">
        <h1 className="p-4 text-lg font-bold">DASHBOARD</h1>
        <Cards />
      </div>
      <Table />
    </>
  );
}
