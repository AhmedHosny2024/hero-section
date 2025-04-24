# Interactive Hero Section with AI Regeneration

A modern, responsive hero section component built with React and Tailwind CSS, featuring inline text editing and AI-simulated content regeneration.

![Hero Section Preview](https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)

## Features

- 🎨 Modern, clean design with subtle animations
- ✏️ Double-click to edit any text element
- 🔄 AI-simulated content regeneration
- 📱 Fully responsive across all devices
- 🎯 Optimized for accessibility and performance

## Design Principles

- **Typography**: Carefully crafted type scale for optimal readability
- **Spacing**: Consistent 8px spacing system throughout
- **Colors**: High-contrast color palette with subtle gradients
- **Animations**: Smooth, purposeful transitions that enhance UX

## Technical Implementation

### Core Technologies

- React 18
- TypeScript
- Tailwind CSS
- Lucide React Icons

### Key Components

#### EditableText
- Handles inline text editing
- Supports both single-line and multiline editing
- Keyboard navigation (Enter to save, Escape to cancel)
- Visual feedback for editing state

#### HeroSection
- Main layout and content management
- Responsive design implementation
- Content regeneration logic
- Animation states

### Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

### Usage

- **Edit Text**: Double-click any text element to edit
- **Regenerate Content**: Click the "Regenerate with AI" button to get new content
- **Customize**: Modify `contentGenerator.ts` to add your own content options

## Best Practices

- Clean, modular component architecture
- TypeScript for type safety
- Consistent code formatting
- Performance optimized animations
- Mobile-first responsive design

## Performance Considerations

- Optimized image loading
- Minimal bundle size
- Efficient state management
- Debounced user interactions
