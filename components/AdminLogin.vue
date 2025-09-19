<template>
  <div class="admin-login">
    <h2>Login</h2>
    <input v-model="email" type="email" placeholder="E-Mail" />
    <input v-model="password" type="password" placeholder="Passwort" />
    <div class="error-msg">{{ errorMsg }}</div>
    <button @click="login">Login</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { createClient } from '@supabase/supabase-js'

const config = useRuntimeConfig()
const supabase = createClient(config.public.supabaseUrl, config.public.supabaseAnonKey)


const email = ref('')
const password = ref('')
const errorMsg = ref('')

const emit = defineEmits(['login-success'])

const login = async () => {
  const { error } = await supabase.auth.signInWithPassword({
    email: email.value,
    password: password.value
  })
  if (error) {
    errorMsg.value = 'Login fehlgeschlagen: ' + error.message
  } else {
    emit('login-success')
  }
}
</script>

<style scoped>
.admin-login {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 120px 20px 40px;
}
.admin-login input {
  padding: 10px;
  margin-bottom: 12px;
  width: 250px;
  border-radius: 8px;
  border: 1px solid #ccc;
}
.admin-login button {
  padding: 10px 20px;
  background: #003366;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}
.error-msg {
  color: red;
  margin-bottom: 10px;
}
</style>
