# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Development server**: `npm run dev` or `yarn dev` - starts Next.js dev server on http://localhost:3000
- **Build**: `npm run build` - builds the application for production
- **Start production**: `npm run start` - starts the production server
- **Lint**: `npm run lint` - runs ESLint with Next.js configuration

## Architecture Overview

This is a Next.js 13.4 wedding invitation website platform that supports multi-tenant architecture through subdomains. The application creates personalized wedding invitation sites for different couples.

### Key Architecture Patterns

**Multi-Tenant Structure**: The app uses subdomain-based routing via middleware (currently commented out in `src/middleware.js`) to serve different wedding sites. The `src/pages/_sites/[subdomain]/index.jsx` handles dynamic subdomain routing.

**Template System**: Wedding invitation templates are stored in `src/components/template/` with each template having its own data structure and components. Template 002 serves as the main template with complete wedding invitation features.

**Dual Component Architecture**: The codebase maintains two component directories:
- `src/components/` - Original components
- `src/components2/` - Updated/refactored versions (used by active templates)

**Data-Driven Templates**: Each template uses local `dummyData` objects containing all wedding information (couple details, events, venue, media) that can be easily customized per client.

### Core Features

- **Audio Integration**: Auto-playing background music using `react-use-audio-player`
- **Dynamic Loading**: Components use Next.js dynamic imports for performance
- **Responsive Design**: TailwindCSS with custom wedding-themed configurations
- **Media Support**: Video backgrounds, image galleries, and audio soundtracks
- **Interactive Elements**: RSVP forms, gift information, countdown timers, and social sharing
- **QR Code Generation**: Landing page and footer sections include QR code functionality for invitation sharing
- **Gesture Controls**: Swipe-up gestures to open invitations with proper event handling to prevent conflicts with interactive elements
- **Tabbed Gift System**: Wedding gift section supports multiple payment methods (bank transfer and WhatsApp flower ordering)

### File Structure Highlights

- `src/pages/[couple-name]/index.js` - Individual wedding sites
- `src/constants/meta.js` - Meta configurations
- `src/hooks/useCountdown.js` - Wedding countdown functionality
- `src/global/QrCodeGenerator.jsx` - QR code generation utility
- `public/assets/` - Shared design assets (SVGs, images)
- `public/[couple-name]/` - Couple-specific media files

### Styling Configuration

Custom TailwindCSS setup includes wedding-specific colors, fonts (Bethaine, Libre Caslon, Crimson Text), and background images. The configuration supports multiple couple themes through background image utilities.

### Component Interaction Patterns

**QR Code Integration**: Both `LandingPage` and `FooterSection` components include QR code modals using the `QrCodeGenerator` component. Pass `uuid` prop to enable QR code functionality.

**Gift System Data Structure**: The gift object in template data supports both bank transfers and WhatsApp flower ordering:
```js
gift: {
  message: 'Gift message',
  bank: { name, accountNumber, accountOwner },
  flowerBoard: { whatsappNumber, displayNumber, message }
}
```

**Gesture Handling**: Landing page swipe gestures use movement detection to distinguish between clicks and actual swipes. Interactive elements (buttons) prevent swipe activation through event stopping.

### Development Notes

The middleware contains subdomain routing logic that's currently disabled. When working with multi-tenant features, uncomment and configure the middleware in `src/middleware.js` for proper subdomain handling.

When modifying interactive elements in the landing page, ensure proper event handling to prevent conflicts with swipe gestures by using `e.stopPropagation()` on click handlers.