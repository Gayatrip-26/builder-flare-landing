import { MessageCircle } from "lucide-react";
import Placeholder from "./Placeholder";

export default function Chatbot() {
  return (
    <Placeholder
      title="AI Health Assistant"
      description="Ask questions about medications, dosages, and safety concerns. Get instant, reliable answers from our AI assistant."
      icon={<MessageCircle className="h-8 w-8 text-medical-600" />}
    />
  );
}
