"use client"

import { authClient } from "@/lib/auth-client";

const Login = () => {
    const googleLogin=async()=>{
        const data = await authClient.signIn.social({
    provider: "google",
  });
    }
    return (
        <div>
            <button onClick={googleLogin} className="btn">login with google</button>
        </div>
    );
};

export default Login;