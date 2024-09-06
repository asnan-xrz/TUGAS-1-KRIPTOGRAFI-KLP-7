// pages/page.tsx ECB

import React from "react";
import ECBCalculator from "@/components/ECBCalculator";

const page: React.FC = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <ECBCalculator />
    </div>
  );
};

export default page;
