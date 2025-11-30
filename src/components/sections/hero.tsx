"use client"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { AnimatedSection } from "@/components/animated-section"

export default function HeroSection() {
  const scrollToRoadmap = () => {
    document.getElementById("como-funciona")?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative h-screen min-h-[700px] flex items-center justify-center text-center text-white">
      {/* 
        Reemplaza la URL en `src` con la ruta a tu video.
        Ejemplo: Si tu video se llama `hero-video.mp4` y está en la carpeta `public`,
        el `src` debería ser `"/hero-video.mp4"`.
      */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/mi-video.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/50" />
      <AnimatedSection className="relative z-10 px-4">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl font-headline">
          Viviendas que Crecen Contigo
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-lg sm:text-xl md:text-2xl text-neutral-200">
          Un sistema constructivo inteligente, accesible y escalable. Comienza con una pieza, construye un legado.
        </p>
        <div className="mt-10">
          <Button size="lg" onClick={scrollToRoadmap}>
            Diseña tu Módulo
          </Button>
        </div>
      </AnimatedSection>
    </section>
  )
}
