"use client"

import { Shield, Zap, Globe, ArrowRight, TrendingUp, Users } from "lucide-react"

interface WelcomeScreenProps {
  onNavigate: (view: string) => void
}

export function WelcomeScreen({ onNavigate }: WelcomeScreenProps) {
  return (
    <div className="flex flex-col min-h-screen px-5 pb-8 pt-6 animate-fade-in">
      {/* Logo & Brand */}
      <div className="flex flex-col items-center mb-8">
        <div className="relative mb-4">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] flex items-center justify-center animate-pulse-glow">
            <span className="text-2xl font-black text-[var(--primary-foreground)] tracking-tighter" style={{ fontFamily: 'var(--font-montserrat), Montserrat, sans-serif' }}>P</span>
          </div>
        </div>
        <h1 className="text-3xl font-black tracking-tight text-foreground text-center" style={{ fontFamily: 'var(--font-montserrat), Montserrat, sans-serif' }}>
          PLET
        </h1>
        <p className="text-sm text-[var(--muted-foreground)] mt-1 text-center">
          Tu patrimonio, protegido y en crecimiento
        </p>
      </div>

      {/* Main CTA Cards */}
      <div className="flex flex-col gap-4 mb-8">
        <button
          onClick={() => onNavigate("onboarding")}
          className="glass rounded-2xl p-5 text-left transition-all duration-300 active:scale-[0.98] hover:border-[var(--primary)]/30 group"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--primary)]/20 to-[var(--accent)]/10 flex items-center justify-center shrink-0">
              <TrendingUp className="w-6 h-6 text-[var(--primary)]" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-foreground mb-1">Gestion Personal</h3>
              <p className="text-xs text-[var(--muted-foreground)] leading-relaxed">
                Controla tus finanzas, presupuestos y accede a liquidez al instante.
              </p>
            </div>
            <ArrowRight className="w-5 h-5 text-[var(--muted-foreground)] mt-1 group-hover:text-[var(--primary)] transition-colors" />
          </div>
        </button>

        <button
          onClick={() => onNavigate("onboarding")}
          className="glass rounded-2xl p-5 text-left transition-all duration-300 active:scale-[0.98] hover:border-[var(--primary)]/30 group"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--accent)]/20 to-[var(--primary)]/10 flex items-center justify-center shrink-0">
              <Users className="w-6 h-6 text-[var(--accent)]" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-foreground mb-1">{"Prestamos P2P"}</h3>
              <p className="text-xs text-[var(--muted-foreground)] leading-relaxed">
                Presta o pide prestado entre usuarios. PLET intermedia con solo 2% de fee.
              </p>
            </div>
            <ArrowRight className="w-5 h-5 text-[var(--muted-foreground)] mt-1 group-hover:text-[var(--primary)] transition-colors" />
          </div>
        </button>
      </div>

      {/* Security Features */}
      <div className="flex-1" />
      <div className="mb-6">
        <h4 className="text-xs font-semibold text-[var(--muted-foreground)] uppercase tracking-widest mb-4 text-center">
          Seguridad Institucional
        </h4>
        <div className="flex gap-3">
          {[
            { icon: Globe, label: "Global Escrow" },
            { icon: Zap, label: "Instant Settlement" },
            { icon: Shield, label: "Bank-Grade" },
          ].map((feat) => (
            <div key={feat.label} className="flex-1 glass rounded-xl p-3 flex flex-col items-center gap-2">
              <feat.icon className="w-5 h-5 text-[var(--primary)]" />
              <span className="text-[10px] text-[var(--muted-foreground)] text-center font-medium leading-tight">{feat.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Action */}
      <button
        onClick={() => onNavigate("onboarding")}
        className="w-full py-4 rounded-xl bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] text-[var(--primary-foreground)] font-bold text-base tracking-wide transition-all duration-300 active:scale-[0.98] glow-border"
      >
        Comenzar Ahora
      </button>
      <button
        onClick={() => onNavigate("dashboard")}
        className="w-full py-3 mt-3 text-sm text-[var(--muted-foreground)] font-medium"
      >
        Ya tengo cuenta
      </button>
    </div>
  )
}
