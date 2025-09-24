// components/SubmittedInfo.tsx
"use client";

import React from "react";

type SubmittedInfoProps = {
  data: {
    name: string;
    username: string;
    gender?: string;
    skills: string[];
  } | null;
};

export default function SubmittedInfo({ data }: SubmittedInfoProps) {
  if (!data) return null;

  return (
    <div className="mt-6 p-4 bg-gray-100 rounded-lg shadow-inner">
      <h2 className="text-lg font-semibold mb-2">Submitted Information</h2>
      <ul className="text-sm text-gray-700 space-y-1">
        <li>
          <strong>Name:</strong> {data.name}
        </li>
        <li>
          <strong>Email:</strong> {data.username}
        </li>
        <li>
          <strong>Gender:</strong> {data.gender || "N/A"}
        </li>
        <li>
          <strong>Skills:</strong> {data.skills.join(", ")}
        </li>
      </ul>
    </div>
  );
}
