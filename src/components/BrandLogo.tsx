import { EPSA_OFFICIAL_LOGO_DATA_URI } from './logoDataUri';

export function BrandLogo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <div className={`relative flex items-center justify-center shrink-0 rounded-full overflow-hidden bg-white/10 ${className}`}>
      <img
        src={EPSA_OFFICIAL_LOGO_DATA_URI}
        alt="Ethiopian Pharmaceutical Students' Association (EPSA) Official Logo"
        className="w-full h-full object-contain rounded-full"
        loading="eager"
        onError={(e) => {
          // Fallback to static asset if needed
          const target = e.currentTarget;
          if (target.src !== "/assets/aistudio/National_cropped_org_e6f627ff.jpg") {
            target.src = "/assets/aistudio/National_cropped_org_e6f627ff.jpg";
          }
        }}
      />
    </div>
  );
}

