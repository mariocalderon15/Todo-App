(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const w of r.addedNodes)w.tagName==="LINK"&&w.rel==="modulepreload"&&o(w)}).observe(document,{childList:!0,subtree:!0});function l(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(n){if(n.ep)return;n.ep=!0;const r=l(n);fetch(n.href,r)}})();(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))l(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&l(r)}).observe(document,{childList:!0,subtree:!0});function t(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function l(o){if(o.ep)return;o.ep=!0;const n=t(o);fetch(o.href,n)}})();const a=[];for(let e=0;e<256;++e)a.push((e+256).toString(16).slice(1));function I(e,t=0){return(a[e[t+0]]+a[e[t+1]]+a[e[t+2]]+a[e[t+3]]+"-"+a[e[t+4]]+a[e[t+5]]+"-"+a[e[t+6]]+a[e[t+7]]+"-"+a[e[t+8]]+a[e[t+9]]+"-"+a[e[t+10]]+a[e[t+11]]+a[e[t+12]]+a[e[t+13]]+a[e[t+14]]+a[e[t+15]]).toLowerCase()}let x;const F=new Uint8Array(16);function M(){if(!x){if(typeof crypto>"u"||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");x=crypto.getRandomValues.bind(crypto)}return x(F)}const A={};function R(e,t,l){let o;{const n=Date.now(),r=M();N(A,n,r),o=O(r,A.msecs,A.seq,t,l)}return t??I(o)}function N(e,t,l){return e.msecs??=-1/0,e.seq??=0,t>e.msecs?(e.seq=l[6]<<23|l[7]<<16|l[8]<<8|l[9],e.msecs=t):(e.seq=e.seq+1|0,e.seq===0&&e.msecs++),e}function O(e,t,l,o,n=0){if(e.length<16)throw new Error("Random bytes length must be >= 16");if(!o)o=new Uint8Array(16),n=0;else if(n<0||n+16>o.length)throw new RangeError(`UUID byte range ${n}:${n+15} is out of buffer bounds`);return t??=Date.now(),l??=e[6]*127<<24|e[7]<<16|e[8]<<8|e[9],o[n++]=t/1099511627776&255,o[n++]=t/4294967296&255,o[n++]=t/16777216&255,o[n++]=t/65536&255,o[n++]=t/256&255,o[n++]=t&255,o[n++]=112|l>>>28&15,o[n++]=l>>>20&255,o[n++]=128|l>>>14&63,o[n++]=l>>>6&255,o[n++]=l<<2&255|e[10]&3,o[n++]=e[11],o[n++]=e[12],o[n++]=e[13],o[n++]=e[14],o[n++]=e[15],o}class T{constructor(t){this.id=R(),this.description=t,this.done=!1,this.createdAt=new Date}}const g={All:"all",Completed:"Completed",Pending:"Pending"},u={todos:[new T("piedra del Alma"),new T("piedra del Infinito"),new T("piedra del Tiempo"),new T("piedra del Fuerza"),new T("piedra de la Realidad")],filter:g.All},D=()=>{q(),console.log("InitStore")},q=()=>{if(!localStorage.getItem("state"))return;const{todos:e=[],filter:t=g.All}=JSON.parse(localStorage.getItem("state"));u.todos=e,u.filter=t},L=()=>{localStorage.setItem("state",JSON.stringify(u))},H=(e=g.All)=>{const t={[g.All]:()=>[...u.todos],[g.Completed]:()=>u.todos.filter(l=>l.done),[g.Pending]:()=>u.todos.filter(l=>!l.done)};if(!t[e])throw new Error(`Option ${e} is not valid`);return t[e]()},V=e=>{if(!e)throw new Error("Description is required");u.todos=[...u.todos,new T(e)],L()},U=e=>{u.todos=u.todos.map(t=>t.id===e?{...t,done:!t.done}:t),L()},J=e=>{u.todos=u.todos.filter(t=>t.id!==e),L()},j=()=>{u.todos=u.todos.filter(e=>!e.done),L()},B=(e=g.All)=>{u.filter=e,L()},z=()=>u.filter,m={addTodo:V,initStore:D,loadStore:q,deleteCompleted:j,deleteTodo:J,getTodos:H,getCurrentFilter:z,setFilter:B,toggleTodo:U},K=`<section class="todoapp">
    <header class="header">
        <h1>Tareas</h1>
        <label for="new-todo-input" class="visually-hidden">Nueva tarea</label>
        <input id="new-todo-input" name="todo" type="text" class="new-todo" placeholder="¿Qué necesita ser hecho?"
            autofocus>
    </header>

    <!-- This section should be hidden by default and shown when there are todos -->
    <section class="main">
        <input id="toggle-all" class="toggle-all" type="checkbox">
        <label for="toggle-all">Mark all as complete</label>
        <ul class="todo-list">
            <!-- These are here just to show the structure of the list items -->
            <!-- List items should get the class "editing" when editing and "completed" when marked as completed -->
            <!-- <li class="completed" data-id="abc">
                <div class="view">
                    <input class="toggle" type="checkbox" checked>
                    <label>Probar JavaScript</label>
                    <button class="destroy"></button>
                </div>
                <input class="edit" value="Create a TodoMVC template">
            </li> -->
            <!-- <li>
                <div class="view">
                    <input class="toggle" type="checkbox">
                    <label>Comprar un unicornio</label>
                    <button class="destroy"></button>
                </div>
                <input class="edit" value="Rule the web">
            </li> -->
        </ul>
    </section>

    <!-- This footer should hidden by default and shown when there are todos -->
    <footer class="footer">
        <!-- This should be "0 items left" by default -->
        <span class="todo-count"><strong id="pending-count">0</strong> pendiente(s)</span>
        <!-- Remove this if you don't implement routing -->
        <ul class="filters">
            <li>
                <!--selected-->
                <a class=" filtro" class="selected" href="#/">Todos</a>
            </li>
            <li>
                <a class="filtro" href="#/active">Pendientes</a>
            </li>
            <li>
                <a class="filtro" href="#/completed">Completados</a>
            </li>
        </ul>
        <!-- Hidden if no completed items are left ↓ -->
        <button class="clear-completed">Borrar completados</button>
    </footer>
</section>


<footer class="info">
    <p>Template creado por <a href="http://sindresorhus.com">Sindre Sorhus</a></p>
    <!-- Change this out with your name and url ↓ -->
    <p>Creado por <a href="http://todomvc.com">ti</a></p>
    <p>Parte de <a href="http://todomvc.com">TodoMVC</a></p>
</footer>`,Q=e=>{const{done:t,description:l,id:o}=e,n=`
        <div class="view">
            <input class="toggle" type="checkbox" id="todo-${o}" ${t?"checked":""}>
            <label for="todo-${o}">${l}</label>
            <button class="destroy"></button>
        </div>
        <input class="edit" id="edit-${o}" name="edit-${o}" value="${l}">
    `,r=document.createElement("li");return r.innerHTML=n,r.setAttribute("data-id",o),t&&r.classList.add("completed"),r},_=(e,t=[])=>{const l=document.querySelector(e);if(!l)throw new Error(`Element ${e} not found`);l.innerHTML="",t.forEach(o=>{l.append(Q(o))})};let C;const G=e=>{if(C||(C=document.querySelector(e)),!C)throw new Error(`Element ${e} not found`);C.innerHTML=m.getTodos(g.Pending).length},y={borrarCompletado:".clear-completed",TodoList:".todo-list",NewTodoInput:"#new-todo-input",TodoFilters:".filtro",PendingCountLabel:"#pending-count"},W=e=>{const t=()=>{const s=m.getTodos(m.getCurrentFilter());_(y.TodoList,s),l()},l=()=>{G(y.PendingCountLabel)};(()=>{const s=document.createElement("div");s.innerHTML=K,document.querySelector(e).append(s),t()})();const o=document.querySelector(y.NewTodoInput),n=document.querySelector(y.TodoList),r=document.querySelector(y.borrarCompletado),w=document.querySelectorAll(y.TodoFilters);o.addEventListener("keydown",({key:s,target:i})=>{if(s!=="Enter")return;const d=i.value.trim();d&&(m.addTodo(d),t(),i.value="")}),n.addEventListener("click",({target:s})=>{if(!s.classList.contains("toggle"))return;const i=s.closest("[data-id]");if(!i)return;const d=i.getAttribute("data-id");m.toggleTodo(d),t()}),n.addEventListener("click",({target:s})=>{if(!s.classList.contains("destroy"))return;const i=s.closest("[data-id");if(!i)return;const d=i.getAttribute("data-id");m.deleteTodo(d),t()}),r.addEventListener("click",()=>{m.deleteCompleted(),t()}),w.forEach(s=>{s.addEventListener("click",i=>{switch(w.forEach(d=>d.classList.remove("selected")),i.target.classList.add("selected"),i.target.text){case"Todos":m.setFilter(g.All);break;case"Pendientes":m.setFilter(g.Pending);break;case"Completados":m.setFilter(g.Completed);break}t()})})};m.initStore();W("#app");const c=[];for(let e=0;e<256;++e)c.push((e+256).toString(16).slice(1));function X(e,t=0){return(c[e[t+0]]+c[e[t+1]]+c[e[t+2]]+c[e[t+3]]+"-"+c[e[t+4]]+c[e[t+5]]+"-"+c[e[t+6]]+c[e[t+7]]+"-"+c[e[t+8]]+c[e[t+9]]+"-"+c[e[t+10]]+c[e[t+11]]+c[e[t+12]]+c[e[t+13]]+c[e[t+14]]+c[e[t+15]]).toLowerCase()}let P;const Y=new Uint8Array(16);function Z(){if(!P){if(typeof crypto>"u"||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");P=crypto.getRandomValues.bind(crypto)}return P(Y)}const k={};function ee(e,t,l){let o;{const n=Date.now(),r=Z();te(k,n,r),o=oe(r,k.msecs,k.seq,t,l)}return t??X(o)}function te(e,t,l){return e.msecs??=-1/0,e.seq??=0,t>e.msecs?(e.seq=l[6]<<23|l[7]<<16|l[8]<<8|l[9],e.msecs=t):(e.seq=e.seq+1|0,e.seq===0&&e.msecs++),e}function oe(e,t,l,o,n=0){if(e.length<16)throw new Error("Random bytes length must be >= 16");if(!o)o=new Uint8Array(16),n=0;else if(n<0||n+16>o.length)throw new RangeError(`UUID byte range ${n}:${n+15} is out of buffer bounds`);return t??=Date.now(),l??=e[6]*127<<24|e[7]<<16|e[8]<<8|e[9],o[n++]=t/1099511627776&255,o[n++]=t/4294967296&255,o[n++]=t/16777216&255,o[n++]=t/65536&255,o[n++]=t/256&255,o[n++]=t&255,o[n++]=112|l>>>28&15,o[n++]=l>>>20&255,o[n++]=128|l>>>14&63,o[n++]=l>>>6&255,o[n++]=l<<2&255|e[10]&3,o[n++]=e[11],o[n++]=e[12],o[n++]=e[13],o[n++]=e[14],o[n++]=e[15],o}class v{constructor(t){this.id=ee(),this.description=t,this.done=!1,this.createdAt=new Date}}const f={All:"all",Completed:"Completed",Pending:"Pending"},p={todos:[new v("piedra del Alma"),new v("piedra del Infinito"),new v("piedra del Tiempo"),new v("piedra del Fuerza"),new v("piedra de la Realidad")],filter:f.All},ne=()=>{$(),console.log("InitStore")},$=()=>{if(!localStorage.getItem("state"))return;const{todos:e=[],filter:t=f.All}=JSON.parse(localStorage.getItem("state"));p.todos=e,p.filter=t},S=()=>{localStorage.setItem("state",JSON.stringify(p))},le=(e=f.All)=>{const t={[f.All]:()=>[...p.todos],[f.Completed]:()=>p.todos.filter(l=>l.done),[f.Pending]:()=>p.todos.filter(l=>!l.done)};if(!t[e])throw new Error(`Option ${e} is not valid`);return t[e]()},re=e=>{if(!e)throw new Error("Description is required");p.todos=[...p.todos,new v(e)],S()},se=e=>{p.todos=p.todos.map(t=>t.id===e?{...t,done:!t.done}:t),S()},ie=e=>{p.todos=p.todos.filter(t=>t.id!==e),S()},de=()=>{p.todos=p.todos.filter(e=>!e.done),S()},ae=(e=f.All)=>{p.filter=e,S()},ce=()=>p.filter,h={addTodo:re,initStore:ne,loadStore:$,deleteCompleted:de,deleteTodo:ie,getTodos:le,getCurrentFilter:ce,setFilter:ae,toggleTodo:se},ue=`<section class="todoapp">
    <header class="header">
        <h1>Tareas</h1>
        <label for="new-todo-input" class="visually-hidden">Nueva tarea</label>
        <input id="new-todo-input" name="todo" type="text" class="new-todo" placeholder="¿Qué necesita ser hecho?"
            autofocus>
    </header>

    <!-- This section should be hidden by default and shown when there are todos -->
    <section class="main">
        <input id="toggle-all" class="toggle-all" type="checkbox">
        <label for="toggle-all">Mark all as complete</label>
        <ul class="todo-list">
            <!-- These are here just to show the structure of the list items -->
            <!-- List items should get the class "editing" when editing and "completed" when marked as completed -->
            <!-- <li class="completed" data-id="abc">
                <div class="view">
                    <input class="toggle" type="checkbox" checked>
                    <label>Probar JavaScript</label>
                    <button class="destroy"></button>
                </div>
                <input class="edit" value="Create a TodoMVC template">
            </li> -->
            <!-- <li>
                <div class="view">
                    <input class="toggle" type="checkbox">
                    <label>Comprar un unicornio</label>
                    <button class="destroy"></button>
                </div>
                <input class="edit" value="Rule the web">
            </li> -->
        </ul>
    </section>

    <!-- This footer should hidden by default and shown when there are todos -->
    <footer class="footer">
        <!-- This should be "0 items left" by default -->
        <span class="todo-count"><strong id="pending-count">0</strong> pendiente(s)</span>
        <!-- Remove this if you don't implement routing -->
        <ul class="filters">
            <li>
                <!--selected-->
                <a class=" filtro" class="selected" href="#/">Todos</a>
            </li>
            <li>
                <a class="filtro" href="#/active">Pendientes</a>
            </li>
            <li>
                <a class="filtro" href="#/completed">Completados</a>
            </li>
        </ul>
        <!-- Hidden if no completed items are left ↓ -->
        <button class="clear-completed">Borrar completados</button>
    </footer>
</section>


<footer class="info">
    <p>Template creado por <a href="http://sindresorhus.com">Sindre Sorhus</a></p>
    <!-- Change this out with your name and url ↓ -->
    <p>Creado por <a href="http://todomvc.com">ti</a></p>
    <p>Parte de <a href="http://todomvc.com">TodoMVC</a></p>
</footer>`,pe=e=>{const{done:t,description:l,id:o}=e,n=`
        <div class="view">
            <input class="toggle" type="checkbox" id="todo-${o}" ${t?"checked":""}>
            <label for="todo-${o}">${l}</label>
            <button class="destroy"></button>
        </div>
        <input class="edit" id="edit-${o}" name="edit-${o}" value="${l}">
    `,r=document.createElement("li");return r.innerHTML=n,r.setAttribute("data-id",o),t&&r.classList.add("completed"),r},me=(e,t=[])=>{const l=document.querySelector(e);if(!l)throw new Error(`Element ${e} not found`);l.innerHTML="",t.forEach(o=>{l.append(pe(o))})};let E;const he=e=>{if(E||(E=document.querySelector(e)),!E)throw new Error(`Element ${e} not found`);E.innerHTML=h.getTodos(f.Pending).length},b={borrarCompletado:".clear-completed",TodoList:".todo-list",NewTodoInput:"#new-todo-input",TodoFilters:".filtro",PendingCountLabel:"#pending-count"},ge=e=>{const t=()=>{const s=h.getTodos(h.getCurrentFilter());me(b.TodoList,s),l()},l=()=>{he(b.PendingCountLabel)};(()=>{const s=document.createElement("div");s.innerHTML=ue,document.querySelector(e).append(s),t()})();const o=document.querySelector(b.NewTodoInput),n=document.querySelector(b.TodoList),r=document.querySelector(b.borrarCompletado),w=document.querySelectorAll(b.TodoFilters);o.addEventListener("keydown",({key:s,target:i})=>{if(s!=="Enter")return;const d=i.value.trim();d&&(h.addTodo(d),t(),i.value="")}),n.addEventListener("click",({target:s})=>{if(!s.classList.contains("toggle"))return;const i=s.closest("[data-id]");if(!i)return;const d=i.getAttribute("data-id");h.toggleTodo(d),t()}),n.addEventListener("click",({target:s})=>{if(!s.classList.contains("destroy"))return;const i=s.closest("[data-id");if(!i)return;const d=i.getAttribute("data-id");h.deleteTodo(d),t()}),r.addEventListener("click",()=>{h.deleteCompleted(),t()}),w.forEach(s=>{s.addEventListener("click",i=>{switch(w.forEach(d=>d.classList.remove("selected")),i.target.classList.add("selected"),i.target.text){case"Todos":h.setFilter(f.All);break;case"Pendientes":h.setFilter(f.Pending);break;case"Completados":h.setFilter(f.Completed);break}t()})})};h.initStore();ge("#app");
