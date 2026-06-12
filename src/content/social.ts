export const social = [
  { url: "mailto:y.hiroki.business@gmail.com", name: "mail" },
  { url: "https://github.com/devcraft-s", name: "github" },
  // { url: "https://www.linkedin.com/in/david-heckhoff/", name: "linkedin" },
  // { url: "https://x.com/DavidHckh", name: "x" },
  //{ url: "https://www.instagram.com/davidhckh/", name: "instagram" },
] as const satisfies { url: string; name: "mail" | "github" | "instagram" | "linkedin" | "x" }[];
