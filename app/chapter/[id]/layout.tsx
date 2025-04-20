import type React from "react"
import { notFound } from "next/navigation"

export default function ChapterLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { id: string }
}) {
  // Validate chapter id
  const chapterId = Number.parseInt(params.id)
  if (isNaN(chapterId) || chapterId < 1 || chapterId > 8) {
    notFound()
  }

  return <>{children}</>
}
