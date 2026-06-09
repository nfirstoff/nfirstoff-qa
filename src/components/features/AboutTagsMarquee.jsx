import { useState, useEffect } from "react"
import { allTags } from "../../data/tagsData"

export default function AboutTagsMarquee() {
  const [reducedMotion, setReducedMotion] = useState(
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches
  )

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    const handler = (e) => setReducedMotion(e.matches)
    mq.addEventListener("change", handler)
    return () => mq.removeEventListener("change", handler)
  }, [])

  if (reducedMotion) {
    return (
      <div className="about-tags-container about-tags-container--static">
        <div className="about-tags-track about-tags-track--paused">
          <div className="about-tags-inner about-tags-inner--wrapped">
            {allTags.map((tag) => (
              <span key={tag} className="about-tag">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="about-tags-container">
      <div className="about-tags-track">
        <div className="about-tags-inner">
          {[...allTags, ...allTags].map((tag, i) => (
            <span key={`${tag}-${i}`} className="about-tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
