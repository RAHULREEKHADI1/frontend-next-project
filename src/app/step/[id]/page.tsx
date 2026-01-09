    


"use client";

import { useParams } from "next/navigation";
import OverviewPage from "../../page";
import AutomatedPart3 from "@/component/automatedPart3";
import AutomatedPart4 from "@/component/automatedPart4";

const STEP_COMPONENTS: Record<number, React.ReactNode> = {
  4: <AutomatedPart3/>,
  3: <AutomatedPart4 />
};

const Page: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const stepId = Number(id);

  if (!Number.isInteger(stepId)) {
    return <OverviewPage />;
  }

  return STEP_COMPONENTS[stepId] ?? <OverviewPage />;
};

export default Page;
