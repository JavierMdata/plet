"use client"

import { useState, useCallback } from "react"
import { Ticker } from "@/components/plet/ticker"
import { WelcomeScreen } from "@/components/plet/welcome-screen"
import { Onboarding } from "@/components/plet/onboarding"
import { Dashboard } from "@/components/plet/dashboard"
import { FinanceTracker } from "@/components/plet/finance-tracker"
import { InsuranceMarket } from "@/components/plet/insurance-market"
import { SegurosMarket } from "@/components/plet/seguros-market"
import { SupportScreen } from "@/components/plet/support-screen"
import { BottomNav } from "@/components/plet/bottom-nav"

type View = "welcome" | "onboarding" | "dashboard" | "finance" | "lending" | "seguros" | "support"

const appViews = ["dashboard", "finance", "lending", "seguros", "support"]

export default function PletApp() {
  const [currentView, setCurrentView] = useState<View>("welcome")

  const navigate = useCallback((view: string) => {
    setCurrentView(view as View)
  }, [])

  const handleOnboardingComplete = useCallback(() => {
    setCurrentView("dashboard")
  }, [])

  const handleOnboardingBack = useCallback(() => {
    setCurrentView("welcome")
  }, [])

  const showNav = appViews.includes(currentView)
  const showTicker = showNav

  return (
    <div className="max-w-md mx-auto min-h-screen bg-background relative">
      {/* Subtle ambient glow */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-96 h-64 bg-[var(--primary)]/3 rounded-full blur-[150px] pointer-events-none" />
      
      {/* Ticker */}
      {showTicker && <Ticker />}

      {/* Views */}
      <main>
        {currentView === "welcome" && <WelcomeScreen onNavigate={navigate} />}
        {currentView === "onboarding" && (
          <Onboarding onComplete={handleOnboardingComplete} onBack={handleOnboardingBack} />
        )}
        {currentView === "dashboard" && <Dashboard />}
        {currentView === "finance" && <FinanceTracker />}
        {currentView === "lending" && <InsuranceMarket />}
        {currentView === "seguros" && <SegurosMarket />}
        {currentView === "support" && <SupportScreen />}
      </main>

      {/* Bottom Navigation */}
      {showNav && <BottomNav activeView={currentView} onNavigate={navigate} />}
    </div>
  )
}
