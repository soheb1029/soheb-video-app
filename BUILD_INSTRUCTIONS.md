# SOHEB - AI Video Studio - APK Build Instructions

## ✅ Your App is Ready!

Your SOHEB AI Video Studio app is fully built and tested. Now you need to build the APK.

### 📱 Option 1: Build on Your Phone (Easiest - No Computer Needed!)

**Using Expo Go (Instant Testing):**
1. Download "Expo Go" app from Google Play Store
2. Open Expo Go
3. Scan the QR code from the web preview
4. Your app runs instantly!

### 💻 Option 2: Build APK on a Computer (Your Friend's Computer)

**Requirements:**
- Node.js installed
- Git installed
- Android SDK (optional - EAS handles it)

**Steps:**

1. **Download the project:**
   ```bash
   git clone <your-repo-url>
   cd soheb-video-app
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   pnpm install
   ```

3. **Build APK using EAS (Easiest):**
   ```bash
   npx eas build --platform android --profile preview
   ```
   
   This will:
   - Build in the cloud
   - Generate APK
   - Give you a download link
   - Takes 5-10 minutes

4. **Download and Install:**
   - Open the download link on your phone
   - APK will download
   - Tap to install
   - Done! 🎉

### 🔧 Option 3: Build Locally (Advanced)

If you have Android SDK installed:

```bash
npx expo prebuild --platform android --clean
cd android
./gradlew assembleRelease
```

APK will be at: `android/app/build/outputs/apk/release/app-release.apk`

---

## 📦 App Features

✅ Text-to-Video generation (1080p)
✅ Image-to-Video generation (1080p)
✅ 100 daily free credits
✅ Video history tracking
✅ Download videos to device
✅ Share videos
✅ Settings management
✅ Dark/Light mode support

---

## 🆘 Troubleshooting

**"Cannot find navigation context"**
- This is fixed in the latest version
- Restart the dev server

**"SDK location not found"**
- Use EAS build instead (it handles SDK automatically)
- Or set ANDROID_HOME environment variable

**APK won't install**
- Enable "Unknown sources" in Settings > Security
- Check Android version (minimum: Android 7.0)

---

## 📞 Support

If you need help:
1. Try Expo Go first (no build needed)
2. Use EAS build on a friend's computer
3. Check the troubleshooting section above

Good luck! 🚀
