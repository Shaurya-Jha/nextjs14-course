"use client"

import Header from "@/components/Header"
import { useState } from "react";

export default function Home() {

  const [loading, setLoading] = useState(false);

  // function to fetch api
  const fetchDataFromApi = async () => {
    try {
      setLoading(true);

      const response = await fetch("/api/users", {
        headers: {
          Accept: "application/json",
          method: "GET"
        }
      });

      if (response) {
        const data = await response.json();
        console.log(data);
      }
    } catch (error) {
      console.log(error);      
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-evenly">
      <Header />
      <h2>hello world</h2>
      <button className="p-2 bg-white text-black" onClick={fetchDataFromApi}>Call API</button>
    </main>
  );
}
