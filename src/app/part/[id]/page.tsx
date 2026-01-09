"use client";

import { useParams } from "next/navigation";
import OverviewPage from "../../page";
import AutomatedPart1 from "@/component/automatedPart1";
import AutomatedPart2 from "@/component/automatedPart2";

const STEP_COMPONENTS: Record<number, React.ReactNode> = {
  1: <AutomatedPart1 />,
  2: <AutomatedPart2 />,
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
