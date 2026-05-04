import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import Scene from "./Scene"
import Overlay from "./Overlay"
import LoadingScreen from "./LoadingScreen"

export default function Gallery3D() {
  const isMobile = window.innerWidth < 768
  return (
    <div className="relative w-full h-screen overflow-hidden bg-background" style={{ touchAction: "none" }}>
      <Canvas
        camera={{ position: [0, 0, isMobile ? 8 : 5], fov: isMobile ? 60 : 50 }}
        gl={{ antialias: true, alpha: false }}
        style={{ width: "100%", height: "100%" }}
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
      <Overlay />
      <LoadingScreen />
    </div>
  )
}