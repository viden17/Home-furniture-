"use client"
import { Canvas, useThree } from "@react-three/fiber"
import { OrbitControls, PerspectiveCamera } from "@react-three/drei"
import { useState, useRef, useEffect } from "react"
import type { FurnitureItem, CanvasType } from "@/types/types"
import * as THREE from "three"
import type { Mesh, Texture } from "three"
import CanvasCapture from "./canvas-capture"

interface Canvas3DProps {
  canvasType: CanvasType
  canvasColor: string
  backgroundImage: string | null
  furniture: FurnitureItem[]
  selectedFurniture: string | null
  onSelectFurniture: (id: string | null) => void
  onUpdatePosition: (id: string, x: number, y: number) => void
  captureRequested?: boolean
  onCaptureData?: (dataUrl: string) => void
  onCaptureComplete?: () => void
}

// Room component that renders the floor and walls
function Room({
  canvasType,
  canvasColor,
  backgroundImage,
}: {
  canvasType: CanvasType
  canvasColor: string
  backgroundImage: string | null
}) {
  const roomWidth = canvasType === "square" ? 10 : 13.33
  const roomDepth = 10
  const roomHeight = 5
  const [texture, setTexture] = useState<Texture | null>(null)

  useEffect(() => {
    if (backgroundImage) {
      const loader = new THREE.TextureLoader()
      loader.load(backgroundImage, (loadedTexture) => {
        setTexture(loadedTexture)
      })
    } else {
      setTexture(null)
    }
  }, [backgroundImage])

  return (
    <group>
      {/* Floor */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow userData={{ isFloor: true }}>
        <planeGeometry args={[roomWidth, roomDepth]} />
        <meshStandardMaterial color={canvasColor} map={texture || undefined} />
      </mesh>

      {/* Back Wall */}
      <mesh position={[0, roomHeight / 2, -roomDepth / 2]} receiveShadow>
        <planeGeometry args={[roomWidth, roomHeight]} />
        <meshStandardMaterial color={canvasColor} />
      </mesh>

      {/* Left Wall */}
      <mesh position={[-roomWidth / 2, roomHeight / 2, 0]} rotation={[0, Math.PI / 2, 0]} receiveShadow>
        <planeGeometry args={[roomDepth, roomHeight]} />
        <meshStandardMaterial color={canvasColor} />
      </mesh>

      {/* Right Wall */}
      <mesh position={[roomWidth / 2, roomHeight / 2, 0]} rotation={[0, -Math.PI / 2, 0]} receiveShadow>
        <planeGeometry args={[roomDepth, roomHeight]} />
        <meshStandardMaterial color={canvasColor} />
      </mesh>
    </group>
  )
}

// Furniture component that renders a 3D furniture item
function Furniture({
  item,
  isSelected,
  onClick,
  onMove,
}: {
  item: FurnitureItem
  isSelected: boolean
  onClick: () => void
  onMove: (x: number, z: number) => void
}) {
  // Convert 2D position to 3D position
  const x = item.position.x / 100 - 3
  const z = item.position.y / 100 - 3

  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState({ x: 0, z: 0 })
  const meshRef = useRef<Mesh>(null)
  const { camera, raycaster, mouse, scene } = useThree()

  // Handle drag start
  const handlePointerDown = (e: any) => {
    if (isSelected) {
      e.stopPropagation()
      setIsDragging(true)
      setDragStart({ x, z })
    }
  }

  // Handle drag end
  const handlePointerUp = () => {
    setIsDragging(false)
  }

  // Handle dragging
  useEffect(() => {
    if (isDragging && meshRef.current) {
      const handleMouseMove = () => {
        // Cast ray from mouse position
        raycaster.setFromCamera(mouse, camera)
        const intersects = raycaster.intersectObjects(scene.children, true)

        // Find floor intersection
        const floorIntersect = intersects.find((intersect) => intersect.object.userData.isFloor)

        if (floorIntersect) {
          const newX = floorIntersect.point.x
          const newZ = floorIntersect.point.z

          // Convert 3D coordinates back to 2D
          const new2DX = (newX + 3) * 100
          const new2DY = (newZ + 3) * 100

          // Update position
          onMove(new2DX, new2DY)
        }
      }

      // Add event listener for mouse move
      window.addEventListener("mousemove", handleMouseMove)

      // Clean up
      return () => {
        window.removeEventListener("mousemove", handleMouseMove)
      }
    }
  }, [isDragging, camera, mouse, raycaster, scene, onMove])

  // Get height based on furniture type
  const getHeight = () => {
    switch (item.type) {
      case "sofa":
        return 0.4
      case "chair":
        return 0.4
      case "table":
        return 0.25
      case "bed":
        return 0.25
      default:
        return 0.5
    }
  }

  // Create furniture mesh based on type
  const renderFurniture = () => {
    switch (item.type) {
      case "sofa":
        return (
          <group>
            {/* Base */}
            <mesh castShadow receiveShadow position={[0, 0.2, 0]}>
              <boxGeometry args={[2, 0.4, 1]} />
              <meshStandardMaterial color={item.color} />
            </mesh>
            {/* Back */}
            <mesh castShadow receiveShadow position={[0, 0.6, -0.4]}>
              <boxGeometry args={[2, 0.8, 0.2]} />
              <meshStandardMaterial color={item.color} />
            </mesh>
            {/* Arms */}
            <mesh castShadow receiveShadow position={[-0.9, 0.5, 0]}>
              <boxGeometry args={[0.2, 0.6, 0.8]} />
              <meshStandardMaterial color={item.color} />
            </mesh>
            <mesh castShadow receiveShadow position={[0.9, 0.5, 0]}>
              <boxGeometry args={[0.2, 0.6, 0.8]} />
              <meshStandardMaterial color={item.color} />
            </mesh>
          </group>
        )
      case "chair":
        return (
          <group>
            {/* Seat */}
            <mesh castShadow receiveShadow position={[0, 0.2, 0]}>
              <boxGeometry args={[0.6, 0.1, 0.6]} />
              <meshStandardMaterial color={item.color} />
            </mesh>
            {/* Back */}
            <mesh castShadow receiveShadow position={[0, 0.6, -0.25]}>
              <boxGeometry args={[0.6, 0.8, 0.1]} />
              <meshStandardMaterial color={item.color} />
            </mesh>
            {/* Legs */}
            <mesh castShadow receiveShadow position={[-0.25, 0.1, -0.25]}>
              <cylinderGeometry args={[0.05, 0.05, 0.2, 8]} />
              <meshStandardMaterial color="#8B4513" />
            </mesh>
            <mesh castShadow receiveShadow position={[0.25, 0.1, -0.25]}>
              <cylinderGeometry args={[0.05, 0.05, 0.2, 8]} />
              <meshStandardMaterial color="#8B4513" />
            </mesh>
            <mesh castShadow receiveShadow position={[-0.25, 0.1, 0.25]}>
              <cylinderGeometry args={[0.05, 0.05, 0.2, 8]} />
              <meshStandardMaterial color="#8B4513" />
            </mesh>
            <mesh castShadow receiveShadow position={[0.25, 0.1, 0.25]}>
              <cylinderGeometry args={[0.05, 0.05, 0.2, 8]} />
              <meshStandardMaterial color="#8B4513" />
            </mesh>
          </group>
        )
      case "table":
        return (
          <group>
            {/* Top */}
            <mesh castShadow receiveShadow position={[0, 0.25, 0]}>
              <boxGeometry args={[1.2, 0.05, 1.2]} />
              <meshStandardMaterial color={item.color} />
            </mesh>
            {/* Legs */}
            <mesh castShadow receiveShadow position={[-0.5, 0.125, -0.5]}>
              <cylinderGeometry args={[0.05, 0.05, 0.25, 8]} />
              <meshStandardMaterial color="#8B4513" />
            </mesh>
            <mesh castShadow receiveShadow position={[0.5, 0.125, -0.5]}>
              <cylinderGeometry args={[0.05, 0.05, 0.25, 8]} />
              <meshStandardMaterial color="#8B4513" />
            </mesh>
            <mesh castShadow receiveShadow position={[-0.5, 0.125, 0.5]}>
              <cylinderGeometry args={[0.05, 0.05, 0.25, 8]} />
              <meshStandardMaterial color="#8B4513" />
            </mesh>
            <mesh castShadow receiveShadow position={[0.5, 0.125, 0.5]}>
              <cylinderGeometry args={[0.05, 0.05, 0.25, 8]} />
              <meshStandardMaterial color="#8B4513" />
            </mesh>
          </group>
        )
      case "bed":
        return (
          <group>
            {/* Base */}
            <mesh castShadow receiveShadow position={[0, 0.15, 0]}>
              <boxGeometry args={[2, 0.3, 3]} />
              <meshStandardMaterial color="#8B4513" />
            </mesh>
            {/* Mattress */}
            <mesh castShadow receiveShadow position={[0, 0.35, 0]}>
              <boxGeometry args={[1.9, 0.2, 2.9]} />
              <meshStandardMaterial color="#FFFFFF" />
            </mesh>
            {/* Headboard */}
            <mesh castShadow receiveShadow position={[0, 0.7, -1.4]}>
              <boxGeometry args={[2, 1, 0.1]} />
              <meshStandardMaterial color={item.color} />
            </mesh>
            {/* Pillows */}
            <mesh castShadow receiveShadow position={[-0.6, 0.5, -1]}>
              <boxGeometry args={[0.6, 0.1, 0.4]} />
              <meshStandardMaterial color="#FFFFFF" />
            </mesh>
            <mesh castShadow receiveShadow position={[0.6, 0.5, -1]}>
              <boxGeometry args={[0.6, 0.1, 0.4]} />
              <meshStandardMaterial color="#FFFFFF" />
            </mesh>
            {/* Blanket */}
            <mesh castShadow receiveShadow position={[0, 0.5, 0.5]}>
              <boxGeometry args={[1.9, 0.05, 1.8]} />
              <meshStandardMaterial color={item.color} />
            </mesh>
          </group>
        )
      default:
        return (
          <mesh castShadow receiveShadow>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color={item.color} />
          </mesh>
        )
    }
  }

  return (
    <group
      position={[x, getHeight(), z]}
      rotation={[0, item.rotation * (Math.PI / 180), 0]}
      onClick={(e) => {
        e.stopPropagation()
        onClick()
      }}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp}
    >
      <mesh ref={meshRef}>{renderFurniture()}</mesh>

      {/* Selection indicator */}
      {isSelected && (
        <mesh position={[0, -0.1, 0]}>
          <ringGeometry args={[1.2, 1.3, 32]} />
          <meshBasicMaterial color="blue" transparent opacity={0.5} />
        </mesh>
      )}

      {/* Drag handles for selected furniture */}
      {isSelected && (
        <>
          <mesh position={[1.5, 0, 0]} onClick={(e) => e.stopPropagation()}>
            <sphereGeometry args={[0.1, 16, 16]} />
            <meshBasicMaterial color="red" />
          </mesh>
          <mesh position={[0, 0, 1.5]} onClick={(e) => e.stopPropagation()}>
            <sphereGeometry args={[0.1, 16, 16]} />
            <meshBasicMaterial color="green" />
          </mesh>
        </>
      )}
    </group>
  )
}

// Scene component that manages the 3D scene
function Scene({
  canvasType,
  canvasColor,
  backgroundImage,
  furniture,
  selectedFurniture,
  onSelectFurniture,
  onUpdatePosition,
  captureRequested,
  onCaptureData,
  onCaptureComplete,
}: Canvas3DProps) {
  // Handle background click to deselect
  const handleBackgroundClick = (e: any) => {
    e.stopPropagation()
    onSelectFurniture(null)
  }

  // Handle furniture movement
  const handleFurnitureMove = (id: string, x: number, z: number) => {
    onUpdatePosition(id, x, z)
  }

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 5, 10]} />
      <OrbitControls enableDamping dampingFactor={0.1} />

      <ambientLight intensity={0.5} />
      <directionalLight
        position={[10, 10, 5]}
        intensity={1}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />

      <Room canvasType={canvasType} canvasColor={canvasColor} backgroundImage={backgroundImage} />

      {/* Render furniture items */}
      {furniture.map((item) => (
        <Furniture
          key={item.id}
          item={item}
          isSelected={item.id === selectedFurniture}
          onClick={() => onSelectFurniture(item.id)}
          onMove={(x, z) => handleFurnitureMove(item.id, x, z)}
        />
      ))}

      {/* Invisible plane for background clicks */}
      <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} onClick={handleBackgroundClick}>
        <planeGeometry args={[100, 100]} />
        <meshBasicMaterial transparent opacity={0} />
      </mesh>

      {/* Canvas capture component */}
      {captureRequested && onCaptureData && onCaptureComplete && (
        <CanvasCapture onCapture={onCaptureData} trigger={captureRequested} onComplete={onCaptureComplete} />
      )}
    </>
  )
}

export default function Canvas3D(props: Canvas3DProps) {
  return (
    <div className="h-full w-full">
      <Canvas shadows>
        <Scene {...props} />
      </Canvas>
    </div>
  )
}
