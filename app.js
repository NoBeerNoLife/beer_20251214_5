/* =========
  店舗データ（サンプル）
  - monthlyMetrics: 月ごとの positive / sales
  - reserveUrl: 予約導線（公式/予約サイト）
  - image: 画像URL（なければ自動でプレースホルダ）
========== */

const SHOPS = [
  {
    id: "tokyo-001",
    name: "クラフトビール食堂 東京",
    desc: "国産クラフト中心。飲み比べセットと季節のペアリングが人気。",
    budget: "¥2,500〜¥4,500",
    url: "https://example.com/beer-1",
    reserveUrl: "https://example.com/beer-1/reserve",
    image: "",
    monthlyMetrics: {
      "2025-12": { positive: 128, sales: 9800000 },
      "2025-11": { positive: 96,  sales: 8700000 }
    }
  },
  {
    id: "tokyo-002",
    name: "ビアホール銀座",
    desc: "王道のビアホール。ビールに合う肉料理と落ち着いた雰囲気。",
    budget: "¥3,000〜¥6,000",
    url: "https://example.com/beer-2",
    reserveUrl: "https://example.com/beer-2/reserve",
    image: "",
    monthlyMetrics: {
      "2025-12": { positive: 110, sales: 11200000 },
      "2025-11": { positive: 104, sales: 9800000 }
    }
  },
  {
    id: "tokyo-003",
    name: "下町タップルーム",
    desc: "タップ数20。軽めから苦味まで幅広く、初心者でも選びやすい。",
    budget: "¥2,000〜¥4,000",
    url: "https://example.com/beer-3",
    reserveUrl: "https://example.com/beer-3/reserve",
    image: "",
    monthlyMetrics: {
      "2025-12": { positive: 140, sales: 7600000 },
      "2025-11": { positive: 122, sales: 7900000 }
    }
  },
  // ---- サンプルを増やす（最低20件あると「11位以下」感が出ます）----
  {
    id: "osaka-001",
    name: "大阪クラフト横丁",
    desc: "大阪名物とクラフトの組み合わせ。賑やかに楽しめる。",
    budget: "¥2,500〜¥5,000",
    url: "https://example.com/beer-4",
    reserveUrl: "https://example.com/beer-4/reserve",
    image: "",
    monthlyMetrics: { "2025-12": { positive: 88, sales: 9100000 } }
  },
  {
    id: "kyoto-001",
    name: "京都ビアダイニング",
    desc: "和の小皿とビール。香り系エールが人気。",
    budget: "¥3,000〜¥5,500",
    url: "https://example.com/beer-5",
    reserveUrl: "https://example.com/beer-5/reserve",
    image: "",
    monthlyMetrics: { "2025-12": { positive: 92, sales: 6900000 } }
  },
  {
    id: "fukuoka-001",
    name: "博多タップスタンド",
    desc: "軽く1杯から。フードも充実、サク飲みに強い。",
    budget: "¥1,800〜¥3,500",
    url: "https://example.com/beer-6",
    reserveUrl: "https://example.com/beer-6/reserve",
    image: "",
    monthlyMetrics: { "2025-12": { positive: 77, sales: 5200000 } }
  },
  {
    id: "sapporo-001",
    name: "札幌麦酒倶楽部",
    desc: "北海道食材×ラガー。寒い季節の温かい料理も◎",
    budget: "¥2,800〜¥5,500",
    url: "https://example.com/beer-7",
    reserveUrl: "https://example.com/beer-7/reserve",
    image: "",
    monthlyMetrics: { "2025-12": { positive: 69, sales: 6100000 } }
  },
  {
    id: "nagoya-001",
    name: "名古屋ビアキッチン",
    desc: "手羽先と黒ビールの相性が評判。グループにも。",
    budget: "¥2,500〜¥4,800",
    url: "https://example.com/beer-8",
    reserveUrl: "https://example.com/beer-8/reserve",
    image: "",
    monthlyMetrics: { "2025-12": { positive: 83, sales: 7000000 } }
  },
  {
    id: "yokohama-001",
    name: "港町ブリュワリー&グリル",
    desc: "醸造所併設。できたての香りを楽しめる。",
    budget: "¥3,500〜¥6,500",
    url: "https://example.com/beer-9",
    reserveUrl: "https://example.com/beer-9/reserve",
    image: "",
    monthlyMetrics: { "2025-12": { positive: 101, sales: 10400000 } }
  },
  {
    id: "kobe-001",
    name: "神戸ビアテラス",
    desc: "夜景×クラフト。デート向けの雰囲気。",
    budget: "¥3,000〜¥6,000",
    url: "https://example.com/beer-10",
    reserveUrl: "https://example.com/beer-10/reserve",
    image: "",
    monthlyMetrics: { "2025-12": { positive: 73, sales: 7800000 } }
  },
  // 追加サンプル（10件以上）
  ...Array.from({ length: 15 }).map((_, i) => {
    const n = i + 11;
    return {
      id: `sample-${String(n).padStart(3, "0")}`,
      name: `サンプルビアレストラン ${n}`,
      desc: "サンプル説明：料理とビールのペアリングが楽しめます。",
      budget: "¥2,000〜¥5,000",
      url: "https://example.com/sample",
      reserveUrl: "https://example.com/sample/reserve",
      image: "",
      monthlyMetrics: {
        "2025-12": { positive: 40 + (n % 20) * 3, sales: 3000000 + (n % 10) * 500000 }
      }
    };
  })
];

const MONTHS_AVAILABLE = getAllMonths(SHOPS);
let currentMonth = loadMonthPreference() || (MONTHS_AVAILABLE[0] || getThisMonth());

/* ========= Utilities ========= */

function getThisMonth(){
  const d = new Date();
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  return `${y}-${m}`;
}

function getAllMonths(shops){
  const set = new Set();
  shops.forEach(s => {
    Object.keys(s.monthlyMetrics || {}).forEach(k => set.add(k));
  });
  // 降順（新しい月が先）
  return Array.from(set).sort((a,b) => (a > b ? -1 : 1));
}

function metricOf(shop, month){
  const mm = shop.monthlyMetrics?.[month];
  return {
    positive: mm?.positive ?? 0,
    sales: mm?.sales ?? 0
  };
}

function sortByRule(shops, month){
  return [...shops].sort((a,b) => {
    const A = metricOf(a, month);
    const B = metricOf(b, month);
    if (B.positive !== A.positive) return B.positive - A.positive;
    return B.sales - A.sales;
  });
}

function formatYen(num){
  try{
    return new Intl.NumberFormat("ja-JP", { style:"currency", currency:"JPY", maximumFractionDigits:0 }).format(num);
  }catch{
    return `¥${Math.round(num).toLocaleString("ja-JP")}`;
  }
}

function placeholderImage(seed){
  // 外部画像に依存しないプレースホルダ（CSSのグラデが出るので空でもOK）
  // 画像URLを入れたければここで生成/差し替えしてOK
  return "";
}

function setMonthLabel(){
  const label = document.getElementById("monthLabel");
  if(label) label.textContent = currentMonth;
}

function saveMonthPreference(month){
  localStorage.setItem("beer_rank_month", month);
}
function loadMonthPreference(){
  return localStorage.getItem("beer_rank_month");
}

/* ========= Rendering ========= */

function renderTop10(){
  const grid = document.getElementById("top10Grid");
  if(!grid) return;

  const ranked = sortByRule(SHOPS, currentMonth);
  const top10 = ranked.slice(0,10);

  grid.innerHTML = top10.map((shop, idx) => {
    const m = metricOf(shop, currentMonth);
    const img = shop.image || placeholderImage(shop.id);
    const bg = img ? `style="background-image:url('${img}')"` : "";
    return `
      <article class="card">
        <div class="card-media" ${bg}></div>
        <div class="card-body">
          <span class="rank">#${idx+1} / TOP10</span>
          <h4>${escapeHTML(shop.name)}</h4>
          <p class="desc">${escapeHTML(shop.desc)}</p>
          <div class="meta">
            <span class="badge">予算：${escapeHTML(shop.budget)}</span>
            <span class="badge">声：${m.positive.toLocaleString("ja-JP")}</span>
            <span class="badge">売上：${formatYen(m.sales)}</span>
          </div>
          <div class="card-actions">
            <a class="btn btn-outline" href="${shop.url}" target="_blank" rel="noopener">お店URL</a>
            <button class="btn" type="button" data-open-agent="${shop.id}">予約する</button>
          </div>
        </div>
      </article>
    `;
  }).join("");
}

function renderRankList(){
  const list = document.getElementById("rankList");
  if(!list) return;

  const ranked = sortByRule(SHOPS, currentMonth);

  list.innerHTML = ranked.map((shop, i) => {
    const m = metricOf(shop, currentMonth);
    const img = shop.image || placeholderImage(shop.id);
    const bg = img ? `style="background-image:url('${img}')"` : "";
    return `
      <div class="row">
        <div class="row-rank">
          <div class="rank-num">#${i+1}</div>
          <div class="thumb" ${bg}></div>
        </div>

        <div class="row-mid">
          <h4>${escapeHTML(shop.name)}</h4>
          <p>${escapeHTML(shop.desc)}</p>
          <div class="meta" style="margin-top:8px">
            <span class="badge">予算：${escapeHTML(shop.budget)}</span>
            <span class="badge">声：${m.positive.toLocaleString("ja-JP")}</span>
            <span class="badge">売上：${formatYen(m.sales)}</span>
          </div>
        </div>

        <div class="row-right">
          <a class="btn btn-outline" href="${shop.url}" target="_blank" rel="noopener">お店URL</a>
          <button class="btn" type="button" data-open-agent="${shop.id}">予約する</button>
        </div>
      </div>
    `;
  }).join("");
}

function escapeHTML(str){
  return String(str ?? "")
    .replaceAll("&","&amp;")
    .replaceAll("<","&lt;")
    .replaceAll(">","&gt;")
    .replaceAll('"',"&quot;")
    .replaceAll("'","&#039;");
}

/* ========= Month Switch ========= */

function setupMonthSwitcher(){
  const btn = document.getElementById("monthBtn");
  if(!btn) return;

  setMonthLabel();

  btn.addEventListener("click", () => {
    if(MONTHS_AVAILABLE.length === 0){
      alert("月次データがありません。SHOPS[].monthlyMetrics を追加してください。");
      return;
    }
    const idx = MONTHS_AVAILABLE.indexOf(currentMonth);
    const next = MONTHS_AVAILABLE[(idx + 1) % MONTHS_AVAILABLE.length];
    currentMonth = next;
    saveMonthPreference(currentMonth);
    setMonthLabel();
    rerender();
  });
}

/* ========= Reservation Agent ========= */

function setupAgent(){
  const modal = document.getElementById("agentModal");
  if(!modal) return;

  const select = document.getElementById("agentShopSelect");
  const dateEl = document.getElementById("agentDate");
  const timeEl = document.getElementById("agentTime");
  const peopleEl = document.getElementById("agentPeople");
  const nameEl = document.getElementById("agentName");
  const notesEl = document.getElementById("agentNotes");
  const msgEl = document.getElementById("agentMessage");
  const copyBtn = document.getElementById("agentCopy");
  const makeBtn = document.getElementById("agentMakeMsg");
  const goBtn = document.getElementById("agentGoReserve");

  if(select){
    select.innerHTML = SHOPS.map(s => `<option value="${s.id}">${escapeHTML(s.name)}</option>`).join("");
  }

  function openModal(shopId){
    modal.setAttribute("aria-hidden", "false");
    if(select && shopId){
      select.value = shopId;
    }
    // 適当なデフォルト値
    if(dateEl && !dateEl.value){
      const d = new Date();
      d.setDate(d.getDate() + 7);
      dateEl.value = d.toISOString().slice(0,10);
    }
    if(timeEl && !timeEl.value){
      timeEl.value = "18:00";
    }
    generateMessage();
  }

  function closeModal(){
    modal.setAttribute("aria-hidden", "true");
  }

  function getSelectedShop(){
    const id = select?.value;
    return SHOPS.find(s => s.id === id) || SHOPS[0];
  }

  function generateMessage(){
    const shop = getSelectedShop();
    const date = dateEl?.value || "（日付未入力）";
    const time = timeEl?.value || "（時間未入力）";
    const people = peopleEl?.value || "2";
    const name = (nameEl?.value || "").trim();
    const notes = (notesEl?.value || "").trim();

    const lines = [];
    lines.push(`${shop.name} 予約希望です。`);
    lines.push(`日時：${date} ${time}`);
    lines.push(`人数：${people}名`);
    if(name) lines.push(`名前：${name}`);
    if(notes) lines.push(`要望：${notes}`);
    lines.push(`連絡：このメッセージに返信ください。`);

    if(msgEl) msgEl.value = lines.join("\n");
  }

  function openReservationPage(){
    const shop = getSelectedShop();
    const date = dateEl?.value || "";
    const time = timeEl?.value || "";
    const people = peopleEl?.value || "";

    // 予約URLにパラメータを付与（対応してるサイトなら受け取れる想定）
    const u = new URL(shop.reserveUrl || shop.url);
    if(date) u.searchParams.set("date", date);
    if(time) u.searchParams.set("time", time);
    if(people) u.searchParams.set("people", people);
    window.open(u.toString(), "_blank", "noopener");
  }

  document.addEventListener("click", (e) => {
    const t = e.target;

    // カードの「予約する」ボタン
    const openId = t?.getAttribute?.("data-open-agent");
    if(openId){
      openModal(openId);
    }

    // モーダル閉じる
    if(t?.getAttribute?.("data-close") === "1"){
      closeModal();
    }
  });

  // Heroから開く
  const openFromHero = document.getElementById("openAgentFromHero");
  openFromHero?.addEventListener("click", () => openModal());

  makeBtn?.addEventListener("click", generateMessage);
  goBtn?.addEventListener("click", () => {
    generateMessage();
    openReservationPage();
  });

  copyBtn?.addEventListener("click", async () => {
    try{
      await navigator.clipboard.writeText(msgEl?.value || "");
      copyBtn.textContent = "コピー済み";
      setTimeout(() => copyBtn.textContent = "コピー", 1200);
    }catch{
      alert("コピーできませんでした。テキストを選択して手動でコピーしてください。");
    }
  });

  // 入力が変わったらメッセージ更新
  [select, dateEl, timeEl, peopleEl, nameEl, notesEl].forEach(el => {
    el?.addEventListener("input", generateMessage);
    el?.addEventListener("change", generateMessage);
  });
}

/* ========= Boot ========= */

function rerender(){
  renderTop10();
  renderRankList();
}

(function init(){
  // ヘッダーの月表示
  setupMonthSwitcher();

  // 画面別レンダ
  rerender();

  // 予約エージェント
  setupAgent();
})();
