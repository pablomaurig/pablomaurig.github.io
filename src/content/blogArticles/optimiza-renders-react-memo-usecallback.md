---
title: "Optimiza tus renders en React con memo y useCallback"
author: "devlog"
img: "/images/react-memo-usecallback.png"
readtime: "4 min"
description: "Evita renders innecesarios usando React.memo y useCallback. Te cuento cuándo y cómo usarlos bien para mejorar performance."
date: "2025-05-21"
tags: ["react", "performance", "hooks", "memo", "usecallback"]
---

Cuando trabajás en React, una de las preocupaciones frecuentes es que tu componente se renderice más veces de las necesarias, afectando la performance, sobre todo en apps grandes o complejas.

React ofrece herramientas como `React.memo` y `useCallback` para mitigar esto, pero usarlas sin entender puede ser peor que no usarlas.

## ¿Cuándo usar React.memo?

`React.memo` memoriza un componente funcional y evita que se vuelva a renderizar si sus props no cambiaron.

```tsx
import React from "react";

const Button = React.memo(({ onClick, children }) => {
  console.log("Render Button");
  return <button onClick={onClick}>{children}</button>;
});

export default function App() {
  const [count, setCount] = React.useState(0);

  const increment = () => setCount((c) => c + 1);

  return (
    <>
      <Button onClick={increment}>Sumar</Button>
      <p>Contador: {count}</p>
    </>
  );
}
```

## ¿Y useCallback?

`useCallback` memoriza funciones, evitando que se creen en cada render. Esto ayuda a que los componentes hijos que dependen de esas funciones no se re-rendericen.

Pero ojo, si tu función no es pasada a un hijo memoizado, usar `useCallback` puede agregar complejidad innecesaria.

## Resumen rápido

- Usá `React.memo` para componentes puros que reciben props.
- Usá `useCallback` para funciones que se pasan a componentes memoizados.
- No sobreoptimices: mide siempre antes de aplicar.
