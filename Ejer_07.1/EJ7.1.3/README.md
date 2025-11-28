# Ejercicio 3 – Botón de limpiar errores que recrea todo

## 1. Problema inicial
- Cada vez que se agrega o limpia un error, todos los ToastItem se re-renderizan.
- Console.log muestra que cada item se renderiza innecesariamente.
- Profiler confirma render innecesario de todos los ToastItem.

## 2. Código antes de optimizar
- App.jsx: funciones inline para onClose.
- ToastContainer.jsx y ToastItem.jsx sin memoización.
- Resultado: todos los ToastItem re-renderizan.

## 3. Optimización realizada
- Uso `useCallback` para que la función onClose sea estable.
- Uso `React.memo` en ToastContainer y ToastItem.
- Ahora solo se renderiza el Toast afectado por la acción (el que se elimina).

## 4. Código después de optimizar
- Ver `App.jsx`, `ToastContainer.jsx` y `ToastItem.jsx` optimizados.

## 5. Capturas de Profiler
- Antes de optimizar:
![Profiler antes](assets/cap3.2.png)
- Después de optimizar:
![Profiler después](assets/profiler3_after.png)

## 6. Explicación
- Las funciones inline crean nuevas referencias en cada render → todos los hijos que dependen de ella vuelven a renderizar.
- `useCallback` mantiene la misma referencia entre renders.
- `React.memo` evita renderizar hijos que no cambian.
