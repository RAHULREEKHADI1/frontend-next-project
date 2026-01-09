"use client"

import AutomatedStep1 from "@/component/automatedStep1";
import { useParams } from "next/navigation";
import OverviewPage from "../../page";
import AutomatedStep2 from "@/component/automatedStep2";
import AutomatedStep4 from "@/component/automatedPart1";


const STEP_COMPONENTS: Record<number, React.ReactNode> = {
  1: <AutomatedStep1 />,
  2: <AutomatedStep2 />,
};

const AutomatedPageForML:React.FC = ()=>{
    const params = useParams();

    const stepId = Number(params?.id);

    if (!stepId || isNaN(stepId)) {
    return <OverviewPage/>;
    } 


    return (
        STEP_COMPONENTS[stepId] ?? <OverviewPage />
    )
}
export default AutomatedPageForML;