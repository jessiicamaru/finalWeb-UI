import { Result, Button } from 'antd';

const ErrorPage = () => {
    return (
        <div
            style={{
                height: '100vh',
                backgroundColor: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Result
                status="404"
                title="404"
                subTitle="Sorry, the page you visited does not exist."
                extra={
                    <Button type="primary" href="/search" danger>
                        Back Home
                    </Button>
                }
            />
        </div>
    );
};

export default ErrorPage;
