# Quick Reference Guide

## Glass Design Classes

### Buttons
```html
<!-- Primary action button -->
<button className="glass-button-primary px-8 py-3">Get Started</button>

<!-- Secondary action button -->
<button className="glass-button-secondary px-8 py-3">Learn More</button>
```

### Cards
```html
<!-- Content card -->
<div className="glass-card p-8">
  <h3 className="text-xl font-semibold text-black mb-4">Title</h3>
  <p className="text-gray-700">Content</p>
</div>
```

### Layout Components
```html
<!-- Header -->
<header className="glass-header">...</header>

<!-- Footer -->
<footer className="glass-footer">...</footer>
```

## Color Palette
- **Text Colors**: `text-black`, `text-gray-700`
- **Accent Colors**: `text-dark-red`, `hover:text-dark-red`
- **Backgrounds**: `bg-white` (transparent), glass classes for interactives

## Common Patterns

### Page Structure (with Sticky Footer)
```jsx
export default function Page() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="py-16 bg-white flex-grow">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-black mb-8">Title</h1>
          <div className="glass-card p-8">
            {/* Content */}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
```

### Three-Column Grid
```jsx
<div className="grid md:grid-cols-3 gap-8">
  <div className="glass-card p-8">...</div>
  <div className="glass-card p-8">...</div>
  <div className="glass-card p-8">...</div>
</div>
```

## Design System Rules
1. **Always use glass classes** for interactive elements
2. **Use transparent backgrounds** for sections (`bg-white`)
3. **Consistent spacing**: `p-8` for cards, `py-16` for sections
4. **Text hierarchy**: `text-black` for headings, `text-gray-700` for body
5. **Hover effects**: All interactive elements should have hover states
6. **Sticky footer**: Use `flex flex-col` on container, `flex-grow` on main

## File Locations
- **Design System**: `app/globals.css`
- **Components**: `app/components/`
- **Pages**: `app/[page]/page.tsx`
- **Config**: `tailwind.config.js`, `next.config.js`

## Development Commands
```bash
npm install          # Install dependencies
npm run dev         # Start development server
npm run build       # Build for production
npm run lint        # Run ESLint
``` 