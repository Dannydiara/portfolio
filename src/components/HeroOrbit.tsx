import StarIcon from "@/assets/icons/star.svg";
import { PropsWithChildren } from "react";

export const HeroOrbit = ({  
  children, size, rotation, duration 
}: PropsWithChildren<{ size: number, rotation: number, duration: number }>) => {
  return (
  <div>
    <div className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-start justify-start animate-spin`} 
    style={{ 
    animationDuration: `${duration}s`,
    transform: `rotate(${rotation}deg)`,
    width: `${size}px`,
    height: `${size}px`, 
    }}>
    <div className="inline-flex" style={{
    transform: `rotate(${rotation * -1}deg)`,
    }}>
      {children}
    </div>
    </div>
  </div>
  )
}
