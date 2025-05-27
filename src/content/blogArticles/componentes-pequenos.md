---
title: "Componentes pequeños escalan mejor"
author: "devlog"
img: "/images/componentes-pequenos.png"
readtime: "4 min"
description: "Dividir componentes no es solo por legibilidad. Es por mantenibilidad, testing y performance. Así me di cuenta en un proyecto real."
date: "2025-05-20"
tags: ["react", "arquitectura", "componentes", "escalabilidad"]
---

Una vez trabajé en una app donde cada archivo de componente tenía más de 300 líneas. Todo estaba ahí: lógica, layout, estilos, manejo de errores... Lo peor es que nadie quería tocarlos.

Desde entonces me puse una regla: **si algo no se puede entender en un vistazo, se divide.**

## Antes (todo mezclado)

```tsx
function UserProfile({ user }) {
  const avatar = user.image ? user.image : "/placeholder.png";

  return (
    <div className="user-card">
      <img src={avatar} alt="avatar" className="avatar" />
      <div>
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
    </div>
  );
}
```
