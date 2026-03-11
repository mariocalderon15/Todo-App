(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const f of n.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function s(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(o){if(o.ep)return;o.ep=!0;const n=s(o);fetch(o.href,n)}})();(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function t(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(r){if(r.ep)return;r.ep=!0;const o=t(r);fetch(r.href,o)}})();const l=[];for(let e=0;e<256;++e)l.push((e+256).toString(16).slice(1));function T(e,t=0){return(l[e[t+0]]+l[e[t+1]]+l[e[t+2]]+l[e[t+3]]+"-"+l[e[t+4]]+l[e[t+5]]+"-"+l[e[t+6]]+l[e[t+7]]+"-"+l[e[t+8]]+l[e[t+9]]+"-"+l[e[t+10]]+l[e[t+11]]+l[e[t+12]]+l[e[t+13]]+l[e[t+14]]+l[e[t+15]]).toLowerCase()}let b;const L=new Uint8Array(16);function S(){if(!b){if(typeof crypto>"u"||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");b=crypto.getRandomValues.bind(crypto)}return b(L)}const w={};function E(e,t,s){let r;{const o=Date.now(),n=S();C(w,o,n),r=P(n,w.msecs,w.seq,t,s)}return t??T(r)}function C(e,t,s){return e.msecs??=-1/0,e.seq??=0,t>e.msecs?(e.seq=s[6]<<23|s[7]<<16|s[8]<<8|s[9],e.msecs=t):(e.seq=e.seq+1|0,e.seq===0&&e.msecs++),e}function P(e,t,s,r,o=0){if(e.length<16)throw new Error("Random bytes length must be >= 16");if(!r)r=new Uint8Array(16),o=0;else if(o<0||o+16>r.length)throw new RangeError(`UUID byte range ${o}:${o+15} is out of buffer bounds`);return t??=Date.now(),s??=e[6]*127<<24|e[7]<<16|e[8]<<8|e[9],r[o++]=t/1099511627776&255,r[o++]=t/4294967296&255,r[o++]=t/16777216&255,r[o++]=t/65536&255,r[o++]=t/256&255,r[o++]=t&255,r[o++]=112|s>>>28&15,r[o++]=s>>>20&255,r[o++]=128|s>>>14&63,r[o++]=s>>>6&255,r[o++]=s<<2&255|e[10]&3,r[o++]=e[11],r[o++]=e[12],r[o++]=e[13],r[o++]=e[14],r[o++]=e[15],r}class h{constructor(t){this.id=E(),this.description=t,this.done=!1,this.createdAt=new Date}}const u={All:"all",Completed:"Completed",Pending:"Pending"},i={todos:[new h("piedra del Alma"),new h("piedra del Infinito"),new h("piedra del Tiempo"),new h("piedra del Fuerza"),new h("piedra de la Realidad")],filter:u.All},A=()=>{v(),console.log("InitStore")},v=()=>{if(!localStorage.getItem("state"))return;const{todos:e=[],filter:t=u.All}=JSON.parse(localStorage.getItem("state"));i.todos=e,i.filter=t},g=()=>{localStorage.setItem("state",JSON.stringify(i))},q=(e=u.All)=>{const t={[u.All]:()=>[...i.todos],[u.Completed]:()=>i.todos.filter(s=>s.done),[u.Pending]:()=>i.todos.filter(s=>!s.done)};if(!t[e])throw new Error(`Option ${e} is not valid`);return t[e]()},k=e=>{if(!e)throw new Error("Description is required");i.todos=[...i.todos,new h(e)],g()},O=e=>{i.todos=i.todos.map(t=>t.id===e?{...t,done:!t.done}:t),g()},$=e=>{i.todos=i.todos.filter(t=>t.id!==e),g()},N=()=>{i.todos=i.todos.filter(e=>!e.done),g()},F=(e=u.All)=>{i.filter=e,g()},I=()=>i.filter,c={addTodo:k,initStore:A,loadStore:v,deleteCompleted:N,deleteTodo:$,getTodos:q,getCurrentFilter:I,setFilter:F,toggleTodo:O},M=`<section class="todoapp">
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
</footer>`,R=e=>{const{done:t,description:s,id:r}=e,o=`
        <div class="view">
            <input class="toggle" type="checkbox" id="todo-${r}" ${t?"checked":""}>
            <label for="todo-${r}">${s}</label>
            <button class="destroy"></button>
        </div>
        <input class="edit" id="edit-${r}" name="edit-${r}" value="${s}">
    `,n=document.createElement("li");return n.innerHTML=o,n.setAttribute("data-id",r),t&&n.classList.add("completed"),n},x=(e,t=[])=>{const s=document.querySelector(e);if(!s)throw new Error(`Element ${e} not found`);s.innerHTML="",t.forEach(r=>{s.append(R(r))})};let y;const D=e=>{if(y||(y=document.querySelector(e)),!y)throw new Error(`Element ${e} not found`);y.innerHTML=c.getTodos(u.Pending).length},m={borrarCompletado:".clear-completed",TodoList:".todo-list",NewTodoInput:"#new-todo-input",TodoFilters:".filtro",PendingCountLabel:"#pending-count"},H=e=>{const t=()=>{const d=c.getTodos(c.getCurrentFilter());x(m.TodoList,d),s()},s=()=>{D(m.PendingCountLabel)};(()=>{const d=document.createElement("div");d.innerHTML=M,document.querySelector(e).append(d),t()})();const r=document.querySelector(m.NewTodoInput),o=document.querySelector(m.TodoList),n=document.querySelector(m.borrarCompletado),f=document.querySelectorAll(m.TodoFilters);r.addEventListener("keydown",({key:d,target:a})=>{if(d!=="Enter")return;const p=a.value.trim();p&&(c.addTodo(p),t(),a.value="")}),o.addEventListener("click",({target:d})=>{if(!d.classList.contains("toggle"))return;const a=d.closest("[data-id]");if(!a)return;const p=a.getAttribute("data-id");c.toggleTodo(p),t()}),o.addEventListener("click",({target:d})=>{if(!d.classList.contains("destroy"))return;const a=d.closest("[data-id");if(!a)return;const p=a.getAttribute("data-id");c.deleteTodo(p),t()}),n.addEventListener("click",()=>{c.deleteCompleted(),t()}),f.forEach(d=>{d.addEventListener("click",a=>{switch(f.forEach(p=>p.classList.remove("selected")),a.target.classList.add("selected"),a.target.text){case"Todos":c.setFilter(u.All);break;case"Pendientes":c.setFilter(u.Pending);break;case"Completados":c.setFilter(u.Completed);break}t()})})};c.initStore();H("#app");
