(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const h of l.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&n(h)}).observe(document,{childList:!0,subtree:!0});function i(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function n(o){if(o.ep)return;o.ep=!0;const l=i(o);fetch(o.href,l)}})();const s=[];for(let e=0;e<256;++e)s.push((e+256).toString(16).slice(1));function b(e,t=0){return(s[e[t+0]]+s[e[t+1]]+s[e[t+2]]+s[e[t+3]]+"-"+s[e[t+4]]+s[e[t+5]]+"-"+s[e[t+6]]+s[e[t+7]]+"-"+s[e[t+8]]+s[e[t+9]]+"-"+s[e[t+10]]+s[e[t+11]]+s[e[t+12]]+s[e[t+13]]+s[e[t+14]]+s[e[t+15]]).toLowerCase()}let T;const L=new Uint8Array(16);function x(){if(!T){if(typeof crypto>"u"||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");T=crypto.getRandomValues.bind(crypto)}return T(L)}const f={};function S(e,t,i){let n;{const o=Date.now(),l=x();C(f,o,l),n=E(l,f.msecs,f.seq,t,i)}return t??b(n)}function C(e,t,i){return e.msecs??=-1/0,e.seq??=0,t>e.msecs?(e.seq=i[6]<<23|i[7]<<16|i[8]<<8|i[9],e.msecs=t):(e.seq=e.seq+1|0,e.seq===0&&e.msecs++),e}function E(e,t,i,n,o=0){if(e.length<16)throw new Error("Random bytes length must be >= 16");if(!n)n=new Uint8Array(16),o=0;else if(o<0||o+16>n.length)throw new RangeError(`UUID byte range ${o}:${o+15} is out of buffer bounds`);return t??=Date.now(),i??=e[6]*127<<24|e[7]<<16|e[8]<<8|e[9],n[o++]=t/1099511627776&255,n[o++]=t/4294967296&255,n[o++]=t/16777216&255,n[o++]=t/65536&255,n[o++]=t/256&255,n[o++]=t&255,n[o++]=112|i>>>28&15,n[o++]=i>>>20&255,n[o++]=128|i>>>14&63,n[o++]=i>>>6&255,n[o++]=i<<2&255|e[10]&3,n[o++]=e[11],n[o++]=e[12],n[o++]=e[13],n[o++]=e[14],n[o++]=e[15],n}class g{constructor(t){this.id=S(),this.description=t,this.done=!1,this.createdAt=new Date}}const u={All:"all",Completed:"Completed",Pending:"Pending"},d={todos:[new g("piedra del Alma"),new g("piedra del Infinito"),new g("piedra del Tiempo"),new g("piedra del Fuerza"),new g("piedra de la Realidad")],filter:u.All},A=()=>{v(),console.log("InitStore")},v=()=>{if(!localStorage.getItem("state"))return;const{todos:e=[],filter:t=u.All}=JSON.parse(localStorage.getItem("state"));d.todos=e,d.filter=t},y=()=>{localStorage.setItem("state",JSON.stringify(d))},P=(e=u.All)=>{const t={[u.All]:()=>[...d.todos],[u.Completed]:()=>d.todos.filter(i=>i.done),[u.Pending]:()=>d.todos.filter(i=>!i.done)};if(!t[e])throw new Error(`Option ${e} is not valid`);return t[e]()},I=e=>{if(!e)throw new Error("Description is required");d.todos=[...d.todos,new g(e)],y()},$=e=>{d.todos=d.todos.map(t=>t.id===e?{...t,done:!t.done}:t),y()},k=e=>{d.todos=d.todos.filter(t=>t.id!==e),y()},F=()=>{d.todos=d.todos.filter(e=>!e.done),y()},q=(e=u.All)=>{d.filter=e,y()},M=()=>d.filter,a={addTodo:I,initStore:A,loadStore:v,deleteCompleted:F,deleteTodo:k,getTodos:P,getCurrentFilter:M,setFilter:q,toggleTodo:$},O=`<section class="todoapp">
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
</footer>`,R=e=>{const{done:t,description:i,id:n}=e,o=`
        <div class="view">
            <input class="toggle" type="checkbox" id="todo-${n}" ${t?"checked":""}>
            <label for="todo-${n}">${i}</label>
            <button class="destroy"></button>
        </div>
        <input class="edit" id="edit-${n}" name="edit-${n}" value="${i}">
    `,l=document.createElement("li");return l.innerHTML=o,l.setAttribute("data-id",n),t&&l.classList.add("completed"),l},N=(e,t=[])=>{const i=document.querySelector(e);if(!i)throw new Error(`Element ${e} not found`);i.innerHTML="",t.forEach(n=>{i.append(R(n))})};let w;const D=e=>{if(w||(w=document.querySelector(e)),!w)throw new Error(`Element ${e} not found`);w.innerHTML=a.getTodos(u.Pending).length},m={borrarCompletado:".clear-completed",TodoList:".todo-list",NewTodoInput:"#new-todo-input",TodoFilters:".filtro",PendingCountLabel:"#pending-count"},H=e=>{const t=()=>{const r=a.getTodos(a.getCurrentFilter());N(m.TodoList,r),i()},i=()=>{D(m.PendingCountLabel)};(()=>{const r=document.createElement("div");r.innerHTML=O,document.querySelector(e).append(r),t()})();const n=document.querySelector(m.NewTodoInput),o=document.querySelector(m.TodoList),l=document.querySelector(m.borrarCompletado),h=document.querySelectorAll(m.TodoFilters);n.addEventListener("keydown",({key:r,target:c})=>{if(r!=="Enter")return;const p=c.value.trim();p&&(a.addTodo(p),t(),c.value="")}),o.addEventListener("click",({target:r})=>{if(!r.classList.contains("toggle"))return;const c=r.closest("[data-id]");if(!c)return;const p=c.getAttribute("data-id");a.toggleTodo(p),t()}),o.addEventListener("click",({target:r})=>{if(!r.classList.contains("destroy"))return;const c=r.closest("[data-id");if(!c)return;const p=c.getAttribute("data-id");a.deleteTodo(p),t()}),l.addEventListener("click",()=>{a.deleteCompleted(),t()}),h.forEach(r=>{r.addEventListener("click",c=>{switch(h.forEach(p=>p.classList.remove("selected")),c.target.classList.add("selected"),c.target.text){case"Todos":a.setFilter(u.All);break;case"Pendientes":a.setFilter(u.Pending);break;case"Completados":a.setFilter(u.Completed);break}t()})})};a.initStore();H("#app");
