import Image from 'next/image';
import type { ImageRef } from '@/lib/types';
import { cn } from '@/lib/utils';

const ratios = {
  wide: 'aspect-[2/1]',
  landscape: 'aspect-[4/3]',
  portrait: 'aspect-[3/4]',
  square: 'aspect-square',
} as const;

/**
 * Every photograph goes through here — intrinsic dimensions and a fixed aspect
 * box on all of them, so no image can shift the layout as it loads.
 *
 * `offset` shifts a sand block behind the frame so the image sits slightly off
 * the grid line. It is the one place this site breaks its own alignment, and it
 * is what stops the modular grid feeling mechanical.
 */
export function Photo({
  image,
  ratio = 'landscape',
  priority = false,
  sizes = '100vw',
  offset = false,
  className,
}: {
  image: ImageRef;
  ratio?: keyof typeof ratios;
  priority?: boolean;
  sizes?: string;
  offset?: boolean;
  className?: string;
}) {
  return (
    <figure className={cn('relative m-0', className)}>
      {offset ? (
        <div
          aria-hidden
          className="absolute -top-3 -left-3 hidden h-full w-full bg-highlight sm:block"
        />
      ) : null}
      <div className={cn('relative overflow-hidden bg-panel', ratios[ratio])}>
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes={sizes}
          priority={priority}
          loading={priority ? undefined : 'lazy'}
          className="object-cover"
        />
      </div>
      {image.caption ? (
        <figcaption className="relative mt-2 text-xs text-ink-faint">{image.caption}</figcaption>
      ) : null}
    </figure>
  );
}
