import { ReactNode } from "react"
import Providers from "../providers"

export default function RootLayout({
  children,
  params: { lang },
}: {
  children: ReactNode
  params: { lang: string }
}) {
  return (
    <html lang={lang}>
      <body suppressHydrationWarning={true}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
