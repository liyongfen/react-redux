import React, { memo } from 'react';
import { Input, Button, List } from 'antd';


const TodoListUI = (props) => {
    const { inputValue, list, onChangeValue, onAddItem, onRemoveItem } = props;
    return (
        <div style={{ margin: '20px auto' }}>
            <div>
                <Input
                    style={{ width: 300, marginLeft: 30 }}
                    value={inputValue}
                    onChange={onChangeValue}
                />
                <Button type="primary" onClick={onAddItem}>添加</Button>
            </div>
            <div style={{ width: 400, marginLeft: 30 }}>
                <List
                    dataSource={list}
                    bordered
                    renderItem={(item, index) => {
                        return <List.Item style={{ display: 'flex', justifyContent: 'space-between' }} key={index}>
                            {item}
                            <Button type="primary" onClick={() => onRemoveItem(index)}>删除</Button>
                        </List.Item>
                    }}
                />
            </div>
        </div>
    )
}

export default memo(TodoListUI);