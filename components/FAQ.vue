<template>
  <section class="faq-container">
    <div v-for="(frage, index) in faqs" :key="index" class="faq-item">
      <button class="faq-question" @click="toggle(index)">
        <span class="arrow" :class="{ open: frage.aktiv }">&#9656;</span>
        {{ frage.frage }}
      </button>
      <div
        class="faq-answer"
        :style="{ maxHeight: frage.aktiv ? answerHeights[index] + 'px' : '0', paddingTop: frage.aktiv ? '15px' : '0', paddingBottom: frage.aktiv ? '15px' : '0' }"
        ref="answerRefs"
      >
        {{ frage.antwort }}
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, nextTick, onMounted } from 'vue'

const faqs = ref([
  {
    frage: "Wie bewerbe ich mich für ein Studium an der FH Kiel?",
    antwort: "Über unser Onlineformular auf dieser Website. Zeugnisse und Lebenslauf hochladen – fertig!",
    aktiv: false,
  },
  {
    frage: "Welche Voraussetzungen muss ich erfüllen?",
    antwort: "Allgemeine Hochschulreife oder Fachhochschulreife. Teilweise Sprachkenntnisse je nach Studiengang nötig.",
    aktiv: false,
  },
  {
    frage: "Kann ich auch im Ausland studieren?",
    antwort: "Ja! Über Erasmus kannst du ein oder zwei Semester an einer unserer Partnerhochschulen verbringen.",
    aktiv: false,
  },
  {
    frage: "Wie hoch sind die Studiengebühren?",
    antwort: "An der FH Kiel fällt nur ein Semesterbeitrag an, keine zusätzlichen Studiengebühren!",
    aktiv: false,
  },
  {
    frage: "Welche Studiengänge werden angeboten?",
    antwort: "Technik, Wirtschaft, Sozialwesen, Medien, Agrarwirtschaft – und viele mehr!",
    aktiv: false,
  },
  {
    frage: "Wann ist die Bewerbungsfrist?",
    antwort: "Für das Wintersemester meist bis 15. Juli, für das Sommersemester bis 15. Januar.",
    aktiv: false,
  },
  {
    frage: "Gibt es auch duale Studiengänge?",
    antwort: "Ja, wir bieten verschiedene duale Studiengänge in Kooperation mit Unternehmen an.",
    aktiv: false,
  },
])

const answerRefs = ref([]) // refs für alle Antwort-Elemente

// Array, das individuelle max-Heights der Antworten speichert
const answerHeights = ref([])

function toggle(index) {
  faqs.value[index].aktiv = !faqs.value[index].aktiv
  if (faqs.value[index].aktiv) {
    nextTick(() => {
      const el = answerRefs.value[index]
      if (el) {
        answerHeights.value[index] = el.scrollHeight + 40
      }
    })
  } else {
    answerHeights.value[index] = 0
  }
}

onMounted(() => {
  // Initial alle Höhen auf 0 setzen
  answerHeights.value = faqs.value.map(() => 0)
})
</script>

<style scoped>
.faq-container {
  max-width: 1100px;
  margin: 40px auto;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.faq-item {
  background: white;
  border-radius: 8px;
  margin-bottom: 15px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  overflow: hidden;
}

.faq-question {
  display: flex;
  align-items: center;
  width: 100%;
  background: #003366;
  color: white;
  font-weight: 700;
  padding: 15px 20px;
  font-size: 1.1rem;
  border: none;
  cursor: pointer;
  user-select: none;
  transition: background-color 0.3s ease;
  border-radius: 8px;
}

.faq-question:hover {
  background-color: #0059a6;
}

.arrow {
  display: inline-block;
  margin-right: 15px;
  transition: transform 0.3s ease;
  font-size: 1.3rem;
  line-height: 1;
  transform-origin: center;
}

.arrow.open {
  transform: rotate(90deg);
}

.faq-answer {
  font-size: 1rem;
  line-height: 1.5;
  color: #333;
  background: #f9f9f9;
  overflow: hidden;
  transition: max-height 0.4s ease, padding 0.4s ease;
  max-height: 0;
  padding-left: 20px;
  padding-right: 20px;
}
</style>
