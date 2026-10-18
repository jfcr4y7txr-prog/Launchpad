const AI=[
['fa-comments','ChatGPT','Content Creation & Brainstorming','A versatile assistant for drafting posts, outlining ideas, and turning rough notes into polished copy.','https://chatgpt.com','from-emerald-400 to-teal-600'],
['fa-brain','Claude','Advanced Reasoning & Long-form Writing','Thoughtful analysis and natural long-form writing, with large-document understanding for research and editing.','https://claude.ai','from-orange-400 to-amber-600'],
['fa-gem','Google Gemini','Research & Google Ecosystem','Works across Search, Docs, Gmail, and Drive to speed up research and everyday Google workflows.','https://gemini.google.com','from-blue-400 to-indigo-600'],
['fa-magnifying-glass','Perplexity AI','Source-Backed Deep Web Research','Answers web questions with linked citations, so you can verify every claim before you publish.','https://www.perplexity.ai','from-cyan-400 to-sky-600'],
['fa-palette','Canva AI','Visual Assets & Social Graphics','Generate images, resize designs, and build on-brand social graphics from ready-made templates.','https://www.canva.com','from-fuchsia-400 to-violet-600'],
['fa-display','Gamma App','AI Presentations & Pitch Decks','Turn a short prompt or outline into a clean, shareable slide deck or one-page site in minutes.','https://gamma.app','from-pink-400 to-rose-600'],
['fa-microphone','ElevenLabs','AI Voice Generation & Audio','Realistic text-to-speech for videos, podcasts, and voiceovers, with a free monthly character allowance.','https://elevenlabs.io','from-neutral-400 to-neutral-700'],
['fa-image','Leonardo.ai','AI Art & Image Generation','Create concept art, product visuals, and thumbnails with fine control over style and composition.','https://leonardo.ai','from-purple-400 to-fuchsia-700'],
['fa-note-sticky','Notion AI','Workspace Productivity & Notes','Summarize meetings, draft docs, and answer questions across your notes and project pages.','https://www.notion.so/product/ai','from-slate-400 to-slate-700'],
['fa-code','GitHub Copilot Free','Coding & Web Development','Inline code suggestions and chat inside VS Code to build, debug, and refactor websites faster.','https://github.com/features/copilot','from-blue-500 to-violet-700']
];
const MK=[
{t:'Organic Growth & Social Media Marketing',d:'Build an audience without an ad budget.',cat:'Social Media',items:[
 ['fa-brands fa-x-twitter','X / Twitter','Threads, engagement, and viral post formulas',['Write threads that open with a specific promise in the first line, then deliver one idea per post.','Use proven post formulas: a bold claim, a short story, a numbered list, or a before-and-after result.','Spend 20 minutes a day replying to larger accounts in your niche to earn profile visits and followers.','Schedule posts and threads in advance with Typefully, and review which hooks earned the most replies.']],
 ['fa-brands fa-reddit-alien','Reddit','Community marketing without getting banned',['Find active subreddits with tools like GummySearch or Reddit search, and read each rulebook first.','Lead with value: answer questions in depth and share what you learned, not a pitch.','Follow the 90/10 rule: roughly nine helpful contributions for every post that mentions your site.','Disclose that you built the project, link only where rules allow, and never ask for upvotes.']],
 ['fa-brands fa-linkedin-in','LinkedIn & TikTok/Reels','Short-form video and B2B reach',['Repurpose one idea into a 30-second vertical video for TikTok, Instagram Reels, and YouTube Shorts.','Hook viewers in the first two seconds with on-screen text, then show the result before the explanation.','On LinkedIn, post text and document carousels about lessons learned, and engage with comments in the first hour.','Add a clear next step in every post, such as a free resource linked in your profile.']]
]},
{t:'Search Engine Optimization & Traffic',d:'Earn steady traffic from people already searching.',cat:'SEO',items:[
 ['fa-solid fa-gauge-high','On-Page & Technical SEO','Make every page easy to find and fast to load',['Give each page one primary keyword in the title, H1, URL, and opening paragraph.','Write descriptive meta titles under 60 characters and meta descriptions under 160.','Improve Core Web Vitals: compress images, lazy-load media, and keep layout shifts to a minimum.','Submit an XML sitemap in Google Search Console and fix indexing errors as they appear.']],
 ['fa-solid fa-key','Keyword Research Tools','Find terms with real demand and winnable competition',['Start with Google Keyword Planner, Google Trends, and the autocomplete suggestions in Search.','Use Ahrefs Webmaster Tools or Semrush free plans to check difficulty and competitor rankings.','Target long-tail phrases of four or more words first, since they convert better and rank sooner.','Group keywords by search intent and map each group to a single page.']],
 ['fa-solid fa-link','Backlink Strategies','Earn links that signal trust to search engines',['Publish original data, templates, or free tools that others want to cite.','Pitch guest posts and podcast interviews to sites your audience already reads.','Reclaim unlinked brand mentions by emailing the author with a friendly request.','List your site in relevant directories and communities, and avoid paid link schemes.']]
]},
{t:'Paid Ads & Promotion',d:'Buy attention once your message is proven.',cat:'Paid Ads',items:[
 ['fa-brands fa-meta','Meta Ads','Facebook and Instagram campaigns',['Install the Meta Pixel and set conversion events before spending anything.','Test three creatives and two audiences with a small daily budget for at least a week.','Use short video and a single, clear call to action; refresh creatives when frequency climbs.','Retarget site visitors with a distinct offer once you have a few hundred of them.']],
 ['fa-brands fa-x-twitter','X Ads','Promote posts to targeted audiences',['Promote your best-performing organic posts instead of writing ads from scratch.','Target by follower look-alikes, keywords, and interests relevant to your niche.','Choose a website-traffic or engagement objective and set a clear daily cap.','Track clicks to your site with UTM parameters in Google Analytics.']],
 ['fa-brands fa-reddit-alien','Reddit Sponsored Posts','Reach niche communities with native-looking ads',['Pick subreddits and interest targets that match your offer closely.','Write the ad like a post: a plain headline that states the benefit, with no hype.','Keep comments on and reply honestly, since the thread is part of your ad.','Start with a small budget, compare cost per click across communities, then scale the winners.']]
]},
{t:'Marketing Automation & Analytics',d:'Measure what works and follow up automatically.',cat:'Automation',items:[
 ['fa-solid fa-chart-line','Google Analytics 4','Understand where visitors come from and what they do',['Create a GA4 property, add the tag to every page, and mark key actions as conversions.','Use UTM links for every campaign so each channel is attributed correctly.','Review the Acquisition and Engagement reports weekly to find your top-performing pages.','Link Google Search Console to see which queries bring people to your site.']],
 ['fa-solid fa-envelope-open-text','Email Marketing Funnels','Turn visitors into subscribers and customers',['Offer a useful lead magnet, such as a checklist or template, in exchange for an email address.','Build a simple funnel: welcome email, three value emails, then one clear offer.','Use a platform like Mailchimp, Brevo, or ConvertKit and keep the signup form to two fields.','Send a regular newsletter and prune inactive subscribers to protect deliverability.']],
 ['fa-solid fa-reply-all','Auto-Responders','Reply instantly and nurture leads on autopilot',['Send a welcome message within minutes of signup that sets expectations and delivers the promised resource.','Trigger follow-ups from behavior, such as a clicked link or an abandoned checkout.','Personalize with the subscriber’s first name and the topic they signed up for.','Include an easy unsubscribe link and review open and click rates monthly.']]
]}
];
const CATS=['All','Social Media','SEO','AI Tools','Paid Ads','Automation'];
const $=s=>document.querySelector(s);
const esc=s=>s.replace(/&/g,'&amp;').replace(/</g,'&lt;');
let cat='All',q='';

$('#aiGrid').innerHTML=AI.map(a=>`<article class="ai-card glass hover-lift rounded-2xl p-5 flex flex-col" data-cat="AI Tools" data-text="${esc((a[1]+' '+a[2]+' '+a[3]).toLowerCase())}">
<div class="w-12 h-12 rounded-xl bg-gradient-to-br ${a[5]} text-white grid place-items-center text-xl shadow-lg"><i class="fa-solid ${a[0]}"></i></div>
<h3 class="mt-4 text-lg font-semibold tracking-tight">${a[1]}</h3>
<span class="mt-2 self-start rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-medium px-2.5 py-1">${esc(a[2])}</span>
<p class="mt-3 text-sm text-neutral-600 dark:text-neutral-400 flex-1">${a[3]}</p>
<a href="${a[4]}" target="_blank" rel="noopener noreferrer" class="mt-5 inline-flex items-center gap-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:gap-3 transition-all">Open Tool<span class="sr-only"> ${a[1]}</span><i class="fa-solid fa-arrow-up-right-from-square text-xs"></i></a></article>`).join('');

$('#mkGroups').innerHTML=MK.map((g,i)=>`<div class="mk-group" data-cat="${g.cat}">
<div class="mb-6"><h3 class="text-2xl sm:text-3xl font-semibold tracking-tight">Section ${'ABCD'[i]}: ${esc(g.t)}</h3><p class="text-neutral-600 dark:text-neutral-400 mt-1">${g.d}</p></div>
<div class="grid gap-5 lg:grid-cols-3">${g.items.map(m=>`<article class="mk-card glass hover-lift rounded-2xl p-6" data-cat="${g.cat}" data-text="${esc((m[1]+' '+m[2]+' '+m[3].join(' ')).toLowerCase())}">
<div class="w-11 h-11 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 grid place-items-center text-lg"><i class="${m[0].includes('fa-brands')?m[0]:'fa-solid '+m[0].replace('fa-solid ','')}"></i></div>
<h4 class="mt-4 text-lg font-semibold tracking-tight">${m[1]}</h4>
<p class="text-sm text-neutral-500 mt-1">${m[2]}</p>
<ol class="mt-4 space-y-3 text-sm text-neutral-700 dark:text-neutral-300 list-decimal list-outside pl-5 marker:text-blue-500 marker:font-semibold">${m[3].map(s=>`<li>${s}</li>`).join('')}</ol></article>`).join('')}</div></div>`).join('');

$('#chips').innerHTML=CATS.map(c=>`<button class="chip rounded-full border border-black/10 dark:border-white/15 px-4 py-1.5 text-sm" data-c="${c}" aria-pressed="${c==='All'}">${c}</button>`).join('');

function apply(){
  let ai=0,mk=0;
  document.querySelectorAll('.ai-card,.mk-card').forEach(el=>{
    const ok=(cat==='All'||el.dataset.cat===cat)&&el.dataset.text.includes(q);
    el.classList.toggle('hidden',!ok);
    if(ok){el.classList.contains('ai-card')?ai++:mk++}
  });
  document.querySelectorAll('.mk-group').forEach(g=>g.classList.toggle('hidden',!g.querySelector('.mk-card:not(.hidden)')));
  $('#aiEmpty').classList.toggle('hidden',ai>0);
  $('#mkEmpty').classList.toggle('hidden',mk>0);
}
$('#chips').addEventListener('click',e=>{
  const b=e.target.closest('.chip'); if(!b)return;
  cat=b.dataset.c;
  document.querySelectorAll('.chip').forEach(c=>c.setAttribute('aria-pressed',c===b));
  apply();
});
$('#search').addEventListener('input',e=>{q=e.target.value.trim().toLowerCase();apply()});

const root=document.documentElement;
function setTheme(t){
  root.classList.toggle('dark',t==='dark');
  $('#themeIcon').className='fa-solid '+(t==='dark'?'fa-sun':'fa-moon');
  try{localStorage.setItem('theme',t)}catch(e){}
}
let saved=null;try{saved=localStorage.getItem('theme')}catch(e){}
setTheme(saved||'dark');
$('#themeBtn').addEventListener('click',()=>setTheme(root.classList.contains('dark')?'light':'dark'));

$('#menuBtn').addEventListener('click',()=>{
  const m=$('#mobileMenu'),open=m.classList.toggle('hidden')===false;
  $('#menuBtn').setAttribute('aria-expanded',open);
});
$('#mobileMenu').addEventListener('click',e=>{if(e.target.tagName==='A'){$('#mobileMenu').classList.add('hidden');$('#menuBtn').setAttribute('aria-expanded','false')}});

$('#year').textContent=new Date().getFullYear();
