"use client"

import { useState, useEffect } from "react"

export function SubmissionCounter() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    // Get the initial count from localStorage
    const storedCount = Number.parseInt(localStorage.getItem("formSubmissions") || "0")
    setCount(storedCount)

    // Set up an event listener to update the count when localStorage changes
    const handleStorageChange = () => {
      const updatedCount = Number.parseInt(localStorage.getItem("formSubmissions") || "0")
      setCount(updatedCount)
    }

    // Listen for storage events (when localStorage is updated in another tab)
    window.addEventListener("storage", handleStorageChange)

    // Check for updates every second (for updates in the same tab)
    const interval = setInterval(() => {
      const currentCount = Number.parseInt(localStorage.getItem("formSubmissions") || "0")
      if (currentCount !== count) {
        setCount(currentCount)
      }
    }, 1000)

    return () => {
      window.removeEventListener("storage", handleStorageChange)
      clearInterval(interval)
    }
  }, [count])

  return (
    <div className="text-sm text-slate-500 flex items-center">
      <span className="mr-2">Total submissions:</span>
      <span className="font-mono font-semibold text-emerald-600">{count}</span>
    </div>
  )
}
