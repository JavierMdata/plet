"use client"

export function Ticker() {
  const items = [
    { label: "IDX/VES", value: "36.50", change: "+0.12%" },
    { label: "BTC", value: "$67,842", change: "+2.4%" },
    { label: "ETH", value: "$3,521", change: "+1.8%" },
    { label: "PLET RATE", value: "1.0024", change: "+0.02%" },
    { label: "IDX RATE", value: "1.0024", change: "+0.01%" },
    { label: "P2P VOL", value: "$1.2M", change: "+5.3%" },
  ]

  return (
    <div className="w-full overflow-hidden bg-[var(--muted)] py-1.5 border-b border-[var(--glass-border)]">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="mx-4 flex items-center gap-2 text-xs">
            <span className="text-[var(--muted-foreground)] font-medium">{item.label}</span>
            <span className="text-foreground font-semibold font-mono">{item.value}</span>
            <span className={item.change.startsWith("+") ? "text-[var(--success)]" : "text-destructive"}>
              {item.change}
            </span>
          </span>
        ))}
      </div>
    </div>
  )
}
