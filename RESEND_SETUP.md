# Resend Email Setup Guide - ElveonTech

Deze guide helpt je om het contactformulier van de ElveonTech website volledig productie-klaar te maken met Resend.

## 📋 Overzicht

Het contactformulier gebruikt [Resend](https://resend.com) voor het verzenden van emails. Voor productie moet je:

1. Een Resend account aanmaken
2. Een API key genereren
3. Je domein (elveontech.nl) verifiëren
4. Environment variabelen configureren

---

## 🚀 Stap 1: Resend Account Aanmaken

1. Ga naar [resend.com](https://resend.com)
2. Klik op **"Sign Up"** of **"Get Started"**
3. Maak een account aan met je email
4. Bevestig je email-adres

---

## 🔑 Stap 2: API Key Genereren

1. Log in op je Resend dashboard
2. Ga naar [API Keys](https://resend.com/api-keys)
3. Klik op **"Create API Key"**
4. Geef de key een naam: `ElveonTech Website`
5. Selecteer **"Full access"** of minimaal **"Sending access"**
6. Klik op **"Create"**
7. **Kopieer de API key onmiddellijk** (je kunt hem later niet meer zien!)

---

## 🌐 Stap 3: Domein Verifiëren

### 3.1 Domein Toevoegen in Resend

1. Ga naar [Domains](https://resend.com/domains) in je Resend dashboard
2. Klik op **"Add Domain"**
3. Voer in: `elveontech.nl`
4. Klik op **"Add"**

### 3.2 DNS Records Instellen

Resend geeft je nu 3 DNS records die je moet toevoegen. Je moet deze records toevoegen bij je **domain provider** (waar je elveontech.nl hebt geregistreerd).

#### DNS Records die je moet toevoegen:

**1. SPF Record (TXT Record)**
```
Type: TXT
Name: @ (of elveontech.nl)
Value: v=spf1 include:_spf.resend.com ~all
TTL: 3600
```

**2. DKIM Record (TXT Record)**
```
Type: TXT
Name: resend._domainkey
Value: [LANGE STRING - krijg je van Resend]
TTL: 3600
```
*De value is een lange string die Resend je geeft. Kopieer deze exact.*

**3. DMARC Record (TXT Record)** *(optioneel maar sterk aanbevolen)*
```
Type: TXT
Name: _dmarc
Value: v=DMARC1; p=none; rua=mailto:dmarc@elveontech.nl
TTL: 3600
```

### 3.3 DNS Records Toevoegen

De exacte stappen verschillen per provider, maar algemeen:

**Bij TransIP:**
1. Log in op TransIP
2. Ga naar "Domeinen"
3. Klik op `elveontech.nl`
4. Ga naar "DNS"
5. Klik op "Record toevoegen"
6. Voeg elk record toe zoals hierboven beschreven

**Bij Cloudflare:**
1. Log in op Cloudflare
2. Selecteer `elveontech.nl`
3. Ga naar "DNS"
4. Klik op "Add record"
5. Voeg elk record toe

**Bij andere providers:**
- Zoek naar "DNS Management" of "DNS Settings"
- De interface is meestal vergelijkbaar

### 3.4 Verificatie Wachten

1. Ga terug naar je Resend dashboard → Domains
2. Klik op `elveontech.nl`
3. Klik op **"Verify DNS Records"**
4. Wacht tot alle records zijn geverifieerd (⏱️ kan 5 minuten tot 48 uur duren)
5. Je ontvangt een email zodra verificatie is gelukt

---

## ⚙️ Stap 4: Environment Variabelen Configureren

### 4.1 Lokale Ontwikkeling

1. Open `.env.local` in je project root
2. Vul je **echte API key** in:

```env
RESEND_API_KEY=re_jouw_echte_api_key_hier

# Voor productie (na domein verificatie):
RESEND_FROM_EMAIL=ElveonTech <noreply@elveontech.nl>
RESEND_TO_EMAIL=contact@elveontech.nl
```

3. Sla het bestand op

### 4.2 Productie (Vercel/Netlify/etc.)

#### Voor Vercel:

1. Ga naar je project op [vercel.com](https://vercel.com)
2. Klik op **"Settings"** → **"Environment Variables"**
3. Voeg toe:
   - **Name:** `RESEND_API_KEY`  
     **Value:** `re_jouw_echte_api_key`
   - **Name:** `RESEND_FROM_EMAIL`  
     **Value:** `ElveonTech <noreply@elveontech.nl>`
   - **Name:** `RESEND_TO_EMAIL`  
     **Value:** `contact@elveontech.nl`
4. Klik op **"Save"**
5. **Redeploy** je applicatie

#### Voor andere platforms:

Voeg dezelfde environment variabelen toe in de instellingen van je hosting platform.

---

## 🧪 Stap 5: Testen

### Tijdens ontwikkeling (domein nog niet geverifieerd):

Als je domein nog niet is geverifieerd, kun je tijdelijk testen met:

```env
# In .env.local
RESEND_API_KEY=re_jouw_echte_api_key
RESEND_FROM_EMAIL=ElveonTech Website <onboarding@resend.dev>
RESEND_TO_EMAIL=jouw-resend-email@example.com  # Email waarmee je bij Resend bent ingelogd
```

**Let op:** `onboarding@resend.dev` kan alleen emails sturen naar het email-adres waarmee je bij Resend bent ingelogd!

### Na domein verificatie:

1. Start je development server opnieuw:
   ```bash
   npm run dev
   ```

2. Ga naar je website: `http://localhost:3000`

3. Vul het contactformulier in

4. Controleer:
   - ✅ Je ziet een succesbericht
   - ✅ `contact@elveontech.nl` ontvangt de email
   - ✅ De email ziet er professioneel uit met styling
   - ✅ Reply-to werkt (reply gaat naar de inzender)

---

## 🔍 Troubleshooting

### ❌ Fout: "Testing domain restriction"

**Probleem:** Je gebruikt `onboarding@resend.dev` maar stuurt naar een ander email-adres.

**Oplossing:** 
- Of wijzig `RESEND_TO_EMAIL` naar je Resend account email (voor testen)
- Of verifieer je domein en gebruik `noreply@elveontech.nl`

### ❌ Fout: "Email configuratiefout"

**Probleem:** `RESEND_API_KEY` is niet ingesteld of ongeldig.

**Oplossing:**
1. Controleer of `.env.local` bestaat
2. Controleer of `RESEND_API_KEY` begint met `re_`
3. Genereer een nieuwe API key als deze ongeldig is
4. Herstart je development server

### ❌ Fout: "Email domein niet geverifieerd"

**Probleem:** DNS records zijn nog niet goed geconfigureerd.

**Oplossing:**
1. Ga naar Resend dashboard → Domains
2. Controleer de status van je DNS records
3. Klik op "Verify DNS Records"
4. Wacht langer (propagatie kan tot 48 uur duren)
5. Controleer DNS records met [DNS Checker](https://dnschecker.org/)

### ⏱️ DNS Records worden niet gevonden

**Mogelijke oorzaken:**
- DNS propagatie duurt nog
- Records zijn verkeerd ingevoerd
- TTL is te hoog ingesteld

**Controleer DNS:**
```bash
# SPF record controleren
nslookup -type=TXT elveontech.nl

# DKIM record controleren
nslookup -type=TXT resend._domainkey.elveontech.nl
```

---

## 📧 Email Template

De emails worden verzonden met een professionele HTML template inclusief:

- ✅ Styled header met ElveonTech branding
- ✅ Gestructureerde weergave van contactgegevens
- ✅ Context informatie (als beschikbaar)
- ✅ Timestamp in Nederlandse tijd
- ✅ Reply-to functionaliteit
- ✅ Mobile-responsive design

---

## 🔐 Beveiliging Best Practices

1. **API Keys:**
   - ❌ Commit **NOOIT** je `.env.local` naar git
   - ✅ Gebruik environment variabelen
   - ✅ Roteer keys regelmatig (elke 90 dagen)

2. **Rate Limiting:**
   - Overweeg rate limiting toe te voegen aan je API route
   - Resend heeft built-in rate limits

3. **Spam Preventie:**
   - Overweeg een captcha toe te voegen (hCaptcha/reCAPTCHA)
   - Valideer alle input server-side

---

## 📊 Monitoring

### Resend Dashboard

Monitor je emails in het [Resend Dashboard](https://resend.com/emails):

- Zie alle verzonden emails
- Controleer delivery status
- Bekijk bounce rates
- Analyseer open rates (als tracking aan staat)

### Email Logs

Productie logs worden gelogd in:
- Vercel: Function logs
- Console: `console.log` statements in de API route

---

## 💰 Kosten

**Resend Pricing:**
- **Gratis tier:** 3,000 emails/maand
- **Pro:** $20/maand voor 50,000 emails
- **Enterprise:** Custom pricing

Voor een contactformulier is de gratis tier meestal voldoende.

---

## ✅ Checklist

- [ ] Resend account aangemaakt
- [ ] API key gegenereerd en opgeslagen
- [ ] Domein `elveontech.nl` toegevoegd aan Resend
- [ ] SPF DNS record toegevoegd
- [ ] DKIM DNS record toegevoegd
- [ ] DMARC DNS record toegevoegd (optioneel)
- [ ] Domein geverifieerd in Resend dashboard
- [ ] `.env.local` geconfigureerd met juiste waardes
- [ ] Development server herstart
- [ ] Contactformulier getest lokaal
- [ ] Environment variabelen toegevoegd aan productie
- [ ] Productie deployment getest
- [ ] Email ontvangen op `contact@elveontech.nl`
- [ ] Reply-to functionaliteit getest

---

## 🆘 Support

Bij vragen of problemen:

1. Check [Resend Documentation](https://resend.com/docs)
2. Bekijk [Resend Troubleshooting](https://resend.com/docs/troubleshooting)
3. Contact Resend support via dashboard

---

**Veel succes met de setup! 🚀**
