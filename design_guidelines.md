# Knockturn Private Limited - Design Guidelines

## Design Approach
**Reference-Based + Custom Animated Approach**: Draw inspiration from modern property/tech platforms (Behance, Awwwards showcases) combined with professional product management aesthetics. Focus on high-end, futuristic presentation with electric blue radiance against deep black backgrounds.

## Color Palette
- **Primary Black**: #000000 (main background)
- **Electric Blue**: #007BFF (accents, glows, CTAs)
- **Cool White**: #E6E6E6 (text, contrast elements)
- **Gradients**: Radiant gradients combining black-to-electric-blue, glowing overlays, and soft blue halos around interactive elements

## Typography
- **Primary Font**: Poppins (modern, clean, professional)
- **Secondary Font**: Montserrat (headings, emphasis)
- **Hierarchy**: 
  - Hero headlines: 48-72px, bold weight
  - Section titles: 32-48px, semibold
  - Body text: 16-18px, regular weight
  - Subtitles with parallax hover effects

## Layout System
- **Spacing**: Tailwind units of 4, 8, 12, 16, 20, 24 for consistent rhythm
- **Container**: max-w-7xl for content sections
- **Section Padding**: py-20 to py-32 on desktop, py-12 on mobile
- **Full-bleed**: Background effects and gradients extend edge-to-edge

## Logo Integration
Use the uploaded Knockturn logo image prominently in:
- Navigation bar (top-left, 120-150px width)
- Footer branding
- Preloader animation sequence
- Maintain logo visibility with appropriate contrast against black backgrounds

## Core Components & Animations

### Navigation
- Fixed top navigation with glassmorphism effect (backdrop-blur)
- Logo on left, menu items center/right
- Smooth scroll-triggered opacity changes
- Mobile: Animated hamburger menu with slide-in overlay

### Hero Section (Home)
- Full-viewport height (100vh) with 3D animated background
- Floating geometric shapes (cubes, spheres) with subtle rotation
- Parallax scrolling layers: background particles, mid-ground shapes, foreground content
- Radiant blue glow emanating from center
- Large headline with fade-in + scale-up animation
- Dual CTAs: "Explore Services" and "Contact Us" with glowing blue hover states

### Service Cards (Services Page - 5 Subcategories)
Each card (Invest, Commercial, Residential, Tenant, Design Services):
- 3D tilt effect on hover using Framer Motion
- Glassmorphism background with blue gradient borders
- Icon with electric blue glow at top
- Hover: Scale 1.05, increase glow intensity, reveal "Learn More" CTA

### Client Stories
- Interactive carousel with smooth slide transitions
- Motion cards with gradient overlays (black-to-transparent-blue)
- Hover: Lift effect with enhanced blue outline glow
- Client photo/logo, quote text, and project details

### Industry Cards
- Grid layout with 3D animated icons (tilt on hover)
- Staggered entrance animations (fade-in-up, 100ms delay between cards)
- Each card has industry icon, title, and brief description
- Electric blue accent line on hover

### Insights/Blog Section
- Parallax scrolling background with floating particles
- Dynamic cards with hover scaling (1.03)
- Featured article with large image and blue gradient overlay
- Date badges with glowing blue background

### Contact Page
- Animated contact form with focus states (blue glow on active input)
- Google Maps embed with custom blue marker styling
- Director/Co-Director info cards with subtle animations
- Social media icons with rotation hover effect

## Animation Strategy

### Framer Motion Implementations
- **Scroll-triggered**: Fade-in, slide-up, scale animations as sections enter viewport
- **Hover effects**: Scale, glow intensity, tilt (3D transform)
- **Page transitions**: Smooth fade between routes
- **Staggered children**: Cards animate in sequence with 50-100ms delays
- **Parallax**: Use transform3d for depth layers (background slower than foreground)

### Preloader
- Animated Knockturn logo with blue pulse effect
- Geometric loading shapes rotating
- Smooth fade-out revealing homepage (1-2 second duration)

### Subtle 3D Effects
- Floating geometric shapes in hero background (very subtle movement)
- Card tilt on mouse position (transform: rotateX/rotateY)
- Layered parallax with transform3d for depth perception
- Keep animations smooth (avoid janky/excessive motion)

## Glassmorphism Elements
- Cards: `backdrop-blur-md`, semi-transparent black backgrounds (rgba(0,0,0,0.4))
- Blue gradient borders (1-2px)
- Soft inner glow using box-shadow with blue tint
- Apply to: service cards, testimonial cards, form containers, navigation

## Floating Particles
- Homepage hero: Small blue dots with random floating motion
- Insights page background: Subtle particle field
- Use canvas or CSS animations for performance
- Particles should be very subtle, not distracting

## Responsive Behavior
- **Desktop**: Full 3D effects, complex parallax, multi-column grids
- **Tablet**: Reduce 3D intensity, 2-column layouts, maintain animations
- **Mobile**: Single column, simplified parallax (vertical only), touch-optimized interactions
- All pages must be fully responsive with breakpoints at sm, md, lg, xl

## Images
- **Hero Section**: Use abstract 3D rendered imagery or geometric blue/black compositions (NOT photographic - keep it digital/futuristic)
- **Services**: Icon-based, not image-heavy (use SVG icons with blue glow)
- **Client Stories**: Client logos or headshots if available
- **Industries**: Industry-specific iconography
- **About/Careers**: Team photos or office environment (if applicable)
- **Insights**: Article featured images with blue gradient overlays

## Button Styling
All CTAs with blurred backgrounds when on images:
- Background: `backdrop-blur-lg` with rgba(0,123,255,0.15)
- Border: 1px solid electric blue with glow
- Padding: px-8 py-4
- Hover: Increase glow, slight scale (1.05)
- No custom hover states for blur buttons - standard Button component handles all interactions

## Footer
- Multi-column layout: Company info, Quick links, Contact, Social media
- Newsletter subscription with animated input (blue focus glow)
- Social icons with electric blue on hover
- Copyright and director information
- Glassmorphism background treatment