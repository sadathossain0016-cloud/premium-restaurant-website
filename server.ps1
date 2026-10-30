param(
    [int]$Port = 3000,
    [string]$Directory = $PSScriptRoot
)

if ([string]::IsNullOrEmpty($Directory)) {
    $Directory = (Get-Location).Path
}

$ip = [System.Net.IPAddress]::Loopback
$listener = $null

for ($i = 0; $i -lt 10; $i++) {
    try {
        $listener = New-Object System.Net.Sockets.TcpListener($ip, $Port)
        $listener.Start()
        break
    } catch {
        $Port++
    }
}

if (-not $listener.Server.IsBound) {
    Write-Error "Could not bind to any port."
    exit 1
}

$url = "http://localhost:$Port"
Write-Host "=========================================================="
Write-Host "  La Revi - Michelin Three Stars Haute Cuisine Web App"
Write-Host "  Local Server running at: $url"
Write-Host "  Root Directory: $Directory"
Write-Host "=========================================================="

$mimeMap = @{
    ".html" = "text/html; charset=utf-8"
    ".htm"  = "text/html; charset=utf-8"
    ".css"  = "text/css; charset=utf-8"
    ".js"   = "application/javascript; charset=utf-8"
    ".json" = "application/json; charset=utf-8"
    ".png"  = "image/png"
    ".jpg"  = "image/jpeg"
    ".jpeg" = "image/jpeg"
    ".gif"  = "image/gif"
    ".svg"  = "image/svg+xml"
    ".ico"  = "image/x-icon"
    ".webp" = "image/webp"
}

try {
    while ($true) {
        $client = $listener.AcceptTcpClient()
        $stream = $client.GetStream()
        $reader = New-Object System.IO.StreamReader($stream)
        $requestLine = $reader.ReadLine()

        if ($requestLine) {
            $parts = $requestLine.Split(' ')
            if ($parts.Length -ge 2) {
                $rawPath = $parts[1].Split('?')[0].TrimStart('/')
                if ([string]::IsNullOrEmpty($rawPath) -or $rawPath -eq "/") {
                    $rawPath = "index.html"
                }

                $filePath = [System.Uri]::UnescapeDataString($rawPath)
                $fullPath = Join-Path $Directory $filePath

                if (Test-Path $fullPath -PathType Leaf) {
                    $ext = [System.IO.Path]::GetExtension($fullPath).ToLower()
                    $mime = if ($mimeMap.ContainsKey($ext)) { $mimeMap[$ext] } else { "application/octet-stream" }
                    $bytes = [System.IO.File]::ReadAllBytes($fullPath)
                    $header = "HTTP/1.1 200 OK`r`nContent-Type: $mime`r`nContent-Length: $($bytes.Length)`r`nAccess-Control-Allow-Origin: *`r`nConnection: close`r`n`r`n"
                    $headerBytes = [System.Text.Encoding]::ASCII.GetBytes($header)
                    $stream.Write($headerBytes, 0, $headerBytes.Length)
                    $stream.Write($bytes, 0, $bytes.Length)
                } else {
                    $notFound = [System.Text.Encoding]::UTF8.GetBytes("<html><body><h1>404 Not Found</h1></body></html>")
                    $header = "HTTP/1.1 404 Not Found`r`nContent-Type: text/html`r`nContent-Length: $($notFound.Length)`r`nConnection: close`r`n`r`n"
                    $headerBytes = [System.Text.Encoding]::ASCII.GetBytes($header)
                    $stream.Write($headerBytes, 0, $headerBytes.Length)
                    $stream.Write($notFound, 0, $notFound.Length)
                }
            }
        }
        $stream.Flush()
        $client.Close()
    }
} finally {
    $listener.Stop()
}
