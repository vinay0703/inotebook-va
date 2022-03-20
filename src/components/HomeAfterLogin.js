import Notes from './Notes';

function HomeAfterLogin(props) {
    return (
    <>
    <div className="container my-3">
        <Notes showAlert={props.showAlert}/>
    </div> 
    </>
    )
}

export default HomeAfterLogin;