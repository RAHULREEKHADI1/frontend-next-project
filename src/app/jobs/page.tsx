import TableComponent from "@/component/tableComponent";
import ThreeProps from "@/component/threeProps";



const JobPage : React.FC = ()=>{
    return (
        <div>
            <ThreeProps title1="All Experiments" title2="All Jobs" title3="All Schedules" href="/schedule" />
            <TableComponent
                    data={[
                        {
                            latestJob: "olive_nut_rb0dgls7vv",
                            experiment: "Default",
                            submit: "Dec 5, 2023",
                            jobCreated: "45 min 20 sec",
                            jobType: "Automated",
                        },
                        {
                            latestJob: "olive_nut_rb0dgls7vv",
                            experiment: "Default",
                            submit: "Dec 3, 2023",
                            jobCreated: "45 min 20 sec",
                            jobType: "Automated",
                        },
                        {
                            latestJob: "olive_nut_rb0bgdtv",
                            experiment: "Default",
                            submit: "Dec 2, 2023",
                            jobCreated: "45 min 20 sec",
                            jobType: "Automated",
                        }
                    ]}
                    className="bg-[#1B2028] mt-10 pt-5 px-4 rounded-xl"
                />
        </div>
    )
}

export default JobPage;