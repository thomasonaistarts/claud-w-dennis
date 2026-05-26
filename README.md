# Claud W Dennis — Website

Next.js + Supabase + Vercel

---

## 1. Supabase Kurulumu

1. [supabase.com](https://supabase.com) → New Project oluştur
2. **SQL Editor** → `supabase-schema.sql` dosyasındaki kodu çalıştır
3. **Settings → API** sayfasından şunları kopyala:
   - `Project URL`
   - `anon / public` key

---

## 2. Yerel Geliştirme

```bash
# Bağımlılıkları yükle
npm install

# .env.local dosyasını oluştur
cp .env.local.example .env.local
# Dosyayı aç ve Supabase değerlerini gir

# Geliştirme sunucusunu başlat
npm run dev
# → http://localhost:3000
```

---

## 3. GitHub'a Push

```bash
git init
git add .
git commit -m "Initial commit — Claud W Dennis website"
git branch -M main
git remote add origin https://github.com/KULLANICI_ADIN/claud-w-dennis.git
git push -u origin main
```

---

## 4. Vercel Deploy

1. [vercel.com](https://vercel.com) → **Add New Project**
2. GitHub repo'yu seç
3. **Environment Variables** ekle:
   - `NEXT_PUBLIC_SUPABASE_URL` → Supabase Project URL
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY` → Supabase anon key
4. **Deploy** butonuna tıkla

Her `git push` sonrası Vercel otomatik deploy eder.

---

## Supabase'de Gelen Mesajları Görme

Supabase Dashboard → **Table Editor** → `hire_enquiries` tablosuna tıkla.
Tüm Private Hire talepleri buraya kaydedilir.
