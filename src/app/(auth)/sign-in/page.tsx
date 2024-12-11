// "use client";

// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { useAuth } from "@/hooks/useAuth";
// import { apiClient } from "@/utils/apiClient";
// import { EyeIcon, EyeOffIcon, Loader2 } from "lucide-react";
// import Link from "next/link";
// import { redirect, useRouter } from "next/navigation";
// import { useState } from "react";
// import { toast } from "sonner";

// export default function SignInPage() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const router = useRouter();
//   const [isLoading, setIsLoading] = useState(false);
//   const [showPassword, setShowPassword] = useState(false);
//   const { user } = useAuth();

//   if (user) {
//     redirect("/dashboard");
//   }

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setIsLoading(true);
//     try {
//       const response = await apiClient.signIn({ email, password });
//       if (response.token) {
//         toast.success("Sign in successful");
//         router.push("/dashboard");
//       } else {
//         toast.error(response.message || "Something went wrong");
//       }
//     } catch (error) {
//       toast.error("Something went wrong");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <section>
//       <Card className="w-[350px]">
//         <CardHeader>
//           <CardTitle>Sign In</CardTitle>
//           <CardDescription>
//             Enter your credentials to access your account.
//           </CardDescription>
//         </CardHeader>
//         <CardContent>
//           <form onSubmit={handleSubmit}>
//             <div className="grid w-full items-center gap-4">
//               <div className="flex flex-col space-y-1.5">
//                 <Label htmlFor="email">Email</Label>
//                 <Input
//                   id="email"
//                   type="email"
//                   placeholder="john@example.com"
//                   disabled={isLoading}
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   required
//                 />
//               </div>
//               <div className="flex flex-col space-y-1.5 relative">
//                 <Label htmlFor="password">Password</Label>
//                 <Input
//                   id="password"
//                   type={showPassword ? "text" : "password"}
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   disabled={isLoading}
//                   required
//                 />
//                 <div
//                   className="absolute right-2 top-[34px] flex items-center -translate-y-1/2 cursor-pointer transition-all duration-300"
//                   onClick={() => setShowPassword(!showPassword)}
//                 >
//                   {showPassword ? (
//                     <EyeIcon className="h-4 w-4" />
//                   ) : (
//                     <EyeOffIcon className="h-4 w-4" />
//                   )}
//                 </div>
//               </div>
//             </div>
//             <Button disabled={isLoading} className="w-full mt-6" type="submit">
//               {isLoading ? (
//                 <>
//                   <Loader2 className="animate-spin h-3 w-3 mr-2" />
//                   Signing in...
//                 </>
//               ) : (
//                 "Sign In"
//               )}
//             </Button>
//           </form>
//         </CardContent>
//         <CardFooter className="flex justify-center">
//           <p className="text-sm text-muted-foreground">
//             Don&apos;t have an account?{" "}
//             <Link href="/sign-up" className="text-primary hover:underline">
//               Sign Up
//             </Link>
//           </p>
//         </CardFooter>
//       </Card>
//     </section>
//   );
// }


"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/hooks/useAuth";
import { apiClient } from "@/utils/apiClient";
import { EyeIcon, EyeOffIcon, Loader2 } from "lucide-react";
import Link from "next/link";
import { redirect, useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { user } = useAuth();

  if (user) {
    redirect("/dashboard");
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await apiClient.signIn({ email, password });
      if (response.token) {
        toast.success("Sign in successful");
        router.push("/dashboard");
      } else {
        toast.error(response.message || "Something went wrong");
      }
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 bg-black shadow-sm">
        <div className="flex justify-between items-center px-4 sm:px-6 py-3 sm:py-4 bg-black shadow-sm fixed w-full z-50">
          <a href="/" className="text-lg sm:text-2xl font-bold text-white">
            TransformoDocs
          </a>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-4 sm:space-x-8">
            <li>
              <a href="#home" className="text-white ">
                Home
              </a>
            </li>
            <li>
              <a href="#platform" className="text-white  ">
                Platform
              </a>
            </li>
            <li>
              <a href="#uses" className="text-white  ">
                Uses
              </a>
            </li>
            <li>
              <a href="#about" className="text-white  ">
                About
              </a>
            </li>
            <li>
              <a href="#contact" className="text-white  ">
                Contact
              </a>
            </li>
          </ul>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-300 focus:outline-none"
            >
              {menuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <ul className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col space-y-2 py-4 px-6 md:hidden">
              <li>
                <a href="#home" className="text-black hover:text-black">
                  Home
                </a>
              </li>

              <li>
                <a href="#about" className="text-black hover:text-black">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="text-black hover:text-black">
                  Contact
                </a>
              </li>
              <li>
                <div className="flex justify-center space-x-4 mt-4">
                  <a
                    href="/sign-in"
                    className="px-4 py-2 text-sm text-black border border-gray-700 rounded-md hover:bg-gray-200"
                  >
                    Login
                  </a>
                  <a
                    href="/sign-up"
                    className="px-4 py-2 text-sm text-black bg-white border border-gray-700 rounded-md rounded-md hover:bg-gray-200"
                  >
                    Sign Up
                  </a>
                </div>
              </li>
            </ul>
          )}

          <div className="hidden md:flex items-center space-x-2 sm:space-x-4">
            <a
              href="/sign-in"
              className="px-3 py-1 sm:px-4 sm:py-2 text-sm text-white border border-gray-900 rounded-md hover:bg-gray-700"
            >
              Login
            </a>
            <a
              href="/sign-up"
              className="px-3 py-1 sm:px-4 sm:py-2 text-sm text-white bg-black rounded-md hover:bg-gray-700"
            >
              Sign Up
            </a>
          </div>
        </div>
      </div>
      {/* <section>
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>Sign In</CardTitle>
            <CardDescription>
              Enter your credentials to access your account.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    disabled={isLoading}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="flex flex-col space-y-1.5 relative">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    disabled={isLoading}
                    required
                  />
                  <div
                    className="absolute right-2 top-[34px] flex items-center -translate-y-1/2 cursor-pointer transition-all duration-300"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeIcon className="h-4 w-4" />
                    ) : (
                      <EyeOffIcon className="h-4 w-4" />
                    )}
                  </div>
                </div>
              </div>
              <Button
                disabled={isLoading}
                className="w-full mt-6"
                type="submit"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="animate-spin h-3 w-3 mr-2" />
                    Signing in...
                  </>
                ) : (
                  "Sign In"
                )}
              </Button>
            </form>
          </CardContent>
          <CardFooter className="flex justify-center">
            <p className="text-sm text-muted-foreground">
              Don&apos;t have an account?{" "}
              <Link href="/sign-up" className="text-primary hover:underline">
                Sign Up
              </Link>
            </p>
          </CardFooter>
        </Card>
      </section> */}
           <section>
       <Card className="w-[350px]">
         <CardHeader>
           <CardTitle>Sign In</CardTitle>
           <CardDescription>
             Enter your credentials to access your account.
           </CardDescription>
         </CardHeader>
         <CardContent>
           <form onSubmit={handleSubmit}>
             <div className="grid w-full items-center gap-4">
               <div className="flex flex-col space-y-1.5">
                 <Label htmlFor="email">Email</Label>
                 <Input
                   id="email"
                   type="email"
                   placeholder="john@example.com"
                   disabled={isLoading}
                   value={email}
                  onChange={(e) => setEmail(e.target.value)}
                   required
                />
               </div>
              <div className="flex flex-col space-y-1.5 relative">
                 <Label htmlFor="password">Password</Label>
                 <Input
                   id="password"
                   type={showPassword ? "text" : "password"}
                   value={password}
                   onChange={(e) => setPassword(e.target.value)}
                   disabled={isLoading}
                   required
                 />
                 <div
                   className="absolute right-2 top-[34px] flex items-center -translate-y-1/2 cursor-pointer transition-all duration-300"
                   onClick={() => setShowPassword(!showPassword)}
                 >
                   {showPassword ? (
                     <EyeIcon className="h-4 w-4" />
                   ) : (
                     <EyeOffIcon className="h-4 w-4" />
                  )}
                 </div>
               </div>
            </div>
             <Button disabled={isLoading} className="w-full mt-6" type="submit">
               {isLoading ? (
                <>
                  <Loader2 className="animate-spin h-3 w-3 mr-2" />
                  Signing in...
              </>
              ) : (
                "Sign In"
              )}
             </Button>
        </form>
        </CardContent>
        <CardFooter className="flex justify-center">
           <p className="text-sm text-muted-foreground">
             Don&apos;t have an account?{" "}
             <Link href="/sign-up" className="text-primary hover:underline">
               Sign Up
             </Link>
           </p>
         </CardFooter>
       </Card>
     </section>
    </>
  );
}