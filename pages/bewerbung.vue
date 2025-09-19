<!--
  Hinweis zur KI-Nutzung:
  Die Grundstruktur dieses Bewerbungsformulars wurde mit Unterstützung von ChatGPT erstellt.
  Die Seitenstruktur, Mehrschritt-Logik sowie Upload- und Supabase-Anbindung basieren auf generierten Vorschlägen.
  Die Formularlogik, Validierung, Upload-Handling und Datenbankeintrag wurden anschließend manuell angepasst und erweitert.
-->
<template>
  <div>
    <!-- Titel mit Icons -->
    <section class="bewerbung-header" style="margin-bottom: 20px;">
      <div class="icon-row">
        <img src="/assets/icon_student_1.png" alt="Icon links" class="bewerbung-icon" />
        <h1 class="bewerbung-title">Bewerbung für deinen Studienplatz</h1>
        <img src="/assets/icon_student_2.png" alt="Icon rechts" class="bewerbung-icon" />
      </div>
    </section>

    <!-- Formular Bereich -->
    <section class="form-page">
      <div class="form-container">
        <h2 class="section-title">Bewerbungsformular</h2>

        <form @submit.prevent="sendeBewerbung">
          <!-- Schritt 1: Persönliche Daten -->
          <div v-if="step === 1">
            <div class="form-group">
              <label for="vorname">Vorname:</label>
              <input type="text" id="vorname" v-model="vorname" required />
            </div>
            <div class="form-group">
              <label for="nachname">Nachname:</label>
              <input type="text" id="nachname" v-model="nachname" required />
            </div>
            <div class="form-group">
              <label for="email">E-Mail:</label>
              <input type="email" id="email" v-model="email" required />
            </div>
          </div>

          <!-- Schritt 2: Studiengang & Abschluss -->
          <div v-if="step === 2">
            <div class="form-group">
              <label for="studiengang">Studiengang:</label>
              <select id="studiengang" v-model="studiengang" required>
                <option value="">Bitte wählen</option>
                <option value="Informatik">Informatik</option>
                <option value="Wirtschaft">Wirtschaft</option>
                <option value="Design">Design</option>
                <option value="Betriebswirtschaftslehre">Betriebswirtschaftslehre</option>
                <option value="Bauingenieurwesen">Bauingenieurwesen</option>
                <option value="Maschinenbau">Maschinenbau</option>
                <option value="Elektrotechnik">Elektrotechnik</option>
                <option value="Medieninformatik">Medieninformatik</option>
              </select>
            </div>
            <div class="form-group">
              <label for="abschluss">Abschluss:</label>
              <select id="abschluss" v-model="abschluss" required>
                <option value="">Bitte wählen</option>
                <option value="Bachelor">Bachelor</option>
                <option value="Master">Master</option>
              </select>
            </div>
            <div class="form-group">
              <label for="studienform">Studienform:</label>
              <select id="studienform" v-model="studienform" required>
                <option value="">Bitte wählen</option>
                <option value="Praesenz">Präsenzstudium</option>
                <option value="Online">Online-Studium</option>
              </select>
            </div>
          </div>

          <!-- Schritt 3: Upload und Nachricht -->
          <div v-if="step === 3">
            <div class="form-group">
              <label for="zeugnisse">Zeugnisse hochladen (PDF, max. 5MB):</label>
              <input type="file" id="zeugnisse" ref="zeugnisseRef" accept=".pdf" />
              <!-- Button um Datei zu entfernen -->
              <button type="button" @click="removeFile">Datei entfernen</button>
            </div>

            <div class="form-group">
              <label for="nachricht">Nachricht:</label>
              <textarea id="nachricht" v-model="nachricht" rows="5" required></textarea>
            </div>
          </div>


<!-- „Ich habe auf zusätzliche Felder wie Zugangsvoraussetzungen oder Sprachkenntnisse verzichtet, 
 weil diese sehr spezifisch vom jeweiligen Studiengang abhängen. 
 Ohne offizielle Informationen der Hochschule wollte ich hier keine falschen oder pauschalen Angaben machen. 
 Die technische Umsetzung wäre aber problemlos erweiterbar, z. B. über weitere Select- oder Textfelder pro Studiengang.“ -->
          
 
          <!-- Navigation der Schritte -->
          <div class="button-group" style="margin-top: 20px;">
            <button
              type="button"
              @click="prevStep"
              :disabled="step === 1"
              style="margin-right: 10px;"
            >
              Zurück
            </button>

            <button v-if="step < 3" type="button" @click="nextStep">Weiter</button>
            <button v-else type="submit" class="btn-form">Bewerbung absenden</button>
          </div>
        </form>

        <!-- Feedbacknachricht -->
        <p v-if="feedback" style="text-align:center; margin-top: 20px;">{{ feedback }}</p>
      </div>
    </section>

    <div class="white-gap"></div>

    <!-- Zusätzliche Komponenten -->
    <Empfehlungbanner />
    <SocialMeda />
    <Footer />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRuntimeConfig } from '#app'
import { createClient } from '@supabase/supabase-js'

// Falls Footer etc. als Komponenten importiert werden, hier importieren:
// import Footer from '~/components/Footer.vue'
// import Empfehlungbanner from '~/components/Empfehlungbanner.vue'
// import SocialMeda from '~/components/SocialMeda.vue'

// Supabase initialisieren mit Umgebungsvariablen
const config = useRuntimeConfig()
const supabase = createClient(config.public.supabaseUrl, config.public.supabaseAnonKey)

// Reaktive Variablen für Formularschritte und Formulardaten
const step = ref(1)
const vorname = ref('')
const nachname = ref('')
const email = ref('')
const studiengang = ref('')
const abschluss = ref('')
const studienform = ref('')
const nachricht = ref('')

// Ref für Datei-Input
const zeugnisseRef = ref(null)

// Feedback für Nutzer
const feedback = ref('')

// Zum nächsten Schritt wechseln, solange nicht Schritt 3 erreicht
function nextStep() {
  if (step.value < 3) step.value++
}

// Zum vorherigen Schritt zurückkehren, solange Schritt größer 1
function prevStep() {
  if (step.value > 1) step.value--
}

// Datei aus dem File-Input entfernen
function removeFile() {
  if (zeugnisseRef.value) {
    zeugnisseRef.value.value = null
  }
}

// Bewerbung absenden - Upload & Datenbankeintrag
async function sendeBewerbung() {
  const file = zeugnisseRef.value?.files[0]
  let zeugnis_url = null

  if (file) {
    // Datei per FormData zum Server senden
    const formData = new FormData()
    formData.append('file', file)

    const uploadResponse = await fetch('/api/upload', {
      method: 'POST',
      body: formData
    })

    const uploadResult = await uploadResponse.json()

    if (!uploadResponse.ok) {
      console.error('Upload-Fehler:', uploadResult)
      feedback.value = 'Datei-Upload fehlgeschlagen.'
      return
    }

    // URL zum gespeicherten Zeugnis in Supabase
    zeugnis_url = `https://eerzdodlszahdqgldhms.supabase.co/storage/v1/object/public/bewerbungsunterlagen/${uploadResult.path}`
  }

  // Eintrag in Datenbank
  const { error } = await supabase.from('bewerbungen').insert({
    Vorname: vorname.value,
    nachname: nachname.value,
    email: email.value,
    studiengang: studiengang.value,
    Nachricht: nachricht.value,
    Zeugnisse_url: zeugnis_url,
    Abschluss: abschluss.value,
    Studienform: studienform.value
  })

  feedback.value = error ? 'Eintrag fehlgeschlagen.' : 'Bewerbung erfolgreich versendet!'

  // Bei Erfolg Formular zurücksetzen
  if (!error) {
    step.value = 1
    vorname.value = ''
    nachname.value = ''
    email.value = ''
    studiengang.value = ''
    abschluss.value = ''
    studienform.value = ''
    nachricht.value = ''
    if (zeugnisseRef.value) {
      zeugnisseRef.value.value = null
    }
  }
}
</script>
