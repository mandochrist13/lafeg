@echo off
echo ========================================
echo    FEG - Demarrage Propre du Serveur
echo ========================================
echo.

echo [1/3] Arret des processus Node.js existants...
taskkill /F /IM node.exe /T 2>nul
if %errorlevel%==0 (
    echo       Processus arretes avec succes.
) else (
    echo       Aucun processus en cours.
)
echo.

echo [2/3] Nettoyage du cache Next.js...
if exist .next (
    rmdir /s /q .next 2>nul
    if %errorlevel%==0 (
        echo       Cache supprime.
    ) else (
        echo       Erreur lors de la suppression. Fermez VS Code et reessayez.
        pause
        exit /b 1
    )
) else (
    echo       Pas de cache a supprimer.
)
echo.

echo [3/3] Demarrage du serveur de developpement...
echo.
echo ========================================
echo  Le serveur devrait etre pret dans 5-8s
echo  Ouvrez ensuite: http://localhost:3000
echo ========================================
echo.

pnpm run dev
