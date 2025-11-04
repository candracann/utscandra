document.getElementById("trackerForm").addEventListener("submit", function(e) {
  e.preventDefault();
  
  const last = document.getElementById("lastPeriod").value;
  const cycle = parseInt(document.getElementById("cycleLength").value);
  const result = document.getElementById("result");

  if (!last || !cycle) {
    result.textContent = "Isi semua data terlebih dahulu.";
    return;
  }

  const lastDate = new Date(last);
  const nextDate = new Date(lastDate);
  nextDate.setDate(nextDate.getDate() + cycle);

  const ovulation = new Date(nextDate);
  ovulation.setDate(ovulation.getDate() - 14);

  result.innerHTML = `
    Perkiraan datang bulan berikutnya: <strong>${nextDate.toLocaleDateString('id-ID')}</strong><br>
    Masa subur (ovulasi): sekitar <strong>${ovulation.toLocaleDateString('id-ID')}</strong>
  `;
});
