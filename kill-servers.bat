@echo off
echo Arret de tous les processus Node.js...
taskkill /F /IM node.exe /T 2>nul
if %errorlevel%==0 (
    echo Tous les serveurs ont ete arretes.
) else (
    echo Aucun serveur en cours d'execution.
)
echo.
echo Nettoyage du cache Next.js...
if exist .next (
    rmdir /s /q .next
    echo Cache .next supprime.
) else (
    echo Pas de cache .next a supprimer.
)
echo.
echo Termine! Vous pouvez maintenant lancer: pnpm run dev
pause
