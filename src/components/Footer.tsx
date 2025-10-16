import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-black/10 dark:border-white/10 mt-16">
      <div className="mx-auto max-w-[1240px] px-5 py-10 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        <div className="space-y-2">
          <div className="text-sm text-foreground/70">Contact</div>
          <div className="text-sm">hello@corevolt.energy</div>
          <div className="text-sm">(555) 555-CORE</div>
        </div>
        <div className="space-y-2">
          <div className="text-sm text-foreground/70">Company</div>
          <ul className="text-sm space-y-1">
            <li><a href="mailto:careers@corevolt.energy" className="hover:underline">Careers</a></li>
            <li><a href="mailto:press@corevolt.energy" className="hover:underline">Press Kit</a></li>
            <li><a href="mailto:media@corevolt.energy" className="hover:underline">Media Assets</a></li>
            <li><a href="/DOC2.pdf" target="_blank" className="hover:underline">CoreVolt Gloabal Policy</a></li>
          </ul>
        </div>
        <div className="space-y-2">
          <div className="text-sm text-foreground/70">Social</div>
          <ul className="text-sm space-y-1">
            <li><a href="#" className="hover:underline">LinkedIn</a></li>
            <li><a href="#" className="hover:underline">Twitter</a></li>
            <li><a href="#" className="hover:underline">YouTube</a></li>
          </ul>
        </div>
      </div>
      <div className="text-xs text-foreground/60 text-center pb-6">© {new Date().getFullYear()} CoreVolt Energy. All rights reserved.</div>
    </footer>
  );
}


