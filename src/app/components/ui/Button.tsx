import React from "react";

export default function Button({
  height,
  width,
  children,
  radius,
  backgroundColor = "bg-[white]",
}: {
  height: string;
  width: string;
  children: React.ReactNode;
  radius: string;
  backgroundColor?: string;
}) {
  return (
    <button
      className={`w-[${width}] h-[${height}] rounded-[${radius}] `}
      style={{
        backgroundColor,
        borderRadius: radius,
        width,
        height,
      }}
    >
      {children}
    </button>
  );
}
