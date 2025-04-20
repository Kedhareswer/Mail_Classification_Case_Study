import type React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface ChapterLayoutProps {
  children: React.ReactNode
  chapterNum: number
  title: string
  totalChapters?: number
}

export default function ChapterLayout({ children, chapterNum, title, totalChapters = 8 }: ChapterLayoutProps) {
  const prevChapter = chapterNum > 1 ? chapterNum - 1 : null
  const nextChapter = chapterNum < totalChapters ? chapterNum + 1 : null

  return (
    <div className="min-h-screen bg-white">
      {/* Chapter Header */}
      <div className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-4 mb-4">
            <div className="bg-emerald-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl">
              {chapterNum}
            </div>
            <div className="text-sm uppercase tracking-wider text-slate-400">Chapter {chapterNum}</div>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold">{title}</h1>
        </div>
      </div>

      {/* Chapter Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {children}

          {/* Chapter Navigation */}
          <div className="mt-16 pt-8 border-t flex justify-between">
            {prevChapter ? (
              <Link href={`/chapter/${prevChapter}`}>
                <Button variant="outline" className="flex items-center space-x-2">
                  <ChevronLeft className="h-4 w-4" />
                  <span>Previous Chapter</span>
                </Button>
              </Link>
            ) : (
              <div></div>
            )}

            {nextChapter ? (
              <Link href={`/chapter/${nextChapter}`}>
                <Button className="flex items-center space-x-2 bg-emerald-600 hover:bg-emerald-700">
                  <span>Next Chapter</span>
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </Link>
            ) : (
              <Link href="/">
                <Button className="flex items-center space-x-2 bg-emerald-600 hover:bg-emerald-700">
                  <span>Back to Home</span>
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
