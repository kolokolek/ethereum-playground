# GitHub Actions CI for Ethereum Playground

Ten plik dodaje workflow CI, który przy każdym `push` i `pull_request`:
- instaluje Node 18
- robi `npm ci` (lub `npm install`)
- kompiluje kontrakty (`npx hardhat compile`)
- odpala testy (`npx hardhat test`)

## Jak użyć
1. Rozpakuj tego ZIPa.
2. Skopiuj folder `.github/workflows/` do **głównego katalogu** Twojego repo `ethereum-playground` (żeby ścieżka była: `.github/workflows/ci.yml`).
3. Zrób commit i push — workflow wystartuje automatycznie.

## (Opcjonalnie) Badge do README
Wklej do `README.md` (podmień `USER` i `REPO` na swoje):
```
![CI](https://github.com/USER/REPO/actions/workflows/ci.yml/badge.svg)
```
