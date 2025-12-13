import { getDatabase, ref, push } from
"https://www.gstatic.com/firebasejs/12.6.0/firebase-database.js";

const db = getDatabase(app);

push(ref(db, "TES"), {
  cek: "masuk",
  waktu: Date.now()
});
