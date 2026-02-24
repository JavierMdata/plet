"use client"

import { useState } from "react"
import { ArrowUpRight, ArrowDownLeft, Users, TrendingUp, Clock, ChevronRight, Percent, ShieldCheck, AlertCircle } from "lucide-react"
import { Progress } from "@/components/ui/progress"

type Tab = "prestar" | "pedir"

const lendOpportunities = [
  { id: "PLT-5001", user: "Maria L.", amount: 1200, tir: 18.5, plazo: "6 meses", riesgo: "Bajo", score: 92, pagado: 0 },
  { id: "PLT-5002", user: "Juan P.", amount: 3500, tir: 22.1, plazo: "12 meses", riesgo: "Medio", score: 78, pagado: 0 },
  { id: "PLT-5003", user: "Ana R.", amount: 800, tir: 15.8, plazo: "3 meses", riesgo: "Bajo", score: 95, pagado: 0 },
  { id: "PLT-5004", user: "Carlos D.", amount: 2000, tir: 20.0, plazo: "9 meses", riesgo: "Medio", score: 82, pagado: 0 },
]

const myActiveLoans = [
  { id: "PLT-4830", user: "Juan P.", amount: 800, tir: 16.2, restante: 520, progreso: 35, cuota: 92.50, proxPago: "28 Feb" },
  { id: "PLT-4815", user: "Sofia M.", amount: 1500, tir: 19.8, restante: 450, progreso: 70, cuota: 175.00, proxPago: "3 Mar" },
]

export function InsuranceMarket() {
  const [activeTab, setActiveTab] = useState<Tab>("prestar")

  return (
    <div className="flex flex-col gap-5 px-5 pb-24 pt-4 animate-fade-in">
      {/* Header */}
      <div>
        <h1 className="text-xl font-black text-foreground" style={{ fontFamily: 'var(--font-montserrat), Montserrat, sans-serif' }}>
          Prestamos P2P
        </h1>
        <p className="text-xs text-[var(--muted-foreground)] mt-1">
          Presta o pide dinero. PLET intermedia con un 2% de fee.
        </p>
      </div>

      {/* Tab Switcher */}
      <div className="glass rounded-xl p-1 flex">
        <button
          onClick={() => setActiveTab("prestar")}
          className={`flex-1 py-2.5 rounded-lg flex items-center justify-center gap-2 text-sm font-bold transition-all ${
            activeTab === "prestar"
              ? "bg-[var(--primary)]/15 text-[var(--primary)]"
              : "text-[var(--muted-foreground)]"
          }`}
        >
          <ArrowUpRight className="w-4 h-4" />
          Prestar
        </button>
        <button
          onClick={() => setActiveTab("pedir")}
          className={`flex-1 py-2.5 rounded-lg flex items-center justify-center gap-2 text-sm font-bold transition-all ${
            activeTab === "pedir"
              ? "bg-[var(--accent)]/15 text-[var(--accent)]"
              : "text-[var(--muted-foreground)]"
          }`}
        >
          <ArrowDownLeft className="w-4 h-4" />
          Pedir Prestado
        </button>
      </div>

      {activeTab === "prestar" ? (
        <>
          {/* Resumen de mis prestamos activos como prestamista */}
          <div className="glass rounded-2xl p-4 glow-border">
            <div className="flex items-center gap-2 mb-3">
              <TrendingUp className="w-5 h-5 text-[var(--success)]" />
              <h3 className="text-sm font-bold text-foreground">Mis Prestamos Activos</h3>
            </div>
            <div className="flex gap-3 mb-4">
              <div className="flex-1 bg-[var(--success)]/5 rounded-lg p-3">
                <p className="text-[10px] text-[var(--muted-foreground)] font-semibold mb-0.5">Capital Prestado</p>
                <p className="text-base font-black text-[var(--success)] font-mono">$2,300</p>
              </div>
              <div className="flex-1 bg-[var(--primary)]/5 rounded-lg p-3">
                <p className="text-[10px] text-[var(--muted-foreground)] font-semibold mb-0.5">Ganancias</p>
                <p className="text-base font-black text-[var(--primary)] font-mono">+$187.40</p>
              </div>
            </div>

            {myActiveLoans.map((loan) => (
              <div key={loan.id} className="glass rounded-xl p-3.5 mb-2 last:mb-0">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-[var(--primary)]/10 flex items-center justify-center">
                      <span className="text-[10px] font-bold text-[var(--primary)]">{loan.user[0]}</span>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-foreground">{loan.user}</p>
                      <p className="text-[10px] text-[var(--muted-foreground)]">{loan.id}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xs font-bold text-foreground font-mono">${loan.amount}</p>
                    <p className="text-[10px] text-[var(--success)] font-semibold">TIR {loan.tir}%</p>
                  </div>
                </div>
                <Progress value={loan.progreso} className="h-1.5 bg-[var(--muted)] mb-1.5" />
                <div className="flex items-center justify-between">
                  <span className="text-[10px] text-[var(--muted-foreground)]">Restante: ${loan.restante}</span>
                  <span className="text-[10px] text-[var(--muted-foreground)]">Prox. pago: {loan.proxPago}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Oportunidades para prestar */}
          <div>
            <h3 className="text-sm font-bold text-foreground mb-3">Solicitudes Disponibles</h3>
            <div className="flex flex-col gap-2.5">
              {lendOpportunities.map((opp) => (
                <button key={opp.id} className="glass rounded-xl p-4 flex items-center gap-3 text-left transition-all active:scale-[0.99]">
                  <div className="w-10 h-10 rounded-full bg-[var(--primary)]/10 flex items-center justify-center shrink-0">
                    <span className="text-sm font-bold text-[var(--primary)]">{opp.user[0]}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="text-sm font-bold text-foreground">{opp.user}</span>
                      <span className={`text-[10px] px-1.5 py-0.5 rounded-md font-semibold ${
                        opp.riesgo === "Bajo" ? "bg-[var(--success)]/10 text-[var(--success)]" : "bg-[var(--warning)]/10 text-[var(--warning)]"
                      }`}>
                        {opp.riesgo}
                      </span>
                      <span className="text-[10px] text-[var(--muted-foreground)] font-mono">Score {opp.score}</span>
                    </div>
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-lg font-black text-foreground font-mono">${opp.amount.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] text-[var(--muted-foreground)] flex items-center gap-1">
                        <TrendingUp className="w-3 h-3" /> TIR {opp.tir}%
                      </span>
                      <span className="text-[10px] text-[var(--muted-foreground)] flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {opp.plazo}
                      </span>
                      <span className="text-[10px] text-[var(--muted-foreground)] flex items-center gap-1">
                        <Percent className="w-3 h-3" /> 2% fee
                      </span>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-[var(--muted-foreground)] shrink-0" />
                </button>
              ))}
            </div>
          </div>
        </>
      ) : (
        <>
          {/* Pedir Prestado */}
          <div className="glass rounded-2xl p-5 glow-border relative overflow-hidden">
            <div className="absolute top-0 right-0 w-28 h-28 bg-[var(--accent)]/5 rounded-full blur-3xl" />
            <div className="flex items-center gap-2 mb-3">
              <Users className="w-5 h-5 text-[var(--accent)]" />
              <h3 className="text-sm font-bold text-foreground">Solicitar Prestamo</h3>
            </div>
            <p className="text-xs text-[var(--muted-foreground)] leading-relaxed mb-5">
              Publica tu solicitud y otros usuarios de PLET financian tu prestamo. PLET se encarga de mediar y cobra solo un 2% de fee.
            </p>

            {/* Simulador rapido */}
            <div className="flex flex-col gap-4 mb-5">
              <div>
                <label className="text-[10px] text-[var(--muted-foreground)] font-semibold uppercase tracking-wider block mb-2">Monto que necesitas</label>
                <div className="glass rounded-xl px-4 py-3 flex items-center gap-2">
                  <span className="text-xl font-black text-foreground font-mono">$1,500</span>
                  <span className="text-xs text-[var(--muted-foreground)]">IDX</span>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex-1">
                  <label className="text-[10px] text-[var(--muted-foreground)] font-semibold uppercase tracking-wider block mb-2">Plazo</label>
                  <div className="glass rounded-xl px-4 py-3 text-center">
                    <span className="text-sm font-bold text-foreground">6 meses</span>
                  </div>
                </div>
                <div className="flex-1">
                  <label className="text-[10px] text-[var(--muted-foreground)] font-semibold uppercase tracking-wider block mb-2">Cuota est.</label>
                  <div className="glass rounded-xl px-4 py-3 text-center">
                    <span className="text-sm font-bold text-[var(--primary)] font-mono">$262.50</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Desglose */}
            <div className="bg-[var(--muted)]/30 rounded-xl p-3.5 mb-5">
              <p className="text-[10px] text-[var(--muted-foreground)] font-semibold uppercase tracking-wider mb-2">Desglose</p>
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-[var(--secondary-foreground)]">Monto solicitado</span>
                  <span className="text-xs font-bold text-foreground font-mono">$1,500.00</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-[var(--secondary-foreground)]">Interes estimado (18%)</span>
                  <span className="text-xs font-bold text-foreground font-mono">$75.00</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-[var(--primary)]">Fee PLET (2%)</span>
                  <span className="text-xs font-bold text-[var(--primary)] font-mono">$30.00</span>
                </div>
                <div className="border-t border-[var(--glass-border)] my-1" />
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-foreground">Total a pagar</span>
                  <span className="text-xs font-black text-foreground font-mono">$1,605.00</span>
                </div>
              </div>
            </div>

            <button className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] text-[var(--primary-foreground)] font-bold text-sm transition-all active:scale-[0.98]">
              Publicar Solicitud
            </button>
          </div>

          {/* Info de seguridad */}
          <div className="glass rounded-xl p-4 flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-[var(--success)] shrink-0 mt-0.5" />
            <div>
              <p className="text-xs font-bold text-foreground mb-1">PLET como intermediario</p>
              <p className="text-[10px] text-[var(--muted-foreground)] leading-relaxed">
                Todos los prestamos pasan por PLET. Los fondos se retienen en escrow hasta confirmar. Las cuotas se descuentan automaticamente de tu cuenta. El 2% de fee cubre mediacion, soporte y garantia del proceso.
              </p>
            </div>
          </div>

          {/* Requisitos */}
          <div className="glass rounded-xl p-4">
            <div className="flex items-center gap-2 mb-3">
              <AlertCircle className="w-4 h-4 text-[var(--warning)]" />
              <p className="text-xs font-bold text-foreground">Requisitos</p>
            </div>
            <div className="flex flex-col gap-2">
              {[
                "Cuenta verificada (KYC completo)",
                "Deposito minimo de $100 en cuenta",
                "Score PLET mayor a 60",
                "Sin prestamos morosos activos",
              ].map((req, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[var(--primary)]" />
                  <span className="text-[10px] text-[var(--secondary-foreground)]">{req}</span>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  )
}
