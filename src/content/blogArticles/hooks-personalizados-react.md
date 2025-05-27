---
title: "Hooks personalizados: cuándo y cómo crearlos en React"
author: "devlog"
img: "/images/react-custom-hooks.png"
readtime: "4 min"
description: "Los hooks personalizados son poderosos, pero no siempre necesarios. Compartimos cómo detectarlos y escribirlos bien para mejorar tu código."
date: "2025-05-23"
tags: ["react", "hooks", "custom-hooks", "buenas prácticas", "frontend"]
---

Los hooks personalizados nos permiten extraer lógica repetida y compartirla fácilmente. Pero crear un hook solo porque podemos, sin necesidad, puede complicar el código en vez de mejorarlo.

## ¿Cuándo crear un hook personalizado?

- Cuando tenés lógica que se repite en varios componentes.
- Cuando querés abstraer efectos o estados complejos.
- Para mejorar la legibilidad y separar responsabilidades.

## Ejemplo simple: contador reutilizable

```tsx
import { useState, useEffect } from "react";

function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  useEffect(() => {
    console.log("El contador cambió:", count);
  }, [count]);

  const increment = () => setCount((c) => c + 1);
  const decrement = () => setCount((c) => c - 1);
  const reset = () => setCount(initialValue);

  return { count, increment, decrement, reset };
}

export default useCounter;
```

## Cómo usar el hook

```tsx
import React from "react";
import useCounter from "./useCounter";

function CounterComponent() {
  const { count, increment, decrement, reset } = useCounter(10);

  return (
    <div>
      <p>Contador: {count}</p>
      <button onClick={increment}>Sumar</button>
      <button onClick={decrement}>Restar</button>
      <button onClick={reset}>Reiniciar</button>
    </div>
  );
}
```

Crear hooks personalizados con sentido mejora la mantenibilidad y la claridad del código. Pero no abuses, siempre evaluá si aporta valor.
