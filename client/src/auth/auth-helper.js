// client/lib/auth-helper.js
const auth = {
  authenticate(jwt, cb) {
    if (typeof window !== "undefined") {
      sessionStorage.setItem("jwt", JSON.stringify(jwt));
    }
    cb();
  },

  isAuthenticated() {
    if (typeof window === "undefined") return false;
    const jwt = sessionStorage.getItem("jwt");
    return jwt ? JSON.parse(jwt) : false;
  },

  clearJWT(cb) {
    if (typeof window !== "undefined") {
      sessionStorage.removeItem("jwt");
    }
    cb();
    // Also tell server to clear cookie
    fetch("/api/auth/signout", { method: "GET" }).catch(console.error);
  }
};

export default auth;
