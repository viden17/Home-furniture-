"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Sofa, Bed, Square, Coffee, Trash2 } from "lucide-react"
import type { FurnitureItem } from "@/types/types"

interface FurniturePanelProps {
  onAddFurniture: (type: string) => void
  selectedFurniture: FurnitureItem | null
  onUpdateColor: (id: string, color: string) => void
  onRemoveFurniture: (id: string) => void
}

export default function FurniturePanel({
  onAddFurniture,
  selectedFurniture,
  onUpdateColor,
  onRemoveFurniture,
}: FurniturePanelProps) {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-2">
        <Button
          variant="outline"
          className="flex flex-col items-center justify-center p-4"
          onClick={() => onAddFurniture("sofa")}
        >
          <Sofa className="mb-2 h-8 w-8" />
          <span>Sofa</span>
        </Button>
        <Button
          variant="outline"
          className="flex flex-col items-center justify-center p-4"
          onClick={() => onAddFurniture("chair")}
        >
          <Square className="mb-2 h-8 w-8" />
          <span>Chair</span>
        </Button>
        <Button
          variant="outline"
          className="flex flex-col items-center justify-center p-4"
          onClick={() => onAddFurniture("table")}
        >
          <Coffee className="mb-2 h-8 w-8" />
          <span>Table</span>
        </Button>
        <Button
          variant="outline"
          className="flex flex-col items-center justify-center p-4"
          onClick={() => onAddFurniture("bed")}
        >
          <Bed className="mb-2 h-8 w-8" />
          <span>Bed</span>
        </Button>
      </div>

      {selectedFurniture && (
        <>
          <Separator />
          <div className="space-y-4">
            <h3 className="font-medium">Selected Furniture</h3>
            <p className="text-sm text-muted-foreground capitalize">{selectedFurniture.type}</p>

            <div>
              <Label htmlFor="furniture-color" className="mb-2 block">
                Color
              </Label>
              <div className="flex items-center space-x-2">
                <div className="h-8 w-8 rounded-md border" style={{ backgroundColor: selectedFurniture.color }} />
                <Input
                  id="furniture-color"
                  type="color"
                  value={selectedFurniture.color}
                  onChange={(e) => onUpdateColor(selectedFurniture.id, e.target.value)}
                  className="w-full"
                />
              </div>
            </div>

            <Button variant="destructive" className="w-full" onClick={() => onRemoveFurniture(selectedFurniture.id)}>
              <Trash2 className="mr-2 h-4 w-4" />
              Remove Furniture
            </Button>
          </div>
        </>
      )}
    </div>
  )
}
