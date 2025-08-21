import { LayoutDashboard } from "lucide-react";
import Placeholder from "./Placeholder";

export default function Dashboard() {
  return (
    <Placeholder
      title="Personal Dashboard"
      description="View your medication history, prescriptions, and personalized health insights based on your role."
      icon={<LayoutDashboard className="h-8 w-8 text-medical-600" />}
    />
  );
}
