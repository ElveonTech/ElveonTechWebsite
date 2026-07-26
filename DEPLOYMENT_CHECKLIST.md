# 🚀 ElveonTech Website - Deployment Checklist

## Pre-Deployment

### 1. Email Configuratie ✉️

- [ ] Resend account aangemaakt
- [ ] API key gegenereerd (`re_...`)
- [ ] Domein `elveontech.nl` geverifieerd in Resend
  - [ ] SPF record toegevoegd en geverifieerd
  - [ ] DKIM record toegevoegd en geverifieerd
  - [ ] DMARC record toegevoegd (optioneel maar aanbevolen)
- [ ] Test email verstuurd en ontvangen

### 2. Environment Variabelen 🔐

**Lokaal (voor testen):**
- [ ] `.env.local` bestaat
- [ ] `RESEND_API_KEY` is ingesteld
- [ ] `RESEND_FROM_EMAIL` is ingesteld
- [ ] `RESEND_TO_EMAIL` is ingesteld

**Productie:**
- [ ] Environment variabelen toegevoegd aan hosting platform:
  - [ ] `RESEND_API_KEY`
  - [ ] `RESEND_FROM_EMAIL=ElveonTech <noreply@elveontech.nl>`
  - [ ] `RESEND_TO_EMAIL=contact@elveontech.nl`

### 3. Code Quality 🔍

- [ ] Geen console errors in browser
- [ ] Geen TypeScript errors: `npm run lint`
- [ ] Build succesvol: `npm run build`
- [ ] Contactformulier werkt lokaal
- [ ] Error handling werkt (test met ongeldige data)

### 4. Security 🔒

- [ ] `.env.local` staat in `.gitignore`
- [ ] Geen API keys in code hardcoded
- [ ] Input validatie actief (email & telefoon)
- [ ] CORS instellingen correct (indien van toepassing)

---

## Deployment Stappen

### Voor Vercel:

```bash
# 1. Commit laatste changes
git add .
git commit -m "Production-ready contact form with Resend"
git push

# 2. Deploy naar Vercel
vercel --prod

# Of via Vercel dashboard:
# - Push naar main branch
# - Automatic deployment triggered
```

**Environment Variabelen toevoegen:**
1. Ga naar Vercel dashboard → je project
2. Settings → Environment Variables
3. Voeg toe:
   - `RESEND_API_KEY`
   - `RESEND_FROM_EMAIL`
   - `RESEND_TO_EMAIL`
4. Redeploy

---

## Post-Deployment Testing

### 1. Basis Functionaliteit ✅

- [ ] Website bereikbaar op productie URL
- [ ] Contactformulier laadt correct
- [ ] Geen console errors in productie

### 2. Contactformulier Testing 📝

**Test 1: Succesvol verzenden**
- [ ] Vul geldig email in
- [ ] Vul geldig telefoonnummer in
- [ ] Verstuur formulier
- [ ] Succesbericht verschijnt
- [ ] Email ontvangen op `contact@elveontech.nl`
- [ ] Email bevat correcte gegevens
- [ ] Reply-to werkt (reply gaat naar inzender)

**Test 2: Validatie**
- [ ] Probeer te verzenden zonder email → Error
- [ ] Probeer te verzenden zonder telefoon → Error
- [ ] Probeer ongeldig email format → Error
- [ ] Probeer ongeldig telefoon → Error

**Test 3: Optionele velden**
- [ ] Voeg opmerking toe
- [ ] Verzend formulier
- [ ] Opmerking zichtbaar in email

**Test 4: Context informatie**
- [ ] Vul contactformulier in via time-savings calculator
- [ ] Check of context info (categorie, uren, personen) in email staat

### 3. Email Template Testing 📧

Check ontvangen email:
- [ ] Professionele styling
- [ ] ElveonTech header zichtbaar
- [ ] Alle velden leesbaar
- [ ] Context informatie correct
- [ ] Timestamp in Nederlandse tijd
- [ ] Responsive op mobile

### 4. Error Handling 🚨

**Test verschillende scenario's:**
- [ ] Internet offline → Gebruiksvriendelijke foutmelding
- [ ] Server error (500) → Correcte foutmelding
- [ ] Rate limit exceeded → Correcte foutmelding
- [ ] Ongeldige API key → Geen crash, error logged

### 5. Cross-browser Testing 🌐

Test op verschillende browsers:
- [ ] Chrome
- [ ] Firefox
- [ ] Safari
- [ ] Edge
- [ ] Mobile browsers (iOS Safari, Chrome Android)

### 6. Mobile Testing 📱

- [ ] Formulier werkt op smartphone
- [ ] Velden zijn groot genoeg om makkelijk in te vullen
- [ ] Succesbericht leesbaar
- [ ] Error berichten leesbaar
- [ ] Geen horizontale scroll

---

## Monitoring & Maintenance

### Dagelijks/Wekelijks

- [ ] Check Resend dashboard voor verzonden emails
- [ ] Controleer of emails aankomen
- [ ] Monitor error rates

### Maandelijks

- [ ] Review Resend email quota (gratis: 3000/maand)
- [ ] Check bounce rates in Resend dashboard
- [ ] Test contactformulier opnieuw

### Per kwartaal

- [ ] Overweeg API key rotatie
- [ ] Review en update email template indien nodig
- [ ] Check DNS records zijn nog geldig

---

## Rollback Plan 🔄

Als er problemen zijn na deployment:

1. **Resend API problemen:**
   ```bash
   # Revert naar vorige versie
   vercel rollback
   ```

2. **DNS problemen:**
   - Gebruik tijdelijk test configuratie:
     ```env
     RESEND_FROM_EMAIL=ElveonTech <onboarding@resend.dev>
     RESEND_TO_EMAIL=jouw-email@example.com
     ```

3. **Complete failure:**
   - Disable contactformulier tijdelijk
   - Toon alleen contact informatie (email/telefoon)
   - Fix issues, test lokaal, redeploy

---

## Analytics & Monitoring Setup (Optioneel)

### Resend Webhooks
Setup webhooks voor real-time monitoring:

1. Ga naar Resend → Webhooks
2. Voeg endpoint toe: `https://jouw-domain.com/api/webhooks/resend`
3. Selecteer events:
   - `email.sent`
   - `email.delivered`
   - `email.bounced`

### Custom Analytics
Track contactformulier metrics:
- Aantal submissions per dag/week
- Conversion rate (bezoeker → contact)
- Response tijd (hoelang tot reply)

---

## Emergency Contacts

**Resend Support:**
- Dashboard: [resend.com](https://resend.com)
- Docs: [resend.com/docs](https://resend.com/docs)
- Status: [status.resend.com](https://status.resend.com)

**Backup Email:**
Als Resend down is, kan je tijdelijk:
- Een "Mail ons op contact@elveontech.nl" bericht tonen
- Of een alternatieve email service gebruiken

---

## Success Criteria ✨

Je deployment is succesvol als:

- ✅ Contactformulier werkt op productie
- ✅ Emails worden ontvangen op `contact@elveontech.nl`
- ✅ Reply-to werkt correct
- ✅ Email template ziet er professioneel uit
- ✅ Error handling werkt goed
- ✅ Validatie voorkomt ongeldige submissions
- ✅ Geen console errors
- ✅ Werkt op alle browsers en devices
- ✅ Fast load time (<2 sec)

---

## 🎉 Klaar voor Productie!

Als alle checkboxen zijn afgevinkt, is je ElveonTech website klaar voor productie gebruik.

**Laatste stap:** Test het formulier één keer live en vraag een collega ook te testen!
