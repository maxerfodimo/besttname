#!/bin/bash

echo "📱 BesttName Version Updater"
echo "============================"

if [ -z "$1" ]; then
    echo "❌ Please provide a version name (e.g., 1.1.0)"
    echo "Usage: ./update-version.sh <version>"
    echo "Example: ./update-version.sh 1.1.0"
    exit 1
fi

VERSION_NAME=$1

# Extract version code from version name (e.g., 1.1.0 -> 110)
VERSION_CODE=$(echo $VERSION_NAME | sed 's/\.//g')

echo "🔄 Updating version to: $VERSION_NAME (code: $VERSION_CODE)"

# Update package.json
echo "📦 Updating package.json..."
sed -i '' "s/\"version\": \".*\"/\"version\": \"$VERSION_NAME\"/" package.json

# Update Android build.gradle
echo "🤖 Updating Android build.gradle..."
sed -i '' "s/versionCode [0-9]*/versionCode $VERSION_CODE/" android/app/build.gradle
sed -i '' "s/versionName \".*\"/versionName \"$VERSION_NAME\"/" android/app/build.gradle

echo "✅ Version updated successfully!"
echo ""
echo "📋 Updated files:"
echo "   - package.json: $VERSION_NAME"
echo "   - android/app/build.gradle: versionCode $VERSION_CODE, versionName $VERSION_NAME"
echo ""
echo "🎯 Next steps:"
echo "   1. Build: yarn build"
echo "   2. Sync: npx cap sync"
echo "   3. Deploy to store!" 