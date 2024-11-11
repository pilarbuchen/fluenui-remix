import { createBoard } from '@wixc3/react-board';
import MyFluentUIComponent from '../../../src/components/my-fluent-ui-component/my-fluent-ui-component';

export default createBoard({
    name: 'MyFluentUIComponent',
    Board: () => <MyFluentUIComponent />,
});
