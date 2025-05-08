"use client"

import { useState, useCallback } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Canvas2D from "@/components/canvas/canvas-2d"
import Canvas3D from "@/components/canvas/canvas-3d"
import CanvasSettings from "@/components/canvas/canvas-settings"
import FurniturePanel from "@/components/canvas/furniture-panel"
import ImprovedExportButtons from "@/components/canvas/improved-export-buttons"
import type { CanvasType, FurnitureItem } from "@/types/types"
import { v4 as uuidv4 } from "uuid"

export default function FurnitureCanvas() {
  // Canvas settings
  const [canvasType, setCanvasType] = useState<CanvasType>("square")
  const [canvasColor, setCanvasColor] = useState("#f8f5f1") // Default cream color
  const [backgroundImage, setBackgroundImage] = useState<string | null>(null)

  // View mode (2D or 3D)
  const [viewMode, setViewMode] = useState<"2d" | "3d">("2d")

  // Furniture items
  const [furniture, setFurniture] = useState<FurnitureItem[]>([])
  const [selectedFurniture, setSelectedFurniture] = useState<string | null>(null)

  // Export state
  const [exportSuccess, setExportSuccess] = useState(false)
  const [captureRequested, setCaptureRequested] = useState(false)

  // Handle canvas type change
  const handleCanvasTypeChange = (type: CanvasType) => {
    setCanvasType(type)
  }

  // Handle canvas color change
  const handleCanvasColorChange = (color: string) => {
    setCanvasColor(color)
  }

  // Handle background image change
  const handleBackgroundImageChange = (image: string | null) => {
    setBackgroundImage(image)
  }

  // Handle adding furniture
  const handleAddFurniture = (type: string) => {
    const newFurniture: FurnitureItem = {
      id: uuidv4(),
      type,
      position: { x: 100, y: 100, z: 0 },
      rotation: 0,
      color: "#334155", // Default furniture color
      width: type === "sofa" ? 200 : type === "bed" ? 250 : 100,
      height: type === "sofa" ? 100 : type === "bed" ? 180 : 100,
    }

    setFurniture([...furniture, newFurniture])
    setSelectedFurniture(newFurniture.id)
  }

  // Handle selecting furniture
  const handleSelectFurniture = (id: string | null) => {
    setSelectedFurniture(id)
  }

  // Handle updating furniture position
  const handleUpdatePosition = (id: string, x: number, y: number) => {
    setFurniture(furniture.map((item) => (item.id === id ? { ...item, position: { ...item.position, x, y } } : item)))
  }

  // Handle updating furniture color
  const handleUpdateColor = (id: string, color: string) => {
    setFurniture(furniture.map((item) => (item.id === id ? { ...item, color } : item)))
  }

  // Handle removing furniture
  const handleRemoveFurniture = (id: string) => {
    setFurniture(furniture.filter((item) => item.id !== id))
    if (selectedFurniture === id) {
      setSelectedFurniture(null)
    }
  }

  // Get the selected furniture item
  const getSelectedFurnitureItem = () => {
    return furniture.find((item) => item.id === selectedFurniture) || null
  }

  // Handle canvas capture
  const handleRequestCapture = useCallback(() => {
    setCaptureRequested(true)
  }, [])

  const handleCaptureComplete = useCallback(() => {
    setCaptureRequested(false)
  }, [])

  const handleCaptureData = useCallback(
    (dataUrl: string) => {
      // Create a download link
      const link = document.createElement("a")
      link.download = `furniture-design-${viewMode}-${Date.now()}.png`
      link.href = dataUrl
      link.click()

      // Show success message
      setExportSuccess(true)
      setTimeout(() => setExportSuccess(false), 3000)
    },
    [viewMode],
  )

  return (
    <section className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 font-playfair">Design Your Space</h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-navy-900/70 max-w-2xl mx-auto">
            Use our interactive canvas to visualize furniture in your space. Choose between 2D and 3D views, customize
            colors, and arrange furniture to create your perfect room.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <h3 className="text-lg font-medium mb-4 font-playfair">Canvas Settings</h3>
              <CanvasSettings
                canvasType={canvasType}
                canvasColor={canvasColor}
                onCanvasTypeChange={handleCanvasTypeChange}
                onCanvasColorChange={handleCanvasColorChange}
                onBackgroundImageChange={handleBackgroundImageChange}
              />
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <h3 className="text-lg font-medium mb-4 font-playfair">Furniture</h3>
              <FurniturePanel
                onAddFurniture={handleAddFurniture}
                selectedFurniture={getSelectedFurnitureItem()}
                onUpdateColor={handleUpdateColor}
                onRemoveFurniture={handleRemoveFurniture}
              />
            </div>
          </div>

          <div className="lg:col-span-3 bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            <Tabs defaultValue="2d" value={viewMode} onValueChange={(value) => setViewMode(value as "2d" | "3d")}>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-medium font-playfair">Canvas View</h3>
                <div className="flex items-center space-x-4">
                  <ImprovedExportButtons onRequestCapture={handleRequestCapture} mode={viewMode} />
                  <TabsList>
                    <TabsTrigger value="2d">2D View</TabsTrigger>
                    <TabsTrigger value="3d">3D View</TabsTrigger>
                  </TabsList>
                </div>
              </div>

              {exportSuccess && <div className="mb-4 text-green-600 text-sm">Design exported successfully!</div>}

              <TabsContent value="2d" className="h-[600px]">
                <Canvas2D
                  canvasType={canvasType}
                  canvasColor={canvasColor}
                  backgroundImage={backgroundImage}
                  furniture={furniture}
                  selectedFurniture={selectedFurniture}
                  onSelectFurniture={handleSelectFurniture}
                  onUpdatePosition={handleUpdatePosition}
                  captureRequested={captureRequested && viewMode === "2d"}
                  onCaptureData={handleCaptureData}
                  onCaptureComplete={handleCaptureComplete}
                />
              </TabsContent>

              <TabsContent value="3d" className="h-[600px]">
                <Canvas3D
                  canvasType={canvasType}
                  canvasColor={canvasColor}
                  backgroundImage={backgroundImage}
                  furniture={furniture}
                  selectedFurniture={selectedFurniture}
                  onSelectFurniture={handleSelectFurniture}
                  onUpdatePosition={handleUpdatePosition}
                  captureRequested={captureRequested && viewMode === "3d"}
                  onCaptureData={handleCaptureData}
                  onCaptureComplete={handleCaptureComplete}
                />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  )
}
