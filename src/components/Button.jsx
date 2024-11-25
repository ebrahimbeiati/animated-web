import React from 'react'

const Button = ({title, id, rightIcon, leftIcon, containerClass}) => {
  return (
      <button id={id} className={`${containerClass} group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-100 px-7 py-3 text-black`}>
          {leftIcon}
          <span className="relative inline-flex overflow-hidden font-general text-xs uppercase"> <div>{title}</div>
              {rightIcon && <span className="ml-2">{rightIcon}</span>}
            </span>
      </button>
  )
}

export default Button