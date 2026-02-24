"use client"

import { useState } from "react"
import { Shield, Heart, Car, Home, Plane, Briefcase, ChevronRight, Star, Users, Percent, CheckCircle2, Info } from "lucide-react"

type Category = "todos" | "salud" | "vehiculo" | "hogar" | "viaje" | "negocio"

const categories: { id: Category; icon: typeof Shield; label: string }[] = [
  { id: "todos", icon: Shield, label: "Todos" },
  { id: "salud", icon: Heart, label: "Salud" },
  { id: "vehiculo", icon: Car, label: "Vehiculo" },
  { id: "hogar", icon: Home, label: "Hogar" },
  { id: "viaje", icon: Plane, label: "Viaje" },
  { id: "negocio", icon: Briefcase, label: "Negocio" },
]

const seguros = [
  {
    id: 1,
    name: "Salud Integral Plus",
    provider: "Seguros Venezuela",
    category: "salud" as const,
    priceIdx: 28.50,
    period: "/mes",
    coverage: "$50,000",
    rating: 4.8,
    buyers: 1240,
    popular: true,
    features: ["Hospitalizacion", "Emergencias 24h", "Medicamentos"],
  },
  {
    id: 2,
    name: "Auto Proteccion Total",
    provider: "La Previsora",
    category: "vehiculo" as const,
    priceIdx: 45.00,
    period: "/mes",
    coverage: "$30,000",
    rating: 4.6,
    buyers: 890,
    popular: true,
    features: ["Todo riesgo", "Grua 24h", "Defensa legal"],
  },
  {
    id: 3,
    name: "Hogar Seguro",
    provider: "Mapfre",
    category: "hogar" as const,
    priceIdx: 18.00,
    period: "/mes",
    coverage: "$80,000",
    rating: 4.7,
    buyers: 560,
    popular: false,
    features: ["Incendio", "Robo", "Desastres naturales"],
  },
  {
    id: 4,
    name: "Viajero Global",
    provider: "Assist Card",
    category: "viaje" as const,
    priceIdx: 12.00,
    period: "/viaje",
    coverage: "$100,000",
    rating: 4.9,
    buyers: 2100,
    popular: true,
    features: ["Cobertura mundial", "Cancelacion", "Equipaje"],
  },
  {
    id: 5,
    name: "PYME Protegida",
    provider: "Seguros Caracas",
    category: "negocio" as const,
    priceIdx: 65.00,
    period: "/mes",
    coverage: "$200,000",
    rating: 4.5,
    buyers: 310,
    popular: false,
    features: ["Responsabilidad civil", "Inventario", "Empleados"],
  },
  {
    id: 6,
    name: "Salud Basica",
    provider: "Qualitas",
    category: "salud" as const,
    priceIdx: 15.00,
    period: "/mes",
    coverage: "$20,000",
    rating: 4.3,
    buyers: 3200,
    popular: false,
    features: ["Consultas", "Emergencias", "Examenes basicos"],
  },
]

const iconMap: Record<string, typeof Shield> = {
  salud: Heart,
  vehiculo: Car,
  hogar: Home,
  viaje: Plane,
  negocio: Briefcase,
}

const colorMap: Record<string, { bg: string; text: string }> = {
  salud: { bg: "bg-rose-50", text: "text-rose-500" },
  vehiculo: { bg: "bg-blue-50", text: "text-blue-500" },
  hogar: { bg: "bg-amber-50", text: "text-amber-500" },
  viaje: { bg: "bg-emerald-50", text: "text-emerald-500" },
  negocio: { bg: "bg-indigo-50", text: "text-indigo-500" },
}

export function SegurosMarket() {
  const [activeCategory, setActiveCategory] = useState<Category>("todos")
  const [selectedSeguro, setSelectedSeguro] = useState<number | null>(null)

  const filtered = activeCategory === "todos" ? seguros : seguros.filter((s) => s.category === activeCategory)
  const detail = seguros.find((s) => s.id === selectedSeguro)

  if (detail) {
    const Icon = iconMap[detail.category] || Shield
    const colors = colorMap[detail.category]
    const comisionPlet = +(detail.priceIdx * 0.05).toFixed(2)

    return (
      <div className="flex flex-col gap-5 px-5 pb-24 pt-4 animate-fade-in">
        {/* Back */}
        <button onClick={() => setSelectedSeguro(null)} className="flex items-center gap-2 text-sm text-[var(--primary)] font-semibold self-start">
          <ChevronRight className="w-4 h-4 rotate-180" />
          Volver
        </button>

        {/* Detail Card */}
        <div className="bg-card rounded-2xl p-5 border border-border shadow-sm">
          <div className="flex items-start gap-4 mb-5">
            <div className={`w-14 h-14 rounded-xl ${colors.bg} flex items-center justify-center shrink-0`}>
              <Icon className={`w-7 h-7 ${colors.text}`} />
            </div>
            <div className="flex-1">
              <h2 className="text-lg font-black text-foreground">{detail.name}</h2>
              <p className="text-xs text-[var(--muted-foreground)]">{detail.provider}</p>
              <div className="flex items-center gap-2 mt-1.5">
                <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                <span className="text-xs font-semibold text-foreground">{detail.rating}</span>
                <span className="text-[10px] text-[var(--muted-foreground)]">({detail.buyers.toLocaleString()} compradores)</span>
              </div>
            </div>
          </div>

          {/* Coverage */}
          <div className="flex gap-3 mb-5">
            <div className="flex-1 bg-[var(--secondary)] rounded-xl p-3.5 text-center">
              <p className="text-[10px] text-[var(--muted-foreground)] font-semibold mb-1">Cobertura</p>
              <p className="text-base font-black text-foreground font-mono">{detail.coverage}</p>
            </div>
            <div className="flex-1 bg-[var(--secondary)] rounded-xl p-3.5 text-center">
              <p className="text-[10px] text-[var(--muted-foreground)] font-semibold mb-1">Precio</p>
              <p className="text-base font-black text-[var(--primary)] font-mono">{detail.priceIdx} IDX</p>
              <p className="text-[10px] text-[var(--muted-foreground)]">{detail.period}</p>
            </div>
          </div>

          {/* Features */}
          <div className="mb-5">
            <p className="text-xs font-bold text-foreground mb-3">Incluye</p>
            <div className="flex flex-col gap-2">
              {detail.features.map((f, i) => (
                <div key={i} className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[var(--success)] shrink-0" />
                  <span className="text-sm text-[var(--secondary-foreground)]">{f}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing breakdown */}
          <div className="bg-[var(--secondary)] rounded-xl p-4 mb-5">
            <p className="text-xs font-bold text-foreground mb-2.5">Resumen de pago</p>
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-[var(--secondary-foreground)]">Prima {detail.period}</span>
                <span className="text-sm font-bold text-foreground font-mono">{detail.priceIdx} IDX</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-[var(--primary)] flex items-center gap-1.5">
                  <Percent className="w-3.5 h-3.5" />
                  Comision PLET (5%)
                </span>
                <span className="text-sm font-bold text-[var(--primary)] font-mono">{comisionPlet} IDX</span>
              </div>
              <div className="border-t border-border my-1" />
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-foreground">Total</span>
                <span className="text-sm font-black text-foreground font-mono">{(detail.priceIdx + comisionPlet).toFixed(2)} IDX</span>
              </div>
            </div>
          </div>

          {/* CTA */}
          <button className="w-full py-3.5 rounded-xl bg-[var(--primary)] text-[var(--primary-foreground)] font-bold text-sm transition-all active:scale-[0.98]">
            Contratar Seguro
          </button>
        </div>

        {/* Info */}
        <div className="bg-card rounded-xl p-4 flex items-start gap-3 border border-border">
          <Info className="w-5 h-5 text-[var(--primary)] shrink-0 mt-0.5" />
          <p className="text-xs text-[var(--muted-foreground)] leading-relaxed">
            Al contratar, PLET gestiona tu poliza directamente con la aseguradora. El 5% de comision cubre la gestion, soporte y reclamaciones desde la app.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-5 px-5 pb-24 pt-4 animate-fade-in">
      {/* Header */}
      <div>
        <h1 className="text-xl font-black text-foreground" style={{ fontFamily: 'var(--font-montserrat), Montserrat, sans-serif' }}>
          Seguros
        </h1>
        <p className="text-xs text-[var(--muted-foreground)] mt-1">
          Protege lo que importa. PLET gestiona tu poliza por ti.
        </p>
      </div>

      {/* Category Chips */}
      <div className="flex gap-2 overflow-x-auto pb-1 -mx-1 px-1 no-scrollbar">
        {categories.map((cat) => {
          const isActive = activeCategory === cat.id
          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all shrink-0 ${
                isActive
                  ? "bg-[var(--primary)] text-[var(--primary-foreground)]"
                  : "bg-card border border-border text-[var(--secondary-foreground)]"
              }`}
            >
              <cat.icon className="w-3.5 h-3.5" />
              {cat.label}
            </button>
          )
        })}
      </div>

      {/* Stats Banner */}
      <div className="bg-card rounded-xl p-4 flex items-center gap-4 border border-border">
        <div className="flex-1 text-center">
          <p className="text-lg font-black text-foreground">6</p>
          <p className="text-[10px] text-[var(--muted-foreground)] font-semibold">Planes</p>
        </div>
        <div className="w-px h-8 bg-border" />
        <div className="flex-1 text-center">
          <p className="text-lg font-black text-[var(--success)]">5%</p>
          <p className="text-[10px] text-[var(--muted-foreground)] font-semibold">Comision</p>
        </div>
        <div className="w-px h-8 bg-border" />
        <div className="flex-1 text-center">
          <p className="text-lg font-black text-[var(--primary)]">8.3K</p>
          <p className="text-[10px] text-[var(--muted-foreground)] font-semibold">Asegurados</p>
        </div>
      </div>

      {/* Insurance Cards */}
      <div className="flex flex-col gap-3">
        {filtered.map((seguro) => {
          const Icon = iconMap[seguro.category] || Shield
          const colors = colorMap[seguro.category]
          return (
            <button
              key={seguro.id}
              onClick={() => setSelectedSeguro(seguro.id)}
              className="bg-card rounded-xl p-4 flex items-center gap-3.5 text-left border border-border transition-all active:scale-[0.99] hover:border-[var(--primary)]/30"
            >
              <div className={`w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center shrink-0`}>
                <Icon className={`w-6 h-6 ${colors.text}`} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-0.5">
                  <span className="text-sm font-bold text-foreground truncate">{seguro.name}</span>
                  {seguro.popular && (
                    <span className="text-[9px] px-1.5 py-0.5 rounded-md bg-amber-50 text-amber-600 font-bold shrink-0">
                      Popular
                    </span>
                  )}
                </div>
                <p className="text-[10px] text-[var(--muted-foreground)] mb-1">{seguro.provider}</p>
                <div className="flex items-center gap-3">
                  <span className="text-xs font-black text-[var(--primary)] font-mono">{seguro.priceIdx} IDX{seguro.period}</span>
                  <span className="text-[10px] text-[var(--muted-foreground)] flex items-center gap-1">
                    <Star className="w-3 h-3 text-amber-400 fill-amber-400" /> {seguro.rating}
                  </span>
                  <span className="text-[10px] text-[var(--muted-foreground)] flex items-center gap-1">
                    <Users className="w-3 h-3" /> {seguro.buyers.toLocaleString()}
                  </span>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-[var(--muted-foreground)] shrink-0" />
            </button>
          )
        })}
      </div>
    </div>
  )
}
