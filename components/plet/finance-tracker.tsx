"use client"

import { useState } from "react"
import { Wallet, TrendingUp, TrendingDown, ShoppingCart, Zap, Coffee, Home, Car, Wifi, RefreshCw } from "lucide-react"
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts"

const TASA_CAMBIO = 36.52

const pieData = [
  { name: "Alimentos", value: 35, color: "#0891B2" },
  { name: "Servicios", value: 25, color: "#06B6D4" },
  { name: "Transporte", value: 20, color: "#0E7490" },
  { name: "Otros", value: 20, color: "#22D3EE" },
]

const transactions = [
  { id: 1, name: "FreshMart", category: "Alimentos", icon: ShoppingCart, amountUsd: -45.80, date: "Hoy, 14:32", type: "expense" as const },
  { id: 2, name: "Deposito Nomina", category: "Ingreso", icon: TrendingUp, amountUsd: 1600.00, date: "Hoy, 09:00", type: "income" as const },
  { id: 3, name: "Netflix", category: "Servicios", icon: Wifi, amountUsd: -15.99, date: "Ayer, 18:45", type: "expense" as const },
  { id: 4, name: "Cafe Aroma", category: "Alimentos", icon: Coffee, amountUsd: -8.50, date: "Ayer, 11:20", type: "expense" as const },
  { id: 5, name: "Uber", category: "Transporte", icon: Car, amountUsd: -12.30, date: "22 Feb", type: "expense" as const },
  { id: 6, name: "Freelance", category: "Ingreso", icon: TrendingUp, amountUsd: 850.00, date: "21 Feb", type: "income" as const },
  { id: 7, name: "Alquiler", category: "Vivienda", icon: Home, amountUsd: -450.00, date: "20 Feb", type: "expense" as const },
  { id: 8, name: "Electricidad", category: "Servicios", icon: Zap, amountUsd: -65.00, date: "19 Feb", type: "expense" as const },
]

function formatMoney(usd: number, currency: "USD" | "BS") {
  const abs = Math.abs(usd)
  if (currency === "BS") {
    const bs = abs * TASA_CAMBIO
    return `Bs. ${bs.toLocaleString("es-VE", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
  }
  return `$${abs.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
}

export function FinanceTracker() {
  const [currency, setCurrency] = useState<"USD" | "BS">("USD")

  const toggleCurrency = () => setCurrency((prev) => (prev === "USD" ? "BS" : "USD"))

  const balanceUsd = 12458
  const incomeUsd = 3200
  const expenseUsd = 1845

  return (
    <div className="flex flex-col gap-5 px-5 pb-24 pt-4 animate-fade-in">
      {/* Header with currency toggle */}
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-black text-foreground" style={{ fontFamily: 'var(--font-montserrat), Montserrat, sans-serif' }}>
          Analisis Financiero
        </h1>
        <button
          onClick={toggleCurrency}
          className="glass rounded-xl px-3 py-2 flex items-center gap-2 transition-all active:scale-[0.97]"
          aria-label={`Cambiar a ${currency === "USD" ? "Bolivares" : "Dolares"}`}
        >
          <RefreshCw className="w-3.5 h-3.5 text-[var(--primary)]" />
          <span className="text-xs font-bold text-[var(--primary)]">{currency === "USD" ? "USD" : "Bs"}</span>
        </button>
      </div>

      {/* Tasa reference */}
      <div className="glass rounded-lg px-3 py-2 flex items-center justify-center gap-2">
        <span className="text-[10px] text-[var(--muted-foreground)]">Tasa:</span>
        <span className="text-xs font-bold text-foreground font-mono">1 USD = Bs. {TASA_CAMBIO}</span>
      </div>

      {/* Key Metrics */}
      <div className="flex gap-3">
        {[
          { label: "Balance", valueUsd: balanceUsd, icon: Wallet, color: "text-[var(--primary)]", bg: "bg-[var(--primary)]/10" },
          { label: "Ingresos", valueUsd: incomeUsd, icon: TrendingUp, color: "text-[var(--success)]", bg: "bg-[var(--success)]/10" },
          { label: "Gastos", valueUsd: expenseUsd, icon: TrendingDown, color: "text-destructive", bg: "bg-destructive/10" },
        ].map((metric) => (
          <div key={metric.label} className="flex-1 glass rounded-xl p-3">
            <div className={`w-8 h-8 rounded-lg ${metric.bg} flex items-center justify-center mb-2`}>
              <metric.icon className={`w-4 h-4 ${metric.color}`} />
            </div>
            <p className="text-[10px] text-[var(--muted-foreground)] font-semibold mb-0.5">{metric.label}</p>
            <p className={`text-sm font-black font-mono ${metric.color}`}>
              {formatMoney(metric.valueUsd, currency)}
            </p>
          </div>
        ))}
      </div>

      {/* Expense Distribution Chart */}
      <div className="glass rounded-2xl p-5">
        <h3 className="text-sm font-bold text-foreground mb-4">Distribucion de Gastos</h3>
        <div className="flex items-center gap-4">
          <div className="w-32 h-32">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={35}
                  outerRadius={55}
                  paddingAngle={3}
                  dataKey="value"
                  stroke="none"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="flex-1 flex flex-col gap-2.5">
            {pieData.map((item) => (
              <div key={item.name} className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: item.color }} />
                <span className="text-xs text-[var(--secondary-foreground)] flex-1">{item.name}</span>
                <span className="text-xs font-bold text-foreground font-mono">{item.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Transaction History */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-bold text-foreground">Historial Reciente</h3>
          <button className="text-xs text-[var(--primary)] font-semibold">Ver todo</button>
        </div>
        <div className="flex flex-col gap-2">
          {transactions.map((tx) => (
            <div key={tx.id} className="glass rounded-xl px-3.5 py-3 flex items-center gap-3">
              <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${
                tx.type === "income" ? "bg-[var(--success)]/10" : "bg-[var(--primary)]/10"
              }`}>
                <tx.icon className={`w-4 h-4 ${tx.type === "income" ? "text-[var(--success)]" : "text-[var(--primary)]"}`} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-foreground truncate">{tx.name}</p>
                <p className="text-[10px] text-[var(--muted-foreground)]">{tx.category} - {tx.date}</p>
              </div>
              <span className={`text-sm font-bold font-mono shrink-0 ${
                tx.type === "income" ? "text-[var(--success)]" : "text-foreground"
              }`}>
                {tx.amountUsd > 0 ? "+" : "-"}{formatMoney(tx.amountUsd, currency)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
