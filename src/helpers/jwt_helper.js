class JWT {
    save (data) {
        window.localStorage.setItem("token", data.token);
        // window.localStorage.getItem(token);

    }
}
export default new JWT
