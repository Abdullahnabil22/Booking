"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function PaymentSuccessPage() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/");
    }, 5000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4 text-green-600">
        Payment Successful!
      </h1>
      <p className="text-xl mb-8">Thank you for your booking.</p>
      <p className="text-lg">Redirecting to home page in 5 seconds...</p>
    </div>
  );
}
