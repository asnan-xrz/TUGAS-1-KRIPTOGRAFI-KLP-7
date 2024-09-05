// pages/page.tsx ECB

import React from "react";
import ECBCalculator from "@/components/ECBCalculator";

const page: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <ECBCalculator />
    </div>
  );
};

export default page;
