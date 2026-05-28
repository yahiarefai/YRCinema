(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(e){if(e.ep)return;e.ep=!0;const i=s(e);fetch(e.href,i)}})();let g=null;typeof supabase<"u"&&typeof supabase.createClient=="function"&&(g=supabase.createClient("https://ectftbenssqjnjbjiati.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVjdGZ0YmVuc3Nxam5qYmppYXRpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzkzNzE0ODIsImV4cCI6MjA5NDk0NzQ4Mn0.2kWHuS41qV5Hi4Mfid9kn5bD_4u-MyqTvA5Q1I0DExA"));localStorage.getItem("usersDB")||localStorage.setItem("usersDB",JSON.stringify([]));localStorage.getItem("bookingsDB")||localStorage.setItem("bookingsDB",JSON.stringify([]));const m=[{title:"The Mandalorian and Grogu",poster:"https://www.themoviedb.org/t/p/w600_and_h900_face/5Vi8dSauVwH1HOsiZceDMbRr1Ca.jpg",trailer:"https://www.youtube.com/embed/IHWlvwu8t1w",rating:"PG-13",duration:"140 min"},{title:"Mortal Kombat 2",poster:"https://m.media-amazon.com/images/M/MV5BNTg2YWNkN2EtMzc1Ny00ZTBhLWFmYTItMmMyNzhjNjhhNmVhXkEyXkFqcGc@._V1_.jpg",trailer:"https://www.youtube.com/embed/b24oG7qCwp4",rating:"R",duration:"122 min"},{title:"Backrooms",poster:"https://www.themoviedb.org/t/p/w600_and_h900_face/vpkNMkbisv5cTaIfCzUduYzXnjb.jpg",trailer:"https://www.youtube.com/embed/0HjdiohVOik",rating:"PG-13",duration:"118 min"},{title:"Passenger",poster:"https://www.themoviedb.org/t/p/w600_and_h900_face/2sOEJzhPzjTkZSlPbGxOJ7xgIyS.jpg",trailer:"https://www.youtube.com/embed/B_qj1YjI5a4",rating:"PG-13",duration:"116 min"},{title:"Project Hail Mary",poster:"https://m.media-amazon.com/images/M/MV5BNTkwNzJiYTctNzI3NC00NjE1LTlhYjktY2Q5MTdmMWFmNzcxXkEyXkFqcGc@._V1_.jpg",trailer:"https://www.youtube.com/embed/m08TxIsFTRI",rating:"PG-13",duration:"125 min"},{title:"The Devil Wears Prada 2",poster:"https://m.media-amazon.com/images/M/MV5BZmM3ZDU3ODItZmY5Yi00OTQ2LWE5OTctZTA5NDBhMWJkOGY3XkEyXkFqcGc@._V1_.jpg",trailer:"https://www.youtube.com/embed/e9HXmMnUEdE",rating:"PG-13",duration:"119 min"},{title:"Pressure",poster:"https://www.themoviedb.org/t/p/w600_and_h900_face/9RkDrI8V8QJBjhtyRX7y6Qow3aq.jpg",trailer:"https://www.youtube.com/embed/zdM4tdLQBg0",rating:"R",duration:"119 min"},{title:"Obsession",poster:"https://www.themoviedb.org/t/p/w600_and_h900_face/40I66L7QKguTFDPvcLcdiTbAD7I.jpg",trailer:"https://www.youtube.com/embed/TaaDkbG3I7g",rating:"R",duration:"124 min"},{title:"Hokum",poster:"https://www.themoviedb.org/t/p/w600_and_h900_face/jKPWwsbAM6HKURPYQ1eG8DmKMKn.jpg",trailer:"https://www.youtube.com/embed/EVCIK_MPyhc",rating:"PG-13",duration:"133 min"}],y=[{title:"The Odyssey",poster:"https://www.themoviedb.org/t/p/w600_and_h900_face/krVa7rKCQb4OBfsr2LTJv4rTz5q.jpg",trailer:"https://youtu.be/f_bKjZeJBBI"},{title:"Spider-Man: Brand New Day",poster:"https://www.themoviedb.org/t/p/w600_and_h900_face/yyB2VJEW3an2xCdcYCPQhn9QERR.jpg",trailer:"https://youtu.be/8TZMtslA3UY"},{title:"Avengers: Doomsday",poster:"https://www.themoviedb.org/t/p/w600_and_h900_face/8HkIe2i4ScpCkcX9SzZ9IPasqWV.jpg",trailer:"https://youtu.be/399Ez7WHK5s"},{title:"Digger",poster:"https://www.themoviedb.org/t/p/w600_and_h900_face/1ATXKrIPJyKNwnJ6lcG088Sa6zi.jpg",trailer:"https://youtu.be/Rd21PhsDHww"}];document.addEventListener("DOMContentLoaded",()=>{const t=document.getElementById("heroWrapper");t&&(t.innerHTML=m.map(o=>`
            <div class="swiper-slide w-full h-full relative overflow-hidden flex items-center justify-center bg-gray-900">
                <!-- Blurred Background Layer (Absolute) -->
                <img 
                    src="${o.poster}" 
                    class="absolute inset-0 w-full h-full object-cover blur-3xl opacity-40 brightness-50 z-0 transition duration-700"
                />

                <!-- Main Centered Poster (Foreground) -->
                <div class="relative z-10 h-[90%] aspect-[2/3] rounded-xl shadow-2xl overflow-hidden">
                    <img 
                        src="${o.poster}" 
                        class="w-full h-full object-cover transition duration-700"
                    />

                    <!-- Dark gradient at the bottom for readability -->
                    <div class="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10"></div>

                    <!-- Text overlay -->
                    <div class="absolute bottom-0 left-0 w-full p-6 text-white z-20 flex flex-col items-center justify-end text-center">
                        <h2 class="text-3xl md:text-4xl font-bold mb-2 drop-shadow-lg">${o.title}</h2>
                        <p class="text-sm font-semibold text-gray-300 drop-shadow-md">${o.rating} • ${o.duration}</p>
                    </div>
                </div>
            </div>
        `).join("")),new Swiper(".heroSwiper",{loop:!0,autoplay:{delay:5e3,disableOnInteraction:!1},pagination:{el:".swiper-pagination",clickable:!0}})});const c={rows:["A","B","C","D","E","F","G","H"],seatsPerRow:16,pricePerSeat:8};let l=new Set,u=new Set;function v(){if(!document.getElementById("rowA"))return;const t=JSON.parse(localStorage.getItem("bookingSession")||"{}");if(t.title){const n=document.getElementById("pageTitle"),e=document.getElementById("pageSubtitle");n&&(n.innerText=`${t.title} Seats`),e&&(e.innerText=`${t.date} • ${t.time}`)}const o=JSON.parse(localStorage.getItem("bookingsDB"));u.clear(),o.forEach(n=>{n.movie===t.title&&n.date===t.date&&n.time===t.time&&n.seats.forEach(e=>u.add(e))});const s=window.BookingContext&&window.BookingContext.getState?window.BookingContext.getState():null;s&&Array.isArray(s.selectedSeats)&&(l=new Set(s.selectedSeats));for(const n of c.rows){const e=document.getElementById("row"+n);if(e){e.innerHTML="";for(let i=1;i<=c.seatsPerRow;i++){const a=n+i,h=u.has(a),r=document.createElement("button"),b=`
                <svg viewBox="0 0 80 80" class="seat-svg" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <linearGradient id="seatGrad${n}${i}" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stop-color="#2f2e33" />
                            <stop offset="45%" stop-color="#11151e" />
                            <stop offset="100%" stop-color="#090b10" />
                        </linearGradient>
                    </defs>
                    <rect x="14" y="18" width="52" height="28" rx="12" fill="url(#seatGrad${n}${i})" />
                    <rect x="16" y="12" width="48" height="22" rx="12" fill="#121826" />
                    <path d="M16 46 h48 v6 c0 4-4 8-8 8 h-32 c-4 0-8-4-8-8 z" fill="#0d1119" />
                    <ellipse cx="34" cy="46" rx="4" ry="2.2" fill="rgba(255,255,255,0.08)" />
                    <ellipse cx="46" cy="46" rx="4" ry="2.2" fill="rgba(255,255,255,0.08)" />
                    <path d="M20 10 h40 v6 c0 4-4 8-8 8 h-24 c-4 0-8-4-8-8 z" fill="rgba(255,255,255,0.08)" opacity="0.5"/>
                </svg>`;r.className="seat-btn",r.dataset.seatId=a,r.dataset.price=`${c.pricePerSeat} JOD`,r.innerHTML=`${b}<span class="seat-number">${i}</span>`,r.title=`${c.pricePerSeat} JOD`,h?(r.classList.add("bg-red-900","cursor-not-allowed","opacity-50","border","border-red-700"),r.disabled=!0):(r.classList.add("hover:shadow-lg"),r.addEventListener("click",()=>S(a,r)),l.has(a)&&r.classList.add("selected")),e.appendChild(r)}}}f(),w()}function S(t,o){l.has(t)?(l.delete(t),o.classList.remove("selected")):(l.add(t),o.classList.add("selected")),f(),w()}function f(){const t=Array.from(l).sort(),o=t.length,s=o*c.pricePerSeat;localStorage.setItem("checkoutTotal",s),localStorage.setItem("checkoutSeats",JSON.stringify(t)),window.BookingContext&&window.BookingContext.setSelectedSeats&&window.BookingContext.setSelectedSeats(t,s);const n=document.getElementById("pageTitle"),e=JSON.parse(localStorage.getItem("bookingSession")||"{}");n&&o>0&&(n.innerText=`${e.title||"Movie"} · ${o} seats selected`),o===0&&n&&(n.innerText=e.title?`${e.title} Seats`:"Select Your Seats")}function w(){const t=document.getElementById("bookNowBtn")||document.getElementById("confirmBookingBtn"),o=l.size;t&&(t.disabled=o===0,t.classList.toggle("opacity-50",o===0));const s=document.getElementById("bookingSeats"),n=document.getElementById("bookingTotal"),e=JSON.parse(localStorage.getItem("bookingSession")||"{}");s&&(s.innerText=Array.from(l).sort().join(", ")||"0"),n&&(n.innerText=Array.from(l).length*c.pricePerSeat||0);const i=document.getElementById("bookingMovie"),a=document.getElementById("bookingDateTime");i&&(i.innerText=e.title||"-"),a&&(a.innerText=`${e.date||"-"} • ${e.time||"-"}`)}typeof window<"u"&&window.addEventListener("DOMContentLoaded",v);function d(t){const o=t.currentTarget;let s=o.getAttribute("data-target");s||(s="password");const n=document.getElementById(s);if(!n)return;const e=n.type==="password";n.type=e?"text":"password",o.classList.toggle("fa-eye-slash",!e),o.classList.toggle("fa-eye",e)}function p(){document.querySelectorAll('[data-toggle="password"]').forEach(s=>{s.removeEventListener("click",d),s.addEventListener("click",d)});const o=document.getElementById("togglePassword");o&&(o.removeEventListener("click",d),o.addEventListener("click",d))}typeof window<"u"&&(window.addEventListener("DOMContentLoaded",p),(document.readyState==="interactive"||document.readyState==="complete")&&p());window.BookingContext=function(){const t={selectedSeats:[],total:0};function o(){const e=new CustomEvent("bookingUpdate",{detail:{...t}});window.dispatchEvent(e)}function s(){const e=JSON.parse(localStorage.getItem("checkoutSeats")||"[]"),i=parseInt(localStorage.getItem("checkoutTotal")||"0");t.selectedSeats=e,t.total=i}function n(){localStorage.setItem("checkoutSeats",JSON.stringify(t.selectedSeats)),localStorage.setItem("checkoutTotal",t.total)}return s(),{getState:()=>({...t}),setSelectedSeats:(e,i)=>{t.selectedSeats=Array.isArray(e)?e:[],t.total=Number(i)||0,n(),o()},subscribe:e=>{window.addEventListener("bookingUpdate",i=>e(i.detail)),e({...t})}}}();document.addEventListener("DOMContentLoaded",()=>{const t=document.getElementById("moviesGrid");t&&(t.innerHTML=m.map(s=>`
            <div class="group cursor-pointer transform transition duration-500 hover:-translate-y-3 hover:scale-[1.03]">
                
                <div class="relative overflow-hidden rounded-2xl aspect-[2/3] bg-gray-800 shadow-xl">
                    <img 
        src="${s.poster}" 
        class="w-full h-full object-cover transition duration-700 group-hover:scale-110 group-hover:brightness-75" 
    />

                    <div class="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">
                        <button class="bg-red-600 hover:bg-red-700 px-7 py-3 rounded-xl font-bold tracking-wide shadow-2xl transition duration-300 hover active:scale-95"
                            onclick="selectMovie('${s.title}', '${s.trailer}')">
                            BUY TICKETS
                        </button>
                    </div>
                </div>

                <h3 class="text-xl font-bold mt-4">${s.title}</h3>
                <p class="text-gray-400 text-sm">${s.rating} • ${s.duration}</p>

            </div>
        `).join(""));const o=document.getElementById("upcomingGrid");o&&(o.innerHTML=y.map(s=>`
            <div class="group cursor-pointer transform transition duration-500 hover:-translate-y-3 hover:scale-[1.03]">
                
                <div class="relative overflow-hidden rounded-2xl aspect-[2/3] bg-gray-800 shadow-xl">
                    <img 
        src="${s.poster}" 
        class="w-full h-full object-cover transition duration-700 group-hover:scale-110 group-hover:brightness-75" 
    />
                    <div class="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col items-center justify-center space-y-4">
                        <span class="text-2xl font-bold text-white drop-shadow-md">Coming Soon</span>
                        <a href="${s.trailer}" target="_blank" rel="noopener noreferrer" 
                           class="bg-red-600 hover:bg-red-700 px-7 py-3 rounded-xl font-bold tracking-wide shadow-2xl transition duration-300 hover active:scale-95 text-white">
                            Watch Trailer
                        </a>
                    </div>
                </div>

                <h3 class="text-xl font-bold mt-4">${s.title}</h3>
            </div>
        `).join(""))});document.addEventListener("DOMContentLoaded",()=>{const t=document.getElementById("signinForm");t&&t.addEventListener("submit",async function(o){o.preventDefault();const s=document.getElementById("email").value,n=document.getElementById("password").value,e=t.querySelector("button[type='submit']");if(e&&(e.innerHTML="Loading...",e.disabled=!0),!g){alert("Supabase is not connected.");return}const{data:i,error:a}=await g.auth.signInWithPassword({email:s,password:n});if(a){alert(a.message),e&&(e.innerHTML="SIGN IN",e.disabled=!1);return}localStorage.setItem("userSession",JSON.stringify(i.user)),window.location.href="index.html"})});
