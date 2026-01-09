import Button from "@/component/button";
import Documentation from "@/component/documentation";
import TableComponent from "@/component/tableComponent";
import ThreeProps from "@/component/threeProps";

const OverviewPage: React.FC = () => {
    return (
        <div className="flex gap-12">
            <div className="bg-[#161B22] rounded-lg px-6 py-4 flex flex-col gap-8">
                <div className="flex items-center justify-between">
                    <p className="text-white font-bold text-xl leading-7">
                        ML Jobs
                    </p>

                    <div className="relative w-33.5">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none">
                            <img src="/ic_round-plus.svg" alt="plus_icon" />
                        </span>

                        <Button
                            text="New Job"
                            className="pl-6 text-md font-semibold h-8"
                        />
                    </div>
                </div>
                <ThreeProps />
                <TableComponent
                    data={[
                        {
                            name: "olive_nut_rb0dgls7vv",
                            experiment: "Default",
                            created: "Dec 5, 2023",
                            duration: "45 min 20 sec",
                            status: "Done",
                        },
                        {
                            name: "olive_nut_rb0dgls7vv",
                            experiment: "Default",
                            created: "Dec 3, 2023",
                            duration: "30 min 20 sec",
                            status: "Failed",
                        },
                        {
                            name: "olive_nut_rb0bgdtv",
                            experiment: "Default",
                            created: "Dec 2, 2023",
                            duration: "45 min 20 sec",
                            status: "Done",
                        },
                        {
                            name: "olive_nut_rb0bgdtv",
                            experiment: "Default",
                            created: "Dec 2, 2023",
                            duration: "45 min 20 sec",
                            status: "Done",
                        },
                    ]}
                />
            </div>
              <Documentation
              className="-translate-y-3"
        title={["Concept: What is Automated ML?",
             "Tutorial: Create your first classification model with Automated ML",
             "Blog: Build more accurate forecasts with new capabilities in Automated ML"
        ]}/>
        </div>
    );
};

export default OverviewPage;
