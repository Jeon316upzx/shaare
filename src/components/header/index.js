import React from 'react'

const Header = ({ data }) => {
  return (
    <div>
        <h3 className="text-xl py-5 font-semibold ">{data.title}</h3>
        <p className="opacity-40 text-sm py-3">{data.subTitle}</p>
      </div>
  )
}

export default Header
