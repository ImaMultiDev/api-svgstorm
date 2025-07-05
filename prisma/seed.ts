import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const sampleIcons = [
  {
    name: "sun",
    category: "weather",
    tags: ["weather", "sunny", "day", "light"],
    description: "Icono de sol para representar clima soleado",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="12" r="5"/>
  <path d="M12 1v2"/>
  <path d="M12 21v2"/>
  <path d="M4.22 4.22l1.42 1.42"/>
  <path d="M18.36 18.36l1.42 1.42"/>
  <path d="M1 12h2"/>
  <path d="M21 12h2"/>
  <path d="M4.22 19.78l1.42-1.42"/>
  <path d="M18.36 5.64l1.42-1.42"/>
</svg>`,
  },
  {
    name: "moon",
    category: "weather",
    tags: ["weather", "night", "dark", "sleep"],
    description: "Icono de luna para representar la noche",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
</svg>`,
  },
  {
    name: "star",
    category: "shapes",
    tags: ["star", "favorite", "rating", "bookmark"],
    description: "Icono de estrella para favoritos o valoraciones",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>
</svg>`,
  },
  {
    name: "heart",
    category: "shapes",
    tags: ["heart", "love", "like", "favorite"],
    description: "Icono de corazón para expresar amor o me gusta",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
</svg>`,
  },
  {
    name: "home",
    category: "navigation",
    tags: ["home", "house", "main", "navigation"],
    description: "Icono de casa para página principal",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
  <polyline points="9,22 9,12 15,12 15,22"/>
</svg>`,
  },
  {
    name: "user",
    category: "people",
    tags: ["user", "person", "profile", "account"],
    description: "Icono de usuario para perfiles",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
  <circle cx="12" cy="7" r="4"/>
</svg>`,
  },
  {
    name: "settings",
    category: "interface",
    tags: ["settings", "config", "gear", "preferences"],
    description: "Icono de configuración o ajustes",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="12" r="3"/>
  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1 1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
</svg>`,
  },
  {
    name: "help",
    category: "interface",
    tags: ["help", "question", "support", "info"],
    description: "Icono de ayuda o información",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="12" r="10"/>
  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
  <point cx="12" cy="17"/>
</svg>`,
  },
  {
    name: "download",
    category: "actions",
    tags: ["download", "save", "export", "file"],
    description: "Icono para descargar archivos",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
  <polyline points="7,10 12,15 17,10"/>
  <line x1="12" y1="15" x2="12" y2="3"/>
</svg>`,
  },
  {
    name: "upload",
    category: "actions",
    tags: ["upload", "send", "import", "file"],
    description: "Icono para subir archivos",
    svg_code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
  <polyline points="17,8 12,3 7,8"/>
  <line x1="12" y1="3" x2="12" y2="15"/>
</svg>`,
  },
];

async function main() {
  console.log("🌱 Comenzando seed de la base de datos...");

  // Limpiar datos existentes
  await prisma.icon.deleteMany({});
  console.log("🗑️  Datos existentes eliminados");

  // Insertar iconos de ejemplo
  for (const icon of sampleIcons) {
    await prisma.icon.create({
      data: icon,
    });
    console.log(`✅ Icono "${icon.name}" creado`);
  }

  console.log(`🎉 Seed completado! ${sampleIcons.length} iconos creados.`);
}

main()
  .catch((e) => {
    console.error("❌ Error durante el seed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
