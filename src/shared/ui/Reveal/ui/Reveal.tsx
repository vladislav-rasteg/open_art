import React, {useRef, useEffect, useState} from "react"
import {motion, useInView, useAnimation} from "framer-motion"

interface Props {
    children: React.ReactNode;
    width?: "fit-content" | "100%";
    delay?: number;
}

export const Reveal:React.FC<Props> = ({children, width = "100%", delay = 0}) => {
    const ref = useRef(null)
    const isInView = useInView(ref, {once: true})

    const [style, setStyle] = useState("reveal-relative reveal-hidden")

    const mainControls = useAnimation()

    useEffect(() => {
        if (isInView) {
            mainControls.set("hidden")
            mainControls.start("visible")
            setTimeout(() => {
                setStyle("reveal-relative")
            }, 750)
        }
    }, [isInView])

    return (
        <div ref={ref} style={{width}} className={style}>
        <motion.div
        variants={{
            hidden: {opacity: 0, y: "20%"},
            visible: {opacity: 1, y: "0%"},
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.4, delay: delay }}
        >{children}</motion.div>
        </div>
    )
};
