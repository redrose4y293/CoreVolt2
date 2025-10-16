import Image from "next/image";
import { LinkButton } from "@/components/Button";
import '@fortawesome/fontawesome-free/css/all.min.css';
export default function Home() {
  return (
    <div className="space-y-20 relative">
      {/* Global Background Effects */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--basalt)] via-[var(--basalt-light)] to-[var(--steel-gray)]"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[var(--lava)]/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[var(--grid-teal)]/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-[var(--solar-gold)]/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
        </div>
      </div>

      {/* Hero Section */}
      <section id="home" className="py-10 relative overflow-hidden">
        {/* Background Energy Flow Animation */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[var(--lava)] to-transparent animate-energy-flow"></div>
          <div className="absolute top-1/2 right-0 w-full h-1 bg-gradient-to-l from-transparent via-[var(--grid-teal)] to-transparent animate-energy-flow" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-1/4 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[var(--solar-gold)] to-transparent animate-energy-flow" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="grid gap-8 items-center md:grid-cols-2 relative z-10">
          <div className="space-y-5 animate-fade-in-left">
            <h1 className="text-4xl/tight md:text-5xl/tight font-semibold tracking-tight">
              Using Earth's Power to Power Earth.
            </h1>
            <p className="text-base md:text-lg text-foreground/80 max-w-[52ch]">
              CoreVolt™ is the world's first direct-lava geothermal power system. Zero emissions. Infinite energy.
            </p>
            <div className="flex flex-wrap gap-3">
              <LinkButton href="#technology" variant="primary" className="hover-lava-glow hover-scale transition-all duration-300">See the Technology</LinkButton>
              <LinkButton href="#get-involved" variant="secondary" className="hover-lift transition-all duration-300">Get Involved</LinkButton>
            </div>
            <div className="grid grid-cols-3 gap-6 pt-4">
              <div className="text-center p-4 rounded-lg bg-gradient-to-br from-[var(--lava)]/10 to-[var(--lava-glow)]/5 hover-lift transition-all duration-300">
                <div className="text-2xl font-semibold text-[var(--lava)]">700</div>
                <div className="text-xs text-foreground/70">Global Stations Planned</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-gradient-to-br from-[var(--grid-teal)]/10 to-[var(--grid-teal-glow)]/5 hover-lift transition-all duration-300">
                <div className="text-2xl font-semibold text-[var(--grid-teal)]">1B+</div>
                <div className="text-xs text-foreground/70">People Powered</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-gradient-to-br from-[var(--solar-gold)]/10 to-[var(--solar-gold-glow)]/5 hover-lift transition-all duration-300">
                <div className="text-2xl font-semibold text-[var(--solar-gold)]">3B</div>
                <div className="text-xs text-foreground/70">Tons CO₂ Offset/yr</div>
              </div>
            </div>
          </div>

          {/* HERO IMAGE: equal height and centered with text */}
          <div className="relative w-full rounded-xl overflow-hidden bg-black/5 animate-fade-in-right flex items-center justify-center">
            <div className="relative w-full h-64 md:h-96">
              <Image
                src="/earths-internal-power.png"
                alt="Earth internal power"
                fill
                style={{ objectFit: "contain" }}
                priority
              />
            </div>

            {/* Lava glow overlay (kept separate so it doesn't change sizing) */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[var(--lava)]/20 via-transparent to-transparent animate-lava-glow"></div>
          </div>
        </div>
      </section>
          {/* Client Visuals Section */}
      <section id="client-visuals" className="py-10 space-y-6">
        <div className="grid gap-1 md:grid-cols-2">
          <div className="relative w-full overflow-hidden rounded-xl bg-black/5">
            <Image src="/corevolt-magma-giant-windfarm.jpg" alt="CoreVolt magma giant among wind turbines" width={840} height={900} className="w-840  max-h-150 md:max-h-[28rem] object-contain" />
          </div>
          <div className="relative w-full overflow-hidden rounded-xl bg-black/5">
            <Image src="/corevolt-magma-giant-solar.jpg" alt="CoreVolt magma giant with solar panels at sunset" width={840} height={900} className="w-840 max-h-150 md:max-h-[28rem] object-contain" />
          </div>
        </div>
        <p className="text-center text-base md:text-lg font-medium text-foreground/90">The days of wasteful energy spending are over.</p>
      </section>
      {/* Problem Section */}
      <section id="problem" className="py-10 space-y-10 relative">
        {/* Section Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--magma-red)]/5 via-transparent to-[var(--magma-red)]/5 rounded-2xl"></div>
        <header className="animate-fade-in-up">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">The World Is Running Out of Energy</h1>
          <p className="mt-3 text-foreground/80 max-w-[70ch]">Demand is rising while baseload-capable, zero-emission power is scarce.</p>
        </header>

        <div className="grid gap-6 md:grid-cols-2 items-center"> {/* changed items-start -> items-center */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Key Challenges:</h2>
            <ul className="list-disc pl-5 text-foreground/80 space-y-2 animate-fade-in-left">
              <li className="hover:text-[var(--magma-red)] transition-colors duration-300">Global demand expected to double by 2050</li>
              <li className="hover:text-[var(--magma-red)] transition-colors duration-300">Solar & wind can't meet baseload requirements</li>
              <li className="hover:text-[var(--magma-red)] transition-colors duration-300">Intermittency, land use, and storage costs are skyrocketing</li>
              <li className="hover:text-[var(--magma-red)] transition-colors duration-300">35 billion tons of CO₂ released per year from energy</li>
            </ul>
          </div>

          {/* PROBLEM IMAGE — matched height + centered */}
          <div className="relative w-full rounded-xl overflow-hidden bg-black/5 animate-fade-in-right hover-lift transition-all duration-300 flex items-center justify-center">
            <div className="relative w-full h-64 md:h-96 max-w-[520px]">
              <Image
                src="/the-energy-race.png"
                alt="Energy challenge"
                fill
                style={{ objectFit: "contain" }}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--magma-red)]/20 via-transparent to-transparent pointer-events-none"></div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="py-10 space-y-10">
        <header>
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Introducing CoreVolt™</h1>
          <p className="mt-3 text-foreground/80 max-w-[70ch]">The only system capable of safely reaching and extracting direct lava heat to produce clean, continuous, grid-scale power.</p>
        </header>

        <div className="grid gap-8 md:grid-cols-2 items-start">
          <div className="space-y-2">
            <ul className="list-disc pl-5 text-foreground/80 space-y-1">
              <li>Closed-loop, zero-emission geothermal</li>
              <li>Powered by PyraPipe™ — modular, lava-grade pipe system</li>
              <li>Installable anywhere magma is near the crust (700+ global sites)</li>
              <li>Scalable, modular, decentralized: 10–20 acre plants per region</li>
            </ul>
          </div>
          <div className="relative w-full rounded-xl overflow-hidden bg-black/5">
            <div className="relative w-full h-64 md:h-72">
              <Image src="/global-power-zero-emissions.png" alt="Zero emissions global power" fill style={{ objectFit: "contain" }} />
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section id="technology" className="py-10 space-y-14">
        <header>
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">The Technology</h1>
          <p className="mt-3 text-foreground/80 max-w-[70ch]">PyraPipe™, CoreVolt Loop, and Smart Grid Integration.</p>
        </header>

        <div className="grid gap-8 md:grid-cols-2 items-start">
          <div className="space-y-3">
            <h2 className="text-xl md:text-2xl font-semibold">PyraPipe™ System</h2>
            <ul className="list-disc pl-5 text-foreground/80 space-y-1">
              <li>Modular design with replaceable lava-contact tips</li>
              <li>Aerogel insulation + ceramic shields + carbon-carbon core</li>
              <li>Operates up to 1400°C</li>
              <li>Withstands 25+ years in magma-adjacent zones</li>
            </ul>
          </div>
          <div className="relative w-full rounded-xl overflow-hidden bg-black/5">
            <div className="relative w-full h-64 md:h-72">
              <Image src="/pyrapipe-cross-section.png" alt="PyraPipe cross section" fill style={{ objectFit: "contain" }} />
            </div>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 items-start">
          <div className="relative w-full rounded-xl overflow-hidden bg-black/5">
            <div className="relative w-full h-64 md:h-72 p-3">
              <Image src="/corevolt-energy-diagram.png" alt="CoreVolt loop diagram" fill style={{ objectFit: "contain" }} />
            </div>
          </div>
          <div className="space-y-3">
            <h2 className="text-xl md:text-2xl font-semibold">CoreVolt Loop</h2>
            <ul className="list-disc pl-5 text-foreground/80 space-y-1">
              <li>Closed system using supercritical CO₂ or water</li>
              <li>24/7 baseload power delivery</li>
              <li>Built-in monitoring + auto-pressure balancing</li>
            </ul>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 items-start">
          <div className="relative w-full rounded-xl overflow-hidden bg-black/5">
            <div className="relative w-full h-64 md:h-72">
              <Image src="/efficiency-uptime-graph.jpeg" alt="Efficiency and uptime graph" fill style={{ objectFit: "contain" }} />
            </div>
          </div>
          <div className="relative w-full rounded-xl overflow-hidden bg-black/5">
            <div className="relative w-full h-64 md:h-72">
              <Image src="/co2-offset-graph.jpeg" alt="CO₂ offset graph" fill style={{ objectFit: "contain" }} />
            </div>
          </div>
        </div>
      </section>

      {/* ...rest of your sections unchanged, but follow the same pattern when adding images ... */}

      {/* Get Involved Section */}
      <section id="get-involved" className="py-10 space-y-10">
        <header>
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Get Involved</h1>
          <p className="mt-3 text-foreground/80 max-w-[70ch]">Governments, investors, and scientists: partner with CoreVolt™ to accelerate zero-emission baseload power.</p>
        </header>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-lg border border-foreground/15 p-5 space-y-3">
            <h2 className="text-lg font-semibold">For Governments</h2>
            <ul className="list-disc pl-5 text-foreground/80 text-sm space-y-1">
              <li>Policy partnerships</li>
              <li>Carbon credit programs</li>
            </ul>
            <div className="flex gap-2 pt-2">
              <LinkButton href="#contact" variant="secondary" size="sm">Schedule a Call</LinkButton>
            </div>
          </div>

          <div className="rounded-lg border border-foreground/15 p-5 space-y-3">
            <h2 className="text-lg font-semibold">For Investors</h2>
            <ul className="list-disc pl-5 text-foreground/80 text-sm space-y-1">
              <li>IP & platform licensing</li>
              <li>Equity funding opportunities</li>
            </ul>
            <div className="flex gap-2 pt-2">
              <LinkButton href="#contact" variant="secondary" size="sm">Download Pitch Deck</LinkButton>
              <LinkButton href="#contact" variant="primary" size="sm">Schedule</LinkButton>
            </div>
          </div>

          <div className="rounded-lg border border-foreground/15 p-5 space-y-3">
            <h2 className="text-lg font-semibold">For Scientists</h2>
            <ul className="list-disc pl-5 text-foreground/80 text-sm space-y-1">
              <li>Join our global PyraPipe™ testing consortium</li>
              <li>Materials & durability R&D</li>
            </ul>
            <div className="flex gap-2 pt-2">
              <LinkButton href="#contact" variant="primary" size="sm">Apply</LinkButton>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ, Contact, etc. (left unchanged) */}
    </div>
  );
}
