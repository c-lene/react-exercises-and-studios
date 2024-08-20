function HobbyLinks() {
    const hobbyLinks = [
        "https://www.vickypham.com/blog/pho-bo-instant-pot", 
        "https://www.thegoodlifewithamyfrench.com/post/beginners-guide-to-windowsill-gardneing"
    ];

    return (
        <div>
            <h3>My Hobbies</h3>
            <a href = {hobbyLinks[0]}>Cooking Instant Pot Pho</a> <br />
            <a href = {hobbyLinks[1]}>Windowsill Herb Gardening</a>
        </div>
    );
}

export default HobbyLinks;