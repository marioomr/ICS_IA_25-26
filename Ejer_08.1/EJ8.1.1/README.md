# EJERCICIO 1 – Carrito de la Compra Interactivo

**1. ¿Por qué `useReducer` y no varios `useState`?**  
`useReducer` centraliza toda la lógica del carrito.  
Si usaras `useState` por separado para items y total, cada cambio de cantidad requeriría actualizar ambos estados y sincronizarlos manualmente, aumentando la complejidad y riesgo de errores.

**2. Re-render de componentes no relacionados (ej. BotonPromocion):**  
Probablemente se pasan funciones nuevas como props a cada render.  
- Solución: memoizar con `useCallback` las funciones que se pasan a los hijos.  
- Confirmación: usar React DevTools → Highlight updates para ver qué componentes se re-renderizan.