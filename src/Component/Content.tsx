function Content(){
    const firstName = "Bhavana";
    const lastName = "Chowdhary";
    if(firstName) return <p>Welcome {firstName + " " + lastName} to React Training</p>;
    return <p>Welcome to React Training</p>;

}
export default Content