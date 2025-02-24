import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-50 z-50">
      <Spin indicator={<LoadingOutlined spin />} size="large" />
    </div>
  );
}
