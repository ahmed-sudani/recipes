import * as Icons from 'react-bootstrap-icons'

export function Icon({ icon, size }) {
  const Icon = Icons[icon]
  return <Icon size={size} />
}
