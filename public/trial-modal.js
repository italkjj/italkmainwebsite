// trial-modal.js — injectable trial booking modal for all ITALK pages
// Load this script BEFORE lang.js so data-i18n elements are in the DOM when lang.js runs.

// ── EmailJS configuration ─────────────────────────────────────────────────
const TRIAL_EMAILJS_SERVICE_ID  = 'service_ydbmks1';
const TRIAL_EMAILJS_TEMPLATE_ID = 'template_w21jkas';
const TRIAL_EMAILJS_PUBLIC_KEY  = 'mUzj_VvL-__k6ltia';
// ─────────────────────────────────────────────────────────────────────────

(function () {
  // ── 1. Inject modal + toast HTML into body ──────────────────────────────
  document.body.insertAdjacentHTML('beforeend', `
<div id="trial-modal" class="fixed inset-0 z-[100] items-center justify-center p-4 bg-[#121212]/60 backdrop-blur-sm" aria-modal="true" role="dialog">
  <div id="modal-box" class="bg-white rounded-[2rem] w-full max-w-lg shadow-2xl overflow-y-auto max-h-[90vh]">
    <div class="bg-[#ffcd4a]/25 px-5 sm:px-8 pt-8 pb-6">
      <div class="flex items-start justify-between">
        <div>
          <span class="text-xs font-bold tracking-widest uppercase text-[#775a00]" data-i18n="modal.badge">무료 체험 신청</span>
          <h3 class="text-2xl font-bold text-[#1b1c1c] mt-1" data-i18n="modal.h3">첫 수업을 예약하세요</h3>
          <p class="text-sm text-[#5f5e5e] mt-1" data-i18n="modal.sub">아래 정보를 입력하시면 24시간 내로 연락드립니다.</p>
        </div>
        <button id="modal-close" class="w-9 h-9 rounded-full bg-[#efeded] flex items-center justify-center hover:bg-[#e9e8e7] transition-colors flex-shrink-0 ml-4">
          <span class="material-symbols-outlined text-[#5f5e5e] text-xl">close</span>
        </button>
      </div>
    </div>
    <form id="trial-form" class="px-5 sm:px-8 py-6 space-y-4" novalidate>
      <p class="hidden"><input name="bot-field"></p>
      <div>
        <label class="block text-sm font-semibold text-[#1b1c1c] mb-1.5" for="f-name"><span data-i18n="modal.name">이름</span> <span class="text-[#ba1a1a]">*</span></label>
        <input id="f-name" type="text" placeholder="홍길동" autocomplete="name" data-i18n-ph="modal.name.ph"
          class="w-full border border-[#d2c5ae] rounded-xl px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-[#775a00] focus:border-transparent">
        <p class="err text-[#ba1a1a] text-xs mt-1 hidden">이름을 입력해 주세요.</p>
      </div>
      <div>
        <label class="block text-sm font-semibold text-[#1b1c1c] mb-1.5" for="f-phone"><span data-i18n="modal.phone">연락처</span> <span class="text-[#ba1a1a]">*</span></label>
        <input id="f-phone" type="tel" placeholder="010-0000-0000" autocomplete="tel"
          class="w-full border border-[#d2c5ae] rounded-xl px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-[#775a00] focus:border-transparent">
        <p class="err text-[#ba1a1a] text-xs mt-1 hidden">올바른 연락처를 입력해 주세요.</p>
      </div>
      <div>
        <label class="block text-sm font-semibold text-[#1b1c1c] mb-1.5" for="f-level"><span data-i18n="modal.level">현재 영어 수준</span> <span class="text-[#ba1a1a]">*</span></label>
        <select id="f-level" class="w-full border border-[#d2c5ae] rounded-xl px-4 py-3 text-base bg-white focus:outline-none focus:ring-2 focus:ring-[#775a00]">
          <option value="" disabled selected data-i18n-opt="modal.level.ph">수준을 선택해 주세요</option>
          <option value="beginner"     data-i18n-opt="modal.level.1">입문 (Beginner)</option>
          <option value="elementary"   data-i18n-opt="modal.level.2">초급 (Elementary)</option>
          <option value="intermediate" data-i18n-opt="modal.level.3">중급 (Intermediate)</option>
          <option value="upper"        data-i18n-opt="modal.level.4">중상급 (Upper-Intermediate)</option>
          <option value="advanced"     data-i18n-opt="modal.level.5">고급 (Advanced)</option>
        </select>
        <p class="err text-[#ba1a1a] text-xs mt-1 hidden">수준을 선택해 주세요.</p>
      </div>
      <div>
        <label class="block text-sm font-semibold text-[#1b1c1c] mb-2" data-i18n="modal.goals">학습 목표 (복수 선택 가능)</label>
        <div class="grid grid-cols-2 gap-2">
          <button type="button" class="goal-chip border border-[#d2c5ae] rounded-xl px-3 py-2 text-sm text-[#1b1c1c] text-left hover:border-[#775a00] hover:text-[#775a00] transition-colors" data-i18n="modal.goal.biz">💼 비즈니스 영어</button>
          <button type="button" class="goal-chip border border-[#d2c5ae] rounded-xl px-3 py-2 text-sm text-[#1b1c1c] text-left hover:border-[#775a00] hover:text-[#775a00] transition-colors" data-i18n="modal.goal.trv">✈️ 여행 영어</button>
          <button type="button" class="goal-chip border border-[#d2c5ae] rounded-xl px-3 py-2 text-sm text-[#1b1c1c] text-left hover:border-[#775a00] hover:text-[#775a00] transition-colors" data-i18n="modal.goal.tst">📝 시험 대비</button>
          <button type="button" class="goal-chip border border-[#d2c5ae] rounded-xl px-3 py-2 text-sm text-[#1b1c1c] text-left hover:border-[#775a00] hover:text-[#775a00] transition-colors" data-i18n="modal.goal.cvs">💬 일상 회화</button>
        </div>
      </div>
      <div class="flex items-start gap-3">
        <input id="f-agree" type="checkbox" class="mt-0.5 w-4 h-4 rounded border-[#d2c5ae] accent-[#775a00] cursor-pointer">
        <label for="f-agree" class="text-sm text-[#5f5e5e] cursor-pointer">
          <span class="text-[#1b1c1c] font-medium" data-i18n="modal.agree">개인정보 수집·이용에 동의합니다.</span><br>
          <span data-i18n="modal.agree.sub">체험 신청 처리 목적으로만 사용되며 제3자에게 제공되지 않습니다.</span>
        </label>
      </div>
      <p id="agree-error" class="text-[#ba1a1a] text-xs hidden">개인정보 수집·이용에 동의해 주세요.</p>
      <p id="submit-error" class="hidden text-[#ba1a1a] text-xs bg-[#ffdad6] rounded-lg px-4 py-3"></p>
      <button type="submit" id="submit-btn" class="w-full bg-[#775a00] text-white py-4 rounded-xl font-bold text-base hover:bg-[#5a4300] active:scale-[0.99] transition-all flex items-center justify-center gap-2">
        <span id="submit-label" data-i18n="modal.submit">무료 체험 신청하기</span>
        <span class="material-symbols-outlined text-xl" id="submit-icon">arrow_forward</span>
      </button>
    </form>
  </div>
</div>

<div id="toast" class="fixed bottom-8 right-4 md:right-8 z-[200] bg-[#121212] text-[#fbf9f8] px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3 max-w-xs">
  <span class="material-symbols-outlined text-[#ffdf97] text-2xl" style="font-variation-settings:'FILL' 1;">check_circle</span>
  <div>
    <p class="font-bold text-sm" data-i18n="toast.title">신청이 완료되었습니다!</p>
    <p class="text-xs text-[#c4c7ca] mt-0.5" data-i18n="toast.sub">24시간 내로 연락드리겠습니다.</p>
  </div>
</div>
`);

  // ── 2. Wire modal open / close ──────────────────────────────────────────
  const modal = document.getElementById('trial-modal');

  function openModal() {
    modal.style.display = 'flex';
    requestAnimationFrame(() => modal.classList.add('show'));
    document.body.style.overflow = 'hidden';
  }
  function closeModal() {
    modal.classList.remove('show');
    setTimeout(() => { modal.style.display = 'none'; document.body.style.overflow = ''; }, 200);
  }

  window.openModal  = openModal;
  window.closeModal = closeModal;

  document.querySelectorAll('.trial-btn').forEach(b => b.addEventListener('click', openModal));
  document.getElementById('modal-close').addEventListener('click', closeModal);
  modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

  // ── 3. Goal chip toggle ─────────────────────────────────────────────────
  document.querySelectorAll('.goal-chip').forEach(c => c.addEventListener('click', () => c.classList.toggle('selected')));

  // ── 4. Phone auto-format ────────────────────────────────────────────────
  document.getElementById('f-phone').addEventListener('input', function () {
    let v = this.value.replace(/\D/g, '').slice(0, 11);
    if (v.length >= 7) v = v.slice(0, 3) + '-' + v.slice(3, 7) + '-' + v.slice(7);
    else if (v.length >= 4) v = v.slice(0, 3) + '-' + v.slice(3);
    this.value = v;
  });

  // ── 5. Form submit via EmailJS ──────────────────────────────────────────
  document.getElementById('trial-form').addEventListener('submit', async function (e) {
    e.preventDefault();
    let ok = true;

    const name     = document.getElementById('f-name');
    const nameErr  = name.nextElementSibling;
    if (!name.value.trim()) { nameErr.classList.remove('hidden'); name.classList.add('border-[#ba1a1a]'); ok = false; }
    else                    { nameErr.classList.add('hidden');    name.classList.remove('border-[#ba1a1a]'); }

    const phone    = document.getElementById('f-phone');
    const phoneErr = phone.nextElementSibling;
    if (!/^\d{3}-\d{3,4}-\d{4}$/.test(phone.value.trim())) { phoneErr.classList.remove('hidden'); ok = false; }
    else                                                     { phoneErr.classList.add('hidden'); }

    const level    = document.getElementById('f-level');
    const levelErr = level.nextElementSibling;
    if (!level.value) { levelErr.classList.remove('hidden'); ok = false; }
    else              { levelErr.classList.add('hidden'); }

    const agree    = document.getElementById('f-agree');
    const agreeErr = document.getElementById('agree-error');
    if (!agree.checked) { agreeErr.classList.remove('hidden'); ok = false; }
    else                { agreeErr.classList.add('hidden'); }

    if (!ok) return;

    const btn = document.getElementById('submit-btn');
    document.getElementById('submit-label').textContent = '신청 중...';
    document.getElementById('submit-icon').textContent  = 'hourglass_empty';
    btn.disabled = true;

    const goals = [...document.querySelectorAll('.goal-chip.selected')]
      .map(c => c.textContent.trim()).join(', ') || '미선택';

    try {
      await emailjs.send(
        TRIAL_EMAILJS_SERVICE_ID,
        TRIAL_EMAILJS_TEMPLATE_ID,
        { from_name: name.value.trim(), phone: phone.value.trim(), level: level.value, goals },
        TRIAL_EMAILJS_PUBLIC_KEY
      );
      closeModal();
      document.getElementById('trial-form').reset();
      document.querySelectorAll('.goal-chip').forEach(c => c.classList.remove('selected'));
      const toast = document.getElementById('toast');
      toast.classList.add('show');
      setTimeout(() => toast.classList.remove('show'), 5000);
    } catch (err) {
      console.error('Trial form error:', err);
      const errBox = document.getElementById('submit-error');
      if (errBox) { errBox.textContent = '제출 중 오류가 발생했습니다. 잠시 후 다시 시도하거나 전화(010-9052-5935)로 문의해 주세요.'; errBox.classList.remove('hidden'); }
    } finally {
      btn.disabled = false;
      document.getElementById('submit-label').textContent = '무료 체험 신청하기';
      document.getElementById('submit-icon').textContent  = 'arrow_forward';
    }
  });
})();
