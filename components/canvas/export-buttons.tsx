"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Download, Camera } from "lucide-react"
import { useState } from "react"

interface ExportButtonsProps {
  canvasRef?: React.RefObject<HTMLDivElement>
  canvasSelector?: string
  mode: "2d" | "3d"
  onExport?: () => void
}

export default function ExportButtons({ canvasRef, canvasSelector, mode, onExport }: ExportButtonsProps) {
  const [isExporting, setIsExporting] = useState(false)

  // Export 2D canvas as image
  const export2DAsImage = async () => {
    if (!canvasRef?.current) return

    setIsExporting(true)
    try {
      // Use dynamic import for html2canvas
      const html2canvasModule = await import("html2canvas")
      const html2canvas = html2canvasModule.default

      const canvas = await html2canvas(canvasRef.current)

      // Create a download link
      const link = document.createElement("a")
      link.download = `furniture-design-2d-${Date.now()}.png`
      link.href = canvas.toDataURL("image/png")
      link.click()

      if (onExport) onExport()
    } catch (error) {
      console.error("Error exporting 2D design:", error)
    } finally {
      setIsExporting(false)
    }
  }

  // Export 3D scene as screenshot
  const export3DAsImage = () => {
    setIsExporting(true)
    try {
      // Find the canvas element using the provided selector or default to the first canvas
      const canvas = canvasSelector
        ? (document.querySelector(canvasSelector) as HTMLCanvasElement)
        : document.querySelector("canvas")

      if (!canvas) {
        console.error("Canvas element not found")
        return
      }

      // Make sure we're capturing the canvas at its full resolution
      // This is important for 3D scenes which might have different dimensions than the DOM element
      const width = canvas.width
      const height = canvas.height

      // Create a temporary canvas to handle potential WebGL transparency issues
      const tempCanvas = document.createElement("canvas")
      tempCanvas.width = width
      tempCanvas.height = height
      const tempContext = tempCanvas.getContext("2d")

      if (!tempContext) {
        console.error("Could not get 2D context for temporary canvas")
        return
      }

      // Fill with background color (usually black) to avoid transparency issues
      tempContext.fillStyle = "#000000"
      tempContext.fillRect(0, 0, width, height)

      // Draw the WebGL canvas onto the temporary canvas
      tempContext.drawImage(canvas, 0, 0, width, height)

      // Create a download link
      const link = document.createElement("a")
      link.download = `furniture-design-3d-${Date.now()}.png`
      link.href = tempCanvas.toDataURL("image/png")
      link.click()

      if (onExport) onExport()
    } catch (error) {
      console.error("Error exporting 3D screenshot:", error)
    } finally {
      setIsExporting(false)
    }
  }

  const handleExport = () => {
    if (mode === "2d") {
      export2DAsImage()
    } else {
      export3DAsImage()
    }
  }

  return (
    <div className="flex space-x-2">
      <Button variant="outline" size="sm" onClick={handleExport} disabled={isExporting} className="flex items-center">
        {mode === "2d" ? <Download className="mr-2 h-4 w-4" /> : <Camera className="mr-2 h-4 w-4" />}
        Export as Image
      </Button>
    </div>
  )
}
