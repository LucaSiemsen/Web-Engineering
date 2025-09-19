<!-- 
  Hinweis: Dieses Grundgerüst wurde mit Unterstützung von ChatGPT erstellt.
  Die Struktur und Abschnittsaufteilung basieren auf einem generierten Vorschlag,
  wurden jedoch inhaltlich und gestalterisch selbst angepasst und erweitert.
-->
<template>
  <div>
    <!-- Hero Section mit Call-to-Action Button -->
    <section class="hero">
      <div class="hero-text">
        <h1>Unsere Studiengänge – Deine Zukunft!</h1>
        <p>Starte deine Karriere an unserer Hochschule!</p>
        <NuxtLink to="/bewerbung" class="btn">Jetzt Bewerben</NuxtLink>
      </div>
    </section>

    <!-- Hauptbereich mit Content -->
    <main class="content">

      <!-- Warum FH Kiel? Mit drei Vorteilen in Karten -->
      <section class="section">
        <h2 class="section-title">Warum die Fachhochschule Kiel?</h2>
        <p class="intro-text">
          Praxisnah studieren an einem der modernsten Campus Deutschlands. International vernetzt, innovativ, weltoffen – werde Teil unserer Community!
        </p>

        <div class="cards">
          <div class="card">
            <h3>Karrierechancen</h3>
            <p>Top-Ausbildung für deinen erfolgreichen Start in Unternehmen weltweit.</p>
          </div>
          <div class="card">
            <h3>Campusleben</h3>
            <p>Moderne Lernräume, vielfältige Freizeitangebote und ein wunderschöner Standort direkt an der Kieler Förde.</p>
          </div>
          <div class="card">
            <h3>Internationalität</h3>
            <p>Erlebe Auslandserfahrungen mit unseren Erasmus-Partnerhochschulen weltweit.</p>
          </div>
        </div>
      </section>

      <!-- Mehr Info-Sektionen mit Bild und Text nebeneinander -->
      <section class="info-section">
        <div class="info-content">
          <img src="/assets/fh-kiel_eingang-zum-campus-dietrichsdorf_hannaboerm_klein.jpg" alt="Campus FH Kiel" class="info-image" />
          <div class="info-text">
            <h2>Campusleben</h2>
            <p>Unser Campus bietet moderne Lernumgebungen und eine tolle Lage an der Schwentine.</p>
          </div>
        </div>
      </section>

      <section class="info-section">
        <div class="info-content">
          <img src="/assets/orte_3.jpg" alt="Internationales Zentrum FH Kiel" class="info-image" />
          <div class="info-text">
            <h2>Internationales Programm</h2>
            <p>Studieren weltweit mit unseren Erasmus-Partnerschaften und dem Internationalen Zentrum in Kiel.</p>
          </div>
        </div>
      </section>

      <section class="info-section">
        <div class="info-content">
          <img src="/assets/csm_talent_transfair_1_dca3ae81f4.webp" alt="Karrierechancen FH Kiel" class="info-image" />
          <div class="info-text">
            <h2>Karrierechancen</h2>
            <p>Top-Ausbildung für deinen erfolgreichen Start in Unternehmen weltweit. Besuche unsere Karriere-Events und starte durch!</p>
          </div>
        </div>
      </section>

      <!-- FAQ Abschnitt als Komponente ausgelagert -->
      <section class="section faq">
        <h2 class="section-title">Fragen & Antworten zum Studium</h2>
        <FAQ />
      </section>

      <!-- Empfehlung Banner -->
      <Empfehlungbanner />

      <!-- Social Media Links -->
      <SocialMeda />

      <!-- Weißer Abstand als Footer-Abstand -->
      <div class="white-gap"></div>
    </main>

    <!-- Footer Komponente -->
    <Footer />
  </div>
</template>

<script setup>
import FAQ from '~/components/FAQ.vue'
import Empfehlungbanner from '~/components/Empfehlungbanner.vue'
import SocialMeda from '~/components/SocialMeda.vue'
import Footer from '~/components/Footer.vue'
</script>
