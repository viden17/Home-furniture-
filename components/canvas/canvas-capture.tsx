"use client"

import { useThree } from "@react-three/fiber"
import { useEffect } from "react"

interface CanvasCaptureProps {
  onCapture: (dataUrl: string) => void
  trigger: boolean
  onComplete: () => void
}

/**
 * Component that captures the current state of a Three.js canvas
 * This should be added inside a Canvas component when you want to take a high-quality screenshot
 */
export default function CanvasCapture({ onCapture, trigger, onComplete }: CanvasCaptureProps) {
  const { gl, scene, camera } = useThree()

  useEffect(() => {
    if (trigger) {
      // Wait for the next frame to ensure the scene is fully rendered
      requestAnimationFrame(() => {
        // Render the scene
        gl.render(scene, camera)

        // Get the canvas element
        const canvas = gl.domElement

        try {
          // Convert the WebGL canvas to a data URL
          const dataUrl = canvas.toDataURL("image/png")

          // Pass the data URL to the callback
          onCapture(dataUrl)

          // Signal that capture is complete
          onComplete()
        } catch (error) {
          console.error("Error capturing canvas:", error)
          onComplete()
        }
      })
    }
  }, [trigger, gl, scene, camera, onCapture, onComplete])

  // This component doesn't render anything visible
  return null
}
