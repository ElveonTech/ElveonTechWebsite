"use client"

import Link from "next/link"
import Image from "next/image"
import { Linkedin, Twitter } from "lucide-react"
import { useTranslation } from "@/lib/i18n/translations"

const hrefs = {
  solutions: ["#", "#", "#", "#"],
  company: ["/#about", "mailto:contact@elveontech.nl"],
  resources: ["#", "#", "#", "#"],
  legal: ["#", "#", "#"],
}

export function Footer() {
  const { t } = useTranslation()
  const footerLinks = {
    solutions: t.footer.solutionsLinks.map((name, i) => ({ name, href: hrefs.solutions[i] })),
    company: t.footer.companyLinks.map((name, i) => ({ name, href: hrefs.company[i] })),
    resources: t.footer.resourcesLinks.map((name, i) => ({ name, href: hrefs.resources[i] })),
    legal: t.footer.legalLinks.map((name, i) => ({ name, href: hrefs.legal[i] })),
  }
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2.5">
              <span className="flex items-center justify-center h-9 w-9 rounded-md bg-white">
                <Image
                  src="/et-logo.png"
                  alt="Elveon Tech"
                  width={36}
                  height={36}
                  className="h-8 w-8 object-contain"
                />
              </span>
              <span className="font-semibold text-lg text-background">Elveon Tech</span>
            </Link>
            <p className="mt-4 text-background/60 text-sm leading-relaxed max-w-xs">
              {t.footer.tagline}
            </p>
            <div className="mt-6 flex gap-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-lg bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-lg bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="font-semibold text-background mb-4">{t.footer.solutions}</h3>
            <ul className="space-y-3">
              {footerLinks.solutions.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-sm text-background/60 hover:text-background transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-background mb-4">{t.footer.company}</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-sm text-background/60 hover:text-background transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-background mb-4">{t.footer.resources}</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-sm text-background/60 hover:text-background transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-background/60">
            &copy; {new Date().getFullYear()} Elveon Tech. {t.footer.rights}
          </p>
          <div className="flex gap-6">
            {footerLinks.legal.map((link) => (
              <Link 
                key={link.name}
                href={link.href} 
                className="text-sm text-background/60 hover:text-background transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
