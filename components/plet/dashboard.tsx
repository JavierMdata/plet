"use client"

import { TrendingUp, TrendingDown, Wallet, ArrowDownLeft, ArrowUpRight, Landmark, Receipt, Percent, Clock } from "lucide-react"
import { Progress } from "@/components/ui/progress"

export function Dashboard() {
  return (
    <div className="flex flex-col gap-5 px-5 pb-24 pt-4 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-[var(--muted-foreground)]">Hola de nuevo,</p>
          <h1 className="text-xl font-black text-foreground" style={{ fontFamily: 'var(--font-montserrat), Montserrat, sans-serif' }}>
            Carlos M.
          </h1>
        </div>
        <div className="flex items-center gap-2">
          <div className="glass rounded-lg px-2.5 py-1 flex items-center gap-1.5">
            <Percent className="w-3.5 h-3.5 text-[var(--primary)]" />
            <span className="text-xs font-bold text-[var(--primary)]">2% fee</span>
          </div>
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] flex items-center justify-center">
            <span className="text-xs font-black text-[var(--primary-foreground)]">CM</span>
          </div>
        </div>
      </div>

      {/* Total Balance Card */}
      <div className="glass rounded-2xl p-5 glow-border relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--primary)]/5 rounded-full blur-3xl" />
        <p className="text-xs font-semibold text-[var(--muted-foreground)] uppercase tracking-widest mb-1">Patrimonio Total</p>
        <div className="flex items-baseline gap-2 mb-1">
          <span className="text-3xl font-black text-foreground font-mono" style={{ fontFamily: 'var(--font-montserrat), Montserrat, sans-serif' }}>
            $12,458.30
          </span>
          <span className="text-xs font-bold text-[var(--primary)]">IDX</span>
        </div>
        <p className="text-xs text-[var(--muted-foreground)] font-mono mb-4">= Bs. 454,726.95 VES</p>

        {/* Mini Stats */}
        <div className="flex gap-3">
          <div className="flex-1 bg-[var(--success)]/10 rounded-lg px-3 py-2">
            <div className="flex items-center gap-1 mb-0.5">
              <TrendingUp className="w-3 h-3 text-[var(--success)]" />
              <span className="text-[10px] text-[var(--success)] font-semibold">Ingresos</span>
            </div>
            <span className="text-sm font-bold text-[var(--success)] font-mono">+$3,200</span>
          </div>
          <div className="flex-1 bg-destructive/10 rounded-lg px-3 py-2">
            <div className="flex items-center gap-1 mb-0.5">
              <TrendingDown className="w-3 h-3 text-destructive" />
              <span className="text-[10px] text-destructive font-semibold">Gastos</span>
            </div>
            <span className="text-sm font-bold text-destructive font-mono">-$1,845</span>
          </div>
          <div className="flex-1 bg-[var(--primary)]/10 rounded-lg px-3 py-2">
            <div className="flex items-center gap-1 mb-0.5">
              <Wallet className="w-3 h-3 text-[var(--primary)]" />
              <span className="text-[10px] text-[var(--primary)] font-semibold">Ahorro</span>
            </div>
            <span className="text-sm font-bold text-[var(--primary)] font-mono">+$1,355</span>
          </div>
        </div>
      </div>

      {/* Deposito - Cuenta de Trabajo */}
      <div className="glass rounded-2xl p-5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-28 h-28 bg-[var(--accent)]/5 rounded-full blur-3xl" />
        <div className="flex items-center gap-2 mb-4">
          <Landmark className="w-5 h-5 text-[var(--primary)]" />
          <h3 className="text-sm font-bold text-foreground">Cuenta de Trabajo</h3>
        </div>
        <p className="text-xs text-[var(--muted-foreground)] leading-relaxed mb-4">
          Deposita tu dinero desde tu cuenta de trabajo. Desde aqui puedes prestar, recibir prestamos y pagar cuotas.
        </p>
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-[10px] text-[var(--muted-foreground)] font-semibold uppercase tracking-wider">Disponible</p>
            <p className="text-xl font-black text-foreground font-mono">$8,230.50</p>
          </div>
          <div className="text-right">
            <p className="text-[10px] text-[var(--muted-foreground)] font-semibold uppercase tracking-wider">Comprometido</p>
            <p className="text-xl font-black text-[var(--warning)] font-mono">$4,227.80</p>
          </div>
        </div>
        <div className="flex gap-3">
          <button className="flex-1 py-3 rounded-xl bg-[var(--success)]/10 border border-[var(--success)]/20 flex items-center justify-center gap-2 transition-all active:scale-[0.98]">
            <ArrowDownLeft className="w-4 h-4 text-[var(--success)]" />
            <span className="text-sm font-bold text-[var(--success)]">Depositar</span>
          </button>
          <button className="flex-1 py-3 rounded-xl bg-[var(--primary)]/10 border border-[var(--primary)]/20 flex items-center justify-center gap-2 transition-all active:scale-[0.98]">
            <ArrowUpRight className="w-4 h-4 text-[var(--primary)]" />
            <span className="text-sm font-bold text-[var(--primary)]">Retirar</span>
          </button>
        </div>
      </div>

      {/* Prestamo Activo */}
      <div>
        <h3 className="text-sm font-bold text-foreground mb-3">Mi Prestamo Activo</h3>
        <div className="glass rounded-xl p-4">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <Receipt className="w-4 h-4 text-[var(--primary)]" />
              <span className="text-xs font-semibold text-[var(--muted-foreground)]">Prestamo #PLT-4821</span>
            </div>
            <span className="text-[10px] glass rounded-md px-2 py-0.5 text-[var(--success)] font-semibold">Al dia</span>
          </div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-lg font-black text-foreground font-mono">$2,500.00</span>
            <span className="text-xs text-[var(--muted-foreground)]">72% pagado</span>
          </div>
          <Progress value={72} className="h-2 bg-[var(--muted)]" />
          <div className="flex items-center justify-between mt-3">
            <div>
              <span className="text-[10px] text-[var(--muted-foreground)] block">Cuota mensual</span>
              <span className="text-sm font-bold text-foreground font-mono">$312.50</span>
            </div>
            <div className="text-right">
              <span className="text-[10px] text-[var(--muted-foreground)] block">Restante</span>
              <span className="text-sm font-bold text-destructive font-mono">$700.00</span>
            </div>
            <div className="text-right">
              <span className="text-[10px] text-[var(--muted-foreground)] block">Fee PLET</span>
              <span className="text-sm font-bold text-[var(--primary)] font-mono">2%</span>
            </div>
          </div>
          <button className="w-full mt-4 py-3 rounded-xl bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] text-[var(--primary-foreground)] font-bold text-sm transition-all active:scale-[0.98]">
            Pagar Cuota - $312.50
          </button>
        </div>
      </div>

      {/* Resumen de actividad P2P */}
      <div>
        <h3 className="text-sm font-bold text-foreground mb-3">Actividad Reciente</h3>
        <div className="flex flex-col gap-2">
          {[
            { label: "Cuota pagada", detail: "Prestamo #PLT-4821", amount: "-$312.50", date: "Hoy, 09:15", type: "expense" as const },
            { label: "Rendimiento recibido", detail: "Prestamo a Maria L.", amount: "+$45.00", date: "Ayer, 18:00", type: "income" as const },
            { label: "Deposito", detail: "Cuenta de trabajo", amount: "+$1,600.00", date: "22 Feb", type: "income" as const },
            { label: "Prestaste a", detail: "Juan P. - #PLT-4830", amount: "-$800.00", date: "20 Feb", type: "expense" as const },
          ].map((item, i) => (
            <div key={i} className="glass rounded-xl px-3.5 py-3 flex items-center gap-3">
              <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${
                item.type === "income" ? "bg-[var(--success)]/10" : "bg-[var(--primary)]/10"
              }`}>
                {item.type === "income" ? (
                  <ArrowDownLeft className="w-4 h-4 text-[var(--success)]" />
                ) : (
                  <ArrowUpRight className="w-4 h-4 text-[var(--primary)]" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-foreground truncate">{item.label}</p>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3 h-3 text-[var(--muted-foreground)]" />
                  <p className="text-[10px] text-[var(--muted-foreground)]">{item.detail} - {item.date}</p>
                </div>
              </div>
              <span className={`text-sm font-bold font-mono shrink-0 ${
                item.type === "income" ? "text-[var(--success)]" : "text-foreground"
              }`}>
                {item.amount}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
