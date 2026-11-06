import type { Metadata } from "next";
import { Gochi_Hand, Patrick_Hand } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const crayon = Gochi_Hand({
  variable: "--font-crayon",
  weight: "400",
  subsets: ["latin"],
});

const crayonBody = Patrick_Hand({
  variable: "--font-crayon-body",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Noirit Ghosh Choudhuri | Portfolio",
  description: "Professional portfolio of Noirit Ghosh Choudhuri - Software Developer and Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${crayon.variable} ${crayonBody.variable}`}>
        <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true">
          {/* Wax on paper: a shaky hand, frayed edges, grain where wax skips the paper's bumps,
              streaks along the stroke, uneven pressure, and a dense rim where wax builds up. */}
          <filter id="crayon" x="-6%" y="-6%" width="112%" height="112%" colorInterpolationFilters="sRGB">
            <feTurbulence type="fractalNoise" baseFrequency=".025" numOctaves="2" seed="4" result="shake" />
            <feDisplacementMap in="SourceGraphic" in2="shake" scale="6" xChannelSelector="R" yChannelSelector="G" result="drawn" />
            <feTurbulence type="fractalNoise" baseFrequency=".55" numOctaves="2" seed="11" result="fray" />
            <feDisplacementMap in="drawn" in2="fray" scale="3" xChannelSelector="R" yChannelSelector="G" result="rough" />

            <feTurbulence type="fractalNoise" baseFrequency=".85" numOctaves="3" seed="9" />
            <feColorMatrix values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  9 0 0 0 -2.9" result="grain" />
            <feTurbulence type="fractalNoise" baseFrequency=".28" numOctaves="2" seed="21" />
            <feConvolveMatrix order="7" divisor="7" preserveAlpha="false" kernelMatrix="0 0 0 0 0 0 1  0 0 0 0 0 1 0  0 0 0 0 1 0 0  0 0 0 1 0 0 0  0 0 1 0 0 0 0  0 1 0 0 0 0 0  1 0 0 0 0 0 0" />
            <feColorMatrix values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  10 0 0 0 -2.7" result="streaks" />
            <feTurbulence type="fractalNoise" baseFrequency=".012" numOctaves="2" seed="31" />
            <feColorMatrix values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  2.4 0 0 0 .05" result="pressure" />

            <feComposite in="rough" in2="grain" operator="in" />
            <feComposite in2="streaks" operator="in" />
            <feComposite in2="pressure" operator="in" result="body" />

            <feMorphology in="rough" operator="erode" radius="1.4" result="core" />
            <feComposite in="rough" in2="core" operator="out" />
            <feComposite in2="grain" operator="in" result="rim" />
            <feMerge>
              <feMergeNode in="body" />
              <feMergeNode in="rim" />
            </feMerge>
          </filter>
          <filter id="crayon-fine" x="-3%" y="-3%" width="106%" height="106%" colorInterpolationFilters="sRGB">
            <feTurbulence type="fractalNoise" baseFrequency=".04" numOctaves="2" seed="7" result="shake" />
            <feDisplacementMap in="SourceGraphic" in2="shake" scale="1.2" xChannelSelector="R" yChannelSelector="G" result="drawn" />
            <feTurbulence type="fractalNoise" baseFrequency=".8" numOctaves="2" seed="13" result="fray" />
            <feDisplacementMap in="drawn" in2="fray" scale="2" xChannelSelector="R" yChannelSelector="G" result="rough" />
            <feTurbulence type="fractalNoise" baseFrequency="1" numOctaves="2" seed="3" />
            <feColorMatrix values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  8 0 0 0 -2.5" result="grain" />
            <feComposite in="rough" in2="grain" operator="in" />
          </filter>
        </svg>
        <Navbar />
        <main className="canvas">{children}</main>
      </body>
    </html>
  );
}
