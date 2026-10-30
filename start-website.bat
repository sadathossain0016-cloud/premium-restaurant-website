@echo off
title La Revi - Michelin Three Stars Web Server
echo ========================================================
echo   La Revi - Haute Cuisine & Cellar Web Application
echo ========================================================
echo Starting local server on http://localhost:3000 ...
start "" "http://localhost:3000"
powershell -ExecutionPolicy Bypass -File "%~dp0server.ps1" -Port 3000
pause

