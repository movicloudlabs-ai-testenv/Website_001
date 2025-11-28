# Script to standardize image file extensions to .png
# Usage: Run this script after adding new images to the assets folders.
# It ensures all images are named img1.png, img2.png, etc., regardless of their original format.

$assetsPath = "d:\version1\version0.02\src\assets"
$folders = @("hospital", "ecommerce", "survey", "transport", "marketing", "office", "school", "hotel")
$extensions = @(".jpg", ".jpeg", ".webp", ".gif", ".bmp")

Write-Host "Starting image standardization..." -ForegroundColor Cyan

foreach ($folder in $folders) {
    $folderPath = Join-Path $assetsPath $folder
    
    if (Test-Path $folderPath) {
        Write-Host "Checking $folder..." -ForegroundColor Yellow
        
        for ($i = 1; $i -le 6; $i++) {
            $targetName = "img$i.png"
            $targetPath = Join-Path $folderPath $targetName
            
            # Check if the .png version already exists
            if (-not (Test-Path $targetPath)) {
                # Look for other extensions
                foreach ($ext in $extensions) {
                    $sourceName = "img$i$ext"
                    $sourcePath = Join-Path $folderPath $sourceName
                    
                    if (Test-Path $sourcePath) {
                        Rename-Item -Path $sourcePath -NewName $targetName -Force
                        Write-Host "  Renamed $sourceName to $targetName" -ForegroundColor Green
                        break # Stop looking for other extensions for this number
                    }
                }
            }
        }
    } else {
        Write-Host "Warning: Folder $folder not found" -ForegroundColor Red
    }
}

Write-Host "`nStandardization complete! All images are now .png" -ForegroundColor Cyan
