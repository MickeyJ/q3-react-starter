class JWT {
    save (data) {
        // console.log(data);
        // console.log(data.name);
        window.localStorage.setItem("token", data.token);
        // window.localStorage.getItem(token);

    }
}
export default new JWT