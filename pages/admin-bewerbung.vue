<!--
  Hinweis zur KI-Nutzung:
  Die Tabellenstruktur und die Logik zur Bearbeitung von Bewerbungen basieren auf Vorschlägen von ChatGPT.
  Darstellung, Statusvergabe und Datenanbindung wurden angepasst und auf das Projekt abgestimmt.
-->

<template>
  <div>
    <!-- Login-Komponente anzeigen, wenn nicht eingeloggt -->
    <AdminLogin v-if="!isLoggedIn" @login-success="handleLoginSuccess" />

    <!-- Admin-Bereich nach Login -->
    <div v-else>
      <AdminNav @logout="logout" />

      <h2 class="section-title">Eingegangene Bewerbungen</h2>

      <table class="admin-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Studiengang</th>
            <th>Zeugnis</th>
            <th>Nachricht</th>
            <th>Status</th>
            <th>Aktionen</th>
          </tr>
        </thead>
        <tbody>
          <!-- Bewerbungen durchlaufen -->
          <tr v-for="b in bewerbungen" :key="b.id">
            <td>{{ b.Vorname }} {{ b.nachname }}</td>
            <td>{{ b.email }}</td>
            <td>{{ b.studiengang }}</td>
            <td>
              <!-- PDF Link nur anzeigen wenn vorhanden -->
              <a v-if="b.Zeugnisse_url" :href="b.Zeugnisse_url" target="_blank">PDF öffnen</a>
              <span v-else>-</span>
            </td>
            <td>{{ b.Nachricht }}</td>
            <td>
              <!-- Status Auswahl mit Update-Funktion -->
              <select v-model="b.status" @change="updateStatus(b.id, b.status)">
                <option value="neu">neu</option>
                <option value="angenommen">angenommen</option>
                <option value="abgelehnt">abgelehnt</option>
              </select>
            </td>
            <td>
              <button @click="loescheEintrag(b.id)" class="btn-delete">Löschen</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import AdminLogin from '~/components/AdminLogin.vue'
import AdminNav from '~/components/AdminNav.vue'
import { createClient } from '@supabase/supabase-js'
import { useRuntimeConfig } from '#app'

const config = useRuntimeConfig()

// Supabase Client initialisieren
const supabase = createClient(config.public.supabaseUrl, config.public.supabaseAnonKey)

// Login Status
const isLoggedIn = ref(false)
// Bewerbungs-Daten
const bewerbungen = ref([])

// Prüfen bei Mount, ob Session existiert, dann Bewerbungen laden
onMounted(async () => {
  const { data: { session } } = await supabase.auth.getSession()
  isLoggedIn.value = !!session
  if (isLoggedIn.value) {
    ladeBewerbungen()
  }
})

// Event Callback nach erfolgreichem Login
function handleLoginSuccess() {
  isLoggedIn.value = true
  ladeBewerbungen()
}

// Bewerbungen aus der DB laden
const ladeBewerbungen = async () => {
  const { data, error } = await supabase.from('bewerbungen').select('*')
  if (!error) {
    bewerbungen.value = data
  } else {
    console.error('Fehler beim Laden der Bewerbungen:', error)
  }
}

// Logout-Funktion
const logout = async () => {
  await supabase.auth.signOut()
  isLoggedIn.value = false
}

// Status der Bewerbung aktualisieren
const updateStatus = async (id, neuerStatus) => {
  const { error } = await supabase
    .from('bewerbungen')
    .update({ status: neuerStatus })
    .eq('id', id)

  if (error) {
    alert('Fehler beim Aktualisieren des Status')
    return
  }

  // Wenn Status "angenommen", E-Mail versenden
  if (neuerStatus === 'angenommen') {
    const { data, error: fetchError } = await supabase
      .from('bewerbungen')
      .select('email, Vorname')
      .eq('id', id)
      .single()

    if (fetchError) {
      console.error('Fehler beim Laden der Bewerbung:', fetchError)
      return
    }

    // Mail via API senden
    const sendMailResponse = await fetch('/api/send-mail', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        to: data.email,
        subject: 'Zusage für deinen Studienplatz an der FH Kiel',
        text: `Hallo ${data.Vorname},\n\nherzlichen Glückwunsch! Deine Bewerbung wurde angenommen. Wir freuen uns, dich an der FH Kiel begrüßen zu dürfen.\n\nBeste Grüße\nDein FH Kiel Team`,
        html: `<p>Hallo ${data.Vorname},</p><p>herzlichen Glückwunsch! Deine Bewerbung wurde angenommen. Wir freuen uns, dich an der FH Kiel begrüßen zu dürfen.</p><p>Beste Grüße<br/>Dein FH Kiel Team</p>`
      })
    })

    if (!sendMailResponse.ok) {
      console.error('Fehler beim Versenden der Email')
    }
  }
}

// Bewerbungseintrag löschen
const loescheEintrag = async (id) => {
  if (!confirm('Eintrag wirklich löschen?')) return

  const { error } = await supabase
    .from('bewerbungen')
    .delete()
    .eq('id', id)

  if (!error) {
    // Lokal im Array entfernen
    bewerbungen.value = bewerbungen.value.filter(b => b.id !== id)
  } else {
    alert('Fehler beim Löschen')
  }
}
</script>

<style scoped>
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
.btn-delete {
  background: red;
  color: white;
  border: none;
  padding: 6px 12px;
  border-radius: 6px;
  cursor: pointer;
}
.logout-btn {
  margin: 20px;
  background: #888;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
}
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
.section-title {
  text-align: center;
  margin-top: 40px;
  color: #003366;
}
</style>
