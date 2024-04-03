import React from 'react';
import { useState } from 'react';
import {
    PercentageOutlined,
    SettingOutlined,
    WechatWorkOutlined,
    PieChartOutlined,
    UserOutlined,
    CodepenOutlined,
    WalletOutlined
} from '@ant-design/icons';
import { Menu } from 'antd';
import image from '../assets/download.jpeg';


function getItem(label, key, icon, children, type) {
    return {
        key,
        icon,
        children,
        label,
        type,
    };
}
const items = [
    getItem('dashboard', '1', <PieChartOutlined />),
    getItem('Product', 'sub1', <CodepenOutlined />, [
        getItem('Option 5', '5'),
        getItem('Option 6', '6'),
        getItem('Option 7', '7'),
        getItem('Option 8', '8'),
    ]),
    getItem('customers', 'sub2', <UserOutlined />, [
        getItem('Option 9', '9'),
        getItem('Option 10', '10'),
        getItem('Submenu', 'sub3', null, [getItem('Option 11', '11'), getItem('Option 12', '12')]),
    ]),
    getItem('Income', 'sub1', <WalletOutlined />, [
        getItem('Option 5', '5'),
        getItem('Option 6', '6'),
        getItem('Option 7', '7'),
        getItem('Option 8', '8'),
    ]),
    getItem('Promote', 'sub2', <PercentageOutlined />, [
        getItem('Option 9', '9'),
        getItem('Option 10', '10'),
        getItem('Submenu', 'sub3', null, [getItem('Option 11', '11'), getItem('Option 12', '12')]),
    ]),
    getItem('help', 'sub1', <WechatWorkOutlined />, [
        getItem('Option 5', '5'),
        getItem('Option 6', '6'),
        getItem('Option 7', '7'),
        getItem('Option 8', '8'),
    ]),
];


function Sidebar() {
    const [collapsed, setCollapsed] = useState(false);
    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };
    return (
        <div>
            <div className='sidebar-title'>
                <SettingOutlined /> Dashboard
            </div>

            <div className='menu'>

                <Menu
                    defaultSelectedKeys={['']}
                    defaultOpenKeys={['']}
                    mode="inline"
                    theme="dark"
                    inlineCollapsed={collapsed}
                    items={items}
                />
            </div>

            <div className='user-info'>
                <div className='user-image'><img src={image} alt="" srcset="" /></div>
                <div>
                    <p>Evano</p>
                    <p>Project manager</p>
                    </div>
            </div>

        </div>
    )
}

export default Sidebar