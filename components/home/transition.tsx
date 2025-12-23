import { gsap, Linear } from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import { MutableRefObject, useEffect, useRef, useState } from "react"
import { isSmallScreen, NO_MOTION_PREFERENCE_QUERY } from "pages"

gsap.registerPlugin(ScrollTrigger)

const STYLE = {
    SLIDING_TEXT: "opacity-20 text-5xl md:text-7xl font-bold whitespace-nowrap text-[#E43D12]",
    SECTION:
        "w-full relative select-none py-48 flex flex-col gap-4 overflow-hidden",
    TITLE: "font-medium text-4xl md:text-5xl text-center text-[#E43D12]",
}

const Transition = ({ text, bold, slideText }: { text: string, bold: string, slideText: string }) => {
    const sectionRef: MutableRefObject<HTMLDivElement> = useRef(null)
    const quoteRef: MutableRefObject<HTMLHeadingElement> = useRef(null)

    const [willChange, setWillChange] = useState(false)

    // ✅ Middle text animation (copied logic)
    const initTextGradientAnimation = (
        target: MutableRefObject<HTMLDivElement>
    ): ScrollTrigger => {
        const tl = gsap.timeline({ defaults: { ease: Linear.easeNone } })

        tl.from(quoteRef.current, { opacity: 0, duration: 2 }).to(
            quoteRef.current.querySelector(".text-strong"),
            {
                backgroundPositionX: "100%",
                duration: 1,
            }
        )

        return ScrollTrigger.create({
            trigger: target.current,
            start: "center bottom",
            end: "center center",
            scrub: 0,
            animation: tl,
            onToggle: (self) => setWillChange(self.isActive),
        })
    }

    // ✅ Sliding text animation
    const initSlidingTextAnimation = (
        target: MutableRefObject<HTMLDivElement>
    ): ScrollTrigger => {
        const tl = gsap.timeline({ defaults: { ease: Linear.easeNone } })

        const leftEls = target.current.querySelectorAll(".ui-left")
        const rightEls = target.current.querySelectorAll(".ui-right")

        tl.to(leftEls, {
            xPercent: isSmallScreen() ? -500 : -150,
            stagger: 0.15,
        }).from(
            rightEls,
            {
                xPercent: isSmallScreen() ? -500 : -150,
                stagger: 0.15,
            },
            "<"
        )

        return ScrollTrigger.create({
            trigger: target.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 0,
            animation: tl,
        })
    }

    useEffect(() => {
        const textAnim = initTextGradientAnimation(sectionRef)
        let slidingAnim: ScrollTrigger | undefined

        const { matches } = window.matchMedia(NO_MOTION_PREFERENCE_QUERY)
        if (matches) {
            slidingAnim = initSlidingTextAnimation(sectionRef)
        }

        return () => {
            textAnim.kill()
            slidingAnim?.kill()
        }
    }, [])

    const renderSlidingText = (text: string, dir: "left" | "right") => (
        <p className={`ui-${dir} ${STYLE.SLIDING_TEXT}`}>
            {Array(5).fill(text).join("")}
        </p>
    )

    return (
        <section ref={sectionRef} className={STYLE.SECTION}>
            {renderSlidingText(` ${slideText} `, "right")}
            {renderSlidingText(` ${slideText} `, "left")}

            {/* ✅ MIDDLE CONTENT */}
            <h1
                ref={quoteRef}
                className={`${STYLE.TITLE} relative z-10 ${willChange ? "will-change-opacity" : ""
                    }`}
            >
                {text} {" "}
                <span className="text-strong font-bold">{bold}</span>
            </h1>

            {renderSlidingText(` ${slideText} `, "right")}
            {renderSlidingText(` ${slideText} `, "left")}
        </section>
    )
}

export default Transition
