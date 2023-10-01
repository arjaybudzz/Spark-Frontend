'use client';

import { loginUser } from "./api/login";
import LoginForm from "@/components/loginform/LoginForm";
import Link from "next/link";


export default function Home() {

  return (
    <main className="flex flex-row w-screen h-screen justify-center items-center bg-homepage-background bg-cover">
      <div className="flex flex-col flex-1 h-screen relative border-r-2 justify-center items-center p-6">
        <h1 className="text-white text-6xl self-start mb-6">
          Welcome to Spark
        </h1>
        <p className="text-2xl text-white">Spark is an open forum web application aimed at students, intructors, engineers and other practitioners in electrical industry.</p>
      </div>
      <div className="flex flex-col flex-1 justify-center items-center">
        <LoginForm sendData={loginUser}/>
        <p className="text-xl text-white mt-7">
            Don&apos;t have an account? Sign up <Link href="/register" className="text-blue-500">here.</Link>
        </p>
      </div>
    </main>
  )
}
