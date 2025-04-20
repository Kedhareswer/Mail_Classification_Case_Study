import Link from "next/link"
import { Github, Mail, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t bg-slate-50">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold mb-4">Spam Slayer</h3>
            <p className="text-slate-600 max-w-md">
              An interactive journey to master email classification using machine learning. Built for beginners and
              experienced developers alike.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-slate-600 hover:text-emerald-600">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/chapters" className="text-slate-600 hover:text-emerald-600">
                  All Chapters
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-slate-600 hover:text-emerald-600">
                  Resources
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <Link href="https://github.com" className="text-slate-600 hover:text-emerald-600">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="https://twitter.com" className="text-slate-600 hover:text-emerald-600">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="mailto:hello@example.com" className="text-slate-600 hover:text-emerald-600">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Spam Slayer. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
