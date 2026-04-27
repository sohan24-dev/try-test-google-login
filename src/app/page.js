import Login from "@/components/Login";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link className="text-3xl font-bold text-center" href={"/login"}>Login</Link>
      
    </div>
  );
}
