import { Layout, Menu } from 'antd';
import Task from "./Task";
import TaskList from "./TaskList";
import {useHistory} from "react-router-dom";

const { Header, Content, Sider } = Layout;

const SiteLayout = (props: {taskListId: number}) => {
    const history = useHistory();

    let task1 = new Task(   1, "Buy milk");
    let task2 = new Task(2, "Buy chocolate");
    let task3 = new Task(3, "Lighthouse");
    let task4 = new Task(4, "There Will Be Blood");
    let task5 = new Task(5, "Life Aquatic");
    let taskList1 = new TaskList(-1, "Groceries");
    let taskList2 = new TaskList(-2, "Films");
    taskList1.tasks.push(task1, task2);
    taskList2.tasks.push(task3, task4, task5);
    let taskLists = [taskList1, taskList2];

    let taskListCurrent = taskLists[props.taskListId - 1];

    console.log(taskList1, taskList2, taskListCurrent);

    return (
        <Layout className="layout">
            <Header className="header">
                <div className="logo">🪒</div>
            </Header>
            <Content style={{ padding: '0 50px' }}>
                <Layout className="site-layout-background">
                    <Sider className="sider" width={200}>
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={[String(props.taskListId)]}
                            defaultOpenKeys={['sub1']}
                            style={{ height: '100%' }}
                        >
                            <Menu.Item key="1" icon={'🛒'} onClick={() => {
                                    history.push({
                                        pathname: `/${taskList1.name}`
                                    })
                                }
                            }>
                                {taskList1.name}
                            </Menu.Item>
                            <Menu.Item key="2" icon={'🎬'} onClick={() => {
                                history.push({
                                    pathname: `/${taskList2.name}`
                                })}
                            }>
                                {taskList2.name}
                            </Menu.Item>
                        </Menu>
                    </Sider>
                    <Content style={{ padding: '24px', minHeight: 280, background: '#fff' }}>
                        {taskListCurrent.visualise()}
                    </Content>
                </Layout>
            </Content>
        </Layout>
    );
}

export default SiteLayout;