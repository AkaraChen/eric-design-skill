import { useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Monitor, Smartphone, RotateCcw, X } from 'lucide-react';
import { Button } from './components/ui/button';
import { Input } from './components/ui/input';
import './style.css';

const filters = ['全部', '未完成', '已完成'] as const;
const initialTodos = [
  { id: 1, text: '买牛奶', done: false },
  { id: 2, text: '散步十分钟', done: false },
  { id: 3, text: '给植物浇水', done: true },
];

function Todos() {
  const [todos, setTodos] = useState(initialTodos);
  const [draft, setDraft] = useState('');
  const [filter, setFilter] = useState<(typeof filters)[number]>('全部');
  const visible = todos.filter(todo => filter === '全部' || todo.done === (filter === '已完成'));

  return (
    <main className="todo mx-auto flex max-w-xl flex-col px-5 py-12">
      <h1 className="order-first mb-8 text-3xl font-semibold tracking-tight">待办事项</h1>
      <form className="mb-6 flex gap-2" onSubmit={event => {
        event.preventDefault();
        if (!draft.trim()) return;
        setTodos([...todos, { id: Date.now(), text: draft.trim(), done: false }]);
        setDraft('');
      }}>
        <Input aria-label="新的待办事项" placeholder="接下来要做什么？" value={draft} onChange={event => setDraft(event.target.value)} />
        <Button type="submit" disabled={!draft.trim()}>添加</Button>
      </form>
      <div className="rounded-lg border bg-background shadow-sm">
        <ul className="divide-y">
          {visible.map(todo => (
            <li key={todo.id} className="flex items-center gap-2 px-4 py-2">
              <label className="flex min-h-11 min-w-0 flex-1 cursor-pointer items-center gap-3">
                <input type="checkbox" checked={todo.done} onChange={() => setTodos(todos.map(item => item.id === todo.id ? { ...item, done: !item.done } : item))} className="size-4 shrink-0 accent-primary" />
                <span className={`break-words text-sm ${todo.done ? 'text-muted-foreground line-through' : ''}`}>{todo.text}</span>
              </label>
              <Button variant="ghost" size="icon" aria-label={`删除${todo.text}`} onClick={() => setTodos(todos.filter(item => item.id !== todo.id))}><X /></Button>
            </li>
          ))}
        </ul>
        {visible.length === 0 && <p role="status" className="p-8 text-center text-sm text-muted-foreground">这里没有待办事项。</p>}
        <footer className="flex flex-wrap items-center justify-between gap-2 border-t px-4 py-2 text-sm">
          <span className="text-muted-foreground" aria-live="polite">{todos.filter(todo => !todo.done).length} 项未完成</span>
          <Button variant="ghost" disabled={!todos.some(todo => todo.done)} onClick={() => setTodos(todos.filter(todo => !todo.done))}>清除已完成</Button>
        </footer>
      </div>
      <nav aria-label="筛选待办" className="todo-filters mt-5 flex justify-center gap-1">
        {filters.map(value => <Button key={value} variant={filter === value ? 'secondary' : 'ghost'} aria-pressed={filter === value} onClick={() => setFilter(value)}>{value}</Button>)}
      </nav>
    </main>
  );
}

function Preview() {
  const [mobile, setMobile] = useState(false);
  const [reset, setReset] = useState(0);
  const [proposal, setProposal] = useState('a');
  const frame = useRef<HTMLIFrameElement>(null);
  function applyProposal(value: string) {
    const html = frame.current?.contentDocument?.documentElement;
    if (html) html.dataset.proposal = value;
  }
  return (
    <div className="flex h-dvh flex-col bg-muted">
      <header className="flex flex-wrap items-center justify-between gap-2 border-b bg-background p-3">
        <div role="tablist" aria-label="设计方案" className="flex gap-1" onKeyDown={event => {
          const keys = ['ArrowLeft', 'ArrowRight', 'Home', 'End'];
          if (!keys.includes(event.key)) return;
          event.preventDefault();
          const buttons = event.currentTarget.querySelectorAll<HTMLButtonElement>('[role=tab]');
          const next = event.key === 'Home' ? 0 : event.key === 'End' ? 1 : proposal === 'a' ? 1 : 0;
          buttons[next].focus(); buttons[next].click();
        }}>
          {(['a', 'b'] as const).map(value => <Button key={value} id={`proposal-${value}`} role="tab" aria-selected={proposal === value} aria-controls="proposal-panel" tabIndex={proposal === value ? 0 : -1} variant={proposal === value ? 'secondary' : 'ghost'} onClick={() => { setProposal(value); applyProposal(value); }}>{value === 'a' ? 'A · 底部筛选' : 'B · 顶部筛选'}</Button>)}
        </div>
        <div className="flex gap-1" role="group" aria-label="预览宽度">
          <Button variant={!mobile ? 'secondary' : 'ghost'} aria-pressed={!mobile} onClick={() => setMobile(false)}><Monitor />PC</Button>
          <Button variant={mobile ? 'secondary' : 'ghost'} aria-pressed={mobile} onClick={() => setMobile(true)}><Smartphone />手机</Button>
          <Button variant="ghost" size="icon" aria-label="重置预览" onClick={() => setReset(reset + 1)}><RotateCcw /></Button>
        </div>
      </header>
      <div id="proposal-panel" role="tabpanel" aria-labelledby={`proposal-${proposal}`} className="flex min-h-0 flex-1 justify-center overflow-auto p-3">
        <iframe ref={frame} onLoad={() => applyProposal(proposal)} key={reset} title="待办事项预览" src={location.pathname + '?canvas'} style={{ width: mobile ? 390 : 1440 }} className="h-full max-w-full shrink-0 border-0 bg-background" />
      </div>
    </div>
  );
}

createRoot(document.getElementById('root')!).render(
  new URLSearchParams(location.search).has('canvas') ? <Todos /> : <Preview />,
);
