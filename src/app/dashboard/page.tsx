"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

// This route was retired in the HootLab rebrand — send visitors home.
export default function DashboardRedirect() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/");
  }, [router]);
  return null;
}
