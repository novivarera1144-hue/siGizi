export default function WFLabel({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <span className="text-[10px] font-mono tracking-widest uppercase text-muted-foreground/80">
            {children}
        </span>
    );
}