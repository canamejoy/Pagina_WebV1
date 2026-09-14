# Diseño: Página Web Personal

## Arquitectura del Proyecto

```
pagina_web/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── TechnicalSkills.jsx
│   │   ├── Experience.jsx
│   │   ├── Education.jsx
│   │   ├── Certifications.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── data/
│   │   └── profileData.js
│   ├── styles/
│   │   └── globals.css
│   ├── App.jsx
│   └── index.js
├── package.json
├── tailwind.config.js
└── postcss.config.js
```

## Paleta de Colores

```javascript
colors: {
  dark: {
    900: '#0a0a0a',    // Fondo principal
    800: '#111827',    // Fondo secundario
    700: '#1f2937',    // Fondo tarjetas
    600: '#374151',    // Bordes
  },
  accent: {
    blue: '#3b82f6',   // Acento principal
    cyan: '#06b6d4',   // Acento secundario
    purple: '#8b5cf6', // Acento terciario
  }
}
```

## Estructura de Componentes

### 1. Header.jsx
- Navbar fija en la parte superior
- Logo/nombre a la izquierda
- Links de navegación a la derecha
- Efecto de blur en scroll

### 2. Hero.jsx
- Nombre grande con gradiente
- Títulos con typewriter effect sutil
- Links a redes sociales
- Botón de contacto

### 3. About.jsx
- Foto de perfil (placeholder)
- Resumen profesional
- Estadísticas clave (años exp, proyectos, etc.)

### 4. Skills.jsx
- Grid de habilidades blandas
- Iconos representativos
- Efecto hover con escala

### 5. TechnicalSkills.jsx
- Categorías expandibles
- Tags/badges para cada skill
- Colores por categoría

### 6. Experience.jsx
- Timeline vertical
- Cards para cada posición
- Fechas y descripciones

### 7. Education.jsx
- Cards para cada título
- Institución y año
- Icono de graduación

### 8. Certifications.jsx
- Grid de badges/cards
- Icono de la plataforma
- Enlace opcional

### 9. Contact.jsx
- Formulario simple (nombre, email, mensaje)
- Links a redes sociales
- Información de contacto

### 10. Footer.jsx
- Copyright
- Links rápidos
- Redes sociales

## Datos Estructurados (profileData.js)

```javascript
export const profileData = {
  personal: {
    name: "Carlos Andrés Canamejoy Alegría",
    titles: ["Generative AI", "LLMs & Agentic AI", "Deep Learning", "Computer Vision"],
    location: "Manizales, Colombia",
    phone: "+57 320 979 5324",
    email: "andrescaliche2@gmail.com",
    github: "github.com/canamejoy",
    linkedin: "linkedin.com/in/canamejoy"
  },
  profile: "...",
  skills: [...],
  technicalSkills: {...},
  experience: [...],
  education: [...],
  languages: [...],
  certifications: [...],
  references: [...]
}
```

## Dependencias

```json
{
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "react-scripts": "5.0.1",
  "lucide-react": "^0.263.1",
  "tailwindcss": "^3.3.3",
  "autoprefixer": "^10.4.14",
  "postcss": "^8.4.27"
}
```

## Flujo de Datos

1. `profileData.js` contiene toda la información estática
2. Cada componente importa los datos que necesita
3. Los componentes se renderizan en `App.jsx`
4. Tailwind CSS maneja los estilos
5. Lucide React proporciona los iconos
