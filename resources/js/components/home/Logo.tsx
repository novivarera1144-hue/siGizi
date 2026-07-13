import logoSiGizi from "@/imports/LOGO_SIGIZI-removebg-preview-3.png";

export default function Logo({
    className = "",
}: {
    className?: string;
}) {
    return (
        <div className={`inline-flex items-center ${className}`}>
            <img
                src={logoSiGizi}
                alt="siGizi"
                className="w-full h-auto"
            />
        </div>
    );
}