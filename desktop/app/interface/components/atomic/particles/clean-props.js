import { removeProps } from 'styled-system'

const clean = props => {
  const rebassProps = removeProps(props)
  const next = {}

  for (let key in rebassProps) {
    if (dict[key]) continue
    next[key] = rebassProps[key]
  }

  return next
}

const dict = {

  authLogin: true,
  layout: true,
  b: true,
  border: true,
  br: true,
  bi: true,
  bc: true,
  bs: true,
  dis: true,
  gradient: true,
  o: true,
  p: true,
  pos: true,
  position: true,
  py: true,
  px: true,
  fw: true,
  t: true,
  ts: true,
  ta: true,
  textAlign: true,
  zIndex: true,
  ratio: true,
  bold: true,
  caps: true,
  size: true,
  left: true,
  center: true,
  right: true,
  justify: true,
  top: true,
  right: true,
  bottom: true,
  left: true,
  z: true,
  backgroundImage: true,
}

export default clean
