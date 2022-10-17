import createPersistedState from 'vuex-persistedstate'
import cookie from 'cookie'

export default ({store, $cookies, req}) => {
  createPersistedState({
    key: 'testCookie', // 쿠키 키 이름
    paths: ['test'], // 저장할 state
    storage: {
      getItem: key => {
        if (process.server) {
          if (!(typeof req.headers.cookie === 'string')) return
          const parsedCookies = cookie.parse(req.headers.cookie)
          return parsedCookies[key]
        } else {
          return $cookies.set(key)
        }
      },
      setItem: (key, value) => {
        $cookies.set(key, value)
      },
      removeItem: key => $cookies.remove(key)
    }
  })(store)
}
