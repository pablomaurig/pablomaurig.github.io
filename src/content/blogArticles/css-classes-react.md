---
title: "¿Vale la pena usar clases de CSS en React?"
author: "devlog"
img: "/images/css-classes-react.png"
readtime: "3 min"
description: "Volver a las clases CSS puede ser una mejora en proyectos React grandes. Te cuento por qué dejé CSS-in-JS y qué aprendí."
date: "2025-05-20"
tags: ["react", "css", "frontend", "buenas prácticas"]
---

Cuando empecé con React, pensaba que lo "profesional" era tirar CSS-in-JS o usar styled-components para todo. Pero con el tiempo y proyectos grandes en producción, descubrí que usar clases CSS (sí, las de toda la vida) tiene mucho más sentido de lo que parece.

## ¿Por qué volví a usar clases?

- Mejor rendimiento en apps grandes: menos JS para renderizar estilos.
- Autonomía del equipo de diseño: pueden trabajar sin meterse en JS.
- Integración más fácil con herramientas como Tailwind o PostCSS.

## Buenas prácticas si vas por este camino

Usá la librería `classnames` para componer clases de forma condicional sin romper la cabeza:

```tsx
import classNames from "classnames";

function Button({ isPrimary, isDisabled }) {
  return (
    <button
      className={classNames("btn", {
        "btn-primary": isPrimary,
        "btn-disabled": isDisabled,
      })}
    >
      Enviar
    </button>
  );
}
```

Y si estás usando Tailwind, no necesitás ni eso:

```tsx
function Alert({ type }) {
  const base = "p-4 rounded font-semibold";
  const styles = {
    success: "bg-green-100 text-green-800",
    error: "bg-red-100 text-red-800",
  };

  return (
    <div className={`${base} ${styles[type] || ""}`}>Esto es una alerta</div>
  );
}
```

No siempre lo nuevo es lo mejor. A veces, lo simple escala mejor.
