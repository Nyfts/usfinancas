export const getRouteName = (route) => {
  switch (route) {
    case '/dashboard':
      return 'Inicio'
    case '/dashboard/error':
      return 'Error'
    case '/transacoes':
      return 'Transações'
  }
}
