"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { RefreshCw } from "lucide-react"

export default function GlobalError({
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
    <html lang="en">
      <body>
        <div className="min-h-screen flex flex-col items-center justify-center px-4 py-16 bg-background text-foreground">
          <div className="relative h-16 w-16 mb-6">
            <div className="absolute inset-0 rounded-full bg-white dark:bg-gray-800"></div>
            <div className="absolute inset-y-0 left-0 right-1/3 rounded-l-full bg-[#0b4ea2]"></div>
            <div className="absolute inset-y-0 left-2/3 right-0 rounded-r-full bg-[#ee1c25]"></div>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">Something went seriously wrong</h1>

          <p className="text-lg text-center mb-8 max-w-md">
            We apologize for the inconvenience. Please try refreshing the page.
          </p>

          <Button onClick={reset} className="bg-[#0b4ea2] hover:bg-[#093d81] text-white flex items-center gap-2">
            <RefreshCw className="h-4 w-4" />
            Try again
          </Button>
        </div>
      </body>
    </html>
  )
}

