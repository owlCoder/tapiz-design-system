$ErrorActionPreference = "Stop"

$root = Split-Path -Parent $PSScriptRoot
$dist = Join-Path $root "dist"
$srcFontsCss = Join-Path $root "src/fonts.css"
$distFontsCss = Join-Path $dist "fonts.css"
$distFiles = Join-Path $dist "files"

New-Item -ItemType Directory -Force -Path $dist | Out-Null
New-Item -ItemType Directory -Force -Path $distFiles | Out-Null

Copy-Item -LiteralPath $srcFontsCss -Destination $distFontsCss -Force

$builtFontsCss = Get-ChildItem -Path $dist -Filter "fonts-*.css" -File -ErrorAction SilentlyContinue | Select-Object -First 1
if ($builtFontsCss) {
  $fontsJsPath = Join-Path $dist "fonts.js"
  $fontsJs = Get-Content -LiteralPath $fontsJsPath -Raw
  $fontsJs = $fontsJs -replace [regex]::Escape("./" + $builtFontsCss.Name), "./fonts.css"
  Set-Content -LiteralPath $fontsJsPath -Value $fontsJs -NoNewline
  Remove-Item -LiteralPath $builtFontsCss.FullName -Force
}

$fontFiles = @(
  "ibm-plex-sans-latin-400-normal.woff2",
  "ibm-plex-sans-latin-400-normal.woff",
  "ibm-plex-sans-latin-400-italic.woff2",
  "ibm-plex-sans-latin-400-italic.woff",
  "ibm-plex-sans-latin-500-normal.woff2",
  "ibm-plex-sans-latin-500-normal.woff",
  "ibm-plex-sans-latin-600-normal.woff2",
  "ibm-plex-sans-latin-600-normal.woff",
  "ibm-plex-sans-latin-700-normal.woff2",
  "ibm-plex-sans-latin-700-normal.woff",
  "ibm-plex-sans-cyrillic-400-normal.woff2",
  "ibm-plex-sans-cyrillic-400-normal.woff",
  "ibm-plex-sans-cyrillic-500-normal.woff2",
  "ibm-plex-sans-cyrillic-500-normal.woff",
  "ibm-plex-sans-cyrillic-600-normal.woff2",
  "ibm-plex-sans-cyrillic-600-normal.woff",
  "ibm-plex-sans-cyrillic-700-normal.woff2",
  "ibm-plex-sans-cyrillic-700-normal.woff",
  "ibm-plex-mono-latin-400-normal.woff2",
  "ibm-plex-mono-latin-400-normal.woff",
  "ibm-plex-mono-latin-400-italic.woff2",
  "ibm-plex-mono-latin-400-italic.woff",
  "ibm-plex-mono-latin-500-normal.woff2",
  "ibm-plex-mono-latin-500-normal.woff",
  "ibm-plex-mono-latin-600-normal.woff2",
  "ibm-plex-mono-latin-600-normal.woff",
  "ibm-plex-mono-latin-ext-400-normal.woff2",
  "ibm-plex-mono-latin-ext-400-normal.woff",
  "ibm-plex-mono-latin-ext-500-normal.woff2",
  "ibm-plex-mono-latin-ext-500-normal.woff",
  "ibm-plex-mono-latin-ext-600-normal.woff2",
  "ibm-plex-mono-latin-ext-600-normal.woff"
)

$sources = @(
  (Join-Path $root "node_modules/@fontsource/ibm-plex-sans/files"),
  (Join-Path $root "node_modules/@fontsource/ibm-plex-mono/files")
)

foreach ($fontFile in $fontFiles) {
  $sourcePath = $null
  foreach ($sourceDir in $sources) {
    $candidate = Join-Path $sourceDir $fontFile
    if (Test-Path $candidate) {
      $sourcePath = $candidate
      break
    }
  }

  if (-not $sourcePath) {
    throw "Missing font asset: $fontFile"
  }

  Copy-Item -LiteralPath $sourcePath -Destination (Join-Path $distFiles $fontFile) -Force
}
