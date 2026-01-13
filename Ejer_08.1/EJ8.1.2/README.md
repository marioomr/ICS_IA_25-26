# EJERCICIO 2 – Dashboard de Tareas Multi-usuario

**1. ¿Por qué separar los contextos?**  
Separar evita renders innecesarios: cambiar de usuario no vuelve a renderizar todas las tareas, solo los componentes que usan AuthContext.

**2. Re-render de TaskItem al cambiar usuario:**  
Cada TaskItem lee `currentUser` del contexto, por eso se renderiza.  
- Solución: envolver TaskItem en `React.memo`  
- Mejor: pasar `canEdit` como prop desde TaskList para que dependa solo de props.
