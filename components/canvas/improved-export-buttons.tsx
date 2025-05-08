"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Download, Camera } from "lucide-react"

interface ImprovedExportButtonsProps {
  onRequestCapture: () => void
  mode: "2d" | "3d"
  disabled?: boolean
}

export default function ImprovedExportButtons({
  onRequestCapture,
  mode,
  disabled = false,
}: ImprovedExportButtonsProps) {
  const [isExporting, setIsExporting] = useState(false)

  const handleExport = () => {
    setIsExporting(true)
    onRequestCapture()
    // The button will be re-enabled when the capture is complete
  }

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={handleExport}
      disabled={isExporting || disabled}
      className="flex items-center"
    >
      {mode === "2d" ? <Download className="mr-2 h-4 w-4" /> : <Camera className="mr-2 h-4 w-4" />}
      {isExporting ? "Exporting..." : "Export as Image"}
    </Button>
  )
}
