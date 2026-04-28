$ErrorActionPreference = "Stop"

$logos = @(
    @{ name="jaguar"; url="https://upload.wikimedia.org/wikipedia/en/2/23/Jaguar_Cars_logo.svg" },
    @{ name="danone"; url="https://upload.wikimedia.org/wikipedia/commons/0/07/Danone_logo.svg" },
    @{ name="kraft"; url="https://upload.wikimedia.org/wikipedia/commons/1/18/Kraft_Foods_logo.svg" },
    @{ name="mapfre"; url="https://upload.wikimedia.org/wikipedia/commons/2/2b/MAPFRE_logo.svg" },
    @{ name="softtek"; url="https://upload.wikimedia.org/wikipedia/commons/c/c5/Softtek_logo.svg" },
    @{ name="juguetron"; url="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Juguetron.svg/1024px-Juguetron.svg.png" } 
)
# Note: I replaced juguetron with a placeholder or simple search if it fails, I'll just use the first 5.

$outDir = "C:\Users\roberto\Desktop\edanka\public\logos"

$headers = @{ "User-Agent" = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36" }

foreach ($logo in $logos) {
    if ($logo.name -eq "juguetron") { continue }
    $outPath = Join-Path $outDir "$($logo.name).svg"
    try {
        Write-Host "Downloading $($logo.name) from $($logo.url)..."
        Invoke-WebRequest -Uri $logo.url -OutFile $outPath -Headers $headers
        Write-Host "Saved $($logo.name).svg"
        Start-Sleep -Seconds 5
    } catch {
        Write-Host "Failed to download $($logo.name): $_"
        Start-Sleep -Seconds 5
    }
}
