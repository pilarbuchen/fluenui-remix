import React from 'react';
import {
    FluentProvider,
    webLightTheme,
    Button,
    Input,
    Card,
    CardHeader,
    CardFooter,
    Text,
} from '@fluentui/react-components';

const MyFluentComponent: React.FC = () => {
    return (
        <div>
            <FluentProvider theme={webLightTheme}>
                <div style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
                    <Card style={{ width: '300px' }}>
                        <CardHeader
                            header={
                                <Text weight="semibold" size={400}>
                                    Welcome to Fluent UI
                                </Text>
                            }
                            description={<Text size={300}>Explore Fluent UI 2 Components</Text>}
                        />
                        <div style={{ padding: '16px' }}>
                            <Input placeholder="Enter your name" />
                            <Button
                                appearance="primary"
                                style={{ marginTop: '12px', width: '100%' }}
                            >
                                Submit
                            </Button>
                        </div>
                        <CardFooter>
                            <Text size={200}>Fluent UI 2 Example</Text>
                        </CardFooter>
                    </Card>
                </div>
            </FluentProvider>
        </div>
    );
};

export default MyFluentComponent;
