import useLiveData from "./useLiveData";

export default function ExportButton() {
  const data = useLiveData();

  const handleExport = () => {
    const csvContent = [
      Object.keys(data[0] || {}).join(","),
      ...data.map((row) =>
        Object.values(row)
          .map((value) => `"${value}"`)
          .join(",")
      ),
    ].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "live_data_export.csv";
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <button onClick={handleExport} style={{ padding: "10px 20px", fontSize: "16px" }}>
        ⬇ Export CSV
      </button>
    </div>
  );
}
