"use client"

import { useState } from "react"
import { ArrowLeft, ArrowRight, User, Building2, ScanFace, Lock, Upload, CheckCircle2, Shield } from "lucide-react"
import { Progress } from "@/components/ui/progress"

interface OnboardingProps {
  onComplete: () => void
  onBack: () => void
}

type UserType = "natural" | "juridica" | null

export function Onboarding({ onComplete, onBack }: OnboardingProps) {
  const [step, setStep] = useState(1)
  const [userType, setUserType] = useState<UserType>(null)
  const [formData, setFormData] = useState({
    nombre: "",
    identificacion: "",
    email: "",
    telefono: "",
  })
  const [biometricDone, setBiometricDone] = useState(false)
  const [docUploaded, setDocUploaded] = useState(false)

  const totalSteps = 3
  const progress = (step / totalSteps) * 100

  const handleNext = () => {
    if (step < totalSteps) setStep(step + 1)
    else onComplete()
  }

  const handlePrev = () => {
    if (step > 1) setStep(step - 1)
    else onBack()
  }

  const canProceed = () => {
    if (step === 1) return userType && formData.nombre && formData.identificacion && formData.email
    if (step === 2) return biometricDone
    if (step === 3) return docUploaded
    return false
  }

  return (
    <div className="flex flex-col min-h-screen px-5 pb-8 pt-4">
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <button onClick={handlePrev} className="w-10 h-10 rounded-xl glass flex items-center justify-center">
          <ArrowLeft className="w-5 h-5 text-foreground" />
        </button>
        <div className="flex-1">
          <p className="text-xs text-[var(--muted-foreground)] font-medium">
            Paso {step} de {totalSteps}
          </p>
          <Progress value={progress} className="h-1.5 mt-1.5 bg-[var(--muted)]" />
        </div>
      </div>

      {/* Step Content */}
      <div className="flex-1 animate-slide-up" key={step}>
        {step === 1 && (
          <StepOne
            userType={userType}
            setUserType={setUserType}
            formData={formData}
            setFormData={setFormData}
          />
        )}
        {step === 2 && (
          <StepTwo biometricDone={biometricDone} onCapture={() => setBiometricDone(true)} />
        )}
        {step === 3 && (
          <StepThree docUploaded={docUploaded} onUpload={() => setDocUploaded(true)} />
        )}
      </div>

      {/* Next Button */}
      <button
        onClick={handleNext}
        disabled={!canProceed()}
        className={`w-full py-4 rounded-xl font-bold text-base tracking-wide flex items-center justify-center gap-2 transition-all duration-300 ${
          canProceed()
            ? "bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] text-[var(--primary-foreground)] glow-border active:scale-[0.98]"
            : "bg-[var(--muted)] text-[var(--muted-foreground)] cursor-not-allowed"
        }`}
      >
        {step === totalSteps ? "Completar Registro" : "Continuar"}
        <ArrowRight className="w-5 h-5" />
      </button>
    </div>
  )
}

/* ===== STEP 1: Datos Base ===== */
function StepOne({
  userType,
  setUserType,
  formData,
  setFormData,
}: {
  userType: UserType
  setUserType: (t: UserType) => void
  formData: { nombre: string; identificacion: string; email: string; telefono: string }
  setFormData: (d: typeof formData) => void
}) {
  return (
    <div className="flex flex-col gap-5">
      <div>
        <h2 className="text-2xl font-black text-foreground mb-1" style={{ fontFamily: 'var(--font-montserrat), Montserrat, sans-serif' }}>
          Datos Personales
        </h2>
        <p className="text-sm text-[var(--muted-foreground)]">Selecciona tu tipo de cuenta y completa tu informacion.</p>
      </div>

      {/* User Type Selection */}
      <div className="flex gap-3">
        {[
          { id: "natural" as const, icon: User, label: "Persona Natural", sub: "Cedula" },
          { id: "juridica" as const, icon: Building2, label: "Persona Juridica", sub: "RIF" },
        ].map((type) => (
          <button
            key={type.id}
            onClick={() => setUserType(type.id)}
            className={`flex-1 glass rounded-xl p-4 flex flex-col items-center gap-2 transition-all duration-200 ${
              userType === type.id ? "border-[var(--primary)] bg-[var(--primary)]/5 glow-border" : ""
            }`}
          >
            <type.icon className={`w-7 h-7 ${userType === type.id ? "text-[var(--primary)]" : "text-[var(--muted-foreground)]"}`} />
            <span className={`text-xs font-semibold ${userType === type.id ? "text-[var(--primary)]" : "text-foreground"}`}>{type.label}</span>
            <span className="text-[10px] text-[var(--muted-foreground)]">{type.sub}</span>
          </button>
        ))}
      </div>

      {/* Form Fields */}
      <div className="flex flex-col gap-3">
        <div>
          <label className="text-xs font-semibold text-[var(--muted-foreground)] mb-1.5 block">
            {userType === "juridica" ? "Razon Social" : "Nombre Completo"}
          </label>
          <input
            type="text"
            value={formData.nombre}
            onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
            placeholder={userType === "juridica" ? "Mi Empresa C.A." : "Juan Perez"}
            className="w-full glass rounded-xl px-4 py-3.5 text-sm text-foreground placeholder:text-[var(--muted-foreground)]/50 focus:outline-none focus:border-[var(--primary)]/30 transition-all"
          />
        </div>
        <div>
          <label className="text-xs font-semibold text-[var(--muted-foreground)] mb-1.5 block">
            {userType === "juridica" ? "RIF" : "Cedula de Identidad"}
          </label>
          <input
            type="text"
            value={formData.identificacion}
            onChange={(e) => setFormData({ ...formData, identificacion: e.target.value })}
            placeholder={userType === "juridica" ? "J-12345678-9" : "V-12345678"}
            className="w-full glass rounded-xl px-4 py-3.5 text-sm text-foreground placeholder:text-[var(--muted-foreground)]/50 focus:outline-none focus:border-[var(--primary)]/30 transition-all"
          />
        </div>
        <div>
          <label className="text-xs font-semibold text-[var(--muted-foreground)] mb-1.5 block">Correo Electronico</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="correo@ejemplo.com"
            className="w-full glass rounded-xl px-4 py-3.5 text-sm text-foreground placeholder:text-[var(--muted-foreground)]/50 focus:outline-none focus:border-[var(--primary)]/30 transition-all"
          />
        </div>
        <div>
          <label className="text-xs font-semibold text-[var(--muted-foreground)] mb-1.5 block">Telefono</label>
          <input
            type="tel"
            value={formData.telefono}
            onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
            placeholder="+58 412 1234567"
            className="w-full glass rounded-xl px-4 py-3.5 text-sm text-foreground placeholder:text-[var(--muted-foreground)]/50 focus:outline-none focus:border-[var(--primary)]/30 transition-all"
          />
        </div>
      </div>
    </div>
  )
}

/* ===== STEP 2: Biometria ===== */
function StepTwo({ biometricDone, onCapture }: { biometricDone: boolean; onCapture: () => void }) {
  return (
    <div className="flex flex-col gap-6 items-center">
      <div className="text-center">
        <h2 className="text-2xl font-black text-foreground mb-1" style={{ fontFamily: 'var(--font-montserrat), Montserrat, sans-serif' }}>
          Verificacion Biometrica
        </h2>
        <p className="text-sm text-[var(--muted-foreground)]">Captura facial para verificar tu identidad de forma segura.</p>
      </div>

      {/* Face Scan Area */}
      <div className="relative w-56 h-56 my-4">
        <div className={`w-full h-full rounded-full border-2 border-dashed flex items-center justify-center transition-all duration-500 ${
          biometricDone ? "border-[var(--success)] bg-[var(--success)]/5" : "border-[var(--primary)]/40 bg-[var(--primary)]/5"
        }`}>
          {biometricDone ? (
            <CheckCircle2 className="w-20 h-20 text-[var(--success)] animate-slide-up" />
          ) : (
            <ScanFace className="w-20 h-20 text-[var(--primary)]/50" />
          )}
        </div>
        {!biometricDone && (
          <>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-0.5 bg-gradient-to-r from-transparent via-[var(--primary)] to-transparent" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-0.5 bg-gradient-to-r from-transparent via-[var(--primary)] to-transparent" />
          </>
        )}
      </div>

      {!biometricDone ? (
        <button
          onClick={onCapture}
          className="w-full max-w-xs py-4 rounded-xl glass text-[var(--primary)] font-bold text-sm border border-[var(--primary)]/20 transition-all active:scale-[0.98]"
        >
          Iniciar Captura Facial
        </button>
      ) : (
        <div className="glass rounded-xl p-4 flex items-center gap-3 max-w-xs w-full">
          <CheckCircle2 className="w-5 h-5 text-[var(--success)] shrink-0" />
          <span className="text-sm text-[var(--success)] font-medium">Verificacion completada</span>
        </div>
      )}

      {/* Security Note */}
      <div className="glass rounded-xl p-3 flex items-center gap-3 max-w-xs w-full">
        <Lock className="w-4 h-4 text-[var(--primary)] shrink-0" />
        <p className="text-[10px] text-[var(--muted-foreground)] leading-relaxed">
          Tus datos biometricos estan protegidos con encriptacion AES-256 de grado militar.
        </p>
      </div>
    </div>
  )
}

/* ===== STEP 3: Verificacion Financiera ===== */
function StepThree({ docUploaded, onUpload }: { docUploaded: boolean; onUpload: () => void }) {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="text-2xl font-black text-foreground mb-1" style={{ fontFamily: 'var(--font-montserrat), Montserrat, sans-serif' }}>
          Verificacion Financiera
        </h2>
        <p className="text-sm text-[var(--muted-foreground)]">Sube tu constancia de ingresos para desbloquear tu nivel.</p>
      </div>

      {/* Upload Area */}
      <button
        onClick={onUpload}
        className={`w-full rounded-2xl border-2 border-dashed p-8 flex flex-col items-center gap-3 transition-all duration-300 ${
          docUploaded
            ? "border-[var(--success)] bg-[var(--success)]/5"
            : "border-[var(--primary)]/20 bg-[var(--primary)]/5 active:border-[var(--primary)]/40"
        }`}
      >
        {docUploaded ? (
          <>
            <CheckCircle2 className="w-12 h-12 text-[var(--success)]" />
            <span className="text-sm font-semibold text-[var(--success)]">Documento cargado</span>
            <span className="text-xs text-[var(--muted-foreground)]">constancia_ingresos.pdf</span>
          </>
        ) : (
          <>
            <Upload className="w-12 h-12 text-[var(--primary)]/50" />
            <span className="text-sm font-semibold text-foreground">Subir Documento</span>
            <span className="text-xs text-[var(--muted-foreground)]">PDF, JPG o PNG (max 5MB)</span>
          </>
        )}
      </button>

      {/* Document Types */}
      <div className="flex flex-col gap-2">
        <p className="text-xs font-semibold text-[var(--muted-foreground)]">Documentos aceptados:</p>
        {["Constancia de trabajo", "Declaracion de ISLR", "Estado de cuenta bancario", "Referencia comercial"].map((doc) => (
          <div key={doc} className="flex items-center gap-2 glass rounded-lg px-3 py-2.5">
            <div className="w-1.5 h-1.5 rounded-full bg-[var(--primary)]" />
            <span className="text-xs text-[var(--secondary-foreground)]">{doc}</span>
          </div>
        ))}
      </div>

      {/* Level Preview */}
      <div className="glass rounded-xl p-4 glow-border">
        <div className="flex items-center gap-3 mb-3">
          <Shield className="w-5 h-5 text-[var(--primary)]" />
          <span className="text-sm font-bold text-foreground">Nivel Desbloqueado</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex-1">
            <div className="text-xs text-[var(--muted-foreground)] mb-1">Al completar, desbloqueas:</div>
            <div className="text-lg font-black text-[var(--primary)]" style={{ fontFamily: 'var(--font-montserrat), Montserrat, sans-serif' }}>
              Nivel Plata
            </div>
          </div>
          <div className="text-right">
            <div className="text-xs text-[var(--muted-foreground)]">Limite</div>
            <div className="text-sm font-bold text-foreground font-mono">$5,000 IDX</div>
          </div>
        </div>
      </div>
    </div>
  )
}
