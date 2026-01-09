import React from 'react';

interface DataDashboardProps {
  type?: string;
  datasetType?: string;
  createdBy?: string;
  filesInDataset?: string | number;
  totalSize?: string;
  latestVersion?: string | number;
  tags?: string[];
  description?: string;
  onEditTags?: () => void;
  onEditDescription?: () => void;
}

const DataDashboard: React.FC<DataDashboardProps> = ({
  type = "Table",
  datasetType = "Tabular",
  createdBy = "David Oliver",
  filesInDataset = "1",
  totalSize = "100 Kb",
  latestVersion = "1",
  tags = [],
  description = "",
  onEditTags,
  onEditDescription
}) => {
  return (
    <div className="px-8 min-h-screen">
      <h2 className="text-white text-xl font-semibold mb-6">Attributes</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl">
        <div className="rounded-2xl border border-[#06D6A0] bg-[#1B2028] p-8 flex flex-col gap-6">
          <section>
            <p className="text-[#06D6A0] text-sm font-medium mb-1">Type</p>
            <p className="text-[#E9E9E9] font-semibold text-sm ">{type}</p>
          </section>

          <section>
            <p className="text-[#06D6A0] text-sm font-medium mb-1">Dataset type</p>
            <p className="text-[#E9E9E9] font-semibold text-sm ">{datasetType}</p>
          </section>

          <section>
            <p className="text-[#06D6A0] text-sm font-medium mb-1">Created By</p>
            <p className="text-[#E9E9E9] font-semibold text-sm ">{createdBy}</p>
          </section>

          <section>
            <p className="text-[#06D6A0] text-sm font-medium mb-1">Profile</p>
            <button className="text-[#E9E9E9] font-semibold text-sm  hover:underline transition-all text-left">View Profile</button>
          </section>

          <section>
            <p className="text-[#06D6A0] text-sm font-medium mb-1">Files in Dataset</p>
            <p className="text-[#E9E9E9] font-semibold text-sm ">{filesInDataset}</p>
          </section>

          <section>
            <p className="text-[#06D6A0] text-sm font-medium mb-1">Total Size in Dataset</p>
            <p className="text-[#E9E9E9] font-semibold text-sm ">{totalSize}</p>
          </section>

          <section>
            <p className="text-[#06D6A0] text-sm font-medium mb-1">Latest Version</p>
            <p className="text-[#E9E9E9] font-semibold text-sm ">{latestVersion}</p>
          </section>
        </div>

        <div className="flex flex-col gap-4">
          <div className="rounded-xl border border-[#06D6A0] bg-[#1B2028] p-5">
            <div className="flex justify-between items-center mb-2">
              <span className="text-[#06D6A0] text-sm font-medium">Tags</span>
              <button onClick={onEditTags} className="text-[#06D6A0]">
                <div className="shrink-0 flex items-center justify-center">
                            <img src="/pen_icon.svg" alt="pen_icon" />
                        </div>
              </button>
            </div>
            <p className="text-[#E9E9E9] text-sm">
              {tags.length > 0 ? tags.join(', ') : 'No Data'}
            </p>
          </div>

          <div className="rounded-xl border border-[#06D6A0] bg-[#1B2028] p-5">
            <div className="flex justify-between items-center mb-2">
              <span className="text-[#06D6A0] text-sm font-medium">Description</span>
              <button onClick={onEditDescription} className="text-[#06D6A0]">
                <div className="shrink-0 flex items-center justify-center">
                            <img src="/pen_icon.svg" alt="pen_icon" />
                        </div>
              </button>
            </div>
            <p 
              className={`text-sm ${!description ? 'text-[#E9E9E9] italic cursor-pointer' : 'text-gray-300'}`}
              onClick={!description ? onEditDescription : undefined}
            >
              {description || 'Click to edit description.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataDashboard;
