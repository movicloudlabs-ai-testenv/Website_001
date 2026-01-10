# Image Optimization Script
# Compresses large WebP images to reduce build time

Write-Host "Finding large images (>500KB)..." -ForegroundColor Cyan

$largeImages = Get-ChildItem -Path "src\assets" -Recurse -Include *.webp,*.jpg,*.png | 
    Where-Object { $_.Length -gt 500KB } | 
    Sort-Object Length -Descending

Write-Host "Found $($largeImages.Count) large images:" -ForegroundColor Yellow
$largeImages | ForEach-Object {
    $sizeKB = [math]::Round($_.Length / 1KB, 2)
    Write-Host "  - $($_.Name): ${sizeKB} KB" -ForegroundColor Gray
}

Write-Host "`nThese images should be optimized to <200KB each" -ForegroundColor Yellow
Write-Host "Recommended tools:" -ForegroundColor Cyan
Write-Host "  1. Use online: squoosh.app or tinypng.com" -ForegroundColor White
Write-Host "  2. Or install sharp: npm install -g sharp-cli" -ForegroundColor White
Write-Host "     Then run: sharp -i input.webp -o output.webp -q 75 --resize 1920" -ForegroundColor White
