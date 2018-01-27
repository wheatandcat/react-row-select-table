// @flow
import React, { Children, type Node } from "react"

type Props = {
  children?: Node
}

const Thead = ({ children }: Props) => {
  return <thead>{children}</thead>
}

export default Thead
