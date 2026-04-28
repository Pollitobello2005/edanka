$ErrorActionPreference = "Stop"

$logos = @(
    @{ name="wework"; url="https://upload.wikimedia.org/wikipedia/commons/d/d2/WeWork_logo.svg" },
    @{ name="dominos"; url="https://upload.wikimedia.org/wikipedia/commons/7/74/Dominos_pizza_logo.svg" },
    @{ name="subway"; url="https://upload.wikimedia.org/wikipedia/commons/5/5c/Subway_2016_logo.svg" },
    @{ name="underarmour"; url="https://upload.wikimedia.org/wikipedia/commons/4/44/Under_armour_logo.svg" },
    @{ name="mattel"; url="https://upload.wikimedia.org/wikipedia/commons/a/a6/Mattel_logo.svg" },
    @{ name="jaguar"; url="https://upload.wikimedia.org/wikipedia/en/2/23/Jaguar_Cars_logo.svg" },
    @{ name="danone"; url="https://upload.wikimedia.org/wikipedia/commons/0/07/Danone_logo.svg" },
    @{ name="kraft"; url="https://upload.wikimedia.org/wikipedia/commons/1/18/Kraft_Foods_logo.svg" },
    @{ name="mapfre"; url="https://upload.wikimedia.org/wikipedia/commons/2/2b/MAPFRE_logo.svg" },
    @{ name="softtek"; url="https://upload.wikimedia.org/wikipedia/commons/c/c5/Softtek_logo.svg" }
)

$outDir = "C:\Users\roberto\Desktop\edanka\public\logos"
if (-not (Test-Path $outDir)) {
    New-Item -ItemType Directory -Force -Path $outDir | Out-Null
}

$headers = @{ "User-Agent" = "Mozilla/5.0 (Windows NT 10.0; Win64; x64)" }

foreach ($logo in $logos) {
    $outPath = Join-Path $outDir "$($logo.name).svg"
    try {
        Write-Host "Downloading $($logo.name) from $($logo.url)..."
        Invoke-WebRequest -Uri $logo.url -OutFile $outPath -Headers $headers
        Write-Host "Saved $($logo.name).svg"
    } catch {
        Write-Host "Failed to download $($logo.name): $_"
    }
}
