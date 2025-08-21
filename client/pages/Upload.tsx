import { Upload } from "lucide-react";
import Placeholder from "./Placeholder";

export default function UploadPage() {
  return (
    <Placeholder
      title="Upload Prescription"
      description="Upload prescription images for automatic text extraction and comprehensive drug interaction analysis."
      icon={<Upload className="h-8 w-8 text-medical-600" />}
    />
  );
}
