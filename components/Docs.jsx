'use client'

import { Table, Button } from 'antd';
import { useState, useEffect } from 'react'
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';
import dayjs from 'dayjs';
import { CloseOutlined, CheckOutlined, CheckCircleTwoTone } from '@ant-design/icons';

export default function Docs({ pagination = {}, dataSource = [], actioLink}) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  
  const [data, setData] = useState(dataSource)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true);
    setData(dataSource);
    setLoading(false);
  }, [dataSource, data]);

  const createQueryString = useCallback(
    (params) => {
      const queryParams = new URLSearchParams(searchParams);
  
      for (const key in params) {
        if (params.hasOwnProperty(key)) {
          queryParams.set(key, params[key]);
        }
      }
  
      return queryParams.toString();
    },
    [searchParams]
  );

  const onChange = (page, pageSize) => {
    const queryParamsObject = {
      page: page,
      rows: pageSize,
    };

    const queryString = createQueryString(queryParamsObject);
    router.push(pathname + '?' + queryString)
  }

  const columns = [
    {
      title: 'Организация поверитель',
      dataIndex: 'org_title',
      key: 'org_title',
      sorter: (a, b) => a.org_title > b.org_title,  
      sortDirections: ["descend"],
      width: '10%'
    },
    {
      title: 'Регистрационный номер типа СИ',
      dataIndex: 'mi.mitnumber',
      key: 'mi.mitnumber',
      width: '10%'
    },
    {
      title: 'Наименование типа СИ',
      dataIndex: 'mi.mititle',
      key: 'mi.mititle',
      width: '10%'
    },
    {
      title: 'Тип СИ',
      dataIndex: 'mi.mitype',
      key: 'mi.mitype',
      width: '10%'
    },
    {
      title: 'Модификация СИ',
      dataIndex: 'mi.modification',
      key: 'mi.modification',
      width: '10%'
    },
    {
      title: 'Заводской номер/Буквенно-цифровое обозначение',
      dataIndex: 'mi.number',
      key: 'mi.number',
      width: '10%'
    },
    {
      title: 'Дата поверки',
      dataIndex: 'verification_date',
      key: 'verification_date',
      render: (text) => dayjs(text).format('DD.MM.YYYY'),
      width: '10%'
    },
    {
      title: 'Действительна до',
      dataIndex: 'valid_date',
      key: 'valid_date',
      render: (text) => dayjs(text).format('DD.MM.YYYY'),
      width: '10%'
    },
    {
      title: 'Номер свидетельства/извещения/выписки',
      dataIndex: 'result_docnum',
      key: 'result_docnum',
      width: '10%'
    },
    {
      title: 'Пригодность',
      dataIndex: 'applicability',
      key: 'applicability',
      render: (applicability) => {
        return <span>{applicability ? <CheckOutlined /> : <CloseOutlined />}</span>
      },
      filters: [
        {text: 'Пригодно', value: true },
        {text: 'Не пригодно', value: false },
      ],
      onFilter: (value, record) => {
        return record.applicability === value
      },
      width: '10%'
    },
    {
      title: 'Действие',
      key: 'operation',
      fixed: 'right',
      render: (record) => 
        <div className="flex gap-2">
          <Button href={`/${record.vri_id}`}>Посмотреть</Button>
        </div>
    },
  ];

  return (
    <>
      <Table
        size="middle"
        onRow={(record, rowIndex) => {
          return {
            onDoubleClick: (event) => {
              router.push(`/${record.vri_id}`)
            },
          };
        }}
        rowClassName="cursor-pointer"
        scroll={{x: 'auto'}}
        columns={columns}
        dataSource={dataSource}
        rowKey={record => record.vri_id}  
        pagination={{
          showTotal: (total, range) => `${range[0]}-${range[1]} из ${total}`, 
          position: ['topRight', 'bottomRight'],
          onChange: onChange,
          ...pagination
        }}
        loading={loading}
    />
    </>
  ); 
}