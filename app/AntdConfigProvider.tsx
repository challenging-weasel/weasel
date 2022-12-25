"use client";

import { ConfigProvider } from "antd";
import "antd/dist/reset.css";
import koKr from "antd/locale/ko_KR";
import dayjs from "dayjs";
import "dayjs/locale/ko";

dayjs.locale("ko");

interface IAntdConfigProviderProps {
  children: React.ReactNode;
}

const AntdConfigProvider: React.FC<IAntdConfigProviderProps> = ({
  children,
}) => {
  return (
    <ConfigProvider
      locale={koKr}
      theme={{
        token: {
          // colorPrimary: "#E9E92F",
          colorPrimary: "#b86237",
          borderRadius: 0,
        },
        // algorithm: theme.compactAlgorithm,
      }}
    >
      {children}
    </ConfigProvider>
  );
};

export default AntdConfigProvider;
