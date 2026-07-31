import {createContext, useContext, useState} from 'react'

const AuthContext = createContext()

const AuthProvider = ({children}) => {
  const [token, setToken] = useState(
    localStorage.getItem('party_menu_token') || ''
  )

  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem('party_menu_user')) || null
  )

  const login = (token, user) => {
    localStorage.setItem('party_menu_token', token)
    localStorage.setItem('party_menu_user', JSON.stringify(user))

    setToken(token)
    setUser(user)
  }

  const logout = () => {
    localStorage.removeItem('party_menu_token')
    localStorage.removeItem('party_menu_user')

    setToken('')
    setUser(null)
  }

  return (
    <AuthContext.Provider
      value={{
        token,
        user,
        login,
        logout,
        isAuthenticated: token !== '',
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

const useAuth = () => useContext(AuthContext)

export {AuthProvider, useAuth}