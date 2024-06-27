import { Table } from 'antd'
import type { TableColumnsType } from 'antd'
import { prefixes } from './ip-ranges.json'
import './App.css'

function App() {
  const dataSource = prefixes.map((value, index) => Object.assign(value, { key: index }))
  const regionArray: string[] = []
  const serviceArray: string[] = []
  for (var i = 0; i < prefixes.length; i++) {
    if (!regionArray.includes(prefixes[i].region)) {
      regionArray.push(prefixes[i].region)
    }
    if (!serviceArray.includes(prefixes[i].service)) {
      serviceArray.push(prefixes[i].service)
    }
  }
  const regionFilters = regionArray.sort().map(value => ({ text: value, value }))
  const serviceFilters = serviceArray.sort().map(value => ({ text: value, value }))
  const columns: TableColumnsType = [
    {
      title: 'IP',
      dataIndex: 'ip_prefix',
    },
    {
      title: 'Region',
      dataIndex: 'region',
      filters: regionFilters,
      onFilter: (value, record) => record.region.indexOf(value as string) === 0,
    },
    {
      title: 'Service',
      dataIndex: 'service',
      filters: serviceFilters,
      onFilter: (value, record) => record.service.indexOf(value as string) === 0,
    },
    {
      title: 'Group',
      dataIndex: 'network_border_group',
    },
  ]
  return (
    <Table dataSource={dataSource} columns={columns} />
  )
}

export default App
