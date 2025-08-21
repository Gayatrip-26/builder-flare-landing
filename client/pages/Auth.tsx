import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  Eye, 
  EyeOff, 
  Mail, 
  Lock, 
  ArrowLeft,
  CheckCircle,
  User,
  Stethoscope,
  PillIcon,
  UserCheck
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Auth() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: ""
  });
  const [signupForm, setSignupForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    role: "patient"
  });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement login logic
    console.log("Login:", loginForm);
  };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement signup logic
    console.log("Signup:", signupForm);
  };

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
            
            <Badge className="bg-medical-100 text-medical-800">
              Secure Authentication
            </Badge>
          </div>
        </div>
      </header>

      {/* Auth Form */}
      <div className="flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-medical-900 mb-2">
              Welcome to MediSafe
            </h1>
            <p className="text-medical-700 text-accessible">
              Your trusted medicine safety companion
            </p>
          </div>

          <Card className="border-medical-200 shadow-lg">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto mb-4 p-3 bg-medical-100 rounded-full w-fit">
                <Shield className="h-8 w-8 text-medical-600" />
              </div>
            </CardHeader>

            <CardContent>
              <Tabs defaultValue="login" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-6">
                  <TabsTrigger value="login" className="text-accessible">Sign In</TabsTrigger>
                  <TabsTrigger value="signup" className="text-accessible">Sign Up</TabsTrigger>
                </TabsList>

                {/* Login Tab */}
                <TabsContent value="login">
                  <CardTitle className="text-xl text-medical-900 mb-2">Sign In</CardTitle>
                  <CardDescription className="text-medical-700 mb-6 text-accessible">
                    Access your MediSafe account securely
                  </CardDescription>

                  <form onSubmit={handleLogin} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="login-email" className="text-medical-900 font-medium">
                        Email Address
                      </Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 h-5 w-5 text-medical-400" />
                        <Input
                          id="login-email"
                          type="email"
                          placeholder="your.email@example.com"
                          value={loginForm.email}
                          onChange={(e) => setLoginForm({...loginForm, email: e.target.value})}
                          className="pl-10 border-medical-300 focus:border-medical-500 focus:ring-medical-500 text-accessible"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="login-password" className="text-medical-900 font-medium">
                        Password
                      </Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-3 h-5 w-5 text-medical-400" />
                        <Input
                          id="login-password"
                          type={showPassword ? "text" : "password"}
                          placeholder="Enter your password"
                          value={loginForm.password}
                          onChange={(e) => setLoginForm({...loginForm, password: e.target.value})}
                          className="pl-10 pr-10 border-medical-300 focus:border-medical-500 focus:ring-medical-500 text-accessible"
                          required
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-3 text-medical-400 hover:text-medical-600"
                        >
                          {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                        </button>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <a href="#" className="text-sm text-medical-600 hover:text-medical-800">
                        Forgot password?
                      </a>
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-medical-600 hover:bg-medical-700 text-white btn-large"
                    >
                      Sign In Securely
                    </Button>
                  </form>
                </TabsContent>

                {/* Signup Tab */}
                <TabsContent value="signup">
                  <CardTitle className="text-xl text-medical-900 mb-2">Create Account</CardTitle>
                  <CardDescription className="text-medical-700 mb-6 text-accessible">
                    Join the MediSafe community today
                  </CardDescription>

                  <form onSubmit={handleSignup} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="signup-email" className="text-medical-900 font-medium">
                        Email Address
                      </Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 h-5 w-5 text-medical-400" />
                        <Input
                          id="signup-email"
                          type="email"
                          placeholder="your.email@example.com"
                          value={signupForm.email}
                          onChange={(e) => setSignupForm({...signupForm, email: e.target.value})}
                          className="pl-10 border-medical-300 focus:border-medical-500 focus:ring-medical-500 text-accessible"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label className="text-medical-900 font-medium">
                        I am a:
                      </Label>
                      <div className="grid grid-cols-3 gap-2">
                        <button
                          type="button"
                          onClick={() => setSignupForm({...signupForm, role: "patient"})}
                          className={`p-3 rounded-lg border text-center transition-colors ${
                            signupForm.role === "patient" 
                              ? "border-medical-500 bg-medical-50 text-medical-900" 
                              : "border-medical-300 hover:border-medical-400"
                          }`}
                        >
                          <UserCheck className="h-6 w-6 mx-auto mb-1" />
                          <div className="text-sm font-medium">Patient</div>
                        </button>
                        <button
                          type="button"
                          onClick={() => setSignupForm({...signupForm, role: "chemist"})}
                          className={`p-3 rounded-lg border text-center transition-colors ${
                            signupForm.role === "chemist" 
                              ? "border-medical-500 bg-medical-50 text-medical-900" 
                              : "border-medical-300 hover:border-medical-400"
                          }`}
                        >
                          <PillIcon className="h-6 w-6 mx-auto mb-1" />
                          <div className="text-sm font-medium">Chemist</div>
                        </button>
                        <button
                          type="button"
                          onClick={() => setSignupForm({...signupForm, role: "doctor"})}
                          className={`p-3 rounded-lg border text-center transition-colors ${
                            signupForm.role === "doctor" 
                              ? "border-medical-500 bg-medical-50 text-medical-900" 
                              : "border-medical-300 hover:border-medical-400"
                          }`}
                        >
                          <Stethoscope className="h-6 w-6 mx-auto mb-1" />
                          <div className="text-sm font-medium">Doctor</div>
                        </button>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="signup-password" className="text-medical-900 font-medium">
                        Password
                      </Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-3 h-5 w-5 text-medical-400" />
                        <Input
                          id="signup-password"
                          type={showPassword ? "text" : "password"}
                          placeholder="Create a strong password"
                          value={signupForm.password}
                          onChange={(e) => setSignupForm({...signupForm, password: e.target.value})}
                          className="pl-10 pr-10 border-medical-300 focus:border-medical-500 focus:ring-medical-500 text-accessible"
                          required
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-3 text-medical-400 hover:text-medical-600"
                        >
                          {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                        </button>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="signup-confirm-password" className="text-medical-900 font-medium">
                        Confirm Password
                      </Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-3 h-5 w-5 text-medical-400" />
                        <Input
                          id="signup-confirm-password"
                          type={showConfirmPassword ? "text" : "password"}
                          placeholder="Confirm your password"
                          value={signupForm.confirmPassword}
                          onChange={(e) => setSignupForm({...signupForm, confirmPassword: e.target.value})}
                          className="pl-10 pr-10 border-medical-300 focus:border-medical-500 focus:ring-medical-500 text-accessible"
                          required
                        />
                        <button
                          type="button"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          className="absolute right-3 top-3 text-medical-400 hover:text-medical-600"
                        >
                          {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                        </button>
                      </div>
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-medical-600 hover:bg-medical-700 text-white btn-large"
                    >
                      Create Account
                    </Button>
                  </form>
                </TabsContent>
              </Tabs>

              {/* Security Features */}
              <div className="mt-6 pt-6 border-t border-medical-200">
                <div className="flex items-center justify-center space-x-6 text-sm text-medical-600">
                  <div className="flex items-center gap-1">
                    <CheckCircle className="h-4 w-4 text-success" />
                    <span>256-bit SSL</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle className="h-4 w-4 text-success" />
                    <span>HIPAA Compliant</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle className="h-4 w-4 text-success" />
                    <span>SOC 2 Type II</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <p className="text-center text-sm text-medical-600 mt-6">
            By creating an account, you agree to our{" "}
            <a href="#" className="text-medical-700 hover:text-medical-900 underline">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="text-medical-700 hover:text-medical-900 underline">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
