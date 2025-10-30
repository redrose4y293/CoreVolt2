import Image from "next/image";
import { LinkButton } from "@/components/Button";

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

          {/* keep layout intact: constrain only the image itself so grid stays the same */}
          <div className="relative w-full overflow-hidden rounded-xl bg-black/5 animate-fade-in-right">
            <Image
              src="/earths-internal-power.png"
              alt="Earth internal power"
              width={600}
              height={400}
              priority
              className="w-full h-auto max-w-md mx-auto animate-earth-pulse"
            />
            {/* Lava glow overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--lava)]/20 via-transparent to-transparent animate-lava-glow"></div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="problem" className="py-10 space-y-10 relative">
        {/* Section Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--magma-red)]/5 via-transparent to-[var(--magma-red)]/5 rounded-2xl"></div>
        <header className="animate-fade-in-up">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">The World Is Running Out of Energy</h1>
          <p className="mt-3 text-foreground/80 max-w-[70ch]">Demand is rising while baseload-capable, zero‑emission power is scarce.</p>
        </header>

        <div className="grid gap-6 md:grid-cols-2 items-start">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Key Challenges:</h2>
            <ul className="list-disc pl-5 text-foreground/80 space-y-2 animate-fade-in-left">
              <li className="hover:text-[var(--magma-red)] transition-colors duration-300">Global demand expected to double by 2050</li>
              <li className="hover:text-[var(--magma-red)] transition-colors duration-300">Solar & wind can't meet baseload requirements</li>
              <li className="hover:text-[var(--magma-red)] transition-colors duration-300">Intermittency, land use, and storage costs are skyrocketing</li>
              <li className="hover:text-[var(--magma-red)] transition-colors duration-300">35 billion tons of CO₂ released per year from energy</li>
            </ul>
          </div>

          <div className="relative w-full rounded-b-xl rounded-t-none overflow-hidden bg-black/5 animate-fade-in-right hover-lift transition-all duration-300 self-start md:-mt-40 -mt-18">
            <Image
              src="/the-energy-race.png"
              alt="Energy challenge"
              width={500}
              height={300}
              className="w-full h-auto max-w-md mx-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--magma-red)]/20 via-transparent to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Client Visuals Section */}
      <section id="client-visuals" className="py-6 space-y-6">
        <div className="grid gap-8 md:grid-cols-2 items-center bg-gradient-to-r from-[var(--basalt-light)]/50 to-[var(--steel-gray)]/30 rounded-2xl p-6 border border-[var(--lava)]/20">
          <div className="relative w-full overflow-hidden rounded-xl bg-black/5 hover-lift transition-all duration-300">
            <Image
              src="/corevolt-magma-giant-solar.jpg"
              alt="CoreVolt magma giant with solar panels at sunset"
              width={500}
              height={400}
              className="w-full h-auto max-w-md mx-auto object-contain"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--solar-gold)]/20 via-transparent to-transparent"></div>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-[var(--lava)]">Revolutionary Energy Solution</h3>
            <p className="text-foreground/80 text-lg leading-relaxed">
              CoreVolt™ technology represents the future of clean energy,
              harnessing Earth's internal power to provide sustainable,
              24/7 baseload electricity with zero emissions.
            </p>
          </div>
        </div>
        <p className="text-center text-base md:text-lg font-medium text-foreground/90">The days of wasteful energy spending are over.</p>
      </section>

      {/* Solution Section */}
      <section id="solution" className="py-10 space-y-10">
        <header>
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Introducing CoreVolt™</h1>
          <p className="mt-3 text-foreground/80 max-w-[70ch]">The only system capable of safely reaching and extracting direct lava heat to produce clean, continuous, grid‑scale power.</p>
        </header>

        <div className="grid gap-8 md:grid-cols-2 items-start">
          <div className="space-y-2">
            <ul className="list-disc pl-5 text-foreground/80 space-y-1">
              <li>Closed‑loop, zero‑emission geothermal</li>
              <li>Powered by PyraPipe™ — modular, lava‑grade pipe system</li>
              <li>Installable anywhere magma is near the crust (700+ global sites)</li>
              <li>Scalable, modular, decentralized: 10–20 acre plants per region</li>
            </ul>
          </div>

          <div className="relative w-full rounded-xl overflow-hidden bg-black/5">
            <Image
              src="/global-power-zero-emissions.png"
              alt="Zero emissions global power"
              width={500}
              height={300}
              className="w-full h-auto max-w-md mx-auto"
            />
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
            <Image
              src="/pyrapipe-cross-section.png"
              alt="PyraPipe cross section"
              width={500}
              height={300}
              className="w-full h-auto max-w-md mx-auto"
            />
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 items-start">
          <div className="relative w-full rounded-xl overflow-hidden bg-black/5">
            <Image
              src="/corevolt-energy-diagram.png"
              alt="CoreVolt loop diagram"
              width={500}
              height={300}
              className="w-full h-auto max-w-md mx-auto p-3"
            />
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
            <Image
              src="/geothermal-plant-layout.png"
              alt="Plant layout"
              width={500}
              height={300}
              className="w-full h-auto max-w-md mx-auto"
            />
          </div>

          <div className="relative w-full rounded-xl overflow-hidden bg-black/5">
            <Image
              src="/efficiency-uptime-graph.jpeg"
              alt="Efficiency and uptime graph"
              width={500}
              height={300}
              className="w-full h-lg max-w-l mx-auto"
            />
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 items-start">
          <div className="relative w-full rounded-xl overflow-hidden bg-black/5">
            <Image
              src="/co2-offset-graph.jpeg"
              alt="CO₂ offset graph"
              width={600}
              height={600}
              className="w-full h-lg max-w-l mx-auto"
            />
          </div>

          <div className="relative w-full rounded-xl overflow-hidden bg-black/5">
            <Image
              src="/avverage-project-build-time-graph.jpeg"
              alt="Average project build time"
              width={500}
              height={300}
              className="w-full h-auto max-w-md mx-auto"
            />
          </div>
        </div>
      </section>

      {/* Why CoreVolt Section */}
      <section id="why-corevolt" className="py-10 space-y-10">
        <header>
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Why We're Different</h1>
          <p className="mt-3 text-foreground/80 max-w-[70ch]">24/7 baseload power, zero emissions, and a tiny land footprint—built on direct lava access.</p>
        </header>

        {/* Comparison Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-foreground/20 rounded-lg">
            <thead>
              <tr className="bg-foreground/5">
                <th className="border border-foreground/20 p-4 text-left font-semibold">Feature</th>
                <th className="border border-foreground/20 p-4 text-center font-semibold">CoreVolt</th>
                <th className="border border-foreground/20 p-4 text-center font-semibold">Solar</th>
                <th className="border border-foreground/20 p-4 text-center font-semibold">Wind</th>
                <th className="border border-foreground/20 p-4 text-center font-semibold">Nuclear</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-foreground/20 p-4 font-medium">24/7 Power</td>
                <td className="border border-foreground/20 p-4 text-center text-green-600">✅</td>
                <td className="border border-foreground/20 p-4 text-center text-red-600">❌</td>
                <td className="border border-foreground/20 p-4 text-center text-red-600">❌</td>
                <td className="border border-foreground/20 p-4 text-center text-green-600">✅</td>
              </tr>
              <tr>
                <td className="border border-foreground/20 p-4 font-medium">Zero Emissions</td>
                <td className="border border-foreground/20 p-4 text-center text-green-600">✅</td>
                <td className="border border-foreground/20 p-4 text-center text-green-600">✅</td>
                <td className="border border-foreground/20 p-4 text-center text-green-600">✅</td>
                <td className="border border-foreground/20 p-4 text-center text-red-600">❌</td>
              </tr>
              <tr>
                <td className="border border-foreground/20 p-4 font-medium">Small Land Footprint</td>
                <td className="border border-foreground/20 p-4 text-center text-green-600">✅</td>
                <td className="border border-foreground/20 p-4 text-center text-red-600">❌</td>
                <td className="border border-foreground/20 p-4 text-center text-red-600">❌</td>
                <td className="border border-foreground/20 p-4 text-center text-red-600">❌</td>
              </tr>
              <tr>
                <td className="border border-foreground/20 p-4 font-medium">Direct Lava Access</td>
                <td className="border border-foreground/20 p-4 text-center text-green-600">✅</td>
                <td className="border border-foreground/20 p-4 text-center text-red-600">❌</td>
                <td className="border border-foreground/20 p-4 text-center text-red-600">❌</td>
                <td className="border border-foreground/20 p-4 text-center text-red-600">❌</td>
              </tr>
              <tr>
                <td className="border border-foreground/20 p-4 font-medium">Modular Deployment</td>
                <td className="border border-foreground/20 p-4 text-center text-green-600">✅</td>
                <td className="border border-foreground/20 p-4 text-center text-red-600">❌</td>
                <td className="border border-foreground/20 p-4 text-center text-red-600">❌</td>
                <td className="border border-foreground/20 p-4 text-center text-red-600">❌</td>
              </tr>
              <tr>
                <td className="border border-foreground/20 p-4 font-medium">Time to Build</td>
                <td className="border border-foreground/20 p-4 text-center text-green-600">✅ (12–18 mo)</td>
                <td className="border border-foreground/20 p-4 text-center text-green-600">✅</td>
                <td className="border border-foreground/20 p-4 text-center text-green-600">✅</td>
                <td className="border border-foreground/20 p-4 text-center text-red-600">❌ (10+ yrs)</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Cost Comparison */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-lg border border-foreground/15 p-4 text-center">
            <div className="text-2xl font-semibold text-green-600">$22–$32</div>
            <div className="text-sm text-foreground/70">CoreVolt cost per MWh</div>
          </div>
          <div className="rounded-lg border border-foreground/15 p-4 text-center">
            <div className="text-2xl font-semibold text-orange-600">$90–$110</div>
            <div className="text-sm text-foreground/70">Solar + battery</div>
          </div>
          <div className="rounded-lg border border-foreground/15 p-4 text-center">
            <div className="text-2xl font-semibold text-orange-600">$80–$100</div>
            <div className="text-sm text-foreground/70">Wind</div>
          </div>
          <div className="rounded-lg border border-foreground/15 p-4 text-center">
            <div className="text-2xl font-semibold text-red-600">$120–150+</div>
            <div className="text-sm text-foreground/70">Nuclear</div>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 items-start">
          <div className="relative w-full rounded-xl overflow-hidden bg-black/5">
            <Image src="/acres-per-mw-graph.jpeg" alt="Land use per MW" width={500} height={300} className="w-full h-auto max-w-md mx-auto" />
          </div>
          <div className="relative w-full rounded-xl overflow-hidden bg-black/5">
            <Image src="/avverage-project-build-time-graph.jpeg" alt="Average project build time" width={500} height={300} className="w-full h-auto max-w-md mx-auto" />
          </div>
        </div>
      </section>

      {/* Global Rollout Plan Section */}
      <section id="rollout" className="py-10 space-y-10">
        <header>
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Global Rollout Plan</h1>
          <p className="mt-3 text-foreground/80 max-w-[70ch]">Strategic deployment across 700+ global sites to supply up to 15% of global electricity demand.</p>
        </header>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-lg border border-foreground/15 p-6 space-y-4">
            <h2 className="text-xl font-semibold">Phase 1: 2025–2026</h2>
            <ul className="list-disc pl-5 text-foreground/80 space-y-2">
              <li>Build first station in Hawaii (Kīlauea-adjacent)</li>
              <li>Output: 20–50 MW</li>
            </ul>
          </div>

          <div className="rounded-lg border border-foreground/15 p-6 space-y-4">
            <h2 className="text-xl font-semibold">Phase 2: 2027–2030</h2>
            <ul className="list-disc pl-5 text-foreground/80 space-y-2">
              <li>300 Stations across:</li>
              <li>• Iceland • Kenya • Ethiopia</li>
              <li>• Indonesia • Alaska • Chile • Japan</li>
            </ul>
          </div>

          <div className="rounded-lg border border-foreground/15 p-6 space-y-4">
            <h2 className="text-xl font-semibold">Phase 3: 2030–2040</h2>
            <ul className="list-disc pl-5 text-foreground/80 space-y-2">
              <li>700 Stations globally</li>
              <li>Supply up to 15% of global electricity demand</li>
            </ul>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-lg border border-foreground/15 p-6">
            <h3 className="text-lg font-semibold mb-3">Capacity Planning</h3>
            <ul className="list-disc pl-5 text-foreground/80 space-y-1">
              <li>Each station: 100–200 MW</li>
              <li>Total output: 70–140 GW (24/7)</li>
              <li>Global CO₂ offset: 3–5 billion tons/year</li>
            </ul>
          </div>
          <div className="rounded-lg border border-foreground/15 p-6">
            <h3 className="text-lg font-semibold mb-3">Global Impact</h3>
            <ul className="list-disc pl-5 text-foreground/80 space-y-1">
              <li>700+ global sites identified</li>
              <li>Modular, decentralized deployment</li>
              <li>Safe for urban-adjacent installation</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section id="impact" className="py-10 space-y-10">
        <header>
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Environmental Impact</h1>
          <p className="mt-3 text-foreground/80 max-w-[70ch]">Zero water contamination. No fracking. No radiation. No mining tailings.</p>
        </header>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="rounded-lg border border-foreground/15 p-4">
            <div className="text-2xl font-semibold">600M cars</div>
            <div className="text-xs text-foreground/70">Removed from the road (equivalent)</div>
          </div>
          <div className="rounded-lg border border-foreground/15 p-4">
            <div className="text-2xl font-semibold">50B trees</div>
            <div className="text-xs text-foreground/70">Planting equivalent</div>
          </div>
          <div className="rounded-lg border border-foreground/15 p-4">
            <div className="text-2xl font-semibold">0 emissions</div>
            <div className="text-xs text-foreground/70">Closed‑loop system</div>
          </div>
        </div>

        <div className="relative w-full rounded-xl overflow-hidden bg-black/5">
          <Image src="/a-new-era-of-energy.png" alt="Environmental impact" width={700} height={250} className="w-full h-auto max-w-md mx-auto" />
        </div>
      </section>

      {/* Get Involved Section */}
      <section id="get-involved" className="py-10 space-y-10">
        <header>
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Get Involved</h1>
          <p className="mt-3 text-foreground/80 max-w-[70ch]">Governments, investors, and scientists: partner with CoreVolt™ to accelerate zero‑emission baseload power.</p>
        </header>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-lg border border-foreground/15 p-5 space-y-3">
            <h2 className="text-lg font-semibold">For Governments</h2>
            <ul className="list-disc pl-5 text-foreground/80 text-sm space-y-1">
              <li>Policy partnerships</li>
              <li>Carbon credit programs</li>
            </ul>
            <div className="flex gap-2 pt-2">
              <LinkButton href="/contact" variant="secondary" size="sm">Schedule a Call</LinkButton>
            </div>
          </div>

          <div className="rounded-lg border border-foreground/15 p-5 space-y-3">
            <h2 className="text-lg font-semibold">For Investors</h2>
            <ul className="list-disc pl-5 text-foreground/80 text-sm space-y-1">
              <li>IP & platform licensing</li>
              <li>Equity funding opportunities</li>
            </ul>
            <div className="flex gap-2 pt-2">
              <LinkButton href="/contact" variant="primary" size="sm">Schedule</LinkButton>
            </div>
          </div>

          <div className="rounded-lg border border-foreground/15 p-5 space-y-3">
            <h2 className="text-lg font-semibold">For Scientists</h2>
            <ul className="list-disc pl-5 text-foreground/80 text-sm space-y-1">
              <li>Join our global PyraPipe™ testing consortium</li>
              <li>Materials & durability R&D</li>
            </ul>
            <div className="flex gap-2 pt-2">
              <LinkButton href="/contact" variant="primary" size="sm">Apply</LinkButton>
            </div>
          </div>
        </div>

        {/* Image Card Section */}
        <div className="grid gap-8 md:grid-cols-2 items-center bg-gradient-to-r from-[var(--basalt-light)]/50 to-[var(--steel-gray)]/30 rounded-2xl p-6 border border-[var(--lava)]/20">
          <div className="relative w-full overflow-hidden rounded-xl bg-black/5 hover-lift transition-all duration-300">
            <Image
              src="/corevolt-magma-giant-windfarm.jpg"
              alt="CoreVolt magma giant among wind turbines"
              width={840}
              height={900}
              className="w-full h-auto max-w-md mx-auto object-contain"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--grid-teal)]/20 via-transparent to-transparent"></div>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-[var(--lava)]">Powering the Future</h3>
            <p className="text-foreground/80 text-lg leading-relaxed">
              CoreVolt™ technology stands tall among traditional renewable energy sources,
              providing 24/7 baseload power with zero emissions and minimal land footprint.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-10 space-y-10">
        <header>
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Frequently Asked Questions</h1>
          <p className="mt-3 text-foreground/80 max-w-[70ch]">Common questions about CoreVolt™ technology, safety, and deployment.</p>
        </header>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-6">
            <div className="rounded-lg border border-foreground/15 p-6">
              <h3 className="text-lg font-semibold mb-3">How deep do you drill?</h3>
              <p className="text-foreground/80">3–8 miles, depending on crust thickness. Our PyraPipe™ system is designed to reach magma chambers safely and efficiently.</p>
            </div>

            <div className="rounded-lg border border-foreground/15 p-6">
              <h3 className="text-lg font-semibold mb-3">Is this safe near population centers?</h3>
              <p className="text-foreground/80">Yes. Fully sealed, no emissions, seismic-buffered. Our closed-loop system ensures zero environmental impact and maximum safety.</p>
            </div>

            <div className="rounded-lg border border-foreground/15 p-6">
              <h3 className="text-lg font-semibold mb-3">What powers the turbine?</h3>
              <p className="text-foreground/80">Superheated fluid (CO₂ or water) converted to mechanical energy. The CoreVolt Loop uses supercritical fluids for maximum efficiency.</p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-lg border border-foreground/15 p-6">
              <h3 className="text-lg font-semibold mb-3">Is CoreVolt available for licensing?</h3>
              <p className="text-foreground/80">Yes. We offer national and regional rights for PyraPipe™ technology and CoreVolt systems worldwide.</p>
            </div>

            <div className="rounded-lg border border-foreground/15 p-6">
              <h3 className="text-lg font-semibold mb-3">What's the build timeline?</h3>
              <p className="text-foreground/80">12–18 months per station, significantly faster than nuclear (10+ years) with modular, scalable deployment.</p>
            </div>

            <div className="rounded-lg border border-foreground/15 p-6">
              <h3 className="text-lg font-semibold mb-3">How does it compare to traditional geothermal?</h3>
              <p className="text-foreground/80">Traditional geothermal requires specific geological conditions. CoreVolt works anywhere magma is near the crust (700+ global sites).</p>
            </div>
          </div>
        </div>
      
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-10 space-y-10">
        <header>
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Contact Us</h1>
          <p className="mt-3 text-foreground/80 max-w-[70ch]">Get in touch with our team to learn more about CoreVolt™ and partnership opportunities.</p>
        </header>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Get in Touch</h2>
            <div className="space-y-2">
              <p className="text-foreground/80">Email: Info@corevoltglobal.com</p>
              <p className="text-foreground/80">Phone: 207-947-1999</p>
              <p className="text-foreground/80">Address: PO BOX 52 Detroit, ME 04929</p>
            </div>
          </div>
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Partnership Inquiries</h2>
            <div className="space-y-2">
              <p className="text-foreground/80">For government partnerships: gov@corevolt.energy</p>
              <p className="text-foreground/80">For investment opportunities: invest@corevolt.energy</p>
              <p className="text-foreground/80">For scientific collaboration: research@corevolt.energy</p>
            </div>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-lg border border-foreground/15 p-4 text-center">
            <h3 className="font-semibold mb-2">Careers</h3>
            <p className="text-sm text-foreground/80">Join our mission to power the world</p>
          </div>
          <div className="rounded-lg border border-foreground/15 p-4 text-center">
            <h3 className="font-semibold mb-2">Press Kit</h3>
            <p className="text-sm text-foreground/80">Media resources and assets</p>
          </div>
          <div className="rounded-lg border border-foreground/15 p-4 text-center">
            <h3 className="font-semibold mb-2">Media Assets</h3>
            <p className="text-sm text-foreground/80">High-res images and videos</p>
          </div>
        </div>
      </section>
    </div>
  );
}
