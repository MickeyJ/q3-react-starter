class JWT {
    save (tolkien) {
        window.localStorage.setItem("token", tolkien);
        console.log("token set?", window.localStorage.token);
        // window.localStorage.getItem(token);

    }
}
export default new JWT