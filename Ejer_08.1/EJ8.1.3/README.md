# EJERCICIO 3 – Editor de Temas de UI

**Decisiones de Estado vs. Memoización:**  

- Se usa `useMemo` dentro de `CardPreview` para calcular `shadowColor` a partir de `primaryColor`.  
- Ventajas de `useMemo`:
  - Mantiene el estado del `Context` limpio: no se almacena un valor derivado en el reducer.
  - Evita cálculos repetidos en cada render, solo se recalcula cuando `primaryColor` cambia.
