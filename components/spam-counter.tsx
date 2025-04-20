"use client"

import { useState, useEffect } from "react"

export default function SpamCounter() {
  const [count, setCount] = useState(107493221)

  useEffect(() => {
    // Generate a random increment between 5-20 every second
    const interval = setInterval(() => {
      setCount((prevCount) => {
        const increment = Math.floor(Math.random() * 16) + 5
        return prevCount + increment
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  // Format the number with commas
  const formattedCount = count.toLocaleString()

  return (
    <div className="bg-slate-800 rounded-lg border border-slate-700 p-6 inline-flex flex-col items-center">
      <h3 className="text-white text-xl mb-2">Spam Emails Sent Today</h3>
      <div className="font-mono text-4xl font-bold text-emerald-400">{formattedCount}</div>
      <p className="text-slate-400 text-sm mt-2">...and counting</p>
    </div>
  )
}
