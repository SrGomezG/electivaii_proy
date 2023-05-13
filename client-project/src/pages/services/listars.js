import { CaretRightOutlined, LoginOutlined, PlayCircleOutlined } from "@ant-design/icons";
import { Space, Table } from "antd";
import React from "react";

const dataSource = [
  {
    key: "1",
    id: "01",
    product: "Computador",
    count: 2,
    state: "Active",
  },
  {
    key: "2",
    id: "02",
    product: "Tablet",
    count: "3",
    state: "Active",
  },
  {
    key: "3",
    id: "03",
    product: 32,
    count: "10 Downing Street",
    state: "1",
    actions: "1",
  },
  {
    key: "4",
    id: "04",
    product: 32,
    count: "10 Downing Street",
    state: "1",
    actions: "1",
  },
  {
    key: "5",
    id: "05",
    product: 32,
    count: "10 Downing Street",
    state: "1",
    actions: "1",
  },
  {
    key: "6",
    id: "06",
    product: 32,
    count: "10 Downing Street",
    state: "1",
    actions: "1",
  },
];

const columns = [
  {
    title: "Id",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Product",
    dataIndex: "product",
    key: "product",
  },
  {
    title: "Count",
    dataIndex: "count",
    key: "count",
  },
  {
    title: "State",
    dataIndex: "state",
    key: "state",
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <a>
          <LoginOutlined /> {record.name}
        </a>
        <a>
          <PlayCircleOutlined />
        </a>
        <a>
          <CaretRightOutlined />
        </a>
      </Space>
    ),
  },
];
const pagination = {
  pageSize: 5,
};
export const listars = () => {
  return (
    <Table dataSource={dataSource} columns={columns} pagination={pagination} />
  );
};
