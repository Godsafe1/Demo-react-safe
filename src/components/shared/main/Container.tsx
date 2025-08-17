import React from 'react'


interface ContainterProps {
    children?: React.ReactNode
    className?: string
}

export function Container(props: Readonly<ContainterProps>) {
  return (
    <div className={`container p-8 mx-auto xl:px-0 ${props.className ? props.className : ''}`}>
        {props.children}
    </div>
  )
}
