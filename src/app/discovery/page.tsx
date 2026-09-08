"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

// This route was retired in the HootLab rebrand — send visitors home.
export default function DiscoveryRedirect() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/");
  }, [router]);
  return null;
}
