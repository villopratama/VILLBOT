exports.donate = (id, BotName, corohelp, tampilTanggal, tampilWaktu, instagramlu, whatsapplu, kapanbotaktif, grupch1, grupch2, grupch3) => {
	return `
  
❉──────────❉
  Hi. *${id.split("@s.whatsapp.net")[0]}* 👋️
❉──────────❉

         ───
📆 *${tampilTanggal}*
⏱️ *${tampilWaktu}*
         ───
         
╔════════════════════
║ *Donasi Ke ${VILLBOT}* 📟
╠════════════════════
║├≽️⚜ *AXIS*: *083843251769*

║├≽️⚜ *AXIS*: *083843251769*
╠════════════════════
║   💻 *${VILLBOT}* 💻
╠════════════════════
║╭──❉ *SOSMED ADMIN* ❉──
║│1. *Group WhatsApp*
║│ _${grupch1}gak ada sayang_
║│
║│2. Gruop Wa
║│ _${grupch3}gak ad sayang_
║│
║│2. *YouTube <subscribe>*
║│ _${grupch2}_
║│
║│3. *Instagram <Follow>*
║│ _${instagramlu}_
║│
║│4. *Creator ${BotName}*
║│ _${whatsapplu}_
║╰───────────
╠════════════════════
║ *MADE BY VILLBOT🐌*
╚════════════════════`
}

