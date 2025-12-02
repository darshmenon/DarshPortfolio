import { ReactNode } from 'react';
import { cn } from '~/utils/cn';

interface UIPanelProps {
    title?: string;
    children: ReactNode;
    className?: string;
    noPadding?: boolean;
}

export function UIPanel({ title, children, className, noPadding = false }: UIPanelProps) {
    return (
        <div className={cn(
            'bg-tech-panel/50 border border-white/10 rounded-2xl overflow-hidden',
            'backdrop-blur-xl shadow-2xl transition-all duration-300 hover:border-primary-500/30',
            className
        )}>
            {title && (
                <div className="bg-white/5 border-b border-white/5 px-6 py-3 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500/80" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                            <div className="w-3 h-3 rounded-full bg-green-500/80" />
                        </div>
                        <h3 className="text-gray-400 font-mono text-xs uppercase tracking-widest ml-4">
                            {title}
                        </h3>
                    </div>
                </div>
            )}

            <div className={cn(noPadding ? '' : 'p-6 md:p-8')}>
                {children}
            </div>
        </div>
    );
}
