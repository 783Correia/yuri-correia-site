import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "../proposal.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function ProposalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`proposal-root ${spaceGrotesk.variable}`}>
      {children}
    </div>
  );
}
