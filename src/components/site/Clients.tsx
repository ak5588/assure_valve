const CLIENTS = [
  "SIEMENS",
  "FLOWSERVE",
  "L&T",
  "BHEL",
  "GE",
  "ABB",
  "TECHNO CRAFT",
  "MECHLINE",
  "LAXMI ENG.",
  "ASSURE",
];

export function Clients() {
  return (
    <section className="py-20 bg-background border-y border-border">
      <div className="container-industrial">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-10 bg-accent" />
            <span className="text-eyebrow">Trusted By Industry Leaders</span>
            <div className="h-px w-10 bg-accent" />
          </div>
          <h2 className="font-display text-2xl lg:text-3xl font-bold text-foreground">
            Supplying precision components to global OEMs & Indian majors.
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-px bg-border border border-border">
          {CLIENTS.map((c) => (
            <div
              key={c}
              className="bg-background aspect-[3/1] flex items-center justify-center px-4 group hover:bg-secondary transition-colors"
            >
              <span className="font-display text-sm md:text-base font-bold tracking-widest text-steel group-hover:text-primary transition-colors">
                {c}
              </span>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-muted-foreground uppercase tracking-widest">
          Client names shown for representation. Formal vendor references available on request under NDA.
        </p>
      </div>
    </section>
  );
}