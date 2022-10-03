import React, { memo } from "react";
import { useRouter } from "next/router";

import { ErrorBoundaryProps } from "./types";

const ErrorBoundary = (params: ErrorBoundaryProps) => {
  const { back, reload } = useRouter();

  const onBack = () => {
    back();
    setTimeout(() => {
      reload();
    }, 100);
  };

  return (
    <div className="flex flex-col gap-3 items-center justify-center w-full h-screen">
      <h1>Oops.. something wrong!</h1>
      <button onClick={onBack}>back</button>
    </div>
  );
};

export default memo(ErrorBoundary);
