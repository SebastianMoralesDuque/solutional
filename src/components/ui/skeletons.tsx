function Shimmer() {
  return (
    <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
  );
}

export function SectionSkeleton({ className = "" }: { className?: string }) {
  return (
    <div className={`relative overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 animate-pulse ${className}`}>
      <Shimmer />
    </div>
  );
}

export function FeatureCardSkeleton() {
  return (
    <div className="relative overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 animate-pulse h-48">
      <Shimmer />
      <div className="p-6 space-y-3">
        <div className="h-24 bg-zinc-200 dark:bg-zinc-700 rounded-lg" />
        <div className="h-4 bg-zinc-200 dark:bg-zinc-700 rounded w-3/4" />
        <div className="h-3 bg-zinc-200 dark:bg-zinc-700 rounded w-full" />
      </div>
    </div>
  );
}

export function GlobeSkeleton() {
  return (
    <div className="relative overflow-hidden flex items-center justify-center min-h-[400px]">
      <div className="relative w-[320px] h-[320px] md:w-[500px] md:h-[500px] rounded-full bg-zinc-100 dark:bg-zinc-800 animate-pulse">
        <Shimmer />
        <div className="absolute inset-8 rounded-full border-2 border-dashed border-zinc-200 dark:border-zinc-700 opacity-50" />
        <div className="absolute inset-16 rounded-full border-2 border-dashed border-zinc-200 dark:border-zinc-700 opacity-30" />
      </div>
    </div>
  );
}

export function BeamsSkeleton() {
  return (
    <div className="relative overflow-hidden rounded-xl bg-zinc-50 dark:bg-zinc-900 animate-pulse p-8 md:p-20 min-h-[300px]">
      <Shimmer />
      <div className="space-y-4 text-center">
        <div className="h-8 bg-zinc-200 dark:bg-zinc-800 rounded w-3/4 mx-auto" />
        <div className="h-8 bg-zinc-200 dark:bg-zinc-800 rounded w-1/2 mx-auto" />
        <div className="h-4 bg-zinc-200 dark:bg-zinc-800 rounded w-2/3 mx-auto mt-6" />
      </div>
    </div>
  );
}

export function FooterSkeleton() {
  return (
    <div className="relative overflow-hidden bg-zinc-100 dark:bg-zinc-900 animate-pulse py-20">
      <Shimmer />
      <div className="max-w-6xl mx-auto px-8 space-y-8">
        <div className="h-12 bg-zinc-200 dark:bg-zinc-800 rounded w-1/3 mx-auto" />
        <div className="grid grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="space-y-3">
              <div className="h-4 bg-zinc-200 dark:bg-zinc-800 rounded w-1/2" />
              <div className="h-3 bg-zinc-200 dark:bg-zinc-800 rounded w-3/4" />
              <div className="h-3 bg-zinc-200 dark:bg-zinc-800 rounded w-2/3" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function ContactSkeleton() {
  return (
    <div className="relative overflow-hidden bg-zinc-50 dark:bg-zinc-900 animate-pulse py-20 px-8">
      <Shimmer />
      <div className="max-w-xl mx-auto space-y-6">
        <div className="h-8 bg-zinc-200 dark:bg-zinc-800 rounded w-1/2 mx-auto" />
        <div className="h-4 bg-zinc-200 dark:bg-zinc-800 rounded w-2/3 mx-auto" />
        <div className="space-y-4 mt-8">
          <div className="h-12 bg-zinc-200 dark:bg-zinc-800 rounded-xl" />
          <div className="h-12 bg-zinc-200 dark:bg-zinc-800 rounded-xl" />
          <div className="h-32 bg-zinc-200 dark:bg-zinc-800 rounded-xl" />
          <div className="h-12 bg-zinc-200 dark:bg-zinc-800 rounded-xl w-1/3 mx-auto" />
        </div>
      </div>
    </div>
  );
}

export function IntegrationSkeleton() {
  return (
    <div className="relative overflow-hidden bg-zinc-50 dark:bg-zinc-900 animate-pulse py-20">
      <Shimmer />
      <div className="space-y-4">
        <div className="h-8 bg-zinc-200 dark:bg-zinc-800 rounded w-1/3 mx-auto" />
        <div className="flex gap-8 justify-center mt-8 overflow-hidden">
          {Array.from({ length: 7 }).map((_, i) => (
            <div key={i} className="w-12 h-12 bg-zinc-200 dark:bg-zinc-800 rounded-lg flex-shrink-0" />
          ))}
        </div>
      </div>
    </div>
  );
}
