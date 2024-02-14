import "./header.scss";
import logo from "../../assets/images/logo.png";
import { AudioOutlined } from "@ant-design/icons";
import { Input, Space } from "antd";

function Header() {
  const { Search } = Input;
  const suffix = (
    <AudioOutlined
      style={{
        fontSize: 16,
        color: "#1677ff",
      }}
    />
  );
  const onSearch = (value, _e, info) => console.log(info?.source, value);
  return (
    <div>
      <nav className="header">
        <div className="header__logo">
          <img
            src={logo}
            alt="logo image"
            style={{
              width: "25px",
              height: "25px",
              marginTop: "1px",
            }}
          />
          <h4
            style={{
              position: "absolute",
              top: "8px",
              left: "60px",
              marginTop: "-2px",
            }}
          >
            Task Master
          </h4>
        </div>
        <Space direction="vertical">
          <Search
            placeholder="Search"
            onSearch={onSearch}
            style={{
              width: '500px',
              right: "150px",
            }}
          />
        </Space>
      </nav>
    </div>
  );
}

export default Header;
