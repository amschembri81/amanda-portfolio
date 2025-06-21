import LiveChart from "./LiveChart";
import OutcomeChart from "./OutcomeChart";
import ExportButton from "./ExportButton";

export default function Dashboard() {
  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="bg-white rounded-2xl shadow p-4">
        <h2 className="text-xl font-bold mb-2">Live Purchase Amount</h2>
        <LiveChart />
      </div>
      <div className="bg-white rounded-2xl shadow p-4">
        <h2 className="text-xl font-bold mb-2">Outcome Distribution</h2>
        <OutcomeChart />
      </div>
      <div className="col-span-1 md:col-span-2 text-center">
        <ExportButton />
      </div>
    </div>
  );
}
