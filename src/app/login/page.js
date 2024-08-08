"use client";
import React, { useReducer } from "react";
import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const Login = () => {
  const { data: session } = useSession();
  const router = useRouter();

  if (session) {
    router.push("/profile");
  }

  return (
    <div className="min-h-[85vh] flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>
        </div>
        <div className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm -space-y-px">
            <div className="py-2">
              <button
                type="button"
                onClick={() => signIn("github")}
                className="group relative w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 0C5.373 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.11.82-.261.82-.581 0-.287-.011-1.045-.017-2.051-3.338.726-4.042-1.612-4.042-1.612-.546-1.387-1.333-1.757-1.333-1.757-1.089-.745.083-.73.083-.73 1.205.084 1.838 1.237 1.838 1.237 1.07 1.835 2.809 1.305 3.495.998.108-.774.418-1.305.76-1.605-2.665-.302-5.467-1.333-5.467-5.933 0-1.311.469-2.382 1.235-3.222-.123-.303-.534-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.505 11.505 0 013.006-.404c1.02.005 2.047.137 3.006.404 2.289-1.552 3.295-1.23 3.295-1.23.653 1.653.242 2.873.119 3.176.77.84 1.233 1.911 1.233 3.222 0 4.61-2.807 5.625-5.478 5.921.43.37.814 1.102.814 2.222 0 1.604-.014 2.894-.014 3.286 0 .324.216.697.824.579C20.565 21.798 24 17.303 24 12 24 5.373 18.627 0 12 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                Sign in with GitHub
              </button>
            </div>
            <div className="py-2">
              <button
                type="button"
                className="group relative w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                onClick={() => signIn("google")}
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 48 48"
                    fill="currentColor"
                  >
                    <path
                      fill="#EA4335"
                      d="M24 9.5c3.14 0 5.7 1.26 7.38 2.4l5.42-5.42C33.47 3.94 29.12 2 24 2 14.95 2 7.42 8.44 5.1 16.9l6.95 5.44C13.86 14.22 18.58 9.5 24 9.5z"
                    />
                    <path
                      fill="#34A853"
                      d="M43.61 20H24v8.67h11.15c-1.36 4.33-5.33 7.5-11.15 7.5-6.78 0-12.36-5.58-12.36-12.5 0-2.02.48-3.94 1.36-5.64l-6.95-5.44C4.58 16.53 4 20.12 4 24c0 10.5 8.5 19 19 19 9.5 0 17.5-6.86 18.5-16.1.5-1.36.5-2.86.5-4.9 0-1.1-.04-1.74-.08-2.9z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M11.72 25.32c-.34-1-.54-2.08-.54-3.32 0-1.24.2-2.32.54-3.32l-6.95-5.44C3.64 14.98 3 19.4 3 24s.64 9.02 1.73 12.76l6.95-5.44c-.34-1-.54-2.08-.54-3.32z"
                    />
                    <path
                      fill="#4285F4"
                      d="M24 48c5.78 0 10.36-1.94 13.8-4.74l-6.55-5.44c-1.7 1.14-4.24 2.4-7.25 2.4-5.82 0-10.79-4.67-11.15-7.5H4c2.72 7.48 9.35 12.5 17 12.5 5.78 0 10.36-1.94 13.8-4.74l-6.55-5.44c-1.7 1.14-4.24 2.4-7.25 2.4-5.82 0-10.79-4.67-11.15-7.5H4c2.72 7.48 9.35 12.5 17 12.5z"
                    />
                  </svg>
                </span>
                Sign in with Google
              </button>
            </div>
            <div className="py-2">
              <button
                type="button"
                className="group relative w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="0"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="none"
                      d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                    ></path>
                    <circle cx="4" cy="4" r="2" stroke="none"></circle>
                  </svg>
                </span>
                Sign in with LinkedIn
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
