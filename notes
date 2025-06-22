- The virtual DOM is now used minimally in React; it’s no longer the core update mechanism.
- `createRoot` is used to create a root for rendering React components into a browser DOM node.
- React compares its own DOM with the main DOM and only updates the changed parts, improving performance compared to repainting the whole DOM.
- The virtual DOM creates a tree structure, compares it with the real DOM, and updates only the changed parts.
- The React team realized not every UI update needs to be immediate, leading to the introduction of hooks.

- Key document: [React Fiber Architecture](https://github.com/acdlite/react-fiber-architecture)

**Key Features of React Fiber:**
  1. Ability to pause, abort, and reuse work as new updates come in.
  2. Assign priority to different types of updates.
  3. New concurrency primitives.

**Hydration:**
- When JavaScript is loaded on the site, it helps with hydration (making server-rendered HTML interactive).

**Recommended Resources:**
- React Components, Elements, and Instances: Understand the differences.
- Reconciliation: Learn about React’s reconciliation algorithm.
- React Basic Theoretical Concepts: Conceptual model of React.
- React Design Principles: Especially the section on scheduling and React Fiber.

**Diffing and Keys:**
- List diffing uses keys. Keys must be stable, predictable, and unique.

**Scheduling and Updates:**
1. Not every UI update needs to be immediate; unnecessary updates can hurt performance.
2. Different updates have different priorities (e.g., animations vs. data updates).
3. Push-based scheduling: The app decides when to update.
4. Pull-based scheduling: React decides when to update for better efficiency.

**Goals of React Fiber Scheduling:**
1. Pause work and resume later.
2. Assign priority to different work.
3. Reuse previously completed work.
4. Abort work if it’s no longer needed.


**React Fiber Summary:**
- Fiber is React’s new reconciliation engine, enabling incremental rendering.
- Allows React to split rendering work into chunks and spread it over multiple frames.
- Improves responsiveness by letting high-priority updates interrupt low-priority ones.

**Concurrency in React:**
- Enables features like Suspense and concurrent rendering.
- React can prepare multiple versions of the UI at the same time.

**Best Practices:**
- Use stable, unique keys for list items to help React track changes efficiently.
- Prefer pull-based scheduling for smoother user experiences.
- Optimize component updates to avoid unnecessary re-renders.

**Further Reading:**
- Official React docs on [Reconciliation](https://react.dev/learn/reconciliation).
-