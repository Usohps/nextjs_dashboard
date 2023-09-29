import Cards from "./components/Cards";
// import Navbar from "./components/Navbar";
// import Sidebar from "./components/Sidebar";
import Table from "./components/Table";
export const metadata = {
  title: "Welcome ProvidusBank",
};
export default function Home() {
  return (
    <>
      <div>
        <h1>DASHBOARD</h1>
        <Cards />
      </div>
      <Table />
    </>
  );
}
