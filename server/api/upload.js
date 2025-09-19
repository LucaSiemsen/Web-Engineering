import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  'https://eerzdodlszahdqgldhms.supabase.co',
  process.env.SUPABASE_SERVICE_ROLE_KEY
)

export default defineEventHandler(async (event) => {
  const body = await readMultipartFormData(event)
  const file = body.find((part) => part.name === 'file')

  if (!file) {
    return { statusCode: 400, message: 'Keine Datei erhalten.' }
  }

  const fileName = `bewerbung-uploads/${Date.now()}_${file.filename}`

  const { error } = await supabase.storage
    .from('bewerbungsunterlagen')
    .upload(fileName, file.data, {
      contentType: file.type,
      upsert: false
    })

  if (error) {
    console.error('Upload fehlgeschlagen:', error)
    return { statusCode: 500, message: 'Upload fehlgeschlagen.' }
  }

  return {
    message: 'Upload erfolgreich',
    path: fileName
  }
})
