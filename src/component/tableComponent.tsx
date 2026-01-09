import { twMerge } from "tailwind-merge";

interface TableRow {
  name?: string;
  experiment?: string;
  type?: string;
  created?: string;
  modified?: string;
  duration?: string;
  status?: "Done" | "Failed";
  storage?: string;
  length?: string;
  width?: string;
  variety?: string;
  columnName?: string;
  exampleValue?: string;
  latestJob?: string;
  submit?: string;
  jobCreated?: string;
  jobType?: string;
  index?: number;
  model?: string;
  startDate?: string;
  forecast?: string;
  nextForecast?: string;
  pnl7d?: string;
  totalPnl?: string;
  pnlGraph?: string;
}

interface Column {
  key: keyof TableRow;
  label: string;
  width: string;
}

const columns: Column[] = [
  { key: "name", label: "Name", width: "1.5fr" },
  { key: "columnName", label: "Column Name", width: "1fr" },
  { key: "type", label: "Type", width: "1fr" },
  { key: "latestJob", label: "Latest Job", width: "1.5fr" },
  { key: "experiment", label: "Experiment", width: "1fr" },
  { key: "storage", label: "Storage Name", width: "2fr" },
  { key: "created", label: "Created", width: "1fr" },
  { key: "modified", label: "Modified", width: "1fr" },
  { key: "duration", label: "Duration", width: "1.2fr" },
  { key: "status", label: "Status", width: "1fr" },
  { key: "length", label: "sepal.length", width: "1fr" },
  { key: "width", label: "sepal.width", width: "1fr" },
  { key: "variety", label: "variety", width: "1fr" },
  { key: "exampleValue", label: "Example Values", width: "1fr" },
  { key: "submit", label: "Last submitted", width: "1.5fr" },
  { key: "jobCreated", label: "Job Created", width: "1.5fr" },
  { key: "jobType", label: "Job Type", width: "1fr" },
  { key: "index", label: "#", width: "0.5fr" },
  { key: "model", label: "Model", width: "2fr" },
  { key: "startDate", label: "Start Date", width: "1.5fr" },
  { key: "forecast", label: "Forecast", width: "1fr" },
  { key: "nextForecast", label: "Next Forecast", width: "1.5fr" },
  { key: "pnl7d", label: "7d PNL", width: "1fr" },
  { key: "totalPnl", label: "Total PNL", width: "1fr" },
  { key: "pnlGraph", label: "PNL Graph", width: "1fr" },

];

interface TableComponentProps {
  data: TableRow[];
  className?: string;
}

const TableComponent: React.FC<TableComponentProps> = ({ data, className }) => {
  const activeColumns = columns.filter(col =>
    data.some(row => row[col.key] !== undefined)
  );

  const gridTemplate = activeColumns.map(c => c.width).join(" ");

  return (
    <div className={twMerge("w-full min-w-160 overflow-hidden", className)}>
      <div
        className="grid px-3 py-4 text-[#06D6A0] text-sm font-medium"
        style={{ gridTemplateColumns: gridTemplate }}
      >
        {activeColumns.map(col => (
          <p key={col.key}>{col.label}</p>
        ))}
      </div>

      <div className="divide-y divide-white/20">
        {data.map((row, index) => (
          <div
            key={index}
            className="grid px-3 py-5 text-white text-sm items-center"
            style={{ gridTemplateColumns: gridTemplate }}
          >
            {activeColumns.map(col => {
              const value = row[col.key];

              if (col.key === "status") {
                return (
                  <div key={col.key} className="inline-flex">
                    <div
                      className={`inline-flex items-center gap-2 py-px px-1.75 rounded-md border text-sm font-medium ${value === "Done"
                          ? "bg-[#F1F0FF] border-[#4A3AFF] text-[#06D6A0]"
                          : "bg-[#F1F0FF] border-[#4A3AFF] text-[#FF0000]"
                        }`}
                    >
                      <div
                        className={`w-2 h-2 rounded-full ${value === "Done"
                            ? "bg-[#06D6A0]"
                            : "bg-[#FF0000]"
                          }`}
                      />
                      {value}
                    </div>
                  </div>
                );
              }
              if (col.key === "pnlGraph" && typeof value === "string") {
                return (
                  <div key={col.key} className="flex items-center">
                    <img
                      src={value}
                      alt="PNL Graph"
                      className="h-14 w-auto"
                    />
                  </div>
                );
              }

              return (
                <p
                  key={col.key}
                  className={
                    col.key === "name"
                      ? "font-semibold"
                      : "text-[#E9E9E9] font-normal"
                  }
                >
                  {value ?? "-"}
                </p>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableComponent;
