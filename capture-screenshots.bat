@echo off
echo ========================================
echo  MuslimFit Pro - Screenshot Capture
echo ========================================
echo.

:: Create screenshots folder if it doesn't exist
if not exist "assets\screenshots" (
    mkdir assets\screenshots
    echo Created assets\screenshots folder
)

echo.
echo INSTRUCTIONS:
echo 1. Make sure your app is running in Android emulator
echo 2. Navigate to each screen mentioned below
echo 3. Press Enter after navigating to each screen
echo 4. Screenshot will be captured automatically
echo.
echo ========================================
echo.

:: List of screens to capture
set screens=home quran hadith duas prayer-times qibla ramadan step-counter water-tracker sleep-tracker nutrition profile all-features

for %%s in (%screens%) do (
    echo.
    echo [%%s] Navigate to %%s screen
    set /p dummy="Press Enter when ready to capture..."

    :: Capture screenshot using ADB
    adb shell screencap -p /sdcard/%%s.png

    :: Pull screenshot to PC
    adb pull /sdcard/%%s.png assets\screenshots\%%s.png

    :: Clean up from device
    adb shell rm /sdcard/%%s.png

    echo ✓ Captured %%s
)

echo.
echo ========================================
echo ✅ All screenshots captured!
echo 📁 Location: assets\screenshots\
echo.
echo Next steps:
echo 1. Open assets\screenshots folder
echo 2. Rename files if needed
echo 3. Optimize with TinyPNG.com
echo 4. Update HTML files to use screenshots
echo ========================================
echo.
pause
