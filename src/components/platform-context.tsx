import { createContext, useContext, useState, type ReactNode } from 'react';
import { emptyPassport, type Passport } from '@/lib/platform';
type PlatformState = { passport: Passport; setPassport: (p: Passport) => void; saved: number[]; toggleSaved: (id: number) => void; completed: string[]; complete: (id: string) => void };
const Context = createContext<PlatformState | null>(null);
export function PlatformProvider({ children }: { children: ReactNode }) {
  const [passport, setPassport] = useState(emptyPassport);
  const [saved, setSaved] = useState<number[]>([]);
  const [completed, setCompleted] = useState<string[]>([]);
  return <Context.Provider value={{ passport, setPassport, saved, toggleSaved: id => setSaved(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]), completed, complete: id => setCompleted(prev => prev.includes(id) ? prev : [...prev, id]) }}>{children}</Context.Provider>;
}
export function usePlatform() { const value = useContext(Context); if (!value) throw new Error('Platform provider is required'); return value; }