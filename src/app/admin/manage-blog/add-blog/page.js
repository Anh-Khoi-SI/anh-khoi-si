"use client";

import { Form, Input, Select, Modal, ConfigProvider } from "antd";
import { InboxOutlined, CloseOutlined } from "@ant-design/icons";
import { Button, Card } from "antd";
import Dragger from "antd/es/upload/Dragger";
import TextArea from "antd/es/input/TextArea";
import { useState } from "react";
import TiptapEditor from "@/components/shared/Tiptap";

export default function AddBlog() {
  const [form] = Form.useForm();
  const [visible, setVisible] = useState(false);
  const [currentField, setCurrentField] = useState(null);

  const showConfirm = (field) => {
    setCurrentField(field);
    setVisible(true);
  };

  const handleDelete = () => {
    if (currentField !== null) {
      // Xóa nội dung
      form.setFieldsValue({
        "Nội Dung Bài Viết": form
          .getFieldValue("Nội Dung Bài Viết")
          .filter((_, index) => index !== currentField),
      });
      setVisible(false);
      setCurrentField(null);
    }
  };

  const handleContentChange = (html) => {
    console.log("Nội dung mới:", html);
  };

  return (
    <div className=" flex flex-col gap-4 px-10">
      <div className="text-2xl font-bold pt-2">Tạo Bài Viết Mới</div>
      <div className="px-10 grid grid-cols-6 gap-6">
        <Form
          layout="vertical"
          form={form}
          initialValues={{
            items: [{}],
          }}
          autoComplete="off"
          className=" col-span-4"
        >
          <Form.Item>
            <Form.List name="Nội Dung Bài Viết">
              {(fields, { add, remove }) => (
                <div className=" grid gap-4">
                  {fields.map((field) => (
                    <Card
                      size="small"
                      title={`Nội Dung ${field.name + 1}`}
                      key={field.key}
                      extra={
                        <CloseOutlined
                          onClick={() => showConfirm(field.name)}
                        />
                      }
                    >
                      <Form.Item
                        label="Tiêu Đề Nội Dung"
                        name={[field.name, "name"]}
                      >
                        <Input />
                      </Form.Item>

                      {/* Nest Form.List */}
                      <Form.Item label="Nội Dung Bài Viết" className="w-full">
                        <Form.List name={[field.name, "noi-dung"]}>
                          {(subFields, subOpt) => (
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "column",
                                rowGap: 16,
                              }}
                            >
                              {subFields.map((subField) => (
                                <div
                                  key={subField.key}
                                  className="flex flex-col gap-4 items-start w-full"
                                >
                                  <div
                                    className="w-full flex justify-center items-center cursor-pointer bg-red-200 p-2 rounded-md hover:bg-red-100 transition-all"
                                    onClick={() => {
                                      subOpt.remove(subField.name);
                                    }}
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      strokeWidth={1.5}
                                      stroke="currentColor"
                                      className="size-5 text-red-400"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                                      />
                                    </svg>
                                  </div>
                                  <Form.Item
                                    noStyle
                                    name={[
                                      subField.name,
                                      "Nội dung" + subField.name,
                                    ]}
                                  >
                                    <div className="grid gap-4 w-full">
                                      <div className="p-6">
                                        <h1 className="text-2xl font-bold mb-4">
                                          Tiptap Editor
                                        </h1>
                                        <TiptapEditor />
                                      </div>
                                      <Dragger name="image">
                                        <p className="ant-upload-drag-icon">
                                          <InboxOutlined />
                                        </p>
                                        <p className="ant-upload-text">
                                          Click or drag file to this area to
                                          upload
                                        </p>
                                        <p className="ant-upload-hint">
                                          Support for a single or bulk upload.
                                          Strictly prohibited from uploading
                                          company data or other banned files.
                                        </p>
                                      </Dragger>
                                    </div>
                                  </Form.Item>
                                </div>
                              ))}
                              <div>
                                <Button
                                  type="dashed"
                                  onClick={() => subOpt.add()}
                                  block
                                >
                                  + Add Sub Item
                                </Button>
                              </div>
                            </div>
                          )}
                        </Form.List>
                      </Form.Item>
                    </Card>
                  ))}

                  <Button type="dashed" onClick={() => add()} block>
                    + Add Item
                  </Button>
                </div>
              )}
            </Form.List>
          </Form.Item>
        </Form>

        <Form layout="vertical" className=" col-span-2">
          <Form.Item label="Tiêu Đề Bài Viết">
            <Input />
          </Form.Item>
          <Form.Item label="Tiêu Đề Phụ">
            <Input />
          </Form.Item>
          <Form.Item label="Banner">
            <Dragger>
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="ant-upload-text">
                Click or drag file to this area to upload
              </p>
              <p className="ant-upload-hint">
                Support for a single or bulk upload. Strictly prohibited from
                uploading company data or other banned files.
              </p>
            </Dragger>
          </Form.Item>
          <Form.Item label="Danh Mục">
            <Select />
          </Form.Item>
        </Form>

        <ConfigProvider
          theme={{
            components: {
              Modal: {
                padding: 20,
              },
            },
          }}
        >
          <Modal
            title="Xác Nhận Xóa"
            open={visible}
            onOk={handleDelete}
            onCancel={() => setVisible(false)}
          >
            <p>Bạn có chắc chắn muốn xóa nội dung này không?</p>
          </Modal>
        </ConfigProvider>
      </div>
    </div>
  );
}
