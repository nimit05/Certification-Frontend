import Header from './Header';

const Layout = (props) => {
    const child = props.children
    return (
        <div>
            <Header />
            {child}
        </div>
    );
};

export default Layout;

