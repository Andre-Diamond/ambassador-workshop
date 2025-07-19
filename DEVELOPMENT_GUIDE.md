# Cardano Ambassador Workshop - Development Guide

## Project Overview

This is a modern, minimal website for the Cardano Ambassador Workshop built with Next.js 14, TypeScript, and Tailwind CSS. The site features Apple's liquid glass design language with organic paper grain textures and sophisticated glassmorphism effects.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel-optimized
- **Design System**: Apple Liquid Glass + Custom Grain Textures

## Architecture Overview

### File Structure
```
├── app/
│   ├── components/
│   │   ├── Header.tsx       # Glass navigation header
│   │   └── Footer.tsx       # Glass footer
│   ├── about/
│   │   └── page.tsx         # About page
│   ├── contact/
│   │   └── page.tsx         # Contact page
│   ├── globals.css          # Design system + background textures
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Homepage
├── public/                  # Static assets
├── tailwind.config.js       # Tailwind configuration
├── next.config.js           # Next.js configuration
└── package.json             # Dependencies
```

### Key Configuration Files

**next.config.js**
- Configured for static export (`output: 'export'`)
- Vercel deployment optimized
- Unoptimized images for static export

**tailwind.config.js**
- Custom colors: `dark-red` (#8B0000), `dark-red-hover` (#A00000)
- Removed original Cardano brand colors
- Extended with glassmorphism utilities

## Design System

### Color Palette
- **Primary Background**: Pure white with organic grain texture
- **Accent Color**: Dark red (#8B0000) for buttons and borders
- **Text**: Black headings, gray-700 body text
- **Glass Elements**: Translucent white with subtle red tinting

### Background Texture System

The entire site uses a sophisticated multi-layer background texture applied to the `body` element:

1. **Gradient Overlays**: Corner shadows and directional lighting
2. **Fine Grain Texture**: 34 micro-particles for organic paper feel
3. **Vignette Effects**: Soft edge darkening
4. **Fixed Positioning**: Consistent texture across all sections

**Implementation Location**: `app/globals.css` (body element)

### Apple Liquid Glass Design System

#### Glass Components Classes

**`.glass-button-primary`**
- Dark red translucent background with glass effect
- Backdrop blur (20px)
- Shimmer animation on hover
- Lift effect (-2px translateY)

**`.glass-button-secondary`**
- Clear glass with red border
- Transforms to filled red on hover
- Smooth color transitions

**`.glass-card`**
- Translucent white background
- 20px border radius
- Hover lift effect (-4px translateY)
- Layered shadow system

**`.glass-header`**
- Frosted glass navigation
- Subtle border-bottom
- Backdrop blur with white tinting

**`.glass-footer`**
- Matches header but with border-top
- Upward shadow for depth

#### Glass Effect Technical Details
- **Backdrop Filter**: 20px blur for authentic glass
- **Layered Shadows**: Multiple shadow layers for depth
- **Gradient Backgrounds**: Linear gradients with transparency
- **Smooth Animations**: Cubic-bezier easing curves
- **Inset Highlights**: White inset borders for glass reflections

## Component Architecture

### Header Component (`app/components/Header.tsx`)
- Uses `.glass-header` class
- Responsive navigation with hidden mobile menu
- Dark red hover states for navigation links
- Clean, minimal logo text

### Footer Component (`app/components/Footer.tsx`)
- Uses `.glass-footer` class
- Centered copyright text
- Consistent styling with header

### Page Components
- **Homepage**: Hero section + 3-card grid layout
- **About/Contact**: Single glass card with content
- All pages use transparent backgrounds (texture comes from body)

## Development Patterns

### Styling Approach
1. **No Individual Backgrounds**: All sections use `bg-white` which is set to transparent
2. **Unified Texture**: Single background texture applied to body element
3. **Glass Over Texture**: All interactive elements use glass classes
4. **Consistent Spacing**: Tailwind spacing utilities throughout

### Component Patterns
- Use `glass-card` for content containers
- Use `glass-button-primary` for main actions
- Use `glass-button-secondary` for secondary actions
- Maintain consistent padding (p-8 for cards)
- Use semantic HTML structure

### Color Usage
- **Headings**: `text-black`
- **Body Text**: `text-gray-700`
- **Interactive Elements**: Dark red variants
- **Glass Borders**: `rgba(139,0,0,0.2)` for cards, `rgba(139,0,0,0.1)` for headers

## Key Implementation Details

### Background Texture Generation
The organic paper grain is created using:
- 10 fine micro-grain radial gradients (0.2px-0.35px)
- 6 medium-grain elliptical gradients (0.4px-0.8px)
- 4 gradient overlays for depth (corner shadows)
- 1 directional linear gradient (135deg)
- 1 vignette effect for edge darkening

### Glass Effect Implementation
- **Backdrop Blur**: `backdrop-filter: blur(20px)`
- **Gradient Backgrounds**: Semi-transparent linear gradients
- **Layered Shadows**: 3-4 shadow layers per element
- **Smooth Transitions**: 0.3s cubic-bezier animations
- **Hover Transforms**: translateY and shadow enhancements

## Future Development Guidelines

### Adding New Components
1. Use existing glass classes for consistency
2. Follow the established color palette
3. Maintain the transparent background pattern
4. Add hover effects for interactive elements

### Extending the Design System
- Add new `.glass-*` classes to `globals.css`
- Follow the established pattern: gradient background + backdrop blur + layered shadows
- Use the same transition timing and easing curves
- Maintain the organic, premium aesthetic

### Content Expansion
- Use `.glass-card` for new content sections
- Maintain the minimal, clean structure
- Add new pages following the existing pattern
- Keep the three-column grid layout for feature sections

### Performance Considerations
- Background texture is applied once to body (efficient)
- Glass effects use CSS transforms (hardware accelerated)
- Minimal JavaScript footprint
- Optimized for static export and CDN delivery

## Browser Support
- **Backdrop Filter**: Modern browsers (Chrome 76+, Firefox 103+, Safari 9+)
- **Graceful Degradation**: Fallback backgrounds for older browsers
- **Mobile Optimized**: Responsive design with proper touch targets

## Deployment
- Configured for Vercel deployment
- Static export enabled
- Automatic builds on git push
- CDN optimized assets

## Design Philosophy
- **Minimalism**: Clean, uncluttered interface
- **Premium Feel**: Glass effects and organic textures
- **Accessibility**: Good contrast ratios and semantic HTML
- **Performance**: Efficient CSS-only effects
- **Scalability**: Consistent design system for future expansion

This architecture provides a solid foundation for a modern, premium website that can be easily extended while maintaining consistency and performance. 