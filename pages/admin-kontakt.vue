<!--
  Hinweis zur KI-Nutzung:
  Die Darstellung und Verarbeitung der Kontaktanfragen wurde mit Unterstützung von ChatGPT umgesetzt.
  Die Supabase-Abfragen und UI-Komponenten wurden anschließend individuell angepasst.
  (erstellt und angepasst im Juni 2025)
-->
<template>
  <div>
    <!-- Login-Komponente anzeigen, falls nicht eingeloggt -->
    <AdminLogin v-if="!isLoggedIn" @login-success="handleLoginSuccess" />

    <!-- Admin-Bereich, wenn eingeloggt -->
    <div v-else>
      <AdminNav @logout="logout" />

      <h2 class="section-title">Kontaktanfragen</h2>

      <table class="admin-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Telefon</th>
            <th>Betreff</th>
            <th>Nachricht</th>
            <th>Aktionen</th>
          </tr>
        </thead>
        <tbody>
          <!-- Kontakte iterieren -->
          <tr v-for="k in kontakte" :key="k.id">
            <td>{{ k.name }}</td>
            <td>{{ k.email }}</td>
            <td>{{ k.telefon || '-' }}</td>
            <td>{{ k.betreff }}</td>
            <td>{{ k.nachricht }}</td>
            <td>
              <button @click="loescheEintrag(k.id)" class="btn-delete">Löschen</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
// Vue Hooks & Funktionen importieren
import { ref, onMounted } from 'vue'
// Admin-Komponenten importieren
import AdminLogin from '~/components/AdminLogin.vue'
import AdminNav from '~/components/AdminNav.vue'
// Supabase Client importieren
import { createClient } from '@supabase/supabase-js'

// Zugriff auf Umgebungsvariablen
const config = useRuntimeConfig()
// Supabase Client mit Public Anon Key initialisieren
const supabase = createClient(config.public.supabaseUrl, config.public.supabaseAnonKey)

// Status, ob User eingeloggt ist
const isLoggedIn = ref(false)
// Array für Kontaktanfragen
const kontakte = ref([])

// Beim Laden prüfen, ob Session existiert und Kontakte laden
onMounted(async () => {
  const { data: { session } } = await supabase.auth.getSession()
  isLoggedIn.value = !!session
  if (isLoggedIn.value) {
    ladeKontakte()
  }
})

// Callback wenn Login erfolgreich war
function handleLoginSuccess() {
  isLoggedIn.value = true
  ladeKontakte()
}

// Kontakte aus Supabase laden
const ladeKontakte = async () => {
  const { data, error } = await supabase.from('kontakte').select('*')
  if (!error) {
    kontakte.value = data
  } else {
    console.error('Fehler beim Laden der Kontakte:', error)
  }
}

// Logout Funktion
const logout = async () => {
  await supabase.auth.signOut()
  isLoggedIn.value = false
}

// Eintrag löschen mit Bestätigung
const loescheEintrag = async (id) => {
  if (!confirm('Eintrag wirklich löschen?')) return

  const { error } = await supabase.from('kontakte').delete().eq('id', id)
  if (!error) {
    // Lokal entfernen, damit UI aktualisiert wird
    kontakte.value = kontakte.value.filter(k => k.id !== id)
  } else {
    alert('Fehler beim Löschen')
  }
}
</script>

<style scoped>
/* Tabelle und Layout */
.admin-table {
  width: 95%;
  margin: 40px auto;
  border-collapse: collapse;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}
.admin-table th, .admin-table td {
  border: 1px solid #ddd;
  padding: 14px 16px;
  max-width: 150px;
  word-wrap: break-word;
}
.admin-table th {
  background-color: #003366;
  color: white;
}

/* Löschen-Button */
.btn-delete {
  background: red;
  color: white;
  border: none;
  padding: 6px 12px;
  border-radius: 6px;
  cursor: pointer;
}

/* Logout Button (im AdminNav) */
.logout-btn {
  margin: 20px;
  background: #888;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
}

/* Navigation */
.admin-nav {
  margin: 20px 40px;
  display: flex;
  gap: 20px;
  align-items: center;
}
.nav-link {
  color: #003366;
  font-weight: bold;
  text-decoration: none;
}
.nav-link.router-link-exact-active {
  text-decoration: underline;
}

/* Überschrift */
.section-title {
  text-align: center;
  margin-top: 40px;
  color: #003366;
}
</style>
