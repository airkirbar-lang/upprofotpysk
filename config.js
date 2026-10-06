/* ============================================================
   НАСТРОЙКИ СИНХРОНИЗАЦИИ ГРАФИКА ОТПУСКОВ (проектный офис)

   Этот файл читает index.html по ссылке <script src="config.js">.
   Он должен лежать РЯДОМ с index.html — в одной папке.

   ЕСЛИ ОСТАВИТЬ ПОЛЯ ПУСТЫМИ — график открывается, но работает в
   режиме «Локально»: правки сохраняются только в этом браузере и
   не видны коллегам. Чтобы получился ОБЩИЙ график в реальном
   времени, заполните три значения из вашего проекта Firebase.

   ГДЕ ВЗЯТЬ ЗНАЧЕНИЯ (Firebase, бесплатно):
   1. https://console.firebase.google.com → «Добавить проект» (любая
      цель, Google Analytics можно выключить).
   2. Меню «Сборка» → «Realtime Database» → «Создать базу данных»
      (регион любой, режим «Начать в тестовом режиме»).
   3. «Настройки проекта» (шестерёнка) → вкладка «Ваши приложения» →
      значок `</>` (веб) → зарегистрировать приложение. Скопировать:
        apiKey       — строка, начинающаяся с «AIza…»
        authDomain   — <проект>.firebaseapp.com
   4. На странице «Realtime Database» скопировать URL базы (вид
      https://<имя>-default-rtdb.<регион>.firebaseio.com) → databaseURL.
   5. Вписать все три значения ниже (в кавычках). room — название
      вашего графика, придумайте и оставьте неизменным (например
      'proekt-offis-2026-2030').

   ВАЖНО ПРО ДОМЕН: в Firebase «Authentication → Settings → Authorized
   domains» добавьте домен вашего сайта (например upsideprofotpysk.netlify.app
   или <логин>.github.io). Без этого база может отклонить подключение.
   ============================================================ */

window.VAC_SYNC_CONFIG = {
  apiKey:      'AIzaSyDIg0kvEWNykhwtPK6ez2C7I_UivHvUBLk',  // пример: 'AIzaSyD-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
  authDomain:  'grafikotpuska.firebaseapp.com',  // пример: 'мой-проект.firebaseapp.com'
  databaseURL: 'https://grafikotpuska-default-rtdb.firebaseio.com',  // пример: 'https://мой-проект-default-rtdb.firebaseio.com'
  room:        'default'  // идентификатор графика; менять не нужно
};
