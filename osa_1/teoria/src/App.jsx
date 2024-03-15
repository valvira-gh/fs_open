const App = () => {
    const friends = [
        { name: "Johannes", age: 27 },
        { name: "Emilia", age: 34 },
    ];

    return (
        <div>
            <p>
                {friends[0].name} {friends[0].age}
            </p>
            <p>
                {friends[1].name} {friends[1].age}
            </p>
        </div>
    );
};

export default App;
