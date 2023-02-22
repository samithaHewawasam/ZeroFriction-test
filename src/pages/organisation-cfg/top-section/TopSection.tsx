import { Alert, Button, Space } from 'antd';

const TopSection = () => {
  return (
    <Space direction='horizontal'>
      <Alert message='Form invalid' type='error' />
      <div>
        <Button type='text'>Cancel</Button>
        <Button type='primary'>Save</Button>
      </div>
    </Space>
  );
};

export default TopSection;
