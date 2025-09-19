# Hochschulbewerbung – Webanwendung mit Nuxt 3 & Supabase

Diese Webanwendung ermöglicht Studieninteressierten eine digitale Bewerbung an einer Hochschule. Nutzer*innen können sich über Studiengänge informieren, ein mehrstufiges Bewerbungsformular ausfüllen und ihre Unterlagen hochladen. Die Anwendung enthält zusätzlich ein Administrations-Backend zur Verwaltung der Bewerbungen mit Statusanzeigen (neu, bearbeitet, angenommen, abgelehnt).

## Technologien
- **Frontend**: Nuxt 3, Vue.js, Tailwind CSS
- **Backend**: Supabase (Datenbank, Authentifizierung, Datei-Upload)
- **Zusätzliche Features**: E-Mail-Benachrichtigung, Upload-Funktion, Rollen-/Rechtesystem

Das Projekt entstand im Rahmen eines Hochschulprojekts im Modul „Moderne Webprogrammierung“.

---

## Setup

### Abhängigkeiten installieren:
``` bash
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

---

## 🧠 Hinweis zur KI-Unterstützung

Dieses Projekt wurde in mehreren Teilen mit Unterstützung von **ChatGPT** umgesetzt.

- Die **Grundstruktur** des Projekts, viele **Formularlogiken**, Teile des **Supabase-Backends** sowie Layout-Ideen wurden mithilfe von ChatGPT entwickelt.
- Der generierte Code wurde inhaltlich **überprüft, erweitert und an die spezifischen Anforderungen angepasst**.
- Alle Stellen, die auf ChatGPT zurückgehen, sind im Quellcode entsprechend als Kommentar markiert.

Ziel war ein **verantwortungsvoller und reflektierter Einsatz von KI-gestützter Softwareentwicklung** im Rahmen einer Hochschulprojektarbeit.
