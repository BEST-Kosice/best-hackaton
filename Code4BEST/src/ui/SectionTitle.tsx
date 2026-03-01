export function SectionTitle({
    title,
    subtitle,
}: {
    title: string;
    subtitle?: string;
}) {
    return (
        <div className="mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-[#981a36]">
                {title}
            </h2>
            <span className="section-underline" />
            {subtitle ? <p className="mt-4 text-center text-gray-600 max-w-3xl mx-auto text-sm sm:text-base">{subtitle}</p> : null}
        </div>
    );
}