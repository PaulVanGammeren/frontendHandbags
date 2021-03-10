

function Button({disabled, name}){

    return(
        <>

        <button disabled={disabled} onClick={ () => {console.log(name)}}>
            {name}


        </button>
    </>
    )
}

export default Button;
