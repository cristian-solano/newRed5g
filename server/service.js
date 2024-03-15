const express = require('express')
const cors = require('cors')
const app = express();

app.use(express.json())
app.use(cors())

// Datos de ejemplo
const documentos = [
    { id: 1, nombre: 'cédula de ciudadanía' },
    { id: 2, nombre: 'cédula de extranjería' },
    { id: 3, nombre: 'pasaporte' }
];

const personas = [
    { id: 1, usuario: "Omar Gonzales", numero_documento: '1011', contraseña: '2000', tipo_documento: 1 },
    { id: 2, usuario: "Omar Gonzales", numero_documento: '1012', contraseña: '2000', tipo_documento: 1 },
    { id: 3, usuario: "Luis Delgado", numero_documento: '2012', contraseña: '2000', tipo_documento: 2 }
];

const prestamos = [
    { persona: 1, id: 1, prestamo: 100000, intereses: 2400, total: 102400, pago: '2024-02-23' },
    { persona: 1, id: 2, prestamo: 200000, intereses: 4400, total: 204400, pago: '2024-02-19' },
    { persona: 1, id: 3, prestamo: 300000, intereses: 3400, total: 303400, pago: '2024-03-29' }
];

// Rutas
app.get('/', (req, res) => {
    res.send("API node");
});

// Obtener listado de documentos
app.get('/api/documentos', (req, res) => {
    res.send(documentos);
});

// Buscar documento por ID
app.get('/api/documentos/:id', (req, res) => {
    const documento = documentos.find(doc => doc.id === parseInt(req.params.id));
    if (!documento) return res.status(404).send("No se encontró este documento");
    res.send(documento);
});

// Obtener listado de personas con documentos y préstamos
app.get('/api/personas', (req, res) => {
    const personasConDocumentosYPrestamos = personas.map(persona => ({
        ...persona,
        documento: documentos.find(doc => doc.id === persona.documento),
        prestamos: prestamos.filter(prestamo => prestamo.persona === persona.id)
    }));
    res.send(personasConDocumentosYPrestamos);
});

// Buscar persona por ID
app.get('/api/personas/:id', (req, res) => {
    const persona = personas.find(per => per.id === parseInt(req.params.id));
    if (!persona) return res.status(404).send("No se encontró esta persona");
    const personaConDocumentoYPrestamos = {
        ...persona,
        documento: documentos.find(doc => doc.id === persona.documento),
        prestamos: prestamos.filter(prestamo => prestamo.persona === persona.id)
    };
    res.send(personaConDocumentoYPrestamos);
});

// Obtener listado de préstamos
app.get('/api/prestamos', (req, res) => {
    res.send(prestamos);
});

// Obtener préstamos por id
app.get('/api/prestamos/:id', (req, res) => {
    const prestamo = prestamos.find(prestamo => prestamo.id === parseInt(req.params.id));
    if (!prestamo) return res.status(404).send("No se encontró este prestamo");
    res.send(prestamo);
});

// Buscar préstamo por ID de persona
app.get('/api/prestamos/persona/:id', (req, res) => {
    const prestamosPersona = prestamos.filter(prestamo => prestamo.persona === parseInt(req.params.id));
    if (prestamosPersona.length === 0) return res.status(404).send("No se encontraron préstamos para esta persona");
    res.send(prestamosPersona);
});

app.post('/api/login', (req, res) => {
    // Obtener los datos de login del cuerpo de la solicitud
    const { userType, documentNumber } = req.body;

    // Buscar el usuario por el número de documento en la base de datos
    const user = personas.find(user => user.tipo_documento === parseInt(documentNumber));

    // Verificar si el usuario existe y si la contraseña es correcta
    if (!user) {
        return res.status(401).json({ error: 'Credenciales incorrectas' });
    }

    // Si las credenciales son válidas, enviar una respuesta con éxito
    res.json({ message: 'Inicio de sesión exitoso' });
});
const port = process.env.port || 8000;
    app.listen(port, () => console.log(`Escuchando en puerto ${port}...`))