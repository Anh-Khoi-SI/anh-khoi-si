"use client";

import {
  Form,
  Input,
  Select,
  Modal,
  ConfigProvider,
  Upload,
  Button,
  Image,
} from "antd";

import { InboxOutlined, CloseOutlined, PlusOutlined } from "@ant-design/icons";
import { useState } from "react";

import MarkdownEditor from "@/components/ui/admin/MarkdownEditor";

const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

export default function AddBlog() {
  /////////////// Form /////////////// Form /////////////// Form //////////////////////////////////////////////////////////////////////////////////////////

  const [form] = Form.useForm();
  const [currentField, setCurrentField] = useState(null);
  const [contentModalVisible, setContentModalVisible] = useState(false);

  const showConfirm = (field) => {
    setCurrentField(field);
    setContentModalVisible(true);
  };

  const handleDelete = () => {
    if (currentField !== null) {
      form.setFieldsValue({
        "Nội Dung Bài Viết": form
          .getFieldValue("Nội Dung Bài Viết")
          .filter((_, index) => index !== currentField),
      });
      setContentModalVisible(false);
      setCurrentField(null);
    }
  };

  /////////////// Banner /////////////// Banner /////////////// Banner //////////////////////////////////////////////////////////////////////////////////////////

  const [fileList, setFileList] = useState([]);
  const [bannerModalVisible, setBannerModalVisible] = useState(false);

  const showConfirmRemoveBanner = () => {
    setBannerModalVisible(true);
  };

  const handleRemoveBanner = () => {
    setFileList([]);
    setBannerModalVisible(false);
  };

  return (
    <div className="flex flex-col gap-6 px-8 py-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold">📝 Tạo Bài Viết Mới</h1>

      <div className="grid grid-cols-6 gap-6">
        {/* Cột chính (nội dung bài viết) */}
        <Form
          layout="vertical"
          form={form}
          autoComplete="off"
          className="col-span-4"
          onFinish={(values) => console.log("Form Data:", values)}
        >
          <Form.Item label="📝 Tiêu Đề Bài Viết" name="tieu_de">
            <Input placeholder="Nhập tiêu đề bài viết..." />
          </Form.Item>

          <Form.Item label="📌 Tiêu Đề Phụ" name="tieu_de_phu">
            <Input placeholder="Nhập tiêu đề phụ..." />
          </Form.Item>

          <Form.List name="Nội Dung Bài Viết">
            {(fields, { add, remove }) => (
              <div className="grid gap-4">
                {fields.map(({ key, name, ...restField }) => (
                  <div key={key} className="border p-3 rounded-lg">
                    <div className="flex gap-2 pb-2">
                      <Form.Item
                        {...restField}
                        name={[name, "tieu_de_muc"]}
                        className="w-full"
                      >
                        <Input
                          placeholder="Tiêu Đề Nội Dung"
                          className="font-medium"
                        />
                      </Form.Item>
                      <Button
                        type="text"
                        danger
                        icon={<CloseOutlined />}
                        onClick={() => showConfirm(name)}
                      />
                    </div>
                    <Form.Item
                      name={[name, "noi_dung_muc"]}
                      valuePropName="value"
                    >
                      <MarkdownEditor />
                    </Form.Item>
                  </div>
                ))}
                <Button
                  type="dashed"
                  icon={<PlusOutlined />}
                  onClick={() => add()}
                  block
                >
                  Thêm Nội Dung
                </Button>
              </div>
            )}
          </Form.List>

          <Button type="primary" htmlType="submit" className="w-full mt-4">
            Submit
          </Button>
        </Form>

        {/* Form Thông Tin Bài Viết - STICKY */}
        <div className="col-span-2 relative ">
          <div className="top-16 h-fit bg-gray-100 p-4 rounded-lg shadow-md">
            <Form layout="vertical">
              <Form.Item label="🖼 Banner">
                {fileList.length >= 1 ? (
                  <div className="relative">
                    <Image
                      src={fileList[0].url}
                      alt={fileList[0].name}
                      className="w-full h-full object-cover rounded-lg"
                    />

                    <button
                      className="text-lg absolute top-2 right-2 p-1 px-2 text-red-600 hover:text-black transition bg-white rounded-sm"
                      onClick={showConfirmRemoveBanner}
                    >
                      <CloseOutlined />
                    </button>
                  </div>
                ) : (
                  <Upload
                    action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
                    fileList={fileList}
                    beforeUpload={(file) => {
                      const newFile = {
                        ...file,
                        url: URL.createObjectURL(file),
                      };
                      setFileList([newFile]);
                      return false;
                    }}
                    showUploadList={false}
                    accept="image/*"
                    maxCount={1}
                    className=" flex justify-center items-center border-[1px] border-dashed border-gray-300 rounded-lg bg-lightbackground cursor-pointer hover:border-blue-500 transition-all duration-300"
                  >
                    <div className="w-full flex flex-col items-center py-8">
                      <PlusOutlined />
                      <p className="mt-2 text-sm">Tải lên hình ảnh</p>
                    </div>
                  </Upload>
                )}
              </Form.Item>

              <Form.Item label="🖼 Hình Ảnh Bài Viết">
                <Upload.Dragger listType="picture">
                  <p className="ant-upload-drag-icon">
                    <InboxOutlined />
                  </p>
                  <p className="ant-upload-text">
                    Nhấn hoặc kéo thả tệp vào đây để tải lên
                  </p>
                </Upload.Dragger>
              </Form.Item>

              <Form.Item label="📂 Danh Mục">
                <Select placeholder="Chọn danh mục" />
              </Form.Item>
            </Form>
          </div>
        </div>

        {/* Modal Xác Nhận Xóa Nội Dung Blog */}
        <Modal
          open={contentModalVisible}
          title="Xác Nhận Xóa Nội Dung Blog"
          onOk={handleDelete}
          onCancel={() => setContentModalVisible(false)}
          okText="Xóa"
          cancelText="Hủy"
        >
          <p>Bạn có chắc chắn muốn xóa nội dung này không?</p>
        </Modal>

        {/* Modal Xác Nhận Xóa Hình Ảnh */}
        <Modal
          title="Xác Nhận Xóa Banner"
          open={bannerModalVisible}
          onOk={handleRemoveBanner}
          onCancel={() => setBannerModalVisible(false)}
          okText="Xóa"
          cancelText="Hủy"
        >
          <p>Bạn có chắc chắn muốn xóa nội dung này không?</p>
        </Modal>
      </div>
    </div>
  );
}
