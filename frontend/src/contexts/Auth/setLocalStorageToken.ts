export const setLocalStorageToken = (token: string) => {
  localStorage.setItem('IKATOO_AuthToken', token)
}
