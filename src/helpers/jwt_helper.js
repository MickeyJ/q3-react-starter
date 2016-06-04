
const { localStorage } = window;

class JWT {
  static save(data){
    localStorage.setItem("token", data.token);
  }
  static fetch(){
    return localStorage.getItem("token")
  }
  static destroy(){
    localStorage.clear("token");
  }
}

export default JWT
