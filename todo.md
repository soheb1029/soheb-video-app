# SOHEB - AI Video Studio App TODO

## Core Features

### Home Screen
- [ ] Design home screen with SOHEB logo and branding
- [ ] Add daily credit status cards (Seedance 2.0, OpenArt AI)
- [ ] Create "Text to Video" action button
- [ ] Create "Image to Video" action button
- [ ] Display recent videos grid
- [ ] Add "Generate New" CTA button

### Text-to-Video Screen
- [ ] Build text input screen
- [ ] Add model selector (Seedance 2.0, OpenArt AI)
- [ ] Add duration selector (5s, 10s, 15s, 30s)
- [ ] Add advanced options (resolution, style/mood)
- [ ] Integrate Seedance 2.0 API for text-to-video
- [ ] Integrate OpenArt AI API for text-to-video
- [ ] Display credit cost before generation
- [ ] Show loading state with progress indicator
- [ ] Handle generation errors gracefully

### Image-to-Video Screen
- [ ] Build image upload screen
- [ ] Add image picker (gallery + camera)
- [ ] Add model selector
- [ ] Add motion type selector (pan, zoom, rotate)
- [ ] Add duration selector
- [ ] Integrate Seedance 2.0 API for image-to-video
- [ ] Integrate OpenArt AI API for image-to-video
- [ ] Display credit cost before generation
- [ ] Show loading state

### Video Preview Screen
- [ ] Build video player with full controls
- [ ] Add download button (save to device gallery)
- [ ] Add share button (messaging/social)
- [ ] Add delete button (remove from history)
- [ ] Display generation details (model, duration, resolution)
- [ ] Add "Generate Similar" button

### History/Gallery Screen
- [ ] Build grid view of all generated videos
- [ ] Add video thumbnail with duration badge
- [ ] Implement tap to preview
- [ ] Add long-press options (download, delete, share)
- [ ] Add filter by model
- [ ] Add search by prompt text
- [ ] Show empty state message

### Credits/Settings Screen
- [ ] Display daily credit breakdown
- [ ] Show last reset time
- [ ] Add credit usage history (chart/list)
- [ ] Add theme toggle (light/dark)
- [ ] Add default model selection
- [ ] Add default resolution preference
- [ ] Add notification settings
- [ ] Add clear history option
- [ ] Add about SOHEB section

## API Integration

### Seedance 2.0
- [ ] Set up API authentication
- [ ] Implement text-to-video endpoint
- [ ] Implement image-to-video endpoint
- [ ] Handle daily free credit limit (20 credits/day)
- [ ] Implement credit tracking and reset

### OpenArt AI
- [ ] Set up API authentication
- [ ] Implement text-to-video endpoint
- [ ] Implement image-to-video endpoint
- [ ] Handle daily free credit limit (10 credits/day)
- [ ] Implement credit tracking and reset

## Data Management

- [ ] Set up local storage (AsyncStorage) for video history
- [ ] Implement credit tracking system
- [ ] Create daily credit reset mechanism (midnight)
- [ ] Store generated video metadata
- [ ] Implement video caching strategy

## UI/UX Polish

- [ ] Implement smooth transitions between screens
- [ ] Add haptic feedback on button taps
- [ ] Create loading animations
- [ ] Add error state UI
- [ ] Implement empty state screens
- [ ] Add success notifications
- [ ] Test dark mode compatibility
- [ ] Ensure responsive design for different screen sizes

## Testing & Deployment

- [ ] Test all user flows end-to-end
- [ ] Test API error handling
- [ ] Test credit system accuracy
- [ ] Test video download and sharing
- [ ] Test on iOS device (Expo Go)
- [ ] Test on Android device (Expo Go)
- [ ] Generate APK for Android
- [ ] Create app store ready build
- [ ] Write user documentation

## Known Issues & Blockers

(None yet)

## Completed

(None yet)


## Migration from FAL.AI to Hugging Face (Free 1080p)

- [x] Create Hugging Face video generation API service (huggingface-video-api.ts)
- [x] Update text-to-video screen to use Hugging Face API
- [x] Update image-to-video screen to use Hugging Face API
- [ ] Test video generation with Hugging Face API
- [ ] Verify 1080p output quality
- [ ] Test download and share functionality
- [ ] Create final checkpoint
