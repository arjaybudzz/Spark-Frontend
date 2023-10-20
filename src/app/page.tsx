import LoginForm from "@/components/loginform/LoginForm";
import Link from "next/link";
import { Box, Typography } from "@mui/material";

export default function Home() {

  return (
    <main className="flex flex-col w-screen h-screen justify-center items-center bg-homepage-background bg-cover">
      <Box sx={{
        padding: 2
      }}>
        <Typography variant="h2" component="h1" fontWeight={500} color={"white"}>
          Welcome to Spark
        </Typography>
        <Typography variant="body1" component="p" color={"white"}>
          Spark is an open forum web application aimed at students, intructors, engineers and other practitioners in electrical industry.
        </Typography>
      </Box>
      <Box>
        <LoginForm />
        <p className="text-xl text-white mt-7">
            Don&apos;t have an account? Sign up <Link href="/register" className="text-blue-500">here.</Link>
        </p>
        <p className="text-xl text-white mt-7">
            Are you an admin? Click <Link href="/admin" className="text-blue-500">here.</Link>
        </p>
      </Box>
    </main>
  )
}
