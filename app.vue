<template>
  <div>
    <link rel="stylesheet" href="/styles.css" />

    <!-- Globales Header-Navigation -->
    <header class="header">
      <img src="/assets/Fachhochschule_Kiel_Logo_03.2022.svg.png" alt="FH Kiel Logo" class="logo" />
      <nav class="nav">
        <NuxtLink to="/">Startseite</NuxtLink>
        <NuxtLink to="/bewerbung">Bewerbung</NuxtLink>
        <NuxtLink to="/kontakt">Kontakt</NuxtLink>
        <NuxtLink to="/login">Login</NuxtLink>
      </nav>
    </header>

    <NuxtPage />
  </div>
</template> 