#!/bin/bash

echo "🎨 BesttName App Icon Changer"
echo "=============================="

# Check if icon.png exists in assets
if [ ! -f "assets/icon.png" ]; then
    echo "❌ No icon.png found in assets/ directory"
    echo "📝 Please:"
    echo "   1. Open generate-icon.html in your browser"
    echo "   2. Click 'Download Icon'"
    echo "   3. Save it as 'assets/icon.png'"
    echo "   4. Run this script again"
    exit 1
fi

echo "✅ Found icon.png in assets/"

# Create backup of current icons
echo "📦 Creating backup of current icons..."
mkdir -p backup/android
cp -r android/app/src/main/res/mipmap-* backup/android/ 2>/dev/null || echo "No existing icons to backup"

# Generate new icons using ImageMagick (if available)
if command -v convert &> /dev/null; then
    echo "🔄 Generating new icons using ImageMagick..."
    
    # Create different sizes for Android
    convert assets/icon.png -resize 72x72 android/app/src/main/res/mipmap-hdpi/ic_launcher.png
    convert assets/icon.png -resize 48x48 android/app/src/main/res/mipmap-mdpi/ic_launcher.png
    convert assets/icon.png -resize 96x96 android/app/src/main/res/mipmap-xhdpi/ic_launcher.png
    convert assets/icon.png -resize 144x144 android/app/src/main/res/mipmap-xxhdpi/ic_launcher.png
    convert assets/icon.png -resize 192x192 android/app/src/main/res/mipmap-xxxhdpi/ic_launcher.png
    
    echo "✅ Icons generated successfully!"
else
    echo "⚠️  ImageMagick not found. Please install it or manually resize your icon:"
    echo "   - 72x72 for mipmap-hdpi"
    echo "   - 48x48 for mipmap-mdpi"
    echo "   - 96x96 for mipmap-xhdpi"
    echo "   - 144x144 for mipmap-xxhdpi"
    echo "   - 192x192 for mipmap-xxxhdpi"
fi

echo ""
echo "🎯 Next steps:"
echo "   1. Build your app: yarn build"
echo "   2. Sync with Capacitor: npx cap sync"
echo "   3. Open in Android Studio: npx cap open android"
echo "   4. Build and run your app!"
echo ""
echo "📱 Your new icon will appear on the device!" 