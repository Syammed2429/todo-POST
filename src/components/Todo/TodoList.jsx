let TodoList = ({ data }) => {
    return (
        <>

            {console.log("data : ", data)}
            <div className="my-3 text-info h4">
                {data.map((e) => (
                    <div key={e.id}>
                        {e.name}
                    </div>
                ))}
            </div>
        </>
    );
}
export { TodoList }