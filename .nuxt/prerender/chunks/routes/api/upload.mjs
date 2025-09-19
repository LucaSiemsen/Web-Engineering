import { defineEventHandler, readMultipartFormData } from 'file://C:/Users/lucas/Desktop/Studium/8.%20Semester/Web-Engineering/Abgabe_Web/node_modules/h3/dist/index.mjs';
import { createClient } from 'file://C:/Users/lucas/Desktop/Studium/8.%20Semester/Web-Engineering/Abgabe_Web/node_modules/@supabase/supabase-js/dist/main/index.js';

const supabase = createClient(
  "https://eerzdodlszahdqgldhms.supabase.co",
  process.env.SUPABASE_SERVICE_ROLE_KEY
);
const upload = defineEventHandler(async (event) => {
  const body = await readMultipartFormData(event);
  const file = body.find((part) => part.name === "file");
  if (!file) {
    return { statusCode: 400, message: "Keine Datei erhalten." };
  }
  const fileName = `bewerbung-uploads/${Date.now()}_${file.filename}`;
  const { error } = await supabase.storage.from("bewerbungsunterlagen").upload(fileName, file.data, {
    contentType: file.type,
    upsert: false
  });
  if (error) {
    console.error("Upload fehlgeschlagen:", error);
    return { statusCode: 500, message: "Upload fehlgeschlagen." };
  }
  return {
    message: "Upload erfolgreich",
    path: fileName
  };
});

export { upload as default };
//# sourceMappingURL=upload.mjs.map
