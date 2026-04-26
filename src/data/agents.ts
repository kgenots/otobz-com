export type Persona = {
  slug: string;
  name: string;
  role: string;
  cron_id: string;
  descriptionKey: string;
  avatar?: string;
  status: "active" | "paused";
};

export const personas: Persona[] = [
  {
    slug: "pin",
    name: "Pin",
    role: "quant trader",
    cron_id: "kr-dt-engine",
    descriptionKey: "agents.persona.pin.description",
    status: "active",
  },
  {
    slug: "wander",
    name: "Wander",
    role: "travel writer",
    cron_id: "trip-content-gen",
    descriptionKey: "agents.persona.wander.description",
    status: "active",
  },
  {
    slug: "echo",
    name: "Echo",
    role: "morning briefer",
    cron_id: "daily-briefing",
    descriptionKey: "agents.persona.echo.description",
    status: "active",
  },
  {
    slug: "tide",
    name: "Tide",
    role: "market watcher",
    cron_id: "kr-dt-monitor",
    descriptionKey: "agents.persona.tide.description",
    status: "active",
  },
  {
    slug: "otto",
    name: "Otto",
    role: "orchestrator",
    cron_id: "main",
    descriptionKey: "agents.persona.otto.description",
    status: "active",
  },
];

export function getPersona(slug: string): Persona | undefined {
  return personas.find((p) => p.slug === slug);
}

export function activePersonas(): Persona[] {
  return personas.filter((p) => p.status === "active");
}
