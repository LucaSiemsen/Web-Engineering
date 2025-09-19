import { defineEventHandler, readBody, sendError, createError } from 'file://C:/Users/lucas/Desktop/Studium/8.%20Semester/Web-Engineering/Web-Engineering_repo/node_modules/h3/dist/index.mjs';
import { createClient } from 'file://C:/Users/lucas/Desktop/Studium/8.%20Semester/Web-Engineering/Web-Engineering_repo/node_modules/@supabase/supabase-js/dist/main/index.js';

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);
const kontakt_post = defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    if (!body.name || !body.email || !body.betreff || !body.nachricht) {
      return sendError(event, createError({ statusCode: 400, statusMessage: "Bitte alle Pflichtfelder ausf\xFCllen" }));
    }
    const { error } = await supabase.from("kontakte").insert([
      {
        name: body.name,
        email: body.email,
        telefon: body.telefon || null,
        betreff: body.betreff,
        nachricht: body.nachricht,
        erstellt_am: (/* @__PURE__ */ new Date()).toISOString()
      }
    ]);
    if (error) {
      return sendError(event, createError({ statusCode: 500, statusMessage: "Fehler beim Speichern: " + error.message }));
    }
    return { message: "Nachricht erfolgreich gesendet" };
  } catch (err) {
    return sendError(event, createError({ statusCode: 500, statusMessage: "Serverfehler" }));
  }
});

export { kontakt_post as default };
//# sourceMappingURL=kontakt.post.mjs.map
