<!--
  Hinweis zur KI-Nutzung:
  Die Grundstruktur dieses Kontaktformulars wurde mit Unterstützung von ChatGPT erstellt.
  Die Formularfelder, Bindings und Layoutstruktur basieren auf einem generierten Vorschlag.
  Validierungslogik, API-Anbindung und gestalterische Anpassungen wurden eigenständig überarbeitet und erweitert.
-->
<template>
  <div>
    <!-- Überschrift -->
    <h2 style="text-align: center; margin-top: 60px; font-size: 2em;">
      Sie haben Fragen?
    </h2>

    <!-- Kontaktformular Bereich -->
    <section class="form-page">
      <div class="form-container">
        <h1 class="section-title">Kontaktformular</h1>

        <!-- Formular mit Vue Bindings und Validierung -->
        <form class="form" @submit.prevent="handleSubmit">
          <!-- Name -->
          <div class="form-group">
            <label for="name">Name:</label>
            <input type="text" id="name" v-model="form.name" required />
          </div>

          <!-- E-Mail -->
          <div class="form-group">
            <label for="email">E-Mail:</label>
            <input type="email" id="email" v-model="form.email" required />
          </div>

          <!-- Telefon (optional) -->
          <div class="form-group">
            <label for="telefon">Telefonnummer (optional):</label>
            <input
              type="tel"
              id="telefon"
              v-model="form.telefon"
              placeholder="z. B. 0151 12345678"
            />
          </div>

          <!-- Betreff Auswahl -->
          <div class="form-group">
            <label for="betreff">Anliegen:</label>
            <select id="betreff" v-model="form.betreff" required>
              <option value="">Bitte wählen</option>
              <option>Studienberatung</option>
              <option>Bewerbung</option>
              <option>Zulassung & Immatrikulation</option>
              <option>Finanzierung & BAföG</option>
              <option>Anerkennung von Leistungen</option>
              <option>Technische Probleme</option>
              <option>Online-Plattformen (Moodle, HISinOne etc.)</option>
              <option>Prüfungen & Noten</option>
              <option>Veranstaltungen & Stundenplan</option>
              <option>Sonstiges</option>
            </select>
          </div>

          <!-- Nachricht -->
          <div class="form-group">
            <label for="nachricht">Nachricht:</label>
            <textarea id="nachricht" v-model="form.nachricht" rows="5" required></textarea>
          </div>

          <!-- Absende Button -->
          <button type="submit" class="btn-form">Absenden</button>
        </form>

        <!-- Erfolgs- und Fehlermeldungen -->
        <div v-if="successMsg" style="color: green; margin-top: 15px;">
          {{ successMsg }}
        </div>
        <div v-if="errorMsg" style="color: red; margin-top: 15px;">
          {{ errorMsg }}
        </div>
      </div>
    </section>
  </div>

  <!-- Zusätzliche Komponenten -->
  <Empfehlungbanner />
  <SocialMeda />
  <Footer />
</template>

<script setup>
import { reactive, ref } from 'vue'

// Reaktives Objekt für Formularfelder
const form = reactive({
  name: '',
  email: '',
  telefon: '',
  betreff: '',
  nachricht: ''
})

// Nachrichten für Erfolg/Fehler anzeigen
const successMsg = ref('')
const errorMsg = ref('')

async function handleSubmit() {
  // Meldungen zurücksetzen
  successMsg.value = ''
  errorMsg.value = ''

  // Einfache Validierung
  if (!form.name || !form.email || !form.betreff || !form.nachricht) {
    errorMsg.value = 'Bitte füllen Sie alle Pflichtfelder aus.'
    return
  }

  try {
    // API-Request an Backend senden
    const response = await fetch('/api/kontakt', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    })

    // Fehler aus API auswerten
    if (!response.ok) {
      const data = await response.json()
      errorMsg.value = data?.message || 'Fehler beim Absenden.'
      return
    }

    // Erfolgsmeldung und Formular zurücksetzen
    successMsg.value = 'Danke für Ihre Nachricht! Wir melden uns bald bei Ihnen.'
    form.name = ''
    form.email = ''
    form.telefon = ''
    form.betreff = ''
    form.nachricht = ''
  } catch (err) {
    // Server- oder Netzwerkfehler abfangen
    errorMsg.value = 'Serverfehler. Bitte versuchen Sie es später erneut.'
  }
}
</script>

