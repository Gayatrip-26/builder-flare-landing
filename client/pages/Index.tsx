import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  Scan, 
  Upload, 
  Users, 
  Heart, 
  CheckCircle,
  ArrowRight,
  Stethoscope,
  PillIcon,
  UserCheck
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Index() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-medical-50 to-white">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-medical-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <Shield className="h-8 w-8 text-medical-600" />
                <span className="ml-2 text-xl font-bold text-medical-900">MediSafe</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#features" className="text-medical-700 hover:text-medical-900 font-medium transition-colors">
                Features
              </a>
              <a href="#about" className="text-medical-700 hover:text-medical-900 font-medium transition-colors">
                About
              </a>
              <a href="#contact" className="text-medical-700 hover:text-medical-900 font-medium transition-colors">
                Contact
              </a>
            </nav>

            {/* Auth Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <Link to="/auth">
                <Button variant="ghost" className="text-medical-700 hover:text-medical-900">
                  Sign In
                </Button>
              </Link>
              <Link to="/auth">
                <Button className="bg-medical-600 hover:bg-medical-700 text-white btn-large">
                  Get Started
                </Button>
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-medical-700 hover:text-medical-900 focus:outline-none focus:ring-2 focus:ring-medical-500"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-medical-200">
              <div className="flex flex-col space-y-4">
                <a href="#features" className="text-medical-700 hover:text-medical-900 font-medium">
                  Features
                </a>
                <a href="#about" className="text-medical-700 hover:text-medical-900 font-medium">
                  About
                </a>
                <a href="#contact" className="text-medical-700 hover:text-medical-900 font-medium">
                  Contact
                </a>
                <div className="flex flex-col space-y-2 pt-4 border-t border-medical-200">
                  <Link to="/auth">
                    <Button variant="ghost" className="w-full text-medical-700">
                      Sign In
                    </Button>
                  </Link>
                  <Link to="/auth">
                    <Button className="w-full bg-medical-600 hover:bg-medical-700 text-white btn-large">
                      Get Started
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20">
        <div className="text-center">
          <Badge className="mb-6 bg-medical-100 text-medical-800 hover:bg-medical-200">
            Trusted by 10,000+ healthcare professionals
          </Badge>
          
          <h1 className="text-4xl md:text-6xl font-bold text-medical-900 mb-6 leading-tight">
            Smart Medicine Safety
            <span className="block text-medical-600">Made Simple</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-medical-700 mb-8 max-w-3xl mx-auto text-accessible leading-relaxed">
            Scan medicines or upload prescriptions to check safety, side effects, and interactions. 
            Protecting patients, supporting healthcare professionals.
          </p>

          {/* Main Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Link to="/scanner" className="w-full sm:w-auto">
              <Button className="w-full sm:w-auto bg-medical-600 hover:bg-medical-700 text-white btn-large">
                <Scan className="mr-2 h-5 w-5" />
                Scan Medicine
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            
            <Link to="/upload" className="w-full sm:w-auto">
              <Button variant="outline" className="w-full sm:w-auto border-medical-300 text-medical-700 hover:bg-medical-50 btn-large">
                <Upload className="mr-2 h-5 w-5" />
                Upload Prescription
              </Button>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 text-medical-600">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-success" />
              <span className="font-medium">FDA Approved Data</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-success" />
              <span className="font-medium">HIPAA Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-success" />
              <span className="font-medium">24/7 Support</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-medical-900 mb-4">
            Comprehensive Medicine Safety Platform
          </h2>
          <p className="text-xl text-medical-700 text-accessible">
            Everything you need to ensure safe medication management
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Feature 1: Barcode Scanning */}
          <Card className="border-medical-200 hover:shadow-lg transition-shadow">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 p-3 bg-medical-100 rounded-full w-fit">
                <Scan className="h-8 w-8 text-medical-600" />
              </div>
              <CardTitle className="text-xl text-medical-900">Quick Barcode Scanning</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-medical-700 text-accessible">
                Simply scan medicine barcodes with your phone camera to instantly get comprehensive safety information, 
                side effects, and dosage guidelines.
              </CardDescription>
            </CardContent>
          </Card>

          {/* Feature 2: Prescription Analysis */}
          <Card className="border-medical-200 hover:shadow-lg transition-shadow">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 p-3 bg-medical-100 rounded-full w-fit">
                <Upload className="h-8 w-8 text-medical-600" />
              </div>
              <CardTitle className="text-xl text-medical-900">Prescription Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-medical-700 text-accessible">
                Upload prescription images for automatic text extraction and analysis. 
                Get detailed interaction reports and safety warnings.
              </CardDescription>
            </CardContent>
          </Card>

          {/* Feature 3: AI Assistant */}
          <Card className="border-medical-200 hover:shadow-lg transition-shadow">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 p-3 bg-medical-100 rounded-full w-fit">
                <Heart className="h-8 w-8 text-medical-600" />
              </div>
              <CardTitle className="text-xl text-medical-900">AI Health Assistant</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-medical-700 text-accessible">
                Ask questions about medications, dosages, and safety concerns. 
                Get instant, reliable answers from our AI-powered assistant.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Role-based Features */}
      <section className="bg-medical-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-medical-900 mb-4">
              Built for Healthcare Professionals
            </h2>
            <p className="text-xl text-medical-700 text-accessible">
              Specialized dashboards for different healthcare roles
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Patients */}
            <Card className="border-medical-200 bg-white">
              <CardHeader className="text-center">
                <UserCheck className="h-12 w-12 text-medical-600 mx-auto mb-4" />
                <CardTitle className="text-xl text-medical-900">For Patients</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-medical-700 text-accessible">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                    Track medication history
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                    Upload prescriptions easily
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                    Get safety alerts
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Chemists */}
            <Card className="border-medical-200 bg-white">
              <CardHeader className="text-center">
                <PillIcon className="h-12 w-12 text-medical-600 mx-auto mb-4" />
                <CardTitle className="text-xl text-medical-900">For Chemists</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-medical-700 text-accessible">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                    Monitor prescription filling
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                    View safety warnings
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                    Access barcode history
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Doctors */}
            <Card className="border-medical-200 bg-white">
              <CardHeader className="text-center">
                <Stethoscope className="h-12 w-12 text-medical-600 mx-auto mb-4" />
                <CardTitle className="text-xl text-medical-900">For Doctors</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-medical-700 text-accessible">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                    Drug interaction reports
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                    Patient medication overview
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                    Clinical decision support
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-medical-900 mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-medical-700 mb-8 text-accessible">
            Join thousands of healthcare professionals using MediSafe every day
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/auth">
              <Button className="bg-medical-600 hover:bg-medical-700 text-white btn-large">
                <Users className="mr-2 h-5 w-5" />
                Create Free Account
              </Button>
            </Link>
            <Link to="/scanner">
              <Button variant="outline" className="border-medical-300 text-medical-700 hover:bg-medical-50 btn-large">
                Try Scanner Now
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-medical-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <Shield className="h-8 w-8 text-medical-300" />
              <span className="ml-2 text-xl font-bold">MediSafe</span>
            </div>
            <p className="text-medical-300 text-accessible">
              Making medicine safety accessible to everyone
            </p>
            <p className="text-medical-400 mt-4 text-sm">
              © 2024 MediSafe. All rights reserved. | Privacy Policy | Terms of Service
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
