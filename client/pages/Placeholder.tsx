import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  ArrowLeft, 
  Construction,
  MessageCircle
} from "lucide-react";
import { Link } from "react-router-dom";

interface PlaceholderProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  comingSoon?: boolean;
}

export default function Placeholder({ title, description, icon, comingSoon = true }: PlaceholderProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-medical-50 to-white">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-medical-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center">
              <ArrowLeft className="h-5 w-5 text-medical-600 mr-2" />
              <Shield className="h-8 w-8 text-medical-600" />
              <span className="ml-2 text-xl font-bold text-medical-900">MediSafe</span>
            </Link>
            
            {comingSoon && (
              <Badge className="bg-warning text-warning-foreground">
                Coming Soon
              </Badge>
            )}
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="flex items-center justify-center px-4 py-20">
        <div className="w-full max-w-md text-center">
          <Card className="border-medical-200 shadow-lg">
            <CardHeader className="text-center">
              <div className="mx-auto mb-6 p-4 bg-medical-100 rounded-full w-fit">
                {icon}
              </div>
              <CardTitle className="text-2xl text-medical-900 mb-2">
                {title}
              </CardTitle>
              <CardDescription className="text-medical-700 text-accessible">
                {description}
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-6">
              {comingSoon && (
                <div className="flex items-center justify-center gap-2 text-medical-600">
                  <Construction className="h-5 w-5" />
                  <span className="font-medium">Under Development</span>
                </div>
              )}
              
              <div className="space-y-3">
                <Link to="/">
                  <Button variant="outline" className="w-full border-medical-300 text-medical-700 hover:bg-medical-50 btn-large">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Home
                  </Button>
                </Link>
                
                <Button className="w-full bg-medical-600 hover:bg-medical-700 text-white btn-large">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Request This Feature
                </Button>
              </div>

              <p className="text-sm text-medical-600">
                Want this feature prioritized? Let us know and we'll work on it next!
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
