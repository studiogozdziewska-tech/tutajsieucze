# 🎓 Tutaj się uczę – Tutaj pracuję

Strona edukacyjna Powiatu Bytowskiego prezentująca ofertę kształcenia w szkołach ponadpodstawowych.

## 🚀 Szybki deployment na Vercel

### Krok 1: Utwórz konto na GitHub i Vercel

1. **GitHub**: Wejdź na [github.com](https://github.com) i załóż konto (jeśli nie masz)
2. **Vercel**: Wejdź na [vercel.com](https://vercel.com) i zaloguj się przez GitHub

### Krok 2: Wrzuć projekt na GitHub

```bash
# W terminalu, w folderze projektu:
git init
git add .
git commit -m "Initial commit - Tutaj się uczę"
git branch -M main
git remote add origin https://github.com/TWOJA-NAZWA/tutajsieucze.git
git push -u origin main
```

### Krok 3: Deploy na Vercel

1. Wejdź na [vercel.com/new](https://vercel.com/new)
2. Kliknij **"Import Git Repository"**
3. Wybierz repozytorium `tutajsieucze`
4. Kliknij **"Deploy"**

### Krok 4: Skonfiguruj Vercel KV (baza danych dla licznika)

1. W dashboardzie Vercel, wejdź w swój projekt
2. Przejdź do zakładki **"Storage"**
3. Kliknij **"Create Database"** → wybierz **"KV"**
4. Nazwij bazę np. `tutajsieucze-counter`
5. Kliknij **"Create"**
6. Vercel automatycznie doda zmienne środowiskowe

### Krok 5: Redeploy

1. Wejdź w zakładkę **"Deployments"**
2. Kliknij **"..."** przy ostatnim safe → **"Redeploy"**

## ✅ Gotowe!

Twoja strona będzie dostępna pod adresem:
- `https://tutajsieucze.vercel.app` (lub podobnym)

## 📁 Struktura projektu

```
tutajsieucze/
├── index.html          # Główna strona
├── index_budowa.html   # Strona "w budowie"
├── api/
│   └── counter.js      # API licznika odwiedzin
├── vercel.json         # Konfiguracja Vercel
├── package.json        # Zależności
└── *.png, *.mp4        # Zasoby (loga, wideo)
```

## 🔧 Lokalne testowanie

```bash
# Zainstaluj Vercel CLI
npm i -g vercel

# Uruchom lokalnie
vercel dev
```

## 📊 Licznik odwiedzin

- Bazowa wartość: **60 000** (od 2021 roku)
- Każda unikalna wizyta (sesja) zwiększa licznik o 1
- Dane przechowywane w Vercel KV (Redis)

## 📝 Licencja

© 2026 Powiat Bytowski. Wszelkie prawa zastrzeżone.




