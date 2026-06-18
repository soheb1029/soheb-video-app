# SOHEB - AI Video Studio App Design

## Overview
SOHEB is a professional mobile app for AI-powered video generation. Users can create videos from text prompts or images using free daily credits from multiple AI models (Seedance 2.0, OpenArt AI, etc.). The app prioritizes ease of use, fast generation, and beautiful video previews.

## Design Principles
- **Mobile-First**: Optimized for portrait orientation (9:16) with one-handed usage
- **Apple HIG Compliance**: Follows iOS design standards with clean, minimal interface
- **Fast & Responsive**: Instant feedback on user actions, smooth transitions
- **Free & Unlimited**: Clear credit system showing daily free allocations

## Color Palette
- **Primary**: Blue-to-Cyan gradient (#0a7ea4 → #06b6d4) - represents AI/tech
- **Secondary**: Purple accent (#a855f7) - creative/video element
- **Background**: Clean white/dark (#ffffff / #151718)
- **Success**: Green (#22c55e) - for completed videos
- **Warning**: Orange (#f59e0b) - for low credits

## Screen List

### 1. **Home Screen** (Tab 1)
- **Purpose**: Dashboard showing app status, quick actions, and recent videos
- **Content**:
  - App logo and branding at top
  - Daily credit status card (visual progress bars for each model)
  - Two large action buttons: "Text to Video" and "Image to Video"
  - Recent videos grid (last 5-10 generated videos)
  - "Generate New" CTA button

### 2. **Text-to-Video Screen**
- **Purpose**: Generate videos from text prompts
- **Content**:
  - Model selector (dropdown/tabs: Seedance 2.0, OpenArt AI, etc.)
  - Text input field (multiline, placeholder: "Describe your video...")
  - Duration selector (5s, 10s, 15s, 30s)
  - Advanced options (collapsible):
    - Resolution (480p, 720p, 1080p)
    - Style/Mood selector (cinematic, cartoon, realistic, etc.)
  - "Generate Video" button (primary, large)
  - Credit cost display (shows how many credits will be used)
  - Loading state with progress indicator

### 3. **Image-to-Video Screen**
- **Purpose**: Generate videos from uploaded images
- **Content**:
  - Model selector (dropdown/tabs)
  - Image picker (upload or camera)
  - Image preview (thumbnail)
  - Motion type selector (pan, zoom, rotate, etc.)
  - Duration selector
  - Advanced options (collapsible)
  - "Generate Video" button
  - Credit cost display
  - Loading state

### 4. **Video Preview Screen**
- **Purpose**: Display generated video with playback controls
- **Content**:
  - Full-screen video player with controls
  - Video title and generation timestamp
  - Download button (saves to device gallery)
  - Share button (share via messaging/social)
  - Delete button (remove from history)
  - Generation details (model used, duration, resolution)
  - "Generate Similar" button (quick re-generate with same settings)

### 5. **History/Gallery Screen** (Tab 2)
- **Purpose**: Browse all generated videos
- **Content**:
  - Grid view of all videos (3 columns on mobile)
  - Video thumbnail with duration badge
  - Tap to preview, long-press for options (download, delete, share)
  - Filter by model (Seedance, OpenArt, etc.)
  - Search by prompt text
  - Empty state: "No videos yet. Start creating!"

### 6. **Credits/Settings Screen** (Tab 3)
- **Purpose**: Manage credits and app settings
- **Content**:
  - **Credits Section**:
    - Daily credit breakdown (Seedance: 20/20, OpenArt: 10/10, etc.)
    - Last reset time
    - Credit usage history (chart/list of last 10 generations)
  - **Settings Section**:
    - Theme toggle (light/dark)
    - Default model selection
    - Default resolution preference
    - Notification settings (for generation complete)
    - Clear history option
    - About SOHEB (version, links)

## Key User Flows

### Flow 1: Generate Video from Text
1. User taps "Text to Video" on Home
2. Selects AI model (defaults to Seedance 2.0)
3. Enters text prompt (e.g., "A sunset over the ocean")
4. Optionally adjusts duration and style
5. Taps "Generate Video"
6. App shows loading screen with progress
7. Video appears in preview screen
8. User can download, share, or generate similar

### Flow 2: Generate Video from Image
1. User taps "Image to Video" on Home
2. Selects AI model
3. Uploads image from gallery or takes photo
4. Selects motion type (pan, zoom, etc.)
5. Adjusts duration
6. Taps "Generate Video"
7. Loading screen appears
8. Video preview screen shows result

### Flow 3: Browse History
1. User taps "History" tab
2. Scrolls through grid of past videos
3. Taps video to preview
4. Can download, delete, or share from preview

## Technical Considerations
- **API Integration**: Seedance 2.0 and OpenArt AI APIs for video generation
- **Credit System**: Track daily free credits per model, reset at midnight (user's timezone)
- **Video Storage**: Store generated videos locally in app cache, with option to save to device gallery
- **Performance**: Lazy load video thumbnails, cache API responses
- **Offline Handling**: Show message if no internet, disable generation buttons
- **Error Handling**: Show user-friendly error messages for failed generations

## Accessibility
- All buttons have minimum 44pt tap targets
- Text contrast meets WCAG AA standards
- Loading states use both visual and haptic feedback
- Descriptive alt text for all images
