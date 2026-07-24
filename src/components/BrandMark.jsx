{/* Ejemplo de BrandMark.jsx con soporte para light */}
import Image from 'next/image';

export default function BrandMark({ light = false }) {
  return (
    <div className="flex flex-col items-start gap-1">
      <div className="relative h-12 w-12 shrink-0">
        <Image
          src="/assets/SENA.png"
          alt="Logo SENA"
          width={48}
          height={48}
          className="h-full w-full object-contain"
          priority
        />
      </div>

      <span className="text-2xl font-black tracking-tight leading-none">
        <span className={light ? 'text-white' : 'text-[#0f172a]'}>Porci</span>
        <span className="text-sena-green">Tech</span>
      </span>
    </div>
  );
}