import Head from 'next/head';
import Navbar from './Navbar';
import Content from './Content';

const Layout = (props) => (
    <div>
        <Head>
            <title>WordCheck - an easy way to check what is going on</title>
            <link rel="stylesheet" href="https://bootswatch.com/4/lux/bootstrap.min.css" />
        </Head>

        <Navbar />

        <Content>
            {props.children}
        </Content>
    </div>
);

export default Layout;