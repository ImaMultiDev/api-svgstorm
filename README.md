# 🌩️ SVGStorm API

**Backend de SVGStorm:** API REST profesional para servir iconos SVG personalizados.
Construido con **Next.js (Pages Router), Prisma y PostgreSQL.**

---

## Descripción

Este proyecto proporciona un **servicio de iconos SVG dinámicos** a través de una API REST conectada a PostgreSQL.

La API es parte del monorepo SVGStorm y está optimizada para trabajar en entornos locales y producción (Railway).

---

## Tecnologías

- Next.js 15 (Pages Router)
- Prisma ORM
- PostgreSQL (Railway)
- TypeScript
- pnpm Workspaces
- Turborepo

---

## Instalación

### 1. Clonar el repositorio:

```bash
git clone <REPO_URL>
```

### 2. Instalar dependencias:

```bash
pnpm install
```

### 3. Configurar la base de datos:

Crea un archivo `.env.local` en la raíz de `api-svgstorm` con tu conexión a PostgreSQL.

Ejemplo para desarrollo local:

```bash
DATABASE_URL="postgresql://postgres:123456@localhost:5433/svgstorm_db?schema=public"
```

Ejemplo para Railway (desarrollo remoto desde local):

```bash
DATABASE_URL="(tu DATABASE_PUBLIC_URL de Railway)"
```

Ejemplo para producción en Railway:

```bash
DATABASE_URL="postgresql://postgres:mNmEqdXWnFcpnbMEdbtiptAWTYvvEjRQ@postgres.railway.internal:5432/railway"
```

---

### 4. Configurar la base de datos:

```bash
pnpm prisma migrate dev --name init
```

---

### 5. Poblar la base de datos con datos de ejemplo:

```bash
pnpm db:seed
```

---

### 6. Levantar la API:

```bash
pnpm dev
```

La API estará disponible en:

```
http://localhost:3000/api/icons
```

---

## Endpoints disponibles

### Obtener todos los iconos:

```http
GET /api/icons
```

Devuelve la lista completa de iconos disponibles.

---

### Obtener un icono por nombre:

```http
GET /api/icons/:name
```

Devuelve el SVG correspondiente al nombre especificado.

---

## Despliegue

El proyecto está preparado para desplegar en Railway y conectar directamente a la base de datos a través de la URL privada sin egress fees.

---

## Buenas prácticas implementadas:

- Conexión PostgreSQL segura por entorno.
- Arquitectura escalable y profesional.
- Scripts para migración, generación y seed de base de datos.
- Código limpio con TypeScript estricto.

---

## 📄 Licencia

Este proyecto está licenciado bajo la licencia MIT.  
Puedes utilizar, modificar y distribuir el código con libertad, siempre que conserves los avisos de copyright originales.

Consulta el archivo [LICENSE](./LICENSE) para más información.

---
