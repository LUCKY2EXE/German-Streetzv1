/* Gemeinsamer DE/EN-Umschalter fuer alle tutorial/*.html-Seiten.
   Nutzt denselben localStorage-Key wie das Spiel selbst (index.html: LANG_STORAGE_KEY) — wer hier
   die Sprache wechselt, startet das Spiel danach automatisch in derselben Sprache (und umgekehrt). */
(function(){
  const KEY='hoodrpg_lang';
  function getLang(){
    try{ return localStorage.getItem(KEY)==='en' ? 'en' : 'de'; }catch(e){ return 'de'; }
  }
  function setLang(lang){
    try{ localStorage.setItem(KEY,lang); }catch(e){}
    apply(lang);
  }
  function apply(lang){
    document.querySelectorAll('.lang-de').forEach(el=>el.classList.toggle('lang-hidden', lang!=='de'));
    document.querySelectorAll('.lang-en').forEach(el=>el.classList.toggle('lang-hidden', lang!=='en'));
    document.documentElement.lang=lang;
    const btn=document.getElementById('lang-toggle');
    if(btn) btn.textContent = lang==='de' ? 'EN' : 'DE';
  }
  function init(){
    const lang=getLang();
    apply(lang);
    const btn=document.getElementById('lang-toggle');
    if(btn) btn.addEventListener('click',()=>setLang(getLang()==='de'?'en':'de'));
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',init);
  else init();
})();
