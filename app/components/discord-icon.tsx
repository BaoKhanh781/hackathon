import Image from 'next/image'

export function DiscordIcon({ className = "", size = 24 }: { className?: string, size?: number }) {
  return (
    <Image
      src="/discord-icon.png"
      alt="Discord"
      width={size}
      height={size}
      className={className}
    />
  )
}

