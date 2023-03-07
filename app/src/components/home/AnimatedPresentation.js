import React, { useState, useCallback, useRef, useEffect } from 'react'
import { useTransition, animated } from '@react-spring/web'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    main : {
        minWidth: "100px",
        padding: "0 20px",
        margin: "0 auto",
        height:" 260px",
      },
    transitionsItem : {
        overflow: "hidden",
        width: "100%",
        color: "#fff",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        fontSize:" 6rem",
        fontWeight: 800,
        textTransform: "uppercase",
        willChange: "transform, opacity, height",
        whiteSpace: "nowrap",
        cursor: "pointer",
        lineHeight: "80px",
        [theme.breakpoints.down('sm')]: {
            fontSize: '3rem'
        }
    },
      
      container : {
        display:"flex",
        alignItems: "center",
        height:" 100%",
        justifyContent: "center",
      }
      
}))

export default function AnimatetPresentation() {
  const classes= useStyles()
  const ref = useRef([])
  const [items, set] = useState('')
  const transitions = useTransition(items, {
    from: {
      opacity: 0,
      height: 0,
      innerHeight: 0,
      transform: 'perspective(600px) rotateX(0deg)',
      color: '#3F3B6C',
    },
    enter: [
      { opacity: 1, height: 80, innerHeight: 80 },
      { transform: 'perspective(600px) rotateX(180deg)', color: 'rgba(180,149,231, 0.7)' },
      { transform: 'perspective(600px) rotateX(0deg)' },
    ],
    leave: [{ color: 'rgba(79,69,255,1)' }, { innerHeight: 0 }, { opacity: 0, height: 0 }],
    update: { color: '#3F3B6C' },
  })

  const reset = useCallback(() => {
    ref.current.forEach(clearTimeout)
    ref.current = []
    set([])
    ref.current.push(setTimeout(() => set(['Wholesome', 'Web',]), 2000))
    ref.current.push(setTimeout(() => set(['Wholesome', 'Experiences']), 5000))
    ref.current.push(setTimeout(() => set(['Wholesome', 'Web', 'Experiences']), 8000))
  }, [])

  useEffect(() => {
    reset()
    return () => ref.current.forEach(clearTimeout)
  }, [])

  return (
    <div className={classes.container}>
      <div className={classes.main}>
        {transitions(({ innerHeight, ...rest }, item) => (
          <animated.div className={classes.transitionsItem} style={rest} onClick={reset}>
            <animated.div style={{ overflow: 'hidden', height: innerHeight }}>{item}</animated.div>
          </animated.div>
        ))}
      </div>
    </div>
  )
}
