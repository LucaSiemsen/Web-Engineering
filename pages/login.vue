<template>
  <div class="admin-login">
    <!-- Überschrift -->
    <h2>Login</h2>

    <!-- E-Mail Eingabe -->
    <input v-model="email" type="email" placeholder="E-Mail" />

    <!-- Passwort Eingabe -->
    <input v-model="password" type="password" placeholder="Passwort" />

    <!-- Fehlermeldung -->
    <div v-if="errorMsg" class="error-msg">{{ errorMsg }}</div>

    <!-- Login Button -->
    <button :disabled="loading" @click="login">
      <span v-if="loading">Bitte warten...</span>
      <span v-else>Anmelden</span>
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { createClient } from '@supabase/supabase-js'
import { useRuntimeConfig } from '#app'

const config = useRuntimeConfig()
const router = useRouter()

// Supabase Client mit Public Anon Key initialisieren
const supabase = createClient(
  config.public.supabaseUrl,
  config.public.supabaseAnonKey
)

// Reaktive Variablen für Formularfelder und Status
const email = ref('')
const password = ref('')
const errorMsg = ref('')
const loading = ref(false)

// Login-Funktion
const login = async () => {
  errorMsg.value = ''
  loading.value = true

  // Validierung der Eingaben
  if (!email.value || !password.value) {
    errorMsg.value = 'Bitte E-Mail und Passwort eingeben.'
    loading.value = false
    return
  }

  // Versuche Anmeldung bei Supabase
  const { error } = await supabase.auth.signInWithPassword({
    email: email.value,
    password: password.value
  })

  loading.value = false

  if (error) {
    errorMsg.value = 'Login fehlgeschlagen: ' + error.message
  } else {
    // Bei Erfolg Weiterleitung zur Admin-Seite
    router.push('/admin-bewerbung')
  }
}
</script>

<style scoped>
.admin-login {
  max-width: 400px;
  margin: 100px auto;
  padding: 30px 25px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 3px 12px rgba(0, 0, 0, 0.15);
  text-align: center;
}

.admin-login h2 {
  margin-bottom: 25px;
  color: #003366;
  font-weight: 700;
  font-size: 1.8rem;
}

.admin-login input {
  width: 100%;
  margin: 12px 0;
  padding: 12px;
  font-size: 1rem;
  border: 1.5px solid #ccc;
  border-radius: 8px;
  transition: border-color 0.3s;
}

.admin-login input:focus {
  outline: none;
  border-color: #00509e;
}

.admin-login button {
  width: 100%;
  margin-top: 20px;
  background-color: #003366;
  color: #fff;
  padding: 14px;
  font-weight: 700;
  font-size: 1.1rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.admin-login button:disabled {
  background-color: #555;
  cursor: not-allowed;
}

.admin-login button:hover:not(:disabled) {
  background-color: #00509e;
}

.error-msg {
  color: #b00020;
  margin-top: 12px;
  font-weight: 600;
  font-size: 0.9rem;
}

/* Responsive Anpassung für kleinere Geräte */
@media (max-width: 480px) {
  .admin-login {
    margin: 40px 10px;
    padding: 20px 15px;
  }
  .admin-login h2 {
    font-size: 1.5rem;
  }
  .admin-login button {
    font-size: 1rem;
    padding: 12px;
  }
}
</style>
