export default function Container({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <section className="max-w-7xl mx-auto px-6 py-10">
            {children}
        </section>
    );
}
