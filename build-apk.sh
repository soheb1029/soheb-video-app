#!/bin/bash
cd /home/ubuntu/soheb-video-app

# Clean previous builds
rm -rf android dist build

# Prebuild Android
echo "🔨 Prebuilding Android..."
npx expo prebuild --platform android --clean --non-interactive

# Create local.properties for Android SDK
echo "📝 Setting up Android SDK..."
mkdir -p android
echo "sdk.dir=/usr/lib/android-sdk" > android/local.properties

# Build APK
echo "🏗️ Building APK..."
cd android
./gradlew assembleRelease

echo "✅ APK built successfully!"
ls -lh app/build/outputs/apk/release/
