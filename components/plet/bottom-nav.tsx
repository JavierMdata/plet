"use client"

import { Home, PieChart, Handshake, Shield, Headphones } from "lucide-react"

interface BottomNavProps {
  activeView: string
  onNavigate: (view: string) => void
}

const navItems = [
  { id: "dashboard", icon: Home, label: "Inicio" },
  { id: "finance", icon: PieChart, label: "Finanzas" },
  { id: "lending", icon: Handshake, label: "Prestamos" },
  { id: "seguros", icon: Shield, label: "Seguros" },
  { id: "support", icon: Headphones, label: "Soporte" },
]

export function BottomNav({ activeView, onNavigate }: BottomNavProps) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 glass-strong" role="navigation" aria-label="Navegacion principal">
      <div className="max-w-md mx-auto flex items-center justify-around py-1.5 pb-[max(0.5rem,env(safe-area-inset-bottom))]">
        {navItems.map((item) => {
          const isActive = activeView === item.id
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`flex flex-col items-center gap-0.5 px-2 py-1.5 rounded-xl transition-all duration-200 ${
                isActive 
                  ? "text-[var(--primary)]" 
                  : "text-[var(--muted-foreground)]"
              }`}
              aria-current={isActive ? "page" : undefined}
            >
              <div className={`relative ${isActive ? "animate-float" : ""}`}>
                <item.icon className="w-5 h-5" strokeWidth={isActive ? 2.5 : 1.5} />
                {isActive && (
                  <div className="absolute -inset-1.5 rounded-full bg-[var(--primary)]/8 -z-10" />
                )}
              </div>
              <span className={`text-[9px] font-semibold ${isActive ? "text-[var(--primary)]" : ""}`}>
                {item.label}
              </span>
            </button>
          )
        })}
      </div>
    </nav>
  )
}
