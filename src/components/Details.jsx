export const Details = ({ src, detail, className, href }) => {
  return (
    <div className="flex gap-4">
      <img loading="lazy" className={className} src={src} alt="Image" />
      <p className="text-xs text-neutral-800 max-w-[20ch] lg:max-w-[25ch] hover:text-highlight transition-all duration-200">
        <a href={href} target="_blank">
          {detail}
        </a>
      </p>
    </div>
  )
}
