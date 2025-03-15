import { TechIcon } from "@/components/TechIcon";

export const ToolboxItems = ({
    items,
}: {
    items: { title: string; iconType: React.ElementType }[];
}) => {
    return (
        <div className="flex [mask-image:lineargradient(ro_right,transparent,black_90%,black_90%,transparent)]">
            <div className="flex flex-none">
                {items.map((item) => (
                <div key={item.title} className="inline-flex items-center py-2 px-3 outline-2 outline-white/10 rounded-lg">
                    <TechIcon component={item.iconType} />
                    <span className="font-semibold">{item.title}</span>
                </div>
                ))}
            </div>
        </div>
    )
};