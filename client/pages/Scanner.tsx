import { Scan } from "lucide-react";
import Placeholder from "./Placeholder";

export default function Scanner() {
  return (
    <Placeholder
      title="Barcode Scanner"
      description="Use your camera to scan medicine barcodes and get instant safety information, side effects, and dosage guidelines."
      icon={<Scan className="h-8 w-8 text-medical-600" />}
    />
  );
}
