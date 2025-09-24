"use client";

import { useLoader } from "@/hooks/useLoader";
import React from "react";
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { ClipLoader } from "react-spinners";
import SubmittedInfo from "./SubmitInfo";

type FormData = {
  name: string;
  username: string;
  password: string;
  confirmPassword: string;
  gender?: "Male" | "Female" | "Other";
  skills: string[];
};

const existingNames = ["Sabbir", "Nabila", "Lipi"];

export default function RegistrationForm() {
  const [submittedData, setSubmittedData] = React.useState<FormData | null>(
    null
  );
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isSubmitting, isValid },
  } = useForm<FormData>({
    mode: "onChange",
    defaultValues: {
      name: "",
      username: "",
      password: "",
      confirmPassword: "",
      gender: undefined,
      skills: [],
    },
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    console.log("Form submitted:", data);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setSubmittedData(data);
  };

  const password = watch("password");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-500 via-pink-500 to-indigo-600 p-6">
      <div className="max-w-xl w-full bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl p-8 sm:p-10">
        <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-4">
          Create your account
        </h1>
        <p className="text-sm text-gray-600 mb-6">
          Simple, responsive sign-up form built with React Hook Form + Next.js +
          TypeScript
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              {...register("name", {
                required: "Name is required",
                validate: (value) =>
                  !existingNames.includes(value) || "Name already exists",
              })}
              placeholder="Your full name"
              className={`w-full rounded-lg border px-4 py-2 transition-shadow focus:outline-none focus:ring-2 focus:ring-purple-400 ${
                errors.name ? "border-red-400" : "border-gray-200"
              }`}
            />
            {errors.name && (
              <p className="text-red-600 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Username (email) */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Username (Email) <span className="text-red-500">*</span>
            </label>
            <input
              {...register("username", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Enter a valid email",
                },
              })}
              placeholder="you@example.com"
              className={`w-full rounded-lg border px-4 py-2 transition-shadow focus:outline-none focus:ring-2 focus:ring-purple-400 ${
                errors.username ? "border-red-400" : "border-gray-200"
              }`}
            />
            {errors.username && (
              <p className="text-red-600 text-sm mt-1">
                {errors.username.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
              placeholder="Enter password"
              className={`w-full rounded-lg border px-4 py-2 transition-shadow focus:outline-none focus:ring-2 focus:ring-purple-400 ${
                errors.password ? "border-red-400" : "border-gray-200"
              }`}
            />
            {errors.password && (
              <p className="text-red-600 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Confirm Password <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              {...register("confirmPassword", {
                required: "Please confirm your password",
                validate: (value: string) =>
                  value === password || "Passwords do not match",
              })}
              placeholder="Re-type password"
              className={`w-full rounded-lg border px-4 py-2 transition-shadow focus:outline-none focus:ring-2 focus:ring-purple-400 ${
                errors.confirmPassword ? "border-red-400" : "border-gray-200"
              }`}
            />
            {errors.confirmPassword && (
              <p className="text-red-600 text-sm mt-1">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Gender
            </label>
            <div className="flex gap-4">
              <label className="inline-flex items-center gap-2">
                <input
                  {...register("gender", {
                    required: "Please select your gender",
                  })}
                  type="radio"
                  value="Male"
                />
                <span className="text-sm">Male</span>
              </label>
              <label className="inline-flex items-center gap-2">
                <input
                  {...register("gender", {
                    required: "Please select your gender",
                  })}
                  type="radio"
                  value="Female"
                />
                <span className="text-sm">Female</span>
              </label>
              <label className="inline-flex items-center gap-2">
                <input
                  {...register("gender", {
                    required: "Please select your gender",
                  })}
                  type="radio"
                  value="Other"
                />
                <span className="text-sm">Other</span>
              </label>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Skills <span className="text-red-500">*</span>
            </label>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
              {[
                { id: "html", label: "HTML" },
                { id: "css", label: "CSS" },
                { id: "js", label: "JavaScript" },
                { id: "react", label: "React" },
              ].map((s) => (
                <label
                  key={s.id}
                  className="inline-flex items-center gap-2 rounded-md px-3 py-2 border hover:shadow-sm cursor-pointer transition"
                >
                  <input
                    type="checkbox"
                    value={s.label}
                    {...register("skills", {
                      validate: (v: string[]) =>
                        (v && v.length > 0) || "Select at least one skill",
                    })}
                    className="w-4 h-4"
                  />
                  <span className="text-sm">{s.label}</span>
                </label>
              ))}
            </div>
            {errors.skills && (
              <p className="text-red-600 text-sm mt-1">
                {typeof errors.skills.message === "string"
                  ? errors.skills.message
                  : ""}
              </p>
            )}
          </div>

          {/* Buttons */}
          <div className="flex items-center justify-between gap-3">
            <button
              type="submit"
              disabled={isSubmitting || !isValid}
              className="flex-1 py-2 rounded-lg font-medium text-white bg-gradient-to-r from-purple-600 to-pink-500 hover:scale-[1.02] transform transition-shadow shadow-md focus:ring-4 focus:ring-purple-300 disabled:opacity-60 cursor-pointer flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <ClipLoader size={18} color="#fff" loading={true} />
                  <span>Submitting...</span>
                </>
              ) : (
                "Create Account"
              )}
            </button>

            <button
              type="button"
              onClick={() => reset()}
              className="px-4 py-2 rounded-lg border border-gray-300 bg-white hover:bg-gray-50 transition cursor-pointer"
            >
              Reset
            </button>
          </div>
        </form>
        <SubmittedInfo data={submittedData} />
        <p className="text-xs text-gray-500 mt-4">
          By continuing you agree to our Terms & Conditions.
        </p>
      </div>
    </div>
  );
}
