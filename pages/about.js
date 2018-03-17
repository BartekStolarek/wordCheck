import Layout from '../components/Layout';

const About = (props) => (
    <Layout>
        <div>
            <h1>About WordCheck</h1>
            <p> 
                WordCheck is a simple application which is useful when you want to fast check definition
                of the word you are searching for.
            </p>
            <p>
                It is using the  
                <a href="http://developer.wordnik.com" target="_blank"> WordInk</a> REST API,
                <a href="https://bootswatch.com/lux/" target="_blank"> Bootswatch</a> modern theme
                with some plain-Bootstrap things, ReactJS library and NextJS framework. Application is
                rendering ReactJS components (and of course pages) on the server-side, so you don't have
                to worry about performance. 
                
            </p>
            <p>
                Have a good time searching a words!
            </p>
        </div>
    </Layout>
);

export default About;