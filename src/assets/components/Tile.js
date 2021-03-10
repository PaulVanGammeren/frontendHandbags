function Tile({image, title, children, }) {

    if (image) {
        return(
        <>
            <section>
                <img src={image} alt="pic bag"/>
            </section>
        </>
        )
    } else {
        return (
            <>
                <section>
                    <h2>{title}</h2>
                    <p>{children}</p>
                </section>
            </>

        )

    }
}

export default Tile;
