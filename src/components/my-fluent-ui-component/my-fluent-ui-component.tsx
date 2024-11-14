import React, { useState } from 'react';
import {
    FluentProvider,
    webLightTheme,
    Button,
    Input,
    Card,
    CardHeader,
    CardFooter,
    Text,
    Tab,
    TabList,
    SelectTabEvent,
    SelectTabData,
    Divider,
    Dropdown,
    Option,
    Checkbox,
    Badge,
    Link,
    Toast,
    ToastTrigger,
    useToastController,
    Spinner,
} from '@fluentui/react-components';

const MyFluentComponent = () => {
    const [selectedTab, setSelectedTab] = useState("home");
    const [loading, setLoading] = useState(false);
    const toastController = useToastController();

    const handleTabSelect = (event: SelectTabEvent, data: SelectTabData) => {
        setSelectedTab(data.value as string);
    };

    const handleSubmit = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            toastController.dispatchToast(
                <Toast>
                    <Text>Form submitted successfully!</Text>
                </Toast>,
                { position: "top-end" }
            );
        }, 1000);
    };

    return (
        <FluentProvider theme={webLightTheme}>
            {/* Navigation */}
            <div style={{ padding: '10px 20px', backgroundColor: '#f0f0f0' }}>
                <TabList selectedValue={selectedTab} onTabSelect={handleTabSelect}>
                    <Tab value="home">Home</Tab>
                    <Tab value="profile">Profile</Tab>
                    <Tab value="settings">Settings</Tab>
                </TabList>
            </div>

            {/* Main Content */}
            <div style={{ padding: '20px' }}>
                {/* Header Section */}
                <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                    <Text size={800} weight="semibold">Welcome to Our Application</Text>
                    <Text size={400} block>Explore the power of Fluent UI</Text>
                </div>

                {/* Cards Grid */}
                <div style={{ 
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
                    gap: '20px',
                    marginBottom: '30px' 
                }}>
                    {/* Card 1 */}
                    <Card>
                        <CardHeader
                            header={<Text weight="semibold">Features</Text>}
                            description="Explore what we offer"
                        />
                        <div style={{ padding: '16px' }}>
                            <Badge appearance="filled" color="brand">New</Badge>
                            <Text block style={{ marginTop: '10px' }}>
                                Discover our latest features and improvements
                            </Text>
                        </div>
                    </Card>

                    {/* Card 2 */}
                    <Card>
                        <CardHeader
                            header={<Text weight="semibold">Statistics</Text>}
                            description="Your activity overview"
                        />
                        <div style={{ padding: '16px' }}>
                            <Text>Active Users: 1,234</Text>
                            <Text block>Total Projects: 56</Text>
                        </div>
                    </Card>

                    {/* Card 3 */}
                    <Card>
                        <CardHeader
                            header={<Text weight="semibold">Quick Actions</Text>}
                            description="Common tasks"
                        />
                        <div style={{ padding: '16px' }}>
                            <Button appearance="subtle">View Reports</Button>
                            <Button appearance="subtle">Share Data</Button>
                        </div>
                    </Card>
                </div>

                <Divider style={{ margin: '20px 0' }} />

                {/* Form Section */}
                <Card style={{ maxWidth: '600px', margin: '0 auto' }}>
                    <CardHeader
                        header={<Text weight="semibold">Contact Form</Text>}
                        description="Get in touch with us"
                    />
                    <div style={{ padding: '20px' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                            <Input placeholder="Full Name" />
                            <Input placeholder="Email" type="email" />
                            <Dropdown placeholder="Select Category">
                                <Option>Support</Option>
                                <Option>Sales</Option>
                                <Option>General Inquiry</Option>
                            </Dropdown>
                            <Input placeholder="Your message" />
                            <Checkbox label="Subscribe to newsletter" />
                            {loading ? (
                                <Spinner />
                            ) : (
                                <Button appearance="primary" onClick={handleSubmit}>
                                    Submit
                                </Button>
                            )}
                        </div>
                    </div>
                </Card>

                {/* Footer */}
                <footer style={{ 
                    marginTop: '40px', 
                    padding: '20px',
                    textAlign: 'center',
                    borderTop: '1px solid #eee'
                }}>
                    <Text size={200}>© 2024 Your Application Name</Text>
                    <div style={{ marginTop: '10px' }}>
                        <Link style={{ marginRight: '20px' }}>Privacy Policy</Link>
                        <Link style={{ marginRight: '20px' }}>Terms of Service</Link>
                        <Link>Contact Us</Link>
                    </div>
                </footer>
            </div>
        </FluentProvider>
    );
};

export default MyFluentComponent;
