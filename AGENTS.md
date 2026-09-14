cat > ~/pagina_web/AGENTS.md << 'EOF'
# AGENTS.md — Web Development Standards

## Project Overview
Web development project using modern frontend technologies.

## Tech Stack
- TypeScript / JavaScript
- React / Vite
- HTML5 / CSS3
- Node.js

## Code Standards

### General
- Use TypeScript over JavaScript whenever possible
- Use functional components, never class components
- Keep functions small — max 30 lines
- One component per file
- Use meaningful variable and function names in English

### Naming Conventions
- Components: PascalCase (`UserCard.tsx`)
- Functions/variables: camelCase (`getUserData`)
- Constants: UPPER_SNAKE_CASE (`API_BASE_URL`)
- CSS classes: kebab-case (`user-card`)
- Files: PascalCase for components, camelCase for utilities

### File Structure
- Components in `src/components/`
- Pages in `src/pages/`
- Hooks in `src/hooks/`
- Utils in `src/utils/`
- Types in `src/types/`

### Best Practices
- Always handle loading and error states
- Use custom hooks to extract reusable logic
- Never hardcode strings — use constants or env variables
- Always type props and function returns
- Use async/await over .then() chains
- Destructure props in function parameters
- Add comments only when the "why" is not obvious

### CSS / Styling
- Mobile-first responsive design
- Use CSS modules or Tailwind CSS
- Avoid inline styles except for dynamic values
- Use CSS variables for colors and spacing

### Git
- Conventional commits: feat:, fix:, refactor:, docs:, chore:
- One feature per branch
- Keep commits small and focused

### Testing
- Write tests for business logic and critical paths
- Use descriptive test names that explain the expected behavior

## Agent Instructions
- Always explain changes before making them
- Ask before deleting or overwriting existing files
- Prefer editing existing files over creating new ones
- Run lint and type-check before considering a task done
- When fixing a bug, explain the root cause
EOF
