// --- Registrar usuario usando Fetch API (sin Axios) ---
// Envía un POST JSON a http://localhost:3000/api/users
// Retorna el cuerpo de la respuesta o lanza un error si algo falla.
export async function registrarUsuario(usuario, contrasena, nombre) {
  const url = 'http://localhost:3000/api/users/register';
  try {
    const resp = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: usuario, password: contrasena, nombre }),
    });

    if (!resp.ok) {
      const errData = await resp.json().catch(() => null);
      const msg = errData?.message || resp.statusText;
      throw new Error(`Registro fallido: ${msg}`);
    }

    return await resp.json().catch(() => null);
  } catch (er) {
    console.error('Error registrarUsuario:', er);
    throw er;
  }
}

