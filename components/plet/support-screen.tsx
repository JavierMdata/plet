"use client"

import { MessageCircle, Phone, Mail, FileText, ChevronRight, HelpCircle, Clock } from "lucide-react"

const faqs = [
  { q: "Como funciona el IDX?", a: "El IDX es un indice que protege tu dinero de la inflacion." },
  { q: "Como solicitar un prestamo P2P?", a: "Desde el Dashboard, en la seccion Area PLET." },
  { q: "Que niveles de cuenta existen?", a: "Bronce, Plata, Oro y Platino con diferentes limites." },
  { q: "Como verificar mi identidad?", a: "Completa los 3 pasos del onboarding con biometria." },
]

export function SupportScreen() {
  return (
    <div className="flex flex-col gap-5 px-5 pb-24 pt-4 animate-fade-in">
      <div>
        <h1 className="text-xl font-black text-foreground" style={{ fontFamily: 'var(--font-montserrat), Montserrat, sans-serif' }}>
          Soporte PLET
        </h1>
        <p className="text-xs text-[var(--muted-foreground)] mt-1">Estamos aqui para ayudarte 24/7.</p>
      </div>

      {/* Quick Actions */}
      <div className="flex gap-3">
        {[
          { icon: MessageCircle, label: "Chat en Vivo", color: "text-[var(--primary)]", bg: "bg-[var(--primary)]/10" },
          { icon: Phone, label: "Llamar", color: "text-[var(--success)]", bg: "bg-[var(--success)]/10" },
          { icon: Mail, label: "Email", color: "text-[var(--accent)]", bg: "bg-[var(--accent)]/10" },
        ].map((action) => (
          <button key={action.label} className="flex-1 glass rounded-xl p-4 flex flex-col items-center gap-2 transition-all active:scale-[0.98]">
            <div className={`w-10 h-10 rounded-lg ${action.bg} flex items-center justify-center`}>
              <action.icon className={`w-5 h-5 ${action.color}`} />
            </div>
            <span className="text-[10px] font-semibold text-foreground">{action.label}</span>
          </button>
        ))}
      </div>

      {/* Status */}
      <div className="glass rounded-xl p-4 flex items-center gap-3 glow-border">
        <Clock className="w-5 h-5 text-[var(--success)]" />
        <div className="flex-1">
          <p className="text-xs font-bold text-foreground">Tiempo de respuesta promedio</p>
          <p className="text-[10px] text-[var(--muted-foreground)]">Menos de 5 minutos</p>
        </div>
        <div className="w-2 h-2 rounded-full bg-[var(--success)] animate-pulse" />
      </div>

      {/* FAQs */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <HelpCircle className="w-4 h-4 text-[var(--primary)]" />
          <h3 className="text-sm font-bold text-foreground">Preguntas Frecuentes</h3>
        </div>
        <div className="flex flex-col gap-2">
          {faqs.map((faq, i) => (
            <button key={i} className="glass rounded-xl px-4 py-3 flex items-center gap-3 text-left transition-all active:scale-[0.99]">
              <FileText className="w-4 h-4 text-[var(--primary)] shrink-0" />
              <span className="text-xs font-semibold text-foreground flex-1">{faq.q}</span>
              <ChevronRight className="w-4 h-4 text-[var(--muted-foreground)] shrink-0" />
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
