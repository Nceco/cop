import React from "react";

export type MbuttonProps = {
  style?: React.CSSProperties;
  text?: React.ReactNode;
}
const Mbutton = (props: MbuttonProps) => {
  const {style,text = '按钮'} = props
  return (
    <div style={style}>
      <button>{text}</button>
    </div>
  )
}

export default Mbutton
