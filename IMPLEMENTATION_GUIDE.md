# AyurGenX Landing Page - Implementation Guide

## Project Structure

```
src/
├── components/
│   ├── NavBar.tsx                       # Sticky navigation with blur effect
│   ├── HeroSectionV2.tsx                # Auto-typing headline + animated tags
│   ├── EmotionalRelief.tsx              # Reassurance messaging
│   ├── WhatIsHBXV2.tsx                  # 4 pillars: Ayurveda, AI, Data, Personalization
│   ├── AyurvedaAIFusion.tsx             # 5000+ Years + AI visualization
│   ├── HowItWorksV2.tsx                 # 4-step process with animations
│   ├── DigitalBAMSDoctor.tsx            # Computer Vision diagnostics
│   ├── RealtimeMonitoring.tsx           # 24/7 wearable integration
│   ├── HybridIntelligenceEngine.tsx     # 4-stage SENSE→ANALYZE→SYNTHESIZE→ADAPT
│   ├── DataFusionVisualization.tsx      # CV Stream + Wearable Stream = Intelligence
│   ├── InteractiveDiagnosticScanner.tsx # Live scan simulator
│   ├── RealTimeTracking.tsx             # Adaptive examples
│   ├── ClosedLoop.tsx                   # Feedback loop visualization
│   ├── HBXStore.tsx                     # Product categories
│   ├── WhyItWorks.tsx                   # Comparison cards
│   ├── ScienceBacked.tsx                # Expert backing
│   ├── TransformationsV2.tsx            # Testimonials & results
│   ├── HBXPromise.tsx                   # Brand promises
│   ├── FinalCTA.tsx                     # Call-to-action
│   ├── Footer.tsx                       # Navigation & social
│   └── GradientOrb.tsx                  # Reusable blur orbs
│
├── hooks/
│   ├── useTypewriter.ts                 # Auto-typing animation
│   ├── useScrollReveal.ts               # Scroll-triggered animations
│   └── useScanHistory.ts                # Supabase scan history
│
├── App.tsx                              # Main component
├── index.css                            # Custom animations & utilities
└── main.tsx                             # Entry point
```

## Key Features

### 1. Auto-Typing Animation
```typescript
const { displayedText } = useTypewriter({
  text: "Your Health, Personalized",
  speed: 40,
  delay: 300
});
```
- Captures attention immediately
- Reinforces "AI is thinking" narrative
- Professional typewriter effect

### 2. Scroll-Reveal Animations
```typescript
const { ref, isVisible } = useScrollReveal({ threshold: 0.2 });
```
- Elements animate in as user scrolls
- Staggered animations create flow
- Improves engagement and readability

### 3. Eye-Relief Color Palette
- **Greens:** Ayurveda, nature, healing
- **Blues:** AI, technology, trust
- **Neutrals:** Professional, medical
- **Soft gradients:** Gentle on eyes
- **Glassmorphism:** Modern, premium feel

### 4. Interactive Scanner
- Click "Start Scan" to see live simulation
- Real-time progress animation
- Shows 4 diagnostic steps
- Displays calculated health metrics

### 5. Data Fusion Visualization
- Two independent streams converge
- Visual representation of AI intelligence
- Shows how data becomes insight

## Styling System

### Tailwind Configuration
- Gradient utilities for smooth transitions
- Custom animations in index.css
- Responsive breakpoints (mobile, tablet, desktop)
- Glass morphism effects with backdrop blur

### Custom CSS Animations
```css
@keyframes fadeIn     /* Opacity transition */
@keyframes slideUp    /* Vertical slide + fade */
@keyframes slideDown  /* Reverse slide */
@keyframes scaleIn    /* Scale + fade */
@keyframes float      /* Gentle floating motion */
@keyframes glow       /* Pulsing glow effect */
@keyframes pulse-slow /* Slow pulsing opacity */
```

### Utility Classes
- `.text-gradient` - Gradient text effect
- `.glass-effect` - Frosted glass background
- `.shadow-glow` - Glowing shadow on hover
- `.perspective` - 3D perspective effect

## Database Integration

### Supabase Tables
```sql
health_scans (
  id uuid,
  user_id uuid,
  scan_date timestamptz,
  tongue_coating integer,
  face_hydration integer,
  pulse_rate integer,
  agni_level integer,
  ama_level integer,
  stress_index integer,
  energy_level integer,
  recommendations text
)
```

### Row-Level Security
- Users can only see their own scans
- Insert policy requires auth
- Update policy checks ownership

### Using the Hook
```typescript
const { scans, loading, error, saveScan } = useScanHistory(userId);

// Save a new scan
const result = await saveScan({
  user_id: userId,
  tongue_coating: 35,
  agni_level: 72,
  // ... other fields
});
```

## Performance Optimizations

1. **Code Splitting**
   - Each section is a separate component
   - Lazy loading ready (if needed)
   - Tree-shakeable imports

2. **Animation Performance**
   - CSS animations (GPU-accelerated)
   - Transform & opacity only
   - No layout-thrashing properties

3. **Image Optimization**
   - No heavy images on landing page
   - Gradient orbs instead of images
   - SVG icons from Lucide React

4. **Build Size**
   - Final CSS: 7.04 kB (gzipped)
   - Final JS: 64.51 kB (gzipped)
   - Total: ~71 kB (highly optimized)

## Customization Guide

### Change Color Scheme
Edit gradient mappings in components:
```typescript
color: 'from-green-600 via-blue-600 to-emerald-600'
```

### Adjust Animation Speed
Modify hook parameters:
```typescript
useTypewriter({ speed: 30 }) // Faster (lower = faster)
useScrollReveal({ threshold: 0.3 }) // Triggers earlier
```

### Update Copy
Search components for text strings and replace with your messaging

### Modify Layout
Components use Tailwind's grid system:
```typescript
grid-cols-1 md:grid-cols-2 lg:grid-cols-4
```

## Browser Support

- Chrome/Edge (Latest)
- Firefox (Latest)
- Safari (Latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

### Fallbacks Included
- Blur effect fallback (CSS support detection)
- Gradient text support (fallback to regular text)
- Intersection Observer (graceful degradation)

## Deployment

### Vercel (Recommended)
```bash
vercel deploy
```

### Netlify
```bash
npm run build
netlify deploy --prod --dir=dist
```

### Custom Server
```bash
npm run build
# Serve dist/ folder
```

## Monitoring & Analytics

### Add Analytics
```typescript
// In appropriate components
trackEvent('section_viewed', { section: 'DigitalBAMSDoctor' })
trackEvent('scan_started', { source: 'hero_cta' })
trackEvent('cta_clicked', { button: 'download_app' })
```

### Monitor Performance
```typescript
// In index.tsx
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals'
```

## Future Enhancements

1. **Phase 2: AI Integration**
   - Connect Computer Vision models
   - Real wearable API integration
   - Backend personalization engine

2. **Phase 3: Mobile App**
   - React Native version
   - Push notifications
   - Offline capability

3. **Phase 4: Community Features**
   - User forums
   - Group challenges
   - Practitioner marketplace

4. **Phase 5: Healthcare Integration**
   - EHR integration
   - Doctor collaboration tools
   - Insurance partnerships

## Support & Troubleshooting

### Common Issues

**Build fails:**
```bash
npm install
npm run build
```

**Styling not applied:**
- Clear browser cache (Cmd+Shift+R on Mac)
- Check Tailwind config has correct content paths
- Verify CSS file is imported in main.tsx

**Animations stuttering:**
- Check GPU acceleration (DevTools > Performance)
- Reduce number of simultaneous animations
- Check for layout shifts causing repaints

### Performance Tips

1. Use Chrome DevTools Performance tab
2. Monitor Core Web Vitals
3. Test on 3G for real-world performance
4. Profile with Lighthouse

## Resources

- [Tailwind CSS Docs](https://tailwindcss.com)
- [Lucide React Icons](https://lucide.dev)
- [React Hooks Docs](https://react.dev/reference/react)
- [Supabase Docs](https://supabase.com/docs)

---

**Built with React 18, TypeScript, Tailwind CSS, and Supabase.**
**Enterprise-grade UX combining ancient Ayurveda with modern AI.**
