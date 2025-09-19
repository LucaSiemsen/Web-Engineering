import { createClient } from '@supabase/supabase-js'

// Supabase-Client mit Service Role Key, damit die API schreiben darf
const supabaseUrl = process.env.SUPABASE_URL
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

export default defineEventHandler(async (event) => {
  try {
    // Body vom POST-Request lesen
    const body = await readBody(event)

    // Pflichtfelder validieren
    if (!body.name || !body.email || !body.betreff || !body.nachricht) {
      return sendError(event, createError({ statusCode: 400, statusMessage: 'Bitte alle Pflichtfelder ausfüllen' }))
    }

    // Insert in die Supabase Tabelle 'kontakte'
    const { error } = await supabase.from('kontakte').insert([
      {
        name: body.name,
        email: body.email,
        telefon: body.telefon || null,
        betreff: body.betreff,
        nachricht: body.nachricht,
        erstellt_am: new Date().toISOString()
      }
    ])

    if (error) {
      return sendError(event, createError({ statusCode: 500, statusMessage: 'Fehler beim Speichern: ' + error.message }))
    }

    return { message: 'Nachricht erfolgreich gesendet' }
  } catch (err) {
    return sendError(event, createError({ statusCode: 500, statusMessage: 'Serverfehler' }))
  }
})
