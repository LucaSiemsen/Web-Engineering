<template>
  <nav class="admin-nav">
    <NuxtLink to="/admin-bewerbung" class="nav-link" exact-active-class="active-link">Bewerbungen</NuxtLink>
    <NuxtLink to="/admin-kontakt" class="nav-link" exact-active-class="active-link">Kontaktanfragen</NuxtLink>
    <button class="logout-btn" @click="$emit('logout')">Logout</button>
  </nav>
</template>

<script setup>
// Keine Logik hier, Logout wird via Event an Parent gesendet
</script>

<style scoped>
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
.active-link {
  text-decoration: underline;
}
.logout-btn {
  margin-left: auto;
  background: #888;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
}
</style>
