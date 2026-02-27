// simple script to test user creation
(async () => {
  const body = { nombre: 'Pedro', apellidos: 'Perez', email: 'pedro@x.com', password: '1234' };
  try {
    const res = await fetch('http://localhost:3001/api/user', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    });
    console.log('status', res.status);
    const data = await res.text();
    console.log('data', data);
  } catch (err) {
    console.error('error', err);
  }
})();
