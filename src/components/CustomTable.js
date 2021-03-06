// @flow
import React, { type Node } from "react"
import styled from "styled-components"
import Table from "./Table"

const CustomTable = styled.div`
  table {
    width: 100%;
    border-collapse: collapse;

    tr {
      border-bottom: 1px solid #ddd;
    }

    th:first-child {
      text-align: center;
      width: 2rem;
    }

    td:first-child {
      text-align: center;
      width: 2rem;
    }

    tr.tr-body:hover {
      background-color: #f5f5f5;
    }

    tr.tr-checked {
      background-color: #f5f5f5;
    }

    th {
      padding: 0.5rem;
      text-align: left;
      color: #9a9a9a;
    }

    td {
      padding: 0.5rem;
      text-align: left;
    }
  }
`

type Props = {
  children?: Node,
  onCheck: (values: Array<number>) => void,
  defaultCheckeds?: Array<number>,
}

export default ({ children, defaultCheckeds, onCheck }: Props) => {
  return (
    <CustomTable>
      <Table onCheck={onCheck} defaultCheckeds={defaultCheckeds}>
        {children}
      </Table>
    </CustomTable>
  )
}
