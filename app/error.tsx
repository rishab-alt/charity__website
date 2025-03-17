"use client"

import { useEffect } from "react"
import Link from "next/link"
import { AlertTriangle, Home, ArrowLeft, RefreshCw } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 py-16">
      <div className="relative h-16 w-16 mb-6">
        <div className="absolute inset-0 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center">
          <AlertTriangle className="h-8 w-8 text-slovak-red dark:text-slovak-red-dark" />
        </div>
      </div>

      <h1 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">Something went wrong</h1>

      <p className="text-lg text-center mb-8 text-muted-foreground max-w-md">
        We apologize for the inconvenience. Our team has been notified and is working to fix the issue.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <Button variant="outline" onClick={reset} className="flex items-center gap-2">
          <RefreshCw className="h-4 w-4" />
          Try again
        </Button>

        <Button
          asChild
          className="bg-slovak-blue hover:bg-slovak-blue-dark dark:bg-slovak-blue-dark dark:hover:bg-slovak-blue text-white"
        >
          <Link href="/" className="flex items-center gap-2">
            <Home className="h-4 w-4" />
            Return home
          </Link>
        </Button>

        <Button variant="outline" asChild className="flex items-center gap-2">
          <Link href="/contact">
            <ArrowLeft className="h-4 w-4" />
            Contact support
          </Link>
        </Button>
      </div>

      <div className="mt-12 flex items-center gap-2">
        <div className="relative h-6 w-6">
          <div className="absolute inset-0 rounded-full bg-white dark:bg-gray-800"></div>
          <div className="absolute inset-y-0 left-0 right-1/3 rounded-l-full bg-slovak-blue dark:bg-slovak-blue-dark"></div>
          <div className="absolute inset-y-0 left-2/3 right-0 rounded-r-full bg-slovak-red dark:bg-slovak-red-dark"></div>
        </div>
        <span className="text-sm text-muted-foreground">SlovakAid</span>
      </div>
    </div>
  )
}

