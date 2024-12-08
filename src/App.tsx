import DataTable from "./components/data-table";
import Layout from "./components/layout";
import StatsCard from "./components/stats-card";
import { data, columns, statsData } from "./const/placeholder";

function App() {
  return (
    <Layout>
      <div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {statsData.map((stat, index) => (
            <div key={index}>
              <StatsCard
                title={stat.title}
                value={stat.value}
                icon={stat.icon}
              />
            </div>
          ))}
        </div>
        <div>
          <h1 className="mb-4 text-xl font-bold">User Data</h1>
          <DataTable data={data} columns={columns} />
        </div>
      </div>
    </Layout>
  );
}

export default App;
