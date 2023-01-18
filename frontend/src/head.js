import { Helmet } from 'react-helmet'

const Head = () => {
    console.log(process.env.REACT_APP_BE_SERVER)
    return (
        <Helmet>
            <link
                rel="stylesheet"
                href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
            />

            <link
                rel="stylesheet"
                href={`http://[${process.env.REACT_APP_BE_SERVER}]:8000/static/vendor/bootstrap/css/bootstrap.min.css`} 
            />
            <link
                rel="stylesheet"
                href={`http://[${process.env.REACT_APP_BE_SERVER}]:8000/static/assets/css/fontawesome.css`}
            />
            <link 
            rel="stylesheet" 
            href={`http://[${process.env.REACT_APP_BE_SERVER}]:8000/static/assets/css/templatemo-style.css`}
            />
            <link 
            rel="stylesheet" 
            href={`http://[${process.env.REACT_APP_BE_SERVER}]:8000/static/assets/css/owl.css`}
            />
            <link 
            rel="stylesheet" 
            href={`http://[${process.env.REACT_BE_SERVER}]:8000/static/assets/css/lightbox.css`}
            />
        </Helmet>
    )
}

export default Head;