export interface ILogin{
  user: {
    id: number,
    ativo: boolean,
    status_adm: boolean
  },
  token: string
}
